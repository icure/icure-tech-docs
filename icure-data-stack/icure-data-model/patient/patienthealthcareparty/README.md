# Patient Hcp care period

One or several periods of care by an hcp for this patient

## Properties

| Property            | Type                                                                                                                                                                     | Description                                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `type`              | [String](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/patient/patienthealthcareparty/String/README.md)       | Type of care/relationship. Values: doctor, referral, medicalhouse, retirementhome, hospital, other, referringphysician, referralHospital |
| `healthcarePartyId` | [String](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/patient/patienthealthcareparty/String/README.md)       | UUID of the hcp.                                                                                                                         |
| `sendFormats *`     | [Map](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/patient/patienthealthcareparty/String/README.md)          | Preferred format of exchange for diverse means of communication                                                                          |
| `referralPeriods *` | [List](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/patient/patienthealthcareparty/ReferralPeriod/README.md) | Time periods                                                                                                                             |
| `encryptedSelf`     | [String](https://github.com/taktik/icure-tech-docs/tree/5af8e13c187f73691c350b409b558ac754efaef8/icure-data-model/patient/patienthealthcareparty/String/README.md)       | The base64 encoded data of this object, formatted as JSON and encrypted in AES using the random master key from encryptionKeys.          |
