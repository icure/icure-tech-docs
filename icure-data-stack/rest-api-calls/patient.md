# Patient

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/patient/bulk" method="post" summary="Create patients in bulk." %}
{% swagger-description %}
Returns the id and _rev of created patients
{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="List" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/patient/bulk" method="put" summary="Modify patients in bulk." %}
{% swagger-description %}
Returns the id and _rev of modified patients
{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="List" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/patient/hcParty/{hcPartyId}/count" method="get" summary="Get count of patients for a specific HcParty or for the current HcParty ." %}
{% swagger-description %}
Returns the count of patients
{% endswagger-description %}

{% swagger-parameter in="path" name="hcPartyId" type="String" %}
Healthcare party id
{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/patient" method="post" summary="Create a patient." %}
{% swagger-description %}
Name, last name, date of birth, and gender are required. After creation of the patient and obtaining the ID, you need to create an initial delegation.
{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="Patient" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/patient/{patientIds}" method="delete" summary="Delete patients.." %}
{% swagger-description %}
Response is an array containing the ID of deleted patient..
{% endswagger-description %}

{% swagger-parameter in="path" name="patientIds" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/patient/filter" method="post" summary="Filter patients for the current user (HcParty) ." %}
{% swagger-description %}
Returns a list of patients along with next start keys and Document ID. If the nextStartKey is Null it means that this is the last page.
{% endswagger-description %}

{% swagger-parameter in="query" name="startKey" type="String" %}
The start key for pagination, depends on the filters used
{% endswagger-parameter %}

{% swagger-parameter in="query" name="startDocumentId" type="String" %}
A patient document ID
{% endswagger-parameter %}

{% swagger-parameter in="query" name="limit" type="Integer" %}
Number of rows
{% endswagger-parameter %}

{% swagger-parameter in="query" name="skip" type="Integer" %}
Skip rows
{% endswagger-parameter %}

{% swagger-parameter in="query" name="sort" type="String" %}
Sort key
{% endswagger-parameter %}

{% swagger-parameter in="query" name="desc" type="Boolean" %}
Descending
{% endswagger-parameter %}

{% swagger-parameter in="body" name="body" type="FilterChainPatient" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/patient/byAccess/{userId}" method="get" summary="Get Paginated List of Patients sorted by Access logs descending." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="userId" type="String" %}
A User ID
{% endswagger-parameter %}

{% swagger-parameter in="query" name="accessType" type="String" %}
The type of access (COMPUTER or USER)
{% endswagger-parameter %}

{% swagger-parameter in="query" name="startDate" type="Long" %}
The start search epoch
{% endswagger-parameter %}

{% swagger-parameter in="query" name="startKey" type="String" %}
The start key for pagination
{% endswagger-parameter %}

{% swagger-parameter in="query" name="startDocumentId" type="String" %}
A patient document ID
{% endswagger-parameter %}

{% swagger-parameter in="query" name="limit" type="Integer" %}
Number of rows
{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/patient/byExternalId/{externalId}" method="get" summary="Get Paginated List of Patients sorted by Access logs descending." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="externalId" type="String" %}
A external ID
{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/patient/byNameBirthSsinAuto" method="get" summary="Find patients for the current user (HcParty) ." %}
{% swagger-description %}
Returns a list of patients along with next start keys and Document ID. If the nextStartKey is Null it means that this is the last page.
{% endswagger-description %}

{% swagger-parameter in="query" name="healthcarePartyId" type="String" %}
HealthcareParty Id. If not set, will use user's hcpId
{% endswagger-parameter %}

{% swagger-parameter in="query" name="filterValue" type="String" %}
Optional value for filtering results
{% endswagger-parameter %}

{% swagger-parameter in="query" name="startKey" type="String" %}
The start key for pagination: a JSON representation of an array containing all the necessary components to form the Complex Key's startKey
{% endswagger-parameter %}

{% swagger-parameter in="query" name="startDocumentId" type="String" %}
A patient document ID
{% endswagger-parameter %}

{% swagger-parameter in="query" name="limit" type="Integer" %}
Number of rows
{% endswagger-parameter %}

{% swagger-parameter in="query" name="sortDirection" type="String" %}
Optional value for providing a sorting direction ('asc', 'desc'). Set to 'asc' by default.
{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/patient/fuzzy" method="get" summary="Filter patients for the current user (HcParty) ." %}
{% swagger-description %}
Returns a list of patients
{% endswagger-description %}

{% swagger-parameter in="query" name="firstName" type="String" %}
The first name
{% endswagger-parameter %}

{% swagger-parameter in="query" name="lastName" type="String" %}
The last name
{% endswagger-parameter %}

{% swagger-parameter in="query" name="dateOfBirth" type="Integer" %}
The date of birth
{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/patient/{patientId}" method="get" summary="Get patient." %}
{% swagger-description %}
It gets patient administrative data.
{% endswagger-description %}

{% swagger-parameter in="path" name="patientId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/patient/{patientId}/keys" method="get" summary="Get the patient (identified by patientId) hcparty keys. Those keys are AES keys (encrypted) used to share information between HCPs and a patient.." %}
{% swagger-description %}
This endpoint is used to recover all keys that have already been created and that can be used to share information with this patient. It returns a map with the following structure: ID of the owner of the encrypted AES key -> encrypted AES key. The returned encrypted AES keys will have to be decrypted using the patient's private key.
{% endswagger-description %}

{% swagger-parameter in="path" name="patientId" type="String" %}
The patient Id for which information is shared
{% endswagger-parameter %}

{% swagger-response status="200" description="Successful operation" %}
```
```
{% endswagger-response %}

{% swagger-response status="401" description="Unauthorized operation: the provided credentials are invalid" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/patient/byIds" method="post" summary="Get patients by id." %}
{% swagger-description %}
It gets patient administrative data.
{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="ListOfIds" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/patient/deleted/by_date" method="get" summary="Find deleted patients." %}
{% swagger-description %}
Returns a list of deleted patients, within the specified time period, if any.
{% endswagger-description %}

{% swagger-parameter in="query" name="startDate" type="Long" %}
Filter deletions after this date (unix epoch), included
{% endswagger-parameter %}

{% swagger-parameter in="query" name="endDate" type="Long" %}
Filter deletions before this date (unix epoch), included
{% endswagger-parameter %}

{% swagger-parameter in="query" name="desc" type="Boolean" %}
Descending
{% endswagger-parameter %}

{% swagger-parameter in="query" name="startDocumentId" type="String" %}
A patient document ID
{% endswagger-parameter %}

{% swagger-parameter in="query" name="limit" type="Integer" %}
Number of rows
{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/patient/deleted/by_name" method="get" summary="Find deleted patients." %}
{% swagger-description %}
Returns a list of deleted patients, by name and/or firstname prefix, if any.
{% endswagger-description %}

{% swagger-parameter in="query" name="firstName" type="String" %}
First name prefix
{% endswagger-parameter %}

{% swagger-parameter in="query" name="lastName" type="String" %}
Last name prefix
{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/patient/merges/{date}" method="get" summary="List patients that have been merged towards another patient ." %}
{% swagger-description %}
Returns a list of patients that have been merged after the provided date
{% endswagger-description %}

{% swagger-parameter in="path" name="date" type="Long" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/patient/modifiedAfter/{date}" method="get" summary="List patients that have been modified after the provided date." %}
{% swagger-description %}
Returns a list of patients that have been modified after the provided date
{% endswagger-description %}

{% swagger-parameter in="path" name="date" type="Long" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="startKey" type="Long" %}
The start key for pagination the date of the first element of the new page
{% endswagger-parameter %}

{% swagger-parameter in="query" name="startDocumentId" type="String" %}
A patient document ID
{% endswagger-parameter %}

{% swagger-parameter in="query" name="limit" type="Integer" %}
Number of rows
{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/patient" method="get" summary="List patients for a specific HcParty." %}
{% swagger-description %}
Returns a list of patients along with next start keys and Document ID. If the nextStartKey is Null it means that this is the last page.
{% endswagger-description %}

{% swagger-parameter in="query" name="hcPartyId" type="String" %}
Healthcare party id
{% endswagger-parameter %}

{% swagger-parameter in="query" name="sortField" type="String" %}
Optional value for sorting results by a given field ('name', 'ssin', 'dateOfBirth'). Specifying this deactivates filtering
{% endswagger-parameter %}

{% swagger-parameter in="query" name="startKey" type="String" %}
The start key for pagination: a JSON representation of an array containing all the necessary components to form the Complex Key's startKey
{% endswagger-parameter %}

{% swagger-parameter in="query" name="startDocumentId" type="String" %}
A patient document ID
{% endswagger-parameter %}

{% swagger-parameter in="query" name="limit" type="Integer" %}
Number of rows
{% endswagger-parameter %}

{% swagger-parameter in="query" name="sortDirection" type="String" %}
Optional value for providing a sorting direction ('asc', 'desc'). Set to 'asc' by default.
{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/patient/hcParty/{hcPartyId}" method="get" summary="List patients for a specific HcParty or for the current HcParty ." %}
{% swagger-description %}
Returns a list of patients along with next start keys and Document ID. If the nextStartKey is Null it means that this is the last page.
{% endswagger-description %}

{% swagger-parameter in="path" name="hcPartyId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="sortField" type="String" %}
Optional value for sorting results by a given field ('name', 'ssin', 'dateOfBirth'). Specifying this deactivates filtering
{% endswagger-parameter %}

{% swagger-parameter in="query" name="startKey" type="String" %}
The start key for pagination: a JSON representation of an array containing all the necessary components to form the Complex Key's startKey
{% endswagger-parameter %}

{% swagger-parameter in="query" name="startDocumentId" type="String" %}
A patient document ID
{% endswagger-parameter %}

{% swagger-parameter in="query" name="limit" type="Integer" %}
Number of rows
{% endswagger-parameter %}

{% swagger-parameter in="query" name="sortDirection" type="String" %}
Optional value for providing a sorting direction ('asc', 'desc'). Set to 'asc' by default.
{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/patient/idsPages" method="get" summary="List patients by pages for a specific HcParty." %}
{% swagger-description %}
Returns a list of patients along with next start keys and Document ID. If the nextStartKey is Null it means that this is the last page.
{% endswagger-description %}

{% swagger-parameter in="query" name="hcPartyId" type="String" %}
Healthcare party id
{% endswagger-parameter %}

{% swagger-parameter in="query" name="startKey" type="String" %}
The page first id
{% endswagger-parameter %}

{% swagger-parameter in="query" name="startDocumentId" type="String" %}
A patient document ID
{% endswagger-parameter %}

{% swagger-parameter in="query" name="limit" type="Integer" %}
Page size
{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/patient/ofHcParty/{hcPartyId}" method="get" summary="List patients of a specific HcParty or of the current HcParty ." %}
{% swagger-description %}
Returns a list of patients along with next start keys and Document ID. If the nextStartKey is Null it means that this is the last page.
{% endswagger-description %}

{% swagger-parameter in="path" name="hcPartyId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="sortField" type="String" %}
Optional value for sorting results by a given field ('name', 'ssin', 'dateOfBirth'). Specifying this deactivates filtering
{% endswagger-parameter %}

{% swagger-parameter in="query" name="startKey" type="String" %}
The start key for pagination: a JSON representation of an array containing all the necessary components to form the Complex Key's startKey
{% endswagger-parameter %}

{% swagger-parameter in="query" name="startDocumentId" type="String" %}
A patient document ID
{% endswagger-parameter %}

{% swagger-parameter in="query" name="limit" type="Integer" %}
Number of rows
{% endswagger-parameter %}

{% swagger-parameter in="query" name="sortDirection" type="String" %}
Optional value for providing a sorting direction ('asc', 'desc'). Set to 'asc' by default.
{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/patient/match" method="post" summary="Get ids of patients matching the provided filter for the current user (HcParty) ." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="AbstractFilterPatient" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/patient/mergeInto/{toId}/from/{fromIds}" method="put" summary="Merge a series of patients into another patient." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="toId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="path" name="fromIds" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/patient" method="put" summary="Modify a patient." %}
{% swagger-description %}
No particular return value. It's just a message.
{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="Patient" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/patient/{patientId}/referral/{referralId}" method="put" summary="Set a patient referral doctor." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="patientId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="path" name="referralId" type="String" %}
The referal id. Accepts 'none' for referral removal.
{% endswagger-parameter %}

{% swagger-parameter in="query" name="start" type="Long" %}
Optional value for start of referral
{% endswagger-parameter %}

{% swagger-parameter in="query" name="end" type="Long" %}
Optional value for end of referral
{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/patient/{patientId}/delegate" method="post" summary="Delegates a patients to a healthcare party." %}
{% swagger-description %}
It delegates a patient to a healthcare party (By current healthcare party). A modified patient with new delegation gets returned.
{% endswagger-description %}

{% swagger-parameter in="path" name="patientId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="body" type="List" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/patient/undelete/{patientIds}" method="put" summary="undelete previously deleted patients." %}
{% swagger-description %}
Response is an array containing the ID of undeleted patient..
{% endswagger-description %}

{% swagger-parameter in="path" name="patientIds" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}
