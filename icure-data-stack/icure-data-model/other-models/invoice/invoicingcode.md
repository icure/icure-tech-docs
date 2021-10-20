# InvoicingCode


## Properties

| Property | Type | Description |
| :--- | :--- | :--- |
| `id ` | [String](String) |   |
| `dateCode ` | [Long](Long) |  format: int64. |
| `logicalId ` | [String](String) |   |
| `label ` | [String](String) |   |
| `userId ` | [String](String) |   |
| `contactId ` | [String](String) |   |
| `serviceId ` | [String](String) |   |
| `tarificationId ` | [String](String) |   |
| `code ` | [String](String) |   |
| `paymentType ` | [String](String) |  Values: cash, wired, insurance, creditcard, debitcard, paypal, bitcoin, other |
| `paid ` | [Double](Double) |  format: double. |
| `totalAmount ` | [Double](Double) |  format: double. |
| `reimbursement ` | [Double](Double) |  format: double. |
| `patientIntervention ` | [Double](Double) |  format: double. |
| `doctorSupplement ` | [Double](Double) |  format: double. |
| `conventionAmount ` | [Double](Double) |  format: double. |
| `vat ` | [Double](Double) |  format: double. |
| `error ` | [String](String) |   |
| `contract ` | [String](String) |   |
| `contractDate ` | [Long](Long) |  format: int64. |
| `units ` | [Integer](Integer) |  format: int32. |
| `side ` | [Integer](Integer) |  format: int32. |
| `timeOfDay ` | [Integer](Integer) |  format: int32. |
| `eidReadingHour ` | [Integer](Integer) |  format: int32. |
| `eidReadingValue ` | [String](String) |   |
| `override3rdPayerCode ` | [Integer](Integer) |  format: int32. |
| `override3rdPayerReason ` | [String](String) |   |
| `transplantationCode ` | [Integer](Integer) |  format: int32. |
| `prescriberNorm ` | [Integer](Integer) |  format: int32. |
| `percentNorm ` | [Integer](Integer) |  format: int32. |
| `prescriberNihii ` | [String](String) |   |
| `relatedCode ` | [String](String) |   |
| `prescriptionDate ` | [Long](Long) |  format: int64. |
| `derogationMaxNumber ` | [Integer](Integer) |  format: int32. |
| `prescriberSsin ` | [String](String) |   |
| `prescriberLastName ` | [String](String) |   |
| `prescriberFirstName ` | [String](String) |   |
| `prescriberCdHcParty ` | [String](String) |   |
| `locationNihii ` | [String](String) |   |
| `locationCdHcParty ` | [String](String) |   |
| `canceled ` | [Boolean](Boolean) |   |
| `accepted ` | [Boolean](Boolean) |   |
| `pending ` | [Boolean](Boolean) |   |
| `resent ` | [Boolean](Boolean) |   |
| `archived ` | [Boolean](Boolean) |   |
| `lost ` | [Boolean](Boolean) |   |
| `insuranceJustification ` | [Integer](Integer) |  format: int32. |
| `cancelPatientInterventionReason ` | [Integer](Integer) |  format: int32. |
| `status ` | [Long](Long) |  format: int64. |
| `encryptedSelf ` | [String](String) | The base64 encoded data of this object, formatted as JSON and encrypted in AES using the random master key from encryptionKeys.  |
