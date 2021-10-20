# Logging in

To log in on the iCure platform, you will need a username and a password

Make sure to have [set up](setting-up-your-environment.md) your environment first.

```
import {Api } from '@icure/api'
import { crypto } from '@icure/api/node-compat.js' //Only needed on node

const host = 'https://kraken.svc.icure.cloud/rest/v1';
const {
    userApi,
    healthcarePartyApi,
    cryptoApi
} = Api(host, 'user', 'password', crypto)

```

Once logged in, you can check the user details.

```
const loggedUser = await userApi.getCurrentUser()
```

If you wish to decrypt medical data, you will have to import your private key

```
import { hex2ua } from "@icure/api";

const loggedUser = await userApi.getCurrentUser()

await cryptoApi.loadKeyPairsAsTextInBrowserLocalStorage(
    loggedUser.healthcarePartyId,
    hex2ua('308204bd02...0f3ca0975e78')
)
```

A user is only part of the story, it holds the information needed to log in but the personal data and the cryptographic keys are stored either in a patient or a healthcare party document. To create a new user, you will have to create the linked healthcare party as well

```
import { ua2hex, HealthcareParty, User } from '@icure/api'

const { publicKey, privateKey } = await cryptoApi.RSA.generateKeyPair()
const exportedKey = ua2hex(await cryptoApi.RSA.exportKey(privateKey, 'pkcs8'))
//The private key will have to be stored in a secured place and used later

const newHcp = await healthcarePartyApi.createHealthcareParty(
    new HealthcareParty({
        id: cryptoApi.randomUuid(),
        firstName: 'John',
        lastName: 'Wayne',
        publicKey: await cryptoApi.RSA.exportKey(publicKey, 'spki')
    })
)

const newUser = await userApi.createUser(new User({
    id: cryptoApi.randomUuid(),
    healthcarePartyId: newHcp.id,
    login: 'john',
    passwordHash: 'passwordInClear'
}))
```
