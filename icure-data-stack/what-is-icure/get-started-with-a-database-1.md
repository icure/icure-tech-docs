# Get Started with a Database

iCure Data Stack helps developers create connected apps for healthcare in no time. Let's give it a quick try by creating a node application that lets you store and access encrypted patients in a cloud data store.

First head to [Register on our cloud platform](install-icure.md) and create a database and a user. You will need the username and password below.

[Node 15](https://nodejs.org/en/blog/release/v15.0.0/) and [Yarn](https://classic.yarnpkg.com/en/docs/install) are needed for this example.

```bash
mkdir patient-manager
cd patient-manager
yarn init -y
yarn add @icure/api

#if you are using node two other dependencies are needed
yarn add node-fetch node-localstorage
```

{% hint style="info" %}
The `@icure/api`is the JS library used to simplify access to the iCure application server and to abstract the complexity of the cryptographic layer.

Node 15 is required because it includes the crypto compatibility layer
{% endhint %}

Now create a file name index.mjs

{% code title="How to use" %}
```javascript
import {Api, b64_2ua, Patient} from '@icure/api'
import {crypto} from '@icure/api/node-compat.js'

const host = 'https://kraken.icure.dev/rest/v1';
const {
	patientApi,
	userApi,
	healthcarePartyApi,
	cryptoApi
} = Api(host, 'esmith', 'mypassword', crypto)

const loggedUser = await userApi.getCurrentUser();
const loggedHcp = await healthcarePartyApi.getCurrentHealthcareParty()

await cryptoApi.loadKeyPairsAsTextInBrowserLocalStorage(
	loggedUser.healthcarePartyId,
	b64_2ua("MIIEvAIBAD...9HOmEwWQ==")
)

const patient = await patientApi.createPatientWithUser(loggedUser,
	await patientApi.newInstance(
		loggedUser,
		new Patient({
			firstName: 'Gustave',
			lastName: 'Eiffel',
			profession: 'Architect & Engineer',
			dateOfBirth: 19731012,
			note: 'A very private information'
		}))
)
const fetchedPatient = await patientApi.getPatientWithUser(loggedUser, patient.id)
console.log(JSON.stringify(fetchedPatient, null, ' '))
```
{% endcode %}

{% hint style="info" %}
Replace `'demo'` / `'demo'` by your username and password. If you are writing code for the browser, omit to import`crypto` and call`Api`with just 3 arguments.
{% endhint %}

```bash
$ node index.mjs
```

##





