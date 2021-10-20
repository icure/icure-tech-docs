# Managing patients

Creating a patient is not complicated, but it requires some preliminary work to make sure that everything is set up for encryption. In the following example, we make sure that we are logged in as a user previously created, and we import the previously generated private key.

{% code title="Prepare for patient creation" %}
```javascript
import {
    Api,
    Filter,
    FilterChainPatient,
    Patient,
    PatientByHcPartyNameContainsFuzzyFilter,
    b64_2ua
} from '@icure/api'
import {crypto} from '@icure/api/node-compat.js'

const host = 'https://kraken.icure.dev/rest/v1';
const { patientApi, userApi, healthcarePartyApi, cryptoApi } = Api(host, 'esmith', 'mypassword', crypto)

const loggedUser = await userApi.getCurrentUser();
const loggedHcp = await healthcarePartyApi.getCurrentHealthcareParty()

await cryptoApi.loadKeyPairsAsTextInBrowserLocalStorage(
    loggedUser.healthcarePartyId,
    b64_2ua("MIIEvAIBAD...9HOmEwWQ==")
)
await cryptoApi.checkPrivateKeyValidity(loggedHcp)
```
{% endcode %}

{% code title="Create a patient" %}
```javascript
const patient = await patientApi.createPatientWithUser(loggedUser,
    await patientApi.newInstance(
        loggedUser,
        new Patient({
            firstName: 'Gustave',
            lastName: 'Eiffel',
            dateOfBirth:19731011,
            note: 'A very private information'
        }))
)
```
{% endcode %}

Patients are identified by their id.

{% code title="Load a patient by id" %}
```javascript
const fetchedPatient = await patientApi.getPatientWithUser(loggedUser, patient.id)
console.log(JSON.stringify(fetchedPatient, null, ' '))
```
{% endcode %}

The preferred way to search for patients is to use filters. Most filters will require you to set a healthcare party (hcp) to limit the search to patients this hcp can actually access and decrypt.

{% code title="Filter patient" %}
```javascript
const foundPatients = await patientApi.filterByWithUser(loggedUser, new FilterChainPatient({
    filter: new PatientByHcPartyNameContainsFuzzyFilter({
        healthcarePartyId: loggedUser.healthcarePartyId,
        searchString: "eiffel"
    })
}))
console.log(foundPatients.rows.map(p => `${p.firstName} ${p.lastName}°${p.dateOfBirth}`).join('\n'))
```
{% endcode %}

It is not always very user-friendly to express filters by declaring an object tree. This is why we also provide an easy to use declarative api for filters.

{% code title="Filter patient with api" %}
```javascript
const search1 = await patientApi.filterByWithUser(loggedUser, new FilterChainPatient({
    filter: Filter.patient().forHcp(loggedUser.healthcarePartyId)
        .searchByName("eif")
        .build()
}))

const search2 = await patientApi.filterByWithUser(loggedUser, new FilterChainPatient({
    filter: Filter.patient().forHcp(loggedUser.healthcarePartyId)
        .olderThan(65).or().youngerThan(18)
        .build()
}))

const search3 = await patientApi.filterByWithUser(loggedUser, new FilterChainPatient({
    filter: Filter.patient().forHcp(loggedUser.healthcarePartyId)
        .olderThan(18).and().youngerThan(65)
        .and().searchByName("eif")
        .build()
}))

const patientFilterBuilder = Filter.patient().forHcp(loggedUser.healthcarePartyId)
    .olderThan(65).or().youngerThan(18)
    .and().searchByName("eif");

const filter = patientFilterBuilder.build();
const search4 = await patientApi.filterByWithUser(loggedUser, new FilterChainPatient({
    filter: filter
}))

;[search1, search2, search3, search4].forEach((r, idx) =>
    console.log(`Search ${idx+1}\n${r.rows.map(p => `${p.firstName} ${p.lastName}°${p.dateOfBirth}`).join('\n')}`)
)
```
{% endcode %}
















