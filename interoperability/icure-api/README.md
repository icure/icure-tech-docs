# IHE IPS call

### IPS in iCure

iCure implements the** **[**IHE IPS** (International Patient Summary)](https://wiki.ihe.net/index.php/International\_Patient\_Summary\_\(IPS\)) profile and can export patient data according to it.&#x20;

### Actor Description

As the Content Creator iCure is responsible for the creation of content of an International Patient Summary document containing the FHIR Document Bundle defined in [TF-3: 6.6.x.1](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE\_PCC\_Suppl\_IPS.pdf).

### Export Patient Data from iCure to IPS format

The IPS of a patient is available through a FHIR rest endpoint.

In a standard scenario an IPS client that needs the IPS of a specific patient is able to call the endpoint and get the FHIR representation of it.

{% swagger baseUrl="https://fhir.icure.dev" path="/rest/v1/ips/{patientId}" method="get" summary="Get the International Patient Summary of a patient" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="patientId" type="string" %}
An id of the patient
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```typescript
{
  "id": "83d127e3-74a0-43a8-ac69-191f4f7d0b89",
  "resourceType": "Bundle",
  "identifier": {
    "system": "http://fhir.icure.dev/practitioner",
    "value": "83d127e3-74a0-43a8-ac69-191f4f7d0b89"
  },
  "language": "en_EN",
  "timestamp": "2021-07-15T08:36:52.274280621Z",
  "type": "document",
  "entry": [
    {
      "fullUrl": "urn:uuid:b131f2ef-1306-4fbe-8601-ee661c050479",
      "resource": {
        "resourceType": "Composition",
        "author": [
          {
            "display": "Taktik sys",
            "reference": "urn:uuid:d92ab378-205e-42c4-bc56-1a1b49e2e42e"
          }
        ],
        "confidentiality": "R",
        "date": "2021-07-15T08:36:52.273729816Z",
        "id": "b131f2ef-1306-4fbe-8601-ee661c050479",
        "section": [
          {
            "code": {
              "coding": [
                {
                  "code": "11450-4",
                  "display": "Problem list",
                  "system": "http://loinc.org"
                }
              ]
            },
            "entry": [
              {
                "reference": "urn:uuid:a2e1a9f1-c431-492e-a2e8-d1b8b9c460ed"
              },
              {
                "reference": "urn:uuid:41aed32e-1a82-4ffa-9a0e-f84ef2c37a0f"
              }
            ],
            "title": "Active Problems"
          },
          {
            "code": {
              "coding": [
                {
                  "code": "48765-2",
                  "display": "Allergies and/or adverse reactions",
                  "system": "http://loinc.org"
                }
              ]
            },
            "entry": [
              {
                "reference": "urn:uuid:b37be6e6-8cc9-4d9b-be61-46d6523f3003"
              }
            ],
            "title": "Allergies and Intolerances"
          },
          {
            "code": {
              "coding": [
                {
                  "code": "10160-0",
                  "display": "Medication use",
                  "system": "http://loinc.org"
                }
              ]
            },
            "entry": [
              {
                "reference": "urn:uuid:1f7bc5f0-c185-4872-9df9-978a40e25b31"
              },
              {
                "reference": "urn:uuid:3352a812-174c-4084-91f1-6c475f1461a8"
              }
            ],
            "title": "Medication Summary"
          }
        ],
        "status": "final",
        "subject": {
          "reference": "urn:uuid:a1db5a81-8eb1-40c7-b8c0-d09967448367"
        },
        "title": "Patient Summary of CharlesMerlot",
        "type": {
          "coding": [
            {
              "code": "60591-5",
              "display": "Patient Summary",
              "system": "http://loinc.org"
            }
          ]
        }
      }
    },
    {
      "fullUrl": "urn:uuid:a1db5a81-8eb1-40c7-b8c0-d09967448367",
      "resource": {
        "resourceType": "Patient",
        "birthDate": "1966-04-04",
        "gender": "male",
        "id": "a1db5a81-8eb1-40c7-b8c0-d09967448367",
        "identifier": [
          {
            "system": "http://trilliumbridge.eu/fhir/demos/eumfh/inject",
            "value": "43-155"
          },
          {
            "system": "http://trilliumbridge.eu/fhir/demos/eumfh/patient_id",
            "value": "EUR01P0008"
          }
        ],
        "name": [
          {
            "family": "Merlot",
            "given": [
              "Charles"
            ]
          }
        ]
      }
    },
    {
      "fullUrl": "urn:uuid:d92ab378-205e-42c4-bc56-1a1b49e2e42e",
      "resource": {
        "resourceType": "Practitioner",
        "active": true,
        "id": "d92ab378-205e-42c4-bc56-1a1b49e2e42e",
        "name": [
          {
            "family": "XDS User",
            "given": [
              "Taktik"
            ]
          }
        ]
      }
    },
    {
      "fullUrl": "urn:uuid:1f7bc5f0-c185-4872-9df9-978a40e25b31",
      "resource": {
        "resourceType": "MedicationStatement",
        "dateAsserted": "2017-12-31",
        "id": "eumfh-43-155-2",
        "identifier": [
          {
            "system": "urn:uuid:1f7bc5f0-c185-4872-9df9-978a40e25b31"
          }
        ],
        "medicationCodeableConcept": {
          "coding": [
            {
              "code": "317971007",
              "display": "furosemide 20 mg oral tablet",
              "system": "http://snomed.info/sct"
            }
          ]
        },
        "status": "active",
        "subject": {
          "reference": "urn:uuid:a1db5a81-8eb1-40c7-b8c0-d09967448367"
        }
      }
    },
    {
      "fullUrl": "urn:uuid:3352a812-174c-4084-91f1-6c475f1461a8",
      "resource": {
        "resourceType": "MedicationStatement",
        "dateAsserted": "2017-12-31",
        "id": "eumfh-43-155-1",
        "identifier": [
          {
            "system": "urn:uuid:3352a812-174c-4084-91f1-6c475f1461a8"
          }
        ],
        "medicationCodeableConcept": {
          "coding": [
            {
              "code": "704474000",
              "display": "rivaroxaban 20 mg oral tablet",
              "system": "http://snomed.info/sct"
            }
          ]
        },
        "status": "active",
        "subject": {
          "reference": "urn:uuid:a1db5a81-8eb1-40c7-b8c0-d09967448367"
        }
      }
    },
    {
      "fullUrl": "urn:uuid:a2e1a9f1-c431-492e-a2e8-d1b8b9c460ed",
      "resource": {
        "resourceType": "Condition",
        "code": {
          "coding": [
            {
              "code": "368009",
              "system": "http://snomed.info/sct"
            }
          ]
        },
        "id": "eumfh-43-155-1",
        "onsetString": "1970-01-01",
        "recordedDate": "1970-01-01",
        "subject": {
          "reference": "urn:uuid:a1db5a81-8eb1-40c7-b8c0-d09967448367"
        }
      }
    },
    {
      "fullUrl": "urn:uuid:41aed32e-1a82-4ffa-9a0e-f84ef2c37a0f",
      "resource": {
        "resourceType": "Condition",
        "code": {
          "coding": [
            {
              "code": "161508001",
              "system": "http://snomed.info/sct"
            }
          ]
        },
        "id": "eumfh-43-155-2",
        "onsetString": "1970-01-01",
        "recordedDate": "1970-01-01",
        "subject": {
          "reference": "urn:uuid:a1db5a81-8eb1-40c7-b8c0-d09967448367"
        }
      }
    },
    {
      "fullUrl": "urn:uuid:b37be6e6-8cc9-4d9b-be61-46d6523f3003",
      "resource": {
        "resourceType": "AllergyIntolerance",
        "clinicalStatus": {
          "coding": [
            {
              "code": "active",
              "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical"
            }
          ]
        },
        "code": {
          "coding": [
            {
              "code": "no-known-allergies",
              "display": "No known allergies",
              "system": "http://hl7.org/fhir/uv/ips/CodeSystem/absent-unknown-uv-ips"
            }
          ]
        },
        "id": "eumfh-43-155-1",
        "identifier": [
          {
            "system": "urn:uuid:b37be6e6-8cc9-4d9b-be61-46d6523f3003"
          }
        ],
        "patient": {
          "reference": "urn:uuid:a1db5a81-8eb1-40c7-b8c0-d09967448367"
        },
        "verificationStatus": {
          "coding": [
            {
              "code": "confirmed",
              "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification"
            }
          ]
        }
      }
    }
  ]
}
```
{% endswagger-response %}
{% endswagger %}

#### Data formats

