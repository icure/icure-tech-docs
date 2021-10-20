# Invoice

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/invoice/byauthor/{userId}/append/{type}/{sentMediumType}" method="post" summary="Gets all invoices for author at date." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="userId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="path" name="type" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="path" name="sentMediumType" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="secretFKeys" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="insuranceId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="invoiceId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="gracePeriod" type="Integer" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="body" type="List" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/invoice" method="post" summary="Creates an invoice." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="Invoice" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/invoice/{invoiceId}" method="delete" summary="Deletes an invoice." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="invoiceId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/invoice/filter" method="post" summary="Filter invoices for the current user (HcParty)." %}
{% swagger-description %}
Returns a list of invoices along with next start keys and Document ID. If the nextStartKey is Null it means that this is the last page.
{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="FilterChainInvoice" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/invoice/byauthor/{hcPartyId}" method="get" summary="Gets all invoices for author at date." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="hcPartyId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="fromDate" type="Long" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="toDate" type="Long" %}

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

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/invoice/byHcPartySecretForeignKeys" method="get" summary="List invoices found By Healthcare Party and secret foreign patient keys.." %}
{% swagger-description %}
Keys have to delimited by coma
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

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/invoice/byHcPartySecretForeignKeys/delegations" method="get" summary="List helement stubs found By Healthcare Party and secret foreign keys.." %}
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

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/invoice/{invoiceId}" method="get" summary="Gets an invoice." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="invoiceId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/invoice/byIds" method="post" summary="Gets an invoice." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="ListOfIds" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/invoice/codes/{minOccurences}" method="get" summary="Get the list of all used tarifications frequencies in invoices." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="minOccurences" type="Long" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/invoice/allHcpsByStatus/{status}" method="post" summary="Gets all invoices per status." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="status" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="from" type="Long" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="to" type="Long" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="body" type="ListOfIds" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/invoice/byCtcts" method="post" summary="Gets all invoices for author at date." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="ListOfIds" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/invoice/byHcPartyGroupId/{hcPartyId}/{groupId}" method="get" summary="List invoices by groupId." %}
{% swagger-description %}
Keys have to delimited by coma
{% endswagger-description %}

{% swagger-parameter in="path" name="hcPartyId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="path" name="groupId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/invoice/byHcParty/{hcPartyId}/mediumType/{sentMediumType}/invoiceType/{invoiceType}/sent/{sent}" method="get" summary="List invoices by type, sent or unsent." %}
{% swagger-description %}
Keys have to delimited by coma
{% endswagger-description %}

{% swagger-parameter in="path" name="hcPartyId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="path" name="sentMediumType" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="path" name="invoiceType" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="path" name="sent" type="Boolean" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="from" type="Long" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="to" type="Long" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/invoice/byHcpartySendingModeStatusDate/{hcPartyId}" method="get" summary="Get all invoices by author, by sending mode, by status and by date." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="hcPartyId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="sendingMode" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="status" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="from" type="Long" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="to" type="Long" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/invoice/byIds/{invoiceIds}" method="get" summary="Gets all invoices for author at date." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="invoiceIds" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/invoice/to/{recipientIds}" method="get" summary="Gets all invoices for author at date." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="recipientIds" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/invoice/byServiceIds/{serviceIds}" method="get" summary="Gets all invoices for author at date." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="serviceIds" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/invoice/toInsurances" method="get" summary="Gets all invoices for author at date." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="userIds" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/invoice/toInsurances/unsent" method="get" summary="Gets all invoices for author at date." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="userIds" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/invoice/toPatients" method="get" summary="Gets all invoices for author at date." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="hcPartyId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/invoice/toPatients/unsent" method="get" summary="Gets all invoices for author at date." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="hcPartyId" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/invoice/mergeTo/{invoiceId}" method="post" summary="Gets all invoices for author at date." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="invoiceId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="body" type="ListOfIds" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/invoice" method="put" summary="Modifies an invoice." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="Invoice" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/invoice/{invoiceId}/delegate" method="put" summary="Adds a delegation to a invoice." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="invoiceId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="body" type="List" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/invoice/reassign" method="post" summary="Modifies an invoice." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="body" type="Invoice" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/invoice/byauthor/{userId}/service/{serviceId}" method="post" summary="Gets all invoices for author at date." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="userId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="path" name="serviceId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="secretFKeys" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="body" type="List" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/invoice/delegations" method="post" summary="Update delegations in healthElements.." %}
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

{% swagger baseUrl="https://demo.icure.cloud" path="/rest/v1/invoice/validate/{invoiceId}" method="post" summary="Gets all invoices for author at date." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="invoiceId" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="scheme" type="String" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="forcedValue" type="String" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="OK" %}
```
```
{% endswagger-response %}
{% endswagger %}
