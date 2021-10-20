# Invoice

{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/invoice/byauthor/{userId}/append/{type}/{sentMediumType}" %}
{% api-method-summary %}
Gets all invoices for author at date
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="userId" type="String" required=true %}

{% endapi-method-parameter %}
{% api-method-parameter name="type" type="String" required=true %}

{% endapi-method-parameter %}
{% api-method-parameter name="sentMediumType" type="String" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-query-parameters %}
{% api-method-parameter name="secretFKeys" type="String" required=true %}

{% endapi-method-parameter %}
{% api-method-parameter name="insuranceId" type="String" required=false %}

{% endapi-method-parameter %}
{% api-method-parameter name="invoiceId" type="String" required=false %}

{% endapi-method-parameter %}
{% api-method-parameter name="gracePeriod" type="Integer" required=false %}

{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/invoice" %}
{% api-method-summary %}
Creates an invoice
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="Invoice" required=true %}

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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/invoice/batch" %}
{% api-method-summary %}
Create a batch of invoices
{% endapi-method-summary %}

{% api-method-description %}
Returns the created invoices.
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


{% api-method method="delete" host="https://demo.icure.cloud" path="/rest/v2/invoice/{invoiceId}" %}
{% api-method-summary %}
Deletes an invoice
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="invoiceId" type="String" required=true %}

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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/invoice/filter" %}
{% api-method-summary %}
Filter invoices for the current user (HcParty)
{% endapi-method-summary %}

{% api-method-description %}
Returns a list of invoices along with next start keys and Document ID. If the nextStartKey is Null it means that this is the last page.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="FilterChainInvoice" required=true %}

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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/invoice/byauthor/{hcPartyId}" %}
{% api-method-summary %}
Gets all invoices for author at date
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="hcPartyId" type="String" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-query-parameters %}
{% api-method-parameter name="fromDate" type="Long" required=false %}

{% endapi-method-parameter %}
{% api-method-parameter name="toDate" type="Long" required=false %}

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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/invoice/{invoiceId}" %}
{% api-method-summary %}
Gets an invoice
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="invoiceId" type="String" required=true %}

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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/invoice/byIds" %}
{% api-method-summary %}
Gets an invoice
{% endapi-method-summary %}

{% api-method-description %}

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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/invoice/codes/{minOccurences}" %}
{% api-method-summary %}
Get the list of all used tarifications frequencies in invoices
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="minOccurences" type="Long" required=true %}

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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/invoice/allHcpsByStatus/{status}" %}
{% api-method-summary %}
Gets all invoices per status
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="status" type="String" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-query-parameters %}
{% api-method-parameter name="from" type="Long" required=false %}

{% endapi-method-parameter %}
{% api-method-parameter name="to" type="Long" required=false %}

{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/invoice/byContacts" %}
{% api-method-summary %}
Gets all invoices for author at date
{% endapi-method-summary %}

{% api-method-description %}

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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/invoice/byHcPartySecretForeignKeys" %}
{% api-method-summary %}
List invoices found By Healthcare Party and secret foreign patient keys.
{% endapi-method-summary %}

{% api-method-description %}
Keys have to delimited by coma
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="hcPartyId" type="String" required=true %}

{% endapi-method-parameter %}
{% api-method-parameter name="secretFKeys" type="String" required=true %}

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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/invoice/byHcPartyGroupId/{hcPartyId}/{groupId}" %}
{% api-method-summary %}
List invoices by groupId
{% endapi-method-summary %}

{% api-method-description %}
Keys have to delimited by coma
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="hcPartyId" type="String" required=true %}

{% endapi-method-parameter %}
{% api-method-parameter name="groupId" type="String" required=true %}

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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/invoice/byHcParty/{hcPartyId}/mediumType/{sentMediumType}/invoiceType/{invoiceType}/sent/{sent}" %}
{% api-method-summary %}
List invoices by type, sent or unsent
{% endapi-method-summary %}

{% api-method-description %}
Keys have to delimited by coma
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="hcPartyId" type="String" required=true %}

{% endapi-method-parameter %}
{% api-method-parameter name="sentMediumType" type="String" required=true %}

{% endapi-method-parameter %}
{% api-method-parameter name="invoiceType" type="String" required=true %}

{% endapi-method-parameter %}
{% api-method-parameter name="sent" type="Boolean" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-query-parameters %}
{% api-method-parameter name="from" type="Long" required=false %}

{% endapi-method-parameter %}
{% api-method-parameter name="to" type="Long" required=false %}

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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/invoice/byHcpartySendingModeStatusDate/{hcPartyId}" %}
{% api-method-summary %}
Get all invoices by author, by sending mode, by status and by date
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="hcPartyId" type="String" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-query-parameters %}
{% api-method-parameter name="sendingMode" type="String" required=false %}

{% endapi-method-parameter %}
{% api-method-parameter name="status" type="String" required=false %}

{% endapi-method-parameter %}
{% api-method-parameter name="from" type="Long" required=false %}

{% endapi-method-parameter %}
{% api-method-parameter name="to" type="Long" required=false %}

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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/invoice/byIds/{invoiceIds}" %}
{% api-method-summary %}
Gets all invoices for author at date
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="invoiceIds" type="String" required=true %}

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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/invoice/to/{recipientIds}" %}
{% api-method-summary %}
Gets all invoices for author at date
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="recipientIds" type="String" required=true %}

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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/invoice/byServiceIds/{serviceIds}" %}
{% api-method-summary %}
Gets all invoices for author at date
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="serviceIds" type="String" required=true %}

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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/invoice/byHcPartySecretForeignKeys/delegations" %}
{% api-method-summary %}
List helement stubs found By Healthcare Party and secret foreign keys.
{% endapi-method-summary %}

{% api-method-description %}
Keys must be delimited by coma
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="hcPartyId" type="String" required=true %}

{% endapi-method-parameter %}
{% api-method-parameter name="secretFKeys" type="String" required=true %}

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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/invoice/toInsurances" %}
{% api-method-summary %}
Gets all invoices for author at date
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="userIds" type="String" required=false %}

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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/invoice/toInsurances/unsent" %}
{% api-method-summary %}
Gets all invoices for author at date
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="userIds" type="String" required=false %}

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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/invoice/toPatients" %}
{% api-method-summary %}
Gets all invoices for author at date
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="hcPartyId" type="String" required=false %}

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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/invoice/toPatients/unsent" %}
{% api-method-summary %}
Gets all invoices for author at date
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="hcPartyId" type="String" required=false %}

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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/invoice/mergeTo/{invoiceId}" %}
{% api-method-summary %}
Gets all invoices for author at date
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="invoiceId" type="String" required=true %}

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


{% api-method method="put" host="https://demo.icure.cloud" path="/rest/v2/invoice" %}
{% api-method-summary %}
Modifies an invoice
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="Invoice" required=true %}

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


{% api-method method="put" host="https://demo.icure.cloud" path="/rest/v2/invoice/batch" %}
{% api-method-summary %}
Modify a batch of invoices
{% endapi-method-summary %}

{% api-method-description %}
Returns the modified invoices.
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


{% api-method method="put" host="https://demo.icure.cloud" path="/rest/v2/invoice/{invoiceId}/delegate" %}
{% api-method-summary %}
Adds a delegation to a invoice
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="invoiceId" type="String" required=true %}

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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/invoice/reassign" %}
{% api-method-summary %}
Modifies an invoice
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="Invoice" required=true %}

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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/invoice/byauthor/{userId}/service/{serviceId}" %}
{% api-method-summary %}
Remove an invoice of an user
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="userId" type="String" required=true %}

{% endapi-method-parameter %}
{% api-method-parameter name="serviceId" type="String" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-query-parameters %}
{% api-method-parameter name="secretFKeys" type="String" required=true %}

{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/invoice/delegations" %}
{% api-method-summary %}
Update delegations in healthElements.
{% endapi-method-summary %}

{% api-method-description %}
Keys must be delimited by coma
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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/invoice/validate/{invoiceId}" %}
{% api-method-summary %}
Gets all invoices for author at date
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="invoiceId" type="String" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-query-parameters %}
{% api-method-parameter name="scheme" type="String" required=true %}

{% endapi-method-parameter %}
{% api-method-parameter name="forcedValue" type="String" required=true %}

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



