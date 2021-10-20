#!/usr/local/bin/deno run --allow-read --allow-write --allow-net

/**
 * Type of values that {@link traverseFileSystem} yields
 */
export interface Item {
    /** Path to directory that contains current item */
    readonly container: string
    /** Stat info and name of current item */
    readonly info: Deno.DirEntry
}

/**
 * Interface of parameter `deep` of {@link traverseFileSystem}
 */
export interface DeepFunc {
    /**
     * @param param Current item
     * @returns `true` to explore current item, `false` otherwise
     */
    (param: Item): boolean
}

export async function* traverseFileSystem(
    container: string,
    deep: DeepFunc,
): AsyncGenerator<Item, void, unknown> {
    for await (const info of Deno.readDir(container)) {
        const item: Item = {
            container,
            info,
        }
        yield item
        if (info.isDirectory && deep(item)) {
            yield* traverseFileSystem(`${container}/${info.name}`, deep)
        }
    }
}

async function injectCodeSnippets() {
    //Code snippets
    const exdirs = [...Deno.readDirSync('../../icure-code-samples')].filter(d => d.isDirectory);
    const examples: { [key: string]: string } = {}
    await exdirs.reduce(async (p, d) => {
        await p
        const path = `../../icure-code-samples/${d.name}`;
        console.log(path)
        const files = [...Deno.readDirSync(path)].filter(f => f.name.endsWith('.mjs'));
        await files.reduce(async (p, f) => {
            let text = await Deno.readTextFile(`../../icure-code-samples/${d.name}/${f.name}`);
            const ex = text.split('//tech-doc: ').slice(1)
            ex.forEach((x: string) => {
                const parts = x.split('\n');
                examples[parts[0]] = parts.slice(1).join('\n')
            })
        }, Promise.resolve())
    }, Promise.resolve())

    for await (const item of traverseFileSystem('..', () => true)) {
        if (item.info.isFile && item.info.name.endsWith('.md')) {
            const path = `${item.container}/${item.info.name}`
            const src = await Deno.readTextFile(path);
            let dst = ""
            let currentExample: boolean | undefined = undefined

            src.split(/\n/).forEach(line => {
                const match = line.match(/\{% code title="(.+?)" %}/)
                if (match) {
                    let title = match[1];
                    let ex = examples[title]
                    while (ex.lastIndexOf('\n\n') == ex.length - 2) {
                        ex = ex.slice(0, ex.length - 1)
                    }
                    ex = ex.replace(/\/\* truncate \*\/"(.+?)"/g, (_, s) => `"${s.slice(0, 10)}...${s.slice(s.length - 10)}"`)
                    ex = ex.replace(/\/\* truncate \*\/'(.+?)'/g, (_, s) => `'${s.slice(0, 10)}...${s.slice(s.length - 10)}'`)
                    dst += line + '\n'
                    dst += '```javascript\n'
                    dst += ex
                    dst += '```\n'
                    dst += '{% endcode %}\n'
                    currentExample = true
                } else if (currentExample) {
                    if (line.match(/\{% endcode %\}/)) {
                        currentExample = false
                    }
                } else {
                    dst += line + '\n'
                }

            })
            if (currentExample !== undefined) {
                await Deno.writeTextFile(path, dst)
            }
        }
    }
}

async function swaggerImport() {
    const p = Deno.run({
        cmd: ["java", "-cp", "./swagger-codegen-generators.jar", "io.swagger.codegen.v3.cli.SwaggerCodegen", "generate", "-i", "https://kraken.icure.dev/v3/api-docs/v2", "-l", "gitbook", "--additional-properties", "classPrefix=Icc", "skipPathPrefix=/rest/v1", "-o", "./swagger"],
    });
    const {code} = await p.status();
    p.close();
    return !code;
}

async function sync(): Promise<void> {
    async function setDownloadLinks() {
        const path = "../icure-data-stack/what-is-icure/install-icure.md";
        const req = await fetch('https://maven.taktik.be/service/rest/v1/search/assets?sort=version&direction=desc&repository=releases&group=org.taktik.icure&name=icure-oss')
        const assets = await req.json()
        const latest = assets.items[0]

        const url = latest.downloadUrl
        const version = latest.maven2.version
        const shortVersion = version.replace(/release-oss-kraken-/, '')

        const src = await Deno.readTextFile(path);
        const dst = src.replace(/icure-oss-(.+?).jar/, `icure-oss-${shortVersion}.jar`).replace(/https:\/\/maven\.taktik\.be\/repository\/releases\/org\/taktik\/icure\/icure-oss\/.+?\.jar/, url)
        await Deno.writeTextFile(path, dst)
    }

    async function setModelsAndApis() {
        const path = "../SUMMARY.md";
        const tree = await Deno.readTextFile(path);

        async function copyMd(section: string, swaggerApi: string, pathConverter: (x:string) => string = x=>x) {
            const dir = [...Deno.readDirSync(swaggerApi)];
            await Promise.all(section.split("\n").map(async l => {
                const match = l.match(/ *\* \[(.+?)\]\((.+)\)/)
                if (match) {
                    const path = match[2]
                    const counterpart = dir.find(p => {
                        const x = pathConverter(p.name)
                        return path.endsWith('/' + x.toLowerCase()) || path.endsWith('/' + x.toLowerCase().replace(/\.md/, "/README.md"));
                    })
                    if(counterpart) {
                        await Deno.mkdir(`../${path}`.replace(/(.+)\/.+/,"$1"), {recursive:true})
                        if (path.endsWith("README.md")) {
                            const tbd = path.replace("/README", "")
                            try {
                                await Deno.stat(tbd);
                                await Deno.remove(tbd)
                            } catch (error) {}
                        }
                        await Deno.writeTextFile(`../${path}`, await Deno.readTextFile(`${swaggerApi}/${counterpart.name}`))
                    }
                }
            }))
        }

        await Promise.all(tree.split(/\n(## |\* )/).map(async section => {
            if (section.startsWith("[iCure Data Model]")) {
                await copyMd(section, "./swagger/model");
            } else if (section.startsWith("[REST API calls]")) {
                await copyMd(section, "./swagger/api", x => x.replace(/Api.md/,".md"));
            }
        }))
    }

    const gitFetch = Deno.run({ cmd: ["git", "fetch"] });
    if ((await gitFetch.status()).code) return
    gitFetch.close()

    const pull = Deno.run({ cmd: ["git", "pull"] });
    if ((await pull.status()).code) return
    pull.close()

    await injectCodeSnippets();
    await setDownloadLinks();
    if (await swaggerImport()) {
        await setModelsAndApis();
    }

    return

    const commit = Deno.run({ cmd: ["git", "commit", "-am", "Updated from swagger, injected versions and code snippets"] });
    if ((await commit.status()).code) return
    commit.close()

    const push = Deno.run({ cmd: ["git", "push"] });
    if ((await push.status()).code) return
    push.close()
}

await sync()
