# User

{% api-method method="put" host="https://demo.icure.cloud" path="/rest/v2/user/current/hcparty/{healthcarePartyId}" %}
{% api-method-summary %}
Assign a healthcare party ID to current user
{% endapi-method-summary %}

{% api-method-description %}
UserDto gets returned.
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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/user/checkPassword" %}
{% api-method-summary %}
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="password" type="String" required=true %}

{% endapi-method-parameter %}
{% endapi-method-headers %}
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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/user/token/{userId}" %}
{% api-method-summary %}
Check token validity
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="userId" type="String" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-headers %}
{% api-method-parameter name="token" type="String" required=true %}

{% endapi-method-parameter %}
{% endapi-method-headers %}
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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/user" %}
{% api-method-summary %}
Create a user
{% endapi-method-summary %}

{% api-method-description %}
Create a user. HealthcareParty ID should be set. Email or Login have to be set. If login hasn't been set, Email will be used for Login instead.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="User" required=true %}

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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/user/inGroup/{groupId}" %}
{% api-method-summary %}
Create a user
{% endapi-method-summary %}

{% api-method-description %}
Create a user. HealthcareParty ID should be set. Email has to be set and the Login has to be null. On server-side, Email will be used for Login.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="groupId" type="String" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="User" required=true %}

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


{% api-method method="delete" host="https://demo.icure.cloud" path="/rest/v2/user/{userId}" %}
{% api-method-summary %}
Delete a User based on his/her ID.
{% endapi-method-summary %}

{% api-method-description %}
Delete a User based on his/her ID. The return value is an array containing the ID of deleted user.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="userId" type="String" required=true %}

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


{% api-method method="delete" host="https://demo.icure.cloud" path="/rest/v2/user/inGroup/{groupId}/{userId}" %}
{% api-method-summary %}
Delete a User based on his/her ID.
{% endapi-method-summary %}

{% api-method-description %}
Delete a User based on his/her ID. The return value is an array containing the ID of deleted user.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="groupId" type="String" required=true %}

{% endapi-method-parameter %}
{% api-method-parameter name="userId" type="String" required=true %}

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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/user/encodePassword" %}
{% api-method-summary %}
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="password" type="String" required=true %}

{% endapi-method-parameter %}
{% endapi-method-headers %}
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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/user/byHealthcarePartyId/{id}" %}
{% api-method-summary %}
Get the list of users by healthcare party id
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="String" required=true %}

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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/user/forgottenPassword/{email}" %}
{% api-method-summary %}
Send a forgotten email message to an user
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="email" type="String" required=true %}
the email of the user 
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="EmailTemplate" required=true %}

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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/user/session" %}
{% api-method-summary %}
Get Currently logged-in user session.
{% endapi-method-summary %}

{% api-method-description %}
Get current user.
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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/user/current" %}
{% api-method-summary %}
Get presently logged-in user.
{% endapi-method-summary %}

{% api-method-description %}
Get current user.
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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/user/matches" %}
{% api-method-summary %}
Get presently logged-in user.
{% endapi-method-summary %}

{% api-method-description %}
Get current user.
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


{% api-method method="post" host="https://demo.icure.cloud" path="/rest/v2/user/token/{userId}/{key}" %}
{% api-method-summary %}
Require a new temporary token for authentication
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="userId" type="String" required=true %}

{% endapi-method-parameter %}
{% api-method-parameter name="key" type="String" required=true %}
The token key. Only one instance of a token with a defined key can exist at the same time
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-query-parameters %}
{% api-method-parameter name="tokenValidity" type="Long" required=false %}
The token validity in seconds
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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/user/{userId}" %}
{% api-method-summary %}
Get a user by his ID
{% endapi-method-summary %}

{% api-method-description %}
General information about the user
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="userId" type="String" required=true %}

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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/user/byEmail/{email}" %}
{% api-method-summary %}
Get a user by his Email/Login
{% endapi-method-summary %}

{% api-method-description %}
General information about the user
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="email" type="String" required=true %}

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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/user" %}
{% api-method-summary %}
List users with(out) pagination
{% endapi-method-summary %}

{% api-method-description %}
Returns a list of users.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="startKey" type="String" required=false %}
An user email
{% endapi-method-parameter %}
{% api-method-parameter name="startDocumentId" type="String" required=false %}
An user document ID
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


{% api-method method="get" host="https://demo.icure.cloud" path="/rest/v2/user/inGroup/{groupId}" %}
{% api-method-summary %}
List users with(out) pagination
{% endapi-method-summary %}

{% api-method-description %}
Returns a list of users.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="groupId" type="String" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-query-parameters %}
{% api-method-parameter name="startKey" type="String" required=false %}
An user login
{% endapi-method-parameter %}
{% api-method-parameter name="startDocumentId" type="String" required=false %}
An user document ID
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


{% api-method method="put" host="https://demo.icure.cloud" path="/rest/v2/user/{userId}/properties" %}
{% api-method-summary %}
Modify a User property
{% endapi-method-summary %}

{% api-method-description %}
Modify a User properties based on his/her ID. The return value is the modified user.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="userId" type="String" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="List" required=false %}

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


{% api-method method="put" host="https://demo.icure.cloud" path="/rest/v2/user" %}
{% api-method-summary %}
Modify a user.
{% endapi-method-summary %}

{% api-method-description %}
No particular return value. It's just a message.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="body" type="User" required=true %}

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


{% api-method method="put" host="https://demo.icure.cloud" path="/rest/v2/user/inGroup/{groupId}" %}
{% api-method-summary %}
Modify a user.
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
{% api-method-parameter name="body" type="User" required=true %}

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



