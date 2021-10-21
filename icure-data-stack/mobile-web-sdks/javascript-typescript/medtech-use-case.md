# iCure for Medtech : Getting Started

[iCure healthcare platform](../../../README.md) takes care of the storage of your medical data (thanks to 
its [Data Stack](../../what-is-icure/README.md) module) and permits you to exchange those easily with other e-health 
actors / enterprises (See our [Interoperability](../../../interoperability) module).

To make it possible, the iCure [Data Model](../../icure-data-model/README.md) focus on the integrity, the anonymization 
and the encryption of your data, without forgetting to make it compatible with higher level Medical Data conceptual 
Data Models (such as FHIR, Open EHR, ...). 

Thanks to this high-level model, iCure will then let you easily manage all your data in a protected way, through a series of 
APIs. 

At the end of this tutorial, you will be able to use iCure to :
- Create a patient using iCure SDK;
- Load a patient using iCure SDK;  
- Create observations/measures for that patient using iCure SDK;
- Export those data in FHIR;


### Before starting
Before making your first requests, you will need to complete the following steps.

#### Init your iCure environment
To initialize your own iCure environment, you have two possibilities : 
- Create an account on our iCure Cloud platform and use it online;
- Install an iCure server on your local machine; 
Whatever you choose, you can find all the information [here](../../what-is-icure/install-icure.md) 
  
#### Setting up your environment
As soon as you have access to iCure (online or locally), you will need to setting up your environment. 
To do this, you can follow this [example](../../what-is-icure/get-started-with-a-database-1.md) which will help you initialize a node application communicating with the 
iCure solution.  

#### Authenticating with iCure from your code 
After completing the steps above, you will be able to dive into writing some code.
For this, you will need the private key that has been created when you have accessed your database environment for the first time.
==> HOW TO ?
In the following example, the private key is `MIIEvAIBAD...9HOmEwWQ==`.

Do not forget to replace the **username** - **password** (`esmith` - `mypassword`) by your own values.

Also, if you decided to install an iCure server on your local machine, be sure to change the 
**host URL** (`https://kraken.icure.dev/rest/v1`). 

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
const { patientApi, userApi, healthcarePartyApi, cryptoApi } = Api(host, 'el-smith', 'mypassword', crypto)

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
[here](../../icure-data-model/patient/README.md).

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

We encourage you to have a look at our [secured e2e encryption guidelines](../../../icure-data-stack/what-is-icure/README.md) 
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
A [contact](../../icure-data-model/contact/README.md) groups a batch of measures/observations (represented in iCure
data model as [services](../../icure-data-model/contact/service/README.md)) in one single transaction. 
A contact always links together a healthcare party (A care provider) to one patient. 

Before adding new medical data into the iCure system, you then absolutely need to create : 
- a [healthcare party](); 
- a patient (See sections **Create a patient** and **Load a patient** for more information);

The following code shows you how to create a contact containing a service, representing a **FHIR observation**.

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

#### Load medical data




### Making requests using iCure - FHIR bridge
As explained earlier, the iCure data model offers you the necessary flexibility in order to represent your medical data. 
To have more information about it and understand fully how the possibilities of it, we encourage you to visit
[this page](../../icure-data-model/README.md). 

However, it can seem difficult for you at the beginning to understand how to "map" your own data to the iCure data model.  
As said earlier, iCure Data Model has been built in order to be compatible with higher level Medical Data
conceptual Data Models. That's why you have the possibility to make requests to iCure using FHIR format, in order to 
exchange your data in a more "familiar" / common way. 

If you decide to use the FHIR APIs, iCure will by itself transform it to the corresponding iCure Data Model representation. 

In the following steps, you will learn how to create / load a patient and an observation using those FHIR APIs and how 
to export them in FHIR format. 

