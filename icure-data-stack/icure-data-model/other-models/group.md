# Group

This entity represents a group

## Properties

| Property       | Type                                                                                                                                               | Description                                                                                                               |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `id *`         | [String](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/other-models/String/README.md)   | The id of the group. We encourage using either a v4 UUID or a HL7 Id.                                                     |
| `rev`          | [String](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/other-models/String/README.md)   | The revision of the group in the database, used for conflict management / optimistic locking.                             |
| `deletionDate` | [Long](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/other-models/Long/README.md)       | hard delete (unix epoch in ms) timestamp of the object. Filled automatically when deletePatient is called. format: int64. |
| `name`         | [String](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/other-models/String/README.md)   | Username for the group                                                                                                    |
| `password`     | [String](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/other-models/String/README.md)   | Password for the group access                                                                                             |
| `servers`      | [List](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/other-models/String/README.md)     | List of servers accessible to the group                                                                                   |
| `superAdmin *` | [Boolean](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/other-models/Boolean/README.md) | Whether the group has a super admin permission, originally set to no access.                                              |
| `superGroup`   | [String](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/other-models/String/README.md)   |                                                                                                                           |
