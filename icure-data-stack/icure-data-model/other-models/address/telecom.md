# Telecom

This entity represents available contact details of a user, reachable by telecom methods

## Properties

| Property             | Type                                                                                                                                                     | Description                                                                                                                                                                                       |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `telecomType`        | [String](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/other-models/address/String/README.md) | The type of telecom method being used, ex: landline phone, mobile phone, email, fax, etc. Values: mobile, phone, email, fax, skype, im, medibridge, ehealthbox, apicrypt, web, print, disk, other |
| `telecomNumber`      | [String](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/other-models/address/String/README.md) |                                                                                                                                                                                                   |
| `telecomDescription` | [String](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/other-models/address/String/README.md) |                                                                                                                                                                                                   |
| `encryptedSelf`      | [String](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/other-models/address/String/README.md) | The base64 encoded data of this object, formatted as JSON and encrypted in AES using the random master key from encryptionKeys.                                                                   |
