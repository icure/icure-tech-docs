# iCure for Medtech : Import data using SDK

At the end of this tutorial, you will be able to use iCure to :
- Create a patient;
- Read the previous created patient;
- Create observations/measures for that patient;
- Read previous created observations;


### Before starting
Before making your first requests, you will need to complete the following steps.

#### Create your iCure user
Make sure to be registered on the [iCure Cloud Manager](README.md) before going ahead.

#### Setting up your environment
As soon as you have access to iCure (online or locally), you will need to set up your environment.
To do this, you can follow this [example](../../../what-is-icure/get-started-with-a-database-1.md) which will help you 
initialize a node application communicating with the iCure solution.

#### Authenticating with iCure from your code
After completing the steps above, you will be able to dive into writing some code.
For this, you will need the encryption private key you downloaded during the registration process of your user.

In the following example, the private key is `MIIEvAIBAD...9HOmEwWQ==`. Also, do not forget to replace the 
**username** - **password** (`esmith` - `mypassword`) by your own values.

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


### Making requests using iCure SDK
#### Create a patient
Once you are authenticated, you can easily create a patient. The Patient data model is described
[here](../../../icure-data-model/patient/README.md).

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
            dateOfBirth:19731012,
            note: 'A very private information'
        }))
)
```
{% endcode %}
{% endtab %}
{% endtabs %}

As you can see in the code above, we are using some specific API methods to create our patient (**createPatientWithUser**
instead of **createPatient**, **api.newInstance** instead of "only" creating a new object, ...). This is because those
methods are taking care of the data end-to-end encryption for us.

We encourage you to have a look at our [secured e2e encryption guidelines](../../../../icure-data-stack/what-is-icure/README.md)
in order to know all about them.

#### Load a patient
After creating a patient, you can find it back using its id :

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


You can also search a list of patients, corresponding to specific criteria :

{% tabs %}
{% tab title="Javascript" %}
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
{% endtab %}
{% endtabs %}


Filters offer you a lot of flexibility to search your patients. You can find a few other examples in the following code :  
{% tabs %}
{% tab title="Javascript" %}
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
{% endtab %}
{% endtabs %}


#### Add medical data to patient
In iCure, medical data is stored inside contacts.
A [contact](../../../icure-data-model/contact/README.md) groups a batch of measures/observations (represented in iCure
data model as [services](../../../icure-data-model/contact/service/README.md)) in one single transaction.
A contact always links together a healthcare party (A care provider) to one patient.

Before adding new medical data into the iCure system, you then absolutely need to create :
- a [healthcare party](../../../icure-data-model/healthcareparty.md);
- a patient (See sections **Create a patient** and **Load a patient** for more information);

The following code shows you how to create an observation, represented in iCure system as a contact containing a service.

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



