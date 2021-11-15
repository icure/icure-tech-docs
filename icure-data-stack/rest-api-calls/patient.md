# Patient

{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/patient/hcParty/{hcPartyId}/count" %}
{% api-method-summary %}
Get count of patients for a specific HcParty or for the current HcParty 
{% endapi-method-summary %}

{% api-method-description %}
Returns the count of patients
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="hcPartyId" type="String" required=true %}
Healthcare party id
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/patient" %}
{% api-method-summary %}
Create a patient
{% endapi-method-summary %}

{% api-method-description %}
Name, last name, date of birth, and gender are required. After creation of the patient and obtaining the ID, you need to create an initial delegation.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="Patient" required=true %}

{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/patient/batch" %}
{% api-method-summary %}
Create patients in bulk
{% endapi-method-summary %}

{% api-method-description %}
Returns the id and _rev of created patients
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="List" required=true %}

{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/patient/delete/batch" %}
{% api-method-summary %}
Delete patients.
{% endapi-method-summary %}

{% api-method-description %}
Response is an array containing the ID of deleted patient..
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="ListOfIds" required=true %}

{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/patient/filter" %}
{% api-method-summary %}
Filter patients for the current user (HcParty) 
{% endapi-method-summary %}

{% api-method-description %}
Returns a list of patients along with next start keys and Document ID. If the nextStartKey is Null it means that this is the last page.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="startKey" type="String" required=false %}
The start key for pagination, depends on the filters used
{% endapi-method-parameter %}
{% api-method-parameter name="startDocumentId" type="String" required=false %}
A patient document ID
{% endapi-method-parameter %}
{% api-method-parameter name="limit" type="Integer" required=false %}
Number of rows
{% endapi-method-parameter %}
{% api-method-parameter name="skip" type="Integer" required=false %}
Skip rows
{% endapi-method-parameter %}
{% api-method-parameter name="sort" type="String" required=false %}
Sort key
{% endapi-method-parameter %}
{% api-method-parameter name="desc" type="Boolean" required=false %}
Descending
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="FilterChainPatient" required=true %}

{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/patient/deleted/byDate" %}
{% api-method-summary %}
Find deleted patients
{% endapi-method-summary %}

{% api-method-description %}
Returns a list of deleted patients, within the specified time period, if any.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="startDate" type="Long" required=false %}
Filter deletions after this date (unix epoch), included
{% endapi-method-parameter %}
{% api-method-parameter name="endDate" type="Long" required=false %}
Filter deletions before this date (unix epoch), included
{% endapi-method-parameter %}
{% api-method-parameter name="desc" type="Boolean" required=false %}
Descending
{% endapi-method-parameter %}
{% api-method-parameter name="startDocumentId" type="String" required=false %}
A patient document ID
{% endapi-method-parameter %}
{% api-method-parameter name="limit" type="Integer" required=false %}
Number of rows
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/patient/byAccess/{userId}" %}
{% api-method-summary %}
Get Paginated List of Patients sorted by Access logs descending
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="userId" type="String" required=true %}
A User ID
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-query-parameters %}
{% api-method-parameter name="accessType" type="String" required=false %}
The type of access (COMPUTER or USER)
{% endapi-method-parameter %}
{% api-method-parameter name="startDate" type="Long" required=false %}
The start search epoch
{% endapi-method-parameter %}
{% api-method-parameter name="startKey" type="String" required=false %}
The start key for pagination
{% endapi-method-parameter %}
{% api-method-parameter name="startDocumentId" type="String" required=false %}
A patient document ID
{% endapi-method-parameter %}
{% api-method-parameter name="limit" type="Integer" required=false %}
Number of rows
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/patient" %}
{% api-method-summary %}
List patients for a specific HcParty
{% endapi-method-summary %}

{% api-method-description %}
Returns a list of patients along with next start keys and Document ID. If the nextStartKey is Null it means that this is the last page.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="hcPartyId" type="String" required=false %}
Healthcare party id
{% endapi-method-parameter %}
{% api-method-parameter name="sortField" type="String" required=false %}
Optional value for sorting results by a given field (&#x27;name&#x27;, &#x27;ssin&#x27;, &#x27;dateOfBirth&#x27;). Specifying this deactivates filtering
{% endapi-method-parameter %}
{% api-method-parameter name="startKey" type="String" required=false %}
The start key for pagination: a JSON representation of an array containing all the necessary components to form the Complex Key&#x27;s startKey
{% endapi-method-parameter %}
{% api-method-parameter name="startDocumentId" type="String" required=false %}
A patient document ID
{% endapi-method-parameter %}
{% api-method-parameter name="limit" type="Integer" required=false %}
Number of rows
{% endapi-method-parameter %}
{% api-method-parameter name="sortDirection" type="String" required=false %}
Optional value for providing a sorting direction (&#x27;asc&#x27;, &#x27;desc&#x27;). Set to &#x27;asc&#x27; by default.
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/patient/byNameBirthSsinAuto" %}
{% api-method-summary %}
Find patients for the current user (HcParty) 
{% endapi-method-summary %}

{% api-method-description %}
Returns a list of patients along with next start keys and Document ID. If the nextStartKey is Null it means that this is the last page.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="healthcarePartyId" type="String" required=false %}
HealthcareParty Id, if unset will user user&#x27;s hcpId
{% endapi-method-parameter %}
{% api-method-parameter name="filterValue" type="String" required=false %}
Optional value for filtering results
{% endapi-method-parameter %}
{% api-method-parameter name="startKey" type="String" required=false %}
The start key for pagination: a JSON representation of an array containing all the necessary components to form the Complex Key&#x27;s startKey
{% endapi-method-parameter %}
{% api-method-parameter name="startDocumentId" type="String" required=false %}
A patient document ID
{% endapi-method-parameter %}
{% api-method-parameter name="limit" type="Integer" required=false %}
Number of rows
{% endapi-method-parameter %}
{% api-method-parameter name="sortDirection" type="String" required=false %}
Optional value for providing a sorting direction (&#x27;asc&#x27;, &#x27;desc&#x27;). Set to &#x27;asc&#x27; by default.
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/patient/byHcPartyId" %}
{% api-method-summary %}
List patients by pages for a specific HcParty
{% endapi-method-summary %}

{% api-method-description %}
Returns a list of patients along with next start keys and Document ID. If the nextStartKey is Null it means that this is the last page.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="hcPartyId" type="String" required=true %}
Healthcare party id
{% endapi-method-parameter %}
{% api-method-parameter name="startKey" type="String" required=false %}
The page first id
{% endapi-method-parameter %}
{% api-method-parameter name="startDocumentId" type="String" required=false %}
A patient document ID
{% endapi-method-parameter %}
{% api-method-parameter name="limit" type="Integer" required=false %}
Page size
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/patient/modifiedAfter/{date}" %}
{% api-method-summary %}
List patients that have been modified after the provided date
{% endapi-method-summary %}

{% api-method-description %}
Returns a list of patients that have been modified after the provided date
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="date" type="Long" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-query-parameters %}
{% api-method-parameter name="startKey" type="Long" required=false %}
The start key for pagination the date of the first element of the new page
{% endapi-method-parameter %}
{% api-method-parameter name="startDocumentId" type="String" required=false %}
A patient document ID
{% endapi-method-parameter %}
{% api-method-parameter name="limit" type="Integer" required=false %}
Number of rows
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/patient/fuzzy" %}
{% api-method-summary %}
Filter patients for the current user (HcParty) 
{% endapi-method-summary %}

{% api-method-description %}
Returns a list of patients
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="firstName" type="String" required=false %}
The first name
{% endapi-method-parameter %}
{% api-method-parameter name="lastName" type="String" required=false %}
The last name
{% endapi-method-parameter %}
{% api-method-parameter name="dateOfBirth" type="Integer" required=false %}
The date of birth
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/patient/{patientId}" %}
{% api-method-summary %}
Get patient
{% endapi-method-summary %}

{% api-method-description %}
It gets patient administrative data.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="patientId" type="String" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/patient/byExternalId/{externalId}" %}
{% api-method-summary %}
Get the patient having the provided externalId
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="externalId" type="String" required=true %}
A external ID
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/patient/{hcPartyId}/{id}" %}
{% api-method-summary %}
Get patient by identifier
{% endapi-method-summary %}

{% api-method-description %}
It gets patient administrative data based on the identifier (root & extension) parameters.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="hcPartyId" type="String" required=true %}

{% endapi-method-parameter %}
{% api-method-parameter name="id" type="String" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-query-parameters %}
{% api-method-parameter name="system" type="String" required=false %}

{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/patient/{patientId}/keys" %}
{% api-method-summary %}
Get the patient (identified by patientId) hcparty keys. Those keys are AES keys (encrypted) used to share information between HCPs and a patient.
{% endapi-method-summary %}

{% api-method-description %}
This endpoint is used to recover all keys that have already been created and that can be used to share information with this patient. It returns a map with the following structure: ID of the owner of the encrypted AES key -> encrypted AES key. The returned encrypted AES keys will have to be decrypted using the patient's private key.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="patientId" type="String" required=true %}
The patient Id for which information is shared
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Successful operation
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
Unauthorized operation: the provided credentials are invalid
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/patient/byIds" %}
{% api-method-summary %}
Get patients by id
{% endapi-method-summary %}

{% api-method-description %}
It gets patient administrative data.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="ListOfIds" required=true %}

{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/patient/deleted/by_name" %}
{% api-method-summary %}
Find deleted patients
{% endapi-method-summary %}

{% api-method-description %}
Returns a list of deleted patients, by name and/or firstname prefix, if any.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="firstName" type="String" required=false %}
First name prefix
{% endapi-method-parameter %}
{% api-method-parameter name="lastName" type="String" required=false %}
Last name prefix
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/patient/merges/{date}" %}
{% api-method-summary %}
List patients that have been merged towards another patient 
{% endapi-method-summary %}

{% api-method-description %}
Returns a list of patients that have been merged after the provided date
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="date" type="Long" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/patient/match" %}
{% api-method-summary %}
Get ids of patients matching the provided filter for the current user (HcParty) 
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="AbstractFilterPatient" required=true %}

{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="put" host="https://demo.icure.cloud" path="/rest/v2/patient/mergeInto/{toId}/from/{fromIds}" %}
{% api-method-summary %}
Merge a series of patients into another patient
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="toId" type="String" required=true %}

{% endapi-method-parameter %}
{% api-method-parameter name="fromIds" type="String" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="put" host="https://demo.icure.cloud" path="/rest/v2/patient" %}
{% api-method-summary %}
Modify a patient
{% endapi-method-summary %}

{% api-method-description %}
No particular return value. It's just a message.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="Patient" required=true %}

{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="put" host="https://demo.icure.cloud" path="/rest/v2/patient/{patientId}/referral/{referralId}" %}
{% api-method-summary %}
Set a patient referral doctor
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="patientId" type="String" required=true %}

{% endapi-method-parameter %}
{% api-method-parameter name="referralId" type="String" required=true %}
The referal id. Accepts &#x27;none&#x27; for referral removal.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-query-parameters %}
{% api-method-parameter name="start" type="Long" required=false %}
Optional value for start of referral
{% endapi-method-parameter %}
{% api-method-parameter name="end" type="Long" required=false %}
Optional value for end of referral
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="put" host="https://demo.icure.cloud" path="/rest/v2/patient/batch" %}
{% api-method-summary %}
Modify patients in bulk
{% endapi-method-summary %}

{% api-method-description %}
Returns the id and _rev of modified patients
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="List" required=true %}

{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/patient/{patientId}/delegate" %}
{% api-method-summary %}
Delegates a patients to a healthcare party
{% endapi-method-summary %}

{% api-method-description %}
It delegates a patient to a healthcare party (By current healthcare party). A modified patient with new delegation gets returned.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="patientId" type="String" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="List" required=true %}

{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/patient/register/forHcp/{hcPartyId}/inGroup/{groupId}" %}
{% api-method-summary %}
Register a patient
{% endapi-method-summary %}

{% api-method-description %}
Register a new patient into the system
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="hcPartyId" type="String" required=true %}

{% endapi-method-parameter %}
{% api-method-parameter name="groupId" type="String" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="Patient" required=true %}

{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


{% api-method method="put" host="https://demo.icure.cloud" path="/rest/v2/patient/undelete/{patientIds}" %}
{% api-method-summary %}
undelete previously deleted patients
{% endapi-method-summary %}

{% api-method-description %}
Response is an array containing the ID of undeleted patient..
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="patientIds" type="String" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
OK
{% endapi-method-response-example-description %}
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}



