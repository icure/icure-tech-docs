# Insurability

This class represents a coverage of a patient by an insurance during a period or time.


## Properties

| Property | Type | Description |
| :--- | :--- | :--- |
| `parameters * ` | [Map](String) | Insurance extra parameters.  |
| `hospitalisation ` | [Boolean](Boolean) | Is hospitalization covered.  |
| `ambulatory ` | [Boolean](Boolean) | Is outpatient care covered.  |
| `dental ` | [Boolean](Boolean) | Is dental care covered.  |
| `identificationNumber ` | [String](String) | Identification number of the patient at the insurance.  |
| `insuranceId ` | [String](String) | Id of the Insurance.  |
| `startDate ` | [Long](Long) | Start date of the coverage (YYYYMMDD). format: int64. |
| `endDate ` | [Long](Long) | End date of the coverage (YYYYMMDD). format: int64. |
| `titularyId ` | [String](String) | UUID of the contact person who is the policyholder of the insurance (when the patient is covered by the insurance of a third person).  |
| `encryptedSelf ` | [String](String) | The base64 encoded data of this object, formatted as JSON and encrypted in AES using the random master key from encryptionKeys.  |
