# User

This entity is a root level object. It represents an user that can log in to the iCure platform. It is serialized in JSON and saved in the underlying icure-base CouchDB database.


## Properties

| Property | Type | Description |
| :--- | :--- | :--- |
| `id * ` | [String](String) | the Id of the user. We encourage using either a v4 UUID or a HL7 Id.  |
| `rev ` | [String](String) | the revision of the user in the database, used for conflict management / optimistic locking.  |
| `deletionDate ` | [Long](Long) | hard delete (unix epoch in ms) timestamp of the object. Filled automatically when deletePatient is called. format: int64. |
| `created ` | [Long](Long) |  format: int64. |
| `name ` | [String](String) | Last name of the user. This is the official last name that should be used for official administrative purposes.  |
| `properties * ` | [List](PropertyStub) | Extra properties for the user. Those properties are typed (see class Property)  |
| `permissions * ` | [List](Permission) | If permission to modify patient data is granted or revoked  |
| `roles * ` | [List](String) | Roles specified for the user  |
| `type ` | [String](String) | Authorization source for user. 'Database', 'ldap' or 'token' Values: database, ldap, token |
| `status ` | [String](String) | State of user's activeness: 'Active', 'Disabled' or 'Registering' Values: ACTIVE, DISABLED, REGISTERING |
| `login ` | [String](String) | Username for this user. We encourage using an email address  |
| `passwordHash ` | [String](String) | Hashed version of the password (BCrypt is used for hashing)  |
| `secret ` | [String](String) | Secret token used to verify 2fa  |
| `use2fa ` | [Boolean](Boolean) | Whether the user has activated two factors authentication  |
| `groupId ` | [String](String) | id of the group (practice/hospital) the user is member of  |
| `healthcarePartyId ` | [String](String) | Id of the healthcare party if the user is a healthcare party.  |
| `patientId ` | [String](String) | Id of the patient if the user is a patient  |
| `autoDelegations * ` | [Map](List) | Delegations that are automatically generated client side when a new database object is created by this user  |
| `createdDate ` | [Date](Date) | the timestamp (unix epoch in ms) of creation of the user, will be filled automatically if missing. Not enforced by the application server. format: date-time. |
| `termsOfUseDate ` | [Date](Date) | the timestamp (unix epoch in ms) of the latest validation of the terms of use of the application format: date-time. |
| `email ` | [String](String) | email address of the user.  |
| `applicationTokens * ` | [Map](String) | Long lived authentication tokens used for inter-applications authentication.  |
| `authenticationTokens * ` | [Map](AuthenticationToken) | Encrypted and time-limited Authentication tokens used for inter-applications authentication  |
