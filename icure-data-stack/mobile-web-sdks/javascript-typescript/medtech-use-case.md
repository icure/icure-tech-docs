# Medtech Use Case

This section describes all you need to do to create patients, observations/measures for that patient, and export those data in FHIR.

### Authenticating with iCure from your code

Once you have an [iCure account](../../what-is-icure/get-started-with-a-database-1.md) or installed iCure locally, and you have set up your [environment](setting-up-your-environment.md), you can dive into writing some code. You will need the private key that has been created when you have accessed your database environment for the first time. In the following example, the private key is `MIIEvAIBAD...9HOmEwWQ==`.

{% tabs %}
{% tab title="Javascript" %}
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
{% endtab %}
{% endtabs %}

### Create a patient

Once you are authenticated, you can easily create a patient. The Patient data model is described here.

{% tabs %}
{% tab title="Javascript" %}
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
{% endtab %}
{% endtabs %}

### Load a patient

If you ever need to find back a patient, you can do it like this.

{% tabs %}
{% tab title="Javascript" %}
{% code title="Load a patient by id" %}
```javascript
const fetchedPatient = await patientApi.getPatientWithUser(loggedUser, patient.id)
console.log(JSON.stringify(fetchedPatient, null, ' '))
```
{% endcode %}
{% endtab %}
{% endtabs %}

### Add medical data to patient

In iCure medical data is stored inside contacts a contact groups a batch of measures/observations in one single transaction. 

{% tabs %}
{% tab title="Javascript" %}
{% code title="Create a contact with services" %}
```javascript
const serviceToCreate = await contactApi.service().newInstance(
    loggedUser,
    new Service({
        valueDate: 20211020,
        status: 0,
        label: 'Hepatitis B virus surface',
        codes: [
            new CodeStub({
                id: 'http://loinc.org|16935-9|2',
                context: 'code',
                type: 'http://loinc.org',
                code: '16935-9',
                version: '2',
                label: {
                    en: 'Hepatitis B virus surface Ab [Units/volume] in Serum'
                }
            })
        ],
        content: {
            en: new Content({
                measureValue: new Measure({
                    value: 99.0,
                    unit: '[iU]/L',
                    unitCodes: [new CodeStub({
                        id: 'http://unitsofmeasure.org|[iU]/L',
                        type: 'http://unitsofmeasure.org',
                        code: '[iU]/L'
                    })]
                })
            })
        }
    })
)

const contact = await contactApi.createContactWithUser(loggedUser,
    await contactApi.newInstance(
        loggedUser,
        patient,
        new Contact({
            responsible: loggedUser.healthcarePartyId,
            services: [serviceToCreate]
        }))
)
```
{% endcode %}
{% endtab %}
{% endtabs %}

