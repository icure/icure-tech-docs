# Contact

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/contact/byHcPartySecretForeignKeys/close" method="put" summary="Close contacts for Healthcare Party and secret foreign keys.." %}
{% swagger-description %}
Keys must be delimited by coma
{% endswagger-description %}

{% swagger-parameter in="query" name="hcPartyId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="secretFKeys" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/contact" method="post" summary="Create a contact with the current user." %}
{% swagger-description %}
Returns an instance of created contact.
{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="Contact" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/contact/{contactIds}" method="delete" summary="Delete contacts.." %}
{% swagger-description %}
Response is a set containing the ID's of deleted contacts.
{% endswagger-description %}

{% swagger-parameter in="path" name="contactIds" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/contact/filter" method="post" summary="List contacts for the current user (HcParty) or the given hcparty in the filter ." %}
{% swagger-description %}
Returns a list of contacts along with next start keys and Document ID. If the nextStartKey is Null it means that this is the last page.
{% endswagger-description %}

{% swagger-parameter in="query" name="startDocumentId" type="String" %}
A Contact document ID
{% endswagger-parameter %}

{% swagger-parameter in="query" name="limit" type="Integer" %}
Number of rows
{% endswagger-parameter %}

{% swagger-parameter in="body" name="body" type="FilterChainContact" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/contact/service/filter" method="post" summary="List services for the current user (HcParty) or the given hcparty in the filter ." %}
{% swagger-description %}
Returns a list of contacts along with next start keys and Document ID. If the nextStartKey is Null it means that this is the last page.
{% endswagger-description %}

{% swagger-parameter in="query" name="startDocumentId" type="String" %}
A Contact document ID
{% endswagger-parameter %}

{% swagger-parameter in="query" name="limit" type="Integer" %}
Number of rows
{% endswagger-parameter %}

{% swagger-parameter in="body" name="body" type="FilterChainService" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/contact/byExternalId" method="post" summary="List contacts found By externalId.." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="externalId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/contact/byHcPartyFormId" method="get" summary="List contacts found By Healthcare Party and form Id.." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="hcPartyId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="formId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/contact/byHcPartyFormIds" method="post" summary="List contacts found By Healthcare Party and form Id.." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="hcPartyId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="body" type="ListOfIds" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/contact/byHcPartySecretForeignKeys" method="get" summary="List contacts found By Healthcare Party and secret foreign keys.." %}
{% swagger-description %}
Keys must be delimited by coma
{% endswagger-description %}

{% swagger-parameter in="query" name="hcPartyId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="secretFKeys" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="planOfActionsIds" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="skipClosedContacts" type="Boolean" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/contact/byHcPartyServiceId" method="get" summary="List contacts found By Healthcare Party and service Id.." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="hcPartyId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="serviceId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/contact/byHcPartyPatientForeignKeys" method="post" summary="List contacts found By Healthcare Party and Patient foreign keys.." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="hcPartyId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="body" type="ListOfIds" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/contact/byHcPartySecretForeignKeys/delegations" method="get" summary="List contacts found By Healthcare Party and secret foreign keys.." %}
{% swagger-description %}
Keys must be delimited by coma
{% endswagger-description %}

{% swagger-parameter in="query" name="hcPartyId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="secretFKeys" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/contact/{contactId}" method="get" summary="Get a contact." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="contactId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/contact/byIds" method="post" summary="Get contacts." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="ListOfIds" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/contact/service/content/empty" method="get" summary="Get an empty content." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/contact/service/codes/{codeType}/{minOccurences}" method="get" summary="Get the list of all used codes frequencies in services." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="codeType" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="path" name="minOccurences" type="Long" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/contact/byOpeningDate" method="get" summary="List contacts bu opening date parties with(out) pagination." %}
{% swagger-description %}
Returns a list of contacts.
{% endswagger-description %}

{% swagger-parameter in="query" name="startKey" type="Long" %}
The contact openingDate
{% endswagger-parameter %}

{% swagger-parameter in="query" name="endKey" type="Long" %}
The contact max openingDate
{% endswagger-parameter %}

{% swagger-parameter in="query" name="hcpartyid" type="String" %}
hcpartyid
{% endswagger-parameter %}

{% swagger-parameter in="query" name="startDocumentId" type="String" %}
A contact party document ID
{% endswagger-parameter %}

{% swagger-parameter in="query" name="limit" type="Integer" %}
Number of rows
{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/contact/service/byIds" method="post" summary="List services with provided ids ." %}
{% swagger-description %}
Returns a list of services
{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="ListOfIds" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/contact/service/associationId" method="get" summary="List services by related association id." %}
{% swagger-description %}
Returns a list of services
{% endswagger-description %}

{% swagger-parameter in="query" name="associationId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/contact/service/linkedTo" method="post" summary="List services linked to provided ids ." %}
{% swagger-description %}
Returns a list of services
{% endswagger-description %}

{% swagger-parameter in="query" name="linkType" type="String" %}
The type of the link
{% endswagger-parameter %}

{% swagger-parameter in="body" name="body" type="ListOfIds" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/contact/match" method="post" summary="Get ids of contacts matching the provided filter for the current user (HcParty) ." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="AbstractFilterContact" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/contact" method="put" summary="Modify a contact." %}
{% swagger-description %}
Returns the modified contact.
{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="Contact" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/contact/batch" method="put" summary="Modify a batch of contacts." %}
{% swagger-description %}
Returns the modified contacts.
{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="List" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/contact/{contactId}/delegate" method="post" summary="Delegates a contact to a healthcare party." %}
{% swagger-description %}
It delegates a contact to a healthcare party (By current healthcare party). Returns the contact with new delegations.
{% endswagger-description %}

{% swagger-parameter in="path" name="contactId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="body" type="Delegation" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/contact/delegations" method="post" summary="Update delegations in healthElements.." %}
{% swagger-description %}
Keys must be delimited by coma
{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="List" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}
