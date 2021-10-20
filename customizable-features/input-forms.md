# Input Forms

## Custom manage data input.&#x20;

iCure enables the owner to determine data input structure through custom forms. This way:&#x20;

* BI solutions can be easily implemented on top of the database, as data is structured by design.
* End-to-end encryption can be maintained through the whole input process, as data are being anonymized through encryption from the start of the Data Life-Cycle.
* [Access Rights Management](../icure-data-stack/rights-management.md) policies automatically assign the relevant data to the respective department.&#x20;
*   Auditing is also made easy, as Data are timestamped, signed by the user, and data-versioning is supported.



![implementation of an Input Form](<../.gitbook/assets/image (26).png>)

## Input Form Syntax

Despite the encryption, timestamping and access rights management challenges, the Input forms are quite easy to manage with a typical YAML syntax

```yaml
form: GP consultation
description: Basic SOAP scheme for a GP consultation
sections:
  - section: SOAP
    fields:
      - field: Reason for visit
        type: textfield
        columns: 5
        rows: 3
        grows: true
        schema: text-document
        tags:
          - CD-ITEM|diagnosis|1
        codifications:
          - BE-THESAURUS
          - ICD10
        options:
          option: blink
      - field: Anamnese
        type: number-field
        shortLabel: NumberField
        tags:
          - CD-ITEM|parameter|1
          - CD-PARAMETER|bmi|1
        codifications: []
        options:
          option: bang
      - field: Diagnosis
        type: measure-field
        shortLabel: MeasureField
        tags:
          - CD-ITEM|diagnosis|1
        codifications: [ SNOMED-CT ]
        options:
          unit: bpm
      - field: Treatment
        type: multiple-choice
        shortLabel: MultipleChoice
        rows: 4
        columns: 4
        tags: []
        codifications:
          - KATZ
        options:
          many: no

```
