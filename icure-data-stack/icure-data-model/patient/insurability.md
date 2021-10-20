# Insurability

This class represents a coverage of a patient by an insurance during a period or time.

## Properties

| Property               | Type                                                                                                                                          | Description                                                                                                                           |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `parameters *`         | [Map](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/patient/String/README.md)      | Insurance extra parameters.                                                                                                           |
| `hospitalisation`      | [Boolean](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/patient/Boolean/README.md) | Is hospitalization covered.                                                                                                           |
| `ambulatory`           | [Boolean](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/patient/Boolean/README.md) | Is outpatient care covered.                                                                                                           |
| `dental`               | [Boolean](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/patient/Boolean/README.md) | Is dental care covered.                                                                                                               |
| `identificationNumber` | [String](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/patient/String/README.md)   | Identification number of the patient at the insurance.                                                                                |
| `insuranceId`          | [String](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/patient/String/README.md)   | Id of the Insurance.                                                                                                                  |
| `startDate`            | [Long](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/patient/Long/README.md)       | Start date of the coverage (YYYYMMDD). format: int64.                                                                                 |
| `endDate`              | [Long](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/patient/Long/README.md)       | End date of the coverage (YYYYMMDD). format: int64.                                                                                   |
| `titularyId`           | [String](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/patient/String/README.md)   | UUID of the contact person who is the policyholder of the insurance (when the patient is covered by the insurance of a third person). |
| `encryptedSelf`        | [String](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/patient/String/README.md)   | The base64 encoded data of this object, formatted as JSON and encrypted in AES using the random master key from encryptionKeys.       |