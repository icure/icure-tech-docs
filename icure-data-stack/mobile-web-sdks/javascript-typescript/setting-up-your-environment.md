# Setting up your environment

iCure can easily be used in the browser or with Node.

If you use node, we suggest that you choose version 15 that includes a webcrypto compatible implementation of the cryptography layer.

The main dependency for using iCure is `@icure/api`, two extra dependencies are required for node : `node-fetch` and `node-localstorage`.

Using node 15 and yarn this translates to the following commands

```bash
mkdir healthcare-project
cd healthcare-project
yarn init -y
yarn add @icure/api

#if you are using node two other dependencies are needed
yarn add node-fetch node-localstorage
```

