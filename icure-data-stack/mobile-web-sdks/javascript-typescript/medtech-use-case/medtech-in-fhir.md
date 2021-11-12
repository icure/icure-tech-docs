# iCure for Medtech : Import data using FHIR
As explained earlier, the iCure data model offers you the needed flexibility in order to represent your medical data.
To have more information about it and understand fully the possibilities of it, we encourage you to visit
[this page](../../../icure-data-model/README.md).

However, it can seem difficult for you at the beginning to understand how to "map" your own data to the iCure data model.  
As said earlier, iCure Data Model has been built in order to be compatible with higher level Medical Data
conceptual Data Models. That's why you have the possibility to make requests to iCure using FHIR format, in order to
exchange your data in a more "familiar" / common way.

If you decide to use the FHIR APIs, iCure will by itself transform it to the corresponding iCure Data Model representation.

At the end of this tutorial, you will be able to exchange FHIR Patient and Observation data, using 
the iCure - FHIR Bridge API.


### Register on iCure platform
Make sure you [created your iCure environment](README.md), and that you possess the following information :  
- Your iCure user login - password;
- Your iCure user private encryption key;

### Load private encryption key in local storage
To guarantee the security of your data, iCure encrypts all of them, based on the keys pair you generated during 
your registration. 

As your private encryption key is not stocked in iCure, you will need to provide it first in your web session to the 
iCure - FHIR Bridge API before making your requests. 

{% tabs %}
{% tab title="Javascript" %}
{% code title="Prepare for iCure - FHIR Bridge API requests" %}
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

In the above example, do not forget to : 
- Use your own login - password; 
- Use your private encryption key;

### Supported FHIR APIs
Based on the [FHIR Specification](https://www.hl7.org/fhir/http.html), iCure is currently supporting the following FHIR APIs :
- [Create a patient](#create-a-patient)
- [Read a patient](#read-a-patient)
- [Delete a patient](#delete-a-patient)
  

- [Create an observation](#create-an-observation)
- [Read an observation](#read-an-observation)


#### FHIR Resource Id 
For Create requests, the id provided in FHIR resources will be transformed as a new identifier, using 
system **https://dxm.icure.dev**. At its place, iCure will provide its own generated id to guarantee the data coherence.

#### Create a patient
Import a new patient in your iCure environment, based on [FHIR r4 Patient](https://www.hl7.org/fhir/patient.html).  
All the references you are passing into the patient (generalPractitioner, organization, ...) need to be previously imported into the iCure
environment.

{% tabs %}
{% tab title="Javascript" %}
{% code title="Create FHIR Patient" %}
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

#### Read a patient
Find a patient, using either its FHIR id or its iCure id.

{% tabs %}
{% tab title="Javascript" %}
{% code title="Read FHIR Patient" %}
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

#### Delete a patient
Delete a patient, using either its FHIR id or its iCure id.

{% tabs %}
{% tab title="Javascript" %}
{% code title="Delete FHIR Patient" %}
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


#### Create an observation
Import a new observation in your iCure environment, based on [FHIR r4 Observation](https://www.hl7.org/fhir/observation.html).

All the references you are passing into the observation (subject, ...) need to be previously imported into the iCure 
environment.  

{% tabs %}
{% tab title="Javascript" %}
{% code title="Create FHIR Observation" %}
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

#### Read an observation
Find an observation, using either its FHIR id or its iCure id. 

{% tabs %}
{% tab title="Javascript" %}
{% code title="Read Observation" %}
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