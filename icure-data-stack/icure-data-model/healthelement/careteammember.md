# Care team member

List of care team members assigned for the healthcare element.

## Properties

| Property             | Type                                                                                                                                                  | Description                                                                                                                     |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `id *`               | [String](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/healthelement/String/README.md)     |                                                                                                                                 |
| `careTeamMemberType` | [String](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/healthelement/String/README.md)     | Values: physician, specialist, other                                                                                            |
| `healthcarePartyId`  | [String](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/healthelement/String/README.md)     |                                                                                                                                 |
| `quality`            | [CodeStub](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/healthelement/CodeStub/README.md) |                                                                                                                                 |
| `encryptedSelf`      | [String](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/healthelement/String/README.md)     | The base64 encoded data of this object, formatted as JSON and encrypted in AES using the random master key from encryptionKeys. |
