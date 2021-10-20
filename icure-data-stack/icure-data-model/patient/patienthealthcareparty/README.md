# PatientHealthCareParty

One or several periods of care by an hcp for this patient


## Properties

| Property | Type | Description |
| :--- | :--- | :--- |
| `type ` | [String](String) | Type of care/relationship. Values: doctor, referral, medicalhouse, retirementhome, hospital, other, referringphysician, referralHospital |
| `healthcarePartyId ` | [String](String) | UUID of the hcp.  |
| `sendFormats * ` | [Map](String) | Preferred format of exchange for diverse means of communication  |
| `referralPeriods * ` | [List](ReferralPeriod) | Time periods  |
| `encryptedSelf ` | [String](String) | The base64 encoded data of this object, formatted as JSON and encrypted in AES using the random master key from encryptionKeys.  |
