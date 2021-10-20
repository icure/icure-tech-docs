# HealthcareParty

{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/hcparty" %}
{% api-method-summary %}
Create a healthcare party
{% endapi-method-summary %}

{% api-method-description %}
One of Name or Last name+First name, Nihii, and Public key are required.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="HealthcareParty" required=true %}

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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/hcparty/inGroup/{groupId}" %}
{% api-method-summary %}
Create a healthcare party
{% endapi-method-summary %}

{% api-method-description %}
One of Name or Last name+First name, Nihii, and Public key are required.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="groupId" type="String" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="HealthcareParty" required=true %}

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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/hcparty/delete/batch" %}
{% api-method-summary %}
Delete healthcare parties
{% endapi-method-summary %}

{% api-method-description %}
Deleting healthcareParties. Response is an array containing the id of deleted healthcare parties.
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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/hcparty/delete/batch/inGroup/{groupId}" %}
{% api-method-summary %}
Delete a healthcare party
{% endapi-method-summary %}

{% api-method-description %}
Deleting a healthcareParty. Response is an array containing the id of deleted healthcare party.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="groupId" type="String" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/hcparty" %}
{% api-method-summary %}
List healthcare parties with(out) pagination
{% endapi-method-summary %}

{% api-method-description %}
Returns a list of healthcare parties.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="startKey" type="String" required=false %}
A healthcare party Last name
{% endapi-method-parameter %}
{% api-method-parameter name="startDocumentId" type="String" required=false %}
A healthcare party document ID
{% endapi-method-parameter %}
{% api-method-parameter name="limit" type="Integer" required=false %}
Number of rows
{% endapi-method-parameter %}
{% api-method-parameter name="desc" type="Boolean" required=false %}
Descending
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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/hcparty/byName" %}
{% api-method-summary %}
Find healthcare parties by name with(out) pagination
{% endapi-method-summary %}

{% api-method-description %}
Returns a list of healthcare parties.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="name" type="String" required=false %}
The Last name search value
{% endapi-method-parameter %}
{% api-method-parameter name="startKey" type="String" required=false %}
A healthcare party Last name
{% endapi-method-parameter %}
{% api-method-parameter name="startDocumentId" type="String" required=false %}
A healthcare party document ID
{% endapi-method-parameter %}
{% api-method-parameter name="limit" type="Integer" required=false %}
Number of rows
{% endapi-method-parameter %}
{% api-method-parameter name="desc" type="Boolean" required=false %}
Descending
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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/hcparty/bySpecialityAndPostCode/{type}/{spec}/{firstCode}/to/{lastCode}" %}
{% api-method-summary %}
Find healthcare parties by name with(out) pagination
{% endapi-method-summary %}

{% api-method-description %}
Returns a list of healthcare parties.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="type" type="String" required=true %}
The type of the HCP (persphysician)
{% endapi-method-parameter %}
{% api-method-parameter name="spec" type="String" required=true %}
The speciality of the HCP
{% endapi-method-parameter %}
{% api-method-parameter name="firstCode" type="String" required=true %}
The first postCode for the HCP
{% endapi-method-parameter %}
{% api-method-parameter name="lastCode" type="String" required=true %}
The last postCode for the HCP
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-query-parameters %}
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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/hcparty/byNihiiOrSsin/{searchValue}" %}
{% api-method-summary %}
Find healthcare parties by nihii or ssin with(out) pagination
{% endapi-method-summary %}

{% api-method-description %}
Returns a list of healthcare parties.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="searchValue" type="String" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-query-parameters %}
{% api-method-parameter name="startKey" type="String" required=false %}
A healthcare party Last name
{% endapi-method-parameter %}
{% api-method-parameter name="startDocumentId" type="String" required=false %}
A healthcare party document ID
{% endapi-method-parameter %}
{% api-method-parameter name="limit" type="Integer" required=false %}
Number of rows
{% endapi-method-parameter %}
{% api-method-parameter name="desc" type="Boolean" required=false %}
Descending
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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/hcparty/current" %}
{% api-method-summary %}
Get the current healthcare party if logged in.
{% endapi-method-summary %}

{% api-method-description %}
General information about the current healthcare Party
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/hcparty/byKeys/{healthcarePartyId}" %}
{% api-method-summary %}
Get the HcParty encrypted AES keys indexed by owner
{% endapi-method-summary %}

{% api-method-description %}
(key, value) of the map is as follows: (ID of the owner of the encrypted AES key, encrypted AES key)
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="healthcarePartyId" type="String" required=true %}

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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/hcparty/byIds" %}
{% api-method-summary %}
Get healthcareParties by their IDs
{% endapi-method-summary %}

{% api-method-description %}
General information about the healthcare Party
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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/hcparty/{healthcarePartyId}" %}
{% api-method-summary %}
Get a healthcareParty by his ID
{% endapi-method-summary %}

{% api-method-description %}
General information about the healthcare Party
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="healthcarePartyId" type="String" required=true %}

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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/hcparty/{healthcarePartyId}/publicKey" %}
{% api-method-summary %}
Get public key of a healthcare party
{% endapi-method-summary %}

{% api-method-description %}
Returns the public key of a healthcare party in Hex
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="healthcarePartyId" type="String" required=true %}

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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/hcparty/byNameStrict/{name}" %}
{% api-method-summary %}
Find healthcare parties by name with(out) pagination
{% endapi-method-summary %}

{% api-method-description %}
Returns a list of healthcare parties.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="name" type="String" required=true %}
The Last name search value
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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/hcparty/{parentId}/children" %}
{% api-method-summary %}
Find children of an healthcare parties
{% endapi-method-summary %}

{% api-method-description %}
Return a list of children hcp.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="parentId" type="String" required=true %}

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


{% api-method method="put" host="https://demo.icure.cloud" path="/rest/v2/hcparty" %}
{% api-method-summary %}
Modify a Healthcare Party.
{% endapi-method-summary %}

{% api-method-description %}
No particular return value. It's just a message.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="HealthcareParty" required=true %}

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


{% api-method method="put" host="https://demo.icure.cloud" path="/rest/v2/hcparty/inGroup/{groupId}" %}
{% api-method-summary %}
Modify a Healthcare Party.
{% endapi-method-summary %}

{% api-method-description %}
No particular return value. It's just a message.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="groupId" type="String" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="HealthcareParty" required=true %}

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



