# Telecom

This entity represents available contact details of a user, reachable by telecom methods


## Properties

| Property | Type | Description |
| :--- | :--- | :--- |
| `telecomType ` | [String](String) | The type of telecom method being used, ex: landline phone, mobile phone, email, fax, etc. Values: mobile, phone, email, fax, skype, im, medibridge, ehealthbox, apicrypt, web, print, disk, other |
| `telecomNumber ` | [String](String) |   |
| `telecomDescription ` | [String](String) |   |
| `encryptedSelf ` | [String](String) | The base64 encoded data of this object, formatted as JSON and encrypted in AES using the random master key from encryptionKeys.  |
