# Insurance

## Properties

| Property                     | Type                                                                                                                                               | Description                                                                                                               |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `id *`                       | [String](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/other-models/String/README.md)   |                                                                                                                           |
| `rev`                        | [String](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/other-models/String/README.md)   |                                                                                                                           |
| `deletionDate`               | [Long](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/other-models/Long/README.md)       | hard delete (unix epoch in ms) timestamp of the object. Filled automatically when deletePatient is called. format: int64. |
| `name *`                     | [Map](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/other-models/String/README.md)      |                                                                                                                           |
| `privateInsurance *`         | [Boolean](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/other-models/Boolean/README.md) |                                                                                                                           |
| `hospitalisationInsurance *` | [Boolean](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/other-models/Boolean/README.md) |                                                                                                                           |
| `ambulatoryInsurance *`      | [Boolean](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/other-models/Boolean/README.md) |                                                                                                                           |
| `code`                       | [String](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/other-models/String/README.md)   |                                                                                                                           |
| `agreementNumber`            | [String](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/other-models/String/README.md)   |                                                                                                                           |
| `parent`                     | [String](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/other-models/String/README.md)   |                                                                                                                           |
| `address *`                  | [Address](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/other-models/Address/README.md) |                                                                                                                           |