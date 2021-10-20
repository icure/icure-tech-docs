# HealthcareParty

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/hcparty" method="post" summary="Create a healthcare party." %}
{% swagger-description %}
One of Name or Last name+First name, Nihii, and Public key are required.
{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="HealthcareParty" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="default response" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/hcparty/inGroup/{groupId}" method="post" summary="Create a healthcare party." %}
{% swagger-description %}
One of Name or Last name+First name, Nihii, and Public key are required.
{% endswagger-description %}

{% swagger-parameter in="path" name="groupId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="body" type="HealthcareParty" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="default response" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/hcparty/{healthcarePartyIds}" method="delete" summary="Delete a healthcare party." %}
{% swagger-description %}
Deleting a healthcareParty. Response is an array containing the id of deleted healthcare party.
{% endswagger-description %}

{% swagger-parameter in="path" name="healthcarePartyIds" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="default response" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/hcparty/inGroup/{groupId}/{healthcarePartyIds}" method="delete" summary="Delete a healthcare party." %}
{% swagger-description %}
Deleting a healthcareParty. Response is an array containing the id of deleted healthcare party.
{% endswagger-description %}

{% swagger-parameter in="path" name="groupId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="path" name="healthcarePartyIds" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="default response" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/hcparty/byName" method="get" summary="Find healthcare parties by name with(out) pagination." %}
{% swagger-description %}
Returns a list of healthcare parties.
{% endswagger-description %}

{% swagger-parameter in="query" name="name" type="String" %}
The Last name search value
{% endswagger-parameter %}

{% swagger-parameter in="query" name="startKey" type="String" %}
A healthcare party Last name
{% endswagger-parameter %}

{% swagger-parameter in="query" name="startDocumentId" type="String" %}
A healthcare party document ID
{% endswagger-parameter %}

{% swagger-parameter in="query" name="limit" type="Integer" %}
Number of rows
{% endswagger-parameter %}

{% swagger-parameter in="query" name="desc" type="Boolean" %}
Descending
{% endswagger-parameter %}

{% swagger-response status="200" description="default response" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/hcparty/bySpecialityAndPostCode/{type}/{spec}/{firstCode}/to/{lastCode}" method="get" summary="Find healthcare parties by name with(out) pagination." %}
{% swagger-description %}
Returns a list of healthcare parties.
{% endswagger-description %}

{% swagger-parameter in="path" name="type" type="String" %}
The type of the HCP (persphysician)
{% endswagger-parameter %}

{% swagger-parameter in="path" name="spec" type="String" %}
The speciality of the HCP
{% endswagger-parameter %}

{% swagger-parameter in="path" name="firstCode" type="String" %}
The first postCode for the HCP
{% endswagger-parameter %}

{% swagger-parameter in="path" name="lastCode" type="String" %}
The last postCode for the HCP
{% endswagger-parameter %}

{% swagger-parameter in="query" name="limit" type="Integer" %}
Number of rows
{% endswagger-parameter %}

{% swagger-response status="200" description="default response" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/hcparty/byNihiiOrSsin/{searchValue}" method="get" summary="Find healthcare parties by nihii or ssin with(out) pagination." %}
{% swagger-description %}
Returns a list of healthcare parties.
{% endswagger-description %}

{% swagger-parameter in="path" name="searchValue" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="startKey" type="String" %}
A healthcare party Last name
{% endswagger-parameter %}

{% swagger-parameter in="query" name="startDocumentId" type="String" %}
A healthcare party document ID
{% endswagger-parameter %}

{% swagger-parameter in="query" name="limit" type="Integer" %}
Number of rows
{% endswagger-parameter %}

{% swagger-parameter in="query" name="desc" type="Boolean" %}
Descending
{% endswagger-parameter %}

{% swagger-response status="200" description="default response" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/hcparty/current" method="get" summary="Get the current healthcare party if logged in.." %}
{% swagger-description %}
General information about the current healthcare Party
{% endswagger-description %}

{% swagger-response status="200" description="default response" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/hcparty/{healthcarePartyId}/keys" method="get" summary="Get the HcParty encrypted AES keys indexed by owner." %}
{% swagger-description %}
(key, value) of the map is as follows: (ID of the owner of the encrypted AES key, encrypted AES key)
{% endswagger-description %}

{% swagger-parameter in="path" name="healthcarePartyId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="default response" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/hcparty/byIds/{healthcarePartyIds}" method="get" summary="Get healthcareParties by their IDs." %}
{% swagger-description %}
General information about the healthcare Party
{% endswagger-description %}

{% swagger-parameter in="path" name="healthcarePartyIds" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="default response" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/hcparty/{parentId}/children" method="get" summary="Find children of an healthcare parties." %}
{% swagger-description %}
Return a list of children hcp.
{% endswagger-description %}

{% swagger-parameter in="path" name="parentId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="default response" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/hcparty/inGroup/{groupId}/byIds" method="post" summary="Get healthcareParties by their IDs." %}
{% swagger-description %}
General information about the healthcare Party
{% endswagger-description %}

{% swagger-parameter in="path" name="groupId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="body" type="ListOfIds" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="default response" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/hcparty/{healthcarePartyId}" method="get" summary="Get a healthcareParty by his ID." %}
{% swagger-description %}
General information about the healthcare Party
{% endswagger-description %}

{% swagger-parameter in="path" name="healthcarePartyId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="default response" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/hcparty/{healthcarePartyId}/publicKey" method="get" summary="Get public key of a healthcare party." %}
{% swagger-description %}
Returns the public key of a healthcare party in Hex
{% endswagger-description %}

{% swagger-parameter in="path" name="healthcarePartyId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="default response" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/hcparty/byNameStrict/{name}" method="get" summary="Find healthcare parties by name with(out) pagination." %}
{% swagger-description %}
Returns a list of healthcare parties.
{% endswagger-description %}

{% swagger-parameter in="path" name="name" type="String" %}
The Last name search value
{% endswagger-parameter %}

{% swagger-response status="200" description="default response" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/hcparty" method="get" summary="List healthcare parties with(out) pagination." %}
{% swagger-description %}
Returns a list of healthcare parties.
{% endswagger-description %}

{% swagger-parameter in="query" name="startKey" type="String" %}
A healthcare party Last name
{% endswagger-parameter %}

{% swagger-parameter in="query" name="startDocumentId" type="String" %}
A healthcare party document ID
{% endswagger-parameter %}

{% swagger-parameter in="query" name="limit" type="Integer" %}
Number of rows
{% endswagger-parameter %}

{% swagger-parameter in="query" name="desc" type="Boolean" %}
Descending
{% endswagger-parameter %}

{% swagger-response status="200" description="default response" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/hcparty" method="put" summary="Modify a Healthcare Party.." %}
{% swagger-description %}
No particular return value. It's just a message.
{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="HealthcareParty" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="default response" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/hcparty/inGroup/{groupId}" method="put" summary="Modify a Healthcare Party.." %}
{% swagger-description %}
No particular return value. It's just a message.
{% endswagger-description %}

{% swagger-parameter in="path" name="groupId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="body" type="HealthcareParty" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="default response" %}
```
```
{% endswagger-response %}
{% endswagger %}
