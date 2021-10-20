# Contact

{% api-method method="put" host="https://demo.icure.cloud" path="/rest/v2/contact/byHcPartySecretForeignKeys/close" %}
{% api-method-summary %}
Close contacts for Healthcare Party and secret foreign keys.
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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/contact" %}
{% api-method-summary %}
Create a contact with the current user
{% endapi-method-summary %}

{% api-method-description %}
Returns an instance of created contact.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="Contact" required=true %}

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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/contact/batch" %}
{% api-method-summary %}
Create a batch of contacts
{% endapi-method-summary %}

{% api-method-description %}
Returns the modified contacts.
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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/contact/delete/batch" %}
{% api-method-summary %}
Delete contacts.
{% endapi-method-summary %}

{% api-method-description %}
Response is a set containing the ID's of deleted contacts.
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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/contact/filter" %}
{% api-method-summary %}
List contacts for the current user (HcParty) or the given hcparty in the filter 
{% endapi-method-summary %}

{% api-method-description %}
Returns a list of contacts along with next start keys and Document ID. If the nextStartKey is Null it means that this is the last page.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="startDocumentId" type="String" required=false %}
A Contact document ID
{% endapi-method-parameter %}
{% api-method-parameter name="limit" type="Integer" required=false %}
Number of rows
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="FilterChainContact" required=true %}

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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/contact/service/filter" %}
{% api-method-summary %}
List services for the current user (HcParty) or the given hcparty in the filter 
{% endapi-method-summary %}

{% api-method-description %}
Returns a list of contacts along with next start keys and Document ID. If the nextStartKey is Null it means that this is the last page.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="startDocumentId" type="String" required=false %}
A Contact document ID
{% endapi-method-parameter %}
{% api-method-parameter name="limit" type="Integer" required=false %}
Number of rows
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="FilterChainService" required=true %}

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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/contact/byOpeningDate" %}
{% api-method-summary %}
List contacts by opening date parties with(out) pagination
{% endapi-method-summary %}

{% api-method-description %}
Returns a list of contacts.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="startKey" type="Long" required=true %}
The contact openingDate
{% endapi-method-parameter %}
{% api-method-parameter name="endKey" type="Long" required=true %}
The contact max openingDate
{% endapi-method-parameter %}
{% api-method-parameter name="hcpartyid" type="String" required=true %}
hcpartyid
{% endapi-method-parameter %}
{% api-method-parameter name="startDocumentId" type="String" required=false %}
A contact party document ID
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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/contact/{contactId}" %}
{% api-method-summary %}
Get a contact
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="contactId" type="String" required=true %}

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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/contact/byIds" %}
{% api-method-summary %}
Get contacts
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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/contact/service/content/empty" %}
{% api-method-summary %}
Get an empty content
{% endapi-method-summary %}

{% api-method-description %}

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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/contact/service/codes/{codeType}/{minOccurences}" %}
{% api-method-summary %}
Get the list of all used codes frequencies in services
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="codeType" type="String" required=true %}

{% endapi-method-parameter %}
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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/contact/service" %}
{% api-method-summary %}
List services with provided ids 
{% endapi-method-summary %}

{% api-method-description %}
Returns a list of services
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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/contact/service/linkedTo" %}
{% api-method-summary %}
List services linked to provided ids 
{% endapi-method-summary %}

{% api-method-description %}
Returns a list of services
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="linkType" type="String" required=false %}
The type of the link
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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/contact/byHcPartyServiceId" %}
{% api-method-summary %}
List contacts found By Healthcare Party and service Id.
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="hcPartyId" type="String" required=true %}

{% endapi-method-parameter %}
{% api-method-parameter name="serviceId" type="String" required=true %}

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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/contact/byExternalId" %}
{% api-method-summary %}
List contacts found By externalId.
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="externalId" type="String" required=true %}

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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/contact/byHcPartyFormId" %}
{% api-method-summary %}
List contacts found By Healthcare Party and form Id.
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="hcPartyId" type="String" required=true %}

{% endapi-method-parameter %}
{% api-method-parameter name="formId" type="String" required=true %}

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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/contact/byHcPartyFormIds" %}
{% api-method-summary %}
List contacts found By Healthcare Party and form Id.
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="hcPartyId" type="String" required=true %}

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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/contact/byHcPartyPatientForeignKeys" %}
{% api-method-summary %}
List contacts found By Healthcare Party and Patient foreign keys.
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="hcPartyId" type="String" required=true %}

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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/contact/byHcPartySecretForeignKeys" %}
{% api-method-summary %}
List contacts found By Healthcare Party and secret foreign keys.
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
{% api-method-parameter name="planOfActionsIds" type="String" required=false %}

{% endapi-method-parameter %}
{% api-method-parameter name="skipClosedContacts" type="Boolean" required=false %}

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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/contact/byHcPartySecretForeignKeys/delegations" %}
{% api-method-summary %}
List contacts found By Healthcare Party and secret foreign keys.
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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/contact/service/associationId" %}
{% api-method-summary %}
List services by related association id
{% endapi-method-summary %}

{% api-method-description %}
Returns a list of services
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="associationId" type="String" required=true %}

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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/contact/match" %}
{% api-method-summary %}
Get ids of contacts matching the provided filter for the current user (HcParty) 
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="AbstractFilterContact" required=true %}

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


{% api-method method="put" host="https://demo.icure.cloud" path="/rest/v2/contact" %}
{% api-method-summary %}
Modify a contact
{% endapi-method-summary %}

{% api-method-description %}
Returns the modified contact.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="Contact" required=true %}

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


{% api-method method="put" host="https://demo.icure.cloud" path="/rest/v2/contact/batch" %}
{% api-method-summary %}
Modify a batch of contacts
{% endapi-method-summary %}

{% api-method-description %}
Returns the modified contacts.
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


{% api-method method="put" host="https://demo.icure.cloud" path="/rest/v2/contact/delegations" %}
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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/contact/{contactId}/delegate" %}
{% api-method-summary %}
Delegates a contact to a healthcare party
{% endapi-method-summary %}

{% api-method-description %}
It delegates a contact to a healthcare party (By current healthcare party). Returns the contact with new delegations.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="contactId" type="String" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="Delegation" required=true %}

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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/contact/delegations" %}
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



