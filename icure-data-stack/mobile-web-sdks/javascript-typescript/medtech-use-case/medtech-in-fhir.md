# iCure for Medtech : Import data using FHIR
As explained earlier, the iCure data model offers you the needed flexibility in order to represent your medical data.
To have more information about it and understand fully the possibilities of it, we encourage you to visit
[this page](../../../icure-data-model/README.md).

However, it can seem difficult for you at the beginning to understand how to "map" your own data to the iCure data model.  
As said earlier, iCure Data Model has been built in order to be compatible with higher level Medical Data
conceptual Data Models. That's why you have the possibility to make requests to iCure using FHIR format, in order to
exchange your data in a more "familiar" / common way.

If you decide to use the FHIR APIs, iCure will by itself transform it to the corresponding iCure Data Model representation.

At the end of this tutorial, you will be able to exchange FHIR Patient and Observation data, using 
the iCure - FHIR Bridge API.


### Register on iCure platform
Make sure you [created your iCure environment](README.md), and that you possess the following information :  
- Your iCure user login - password;
- Your iCure user private encryption key;

### Load private encryption key in local storage
To guarantee the security of your data, iCure encrypts all of them, based on the keys pair you generated during 
your registration. 

As your private encryption key is not stocked in iCure, you will need to provide it first in your web session to the 
iCure - FHIR Bridge API before making your requests. 

{% tabs %}
{% tab title="Javascript" %}
{% code title="Prepare for iCure - FHIR Bridge API requests" %}
```javascript
import fetch from "node-fetch";

const host = 'https://dxm.icure.dev';
const hcpId = '2d205ac4-c8c9-428b-b68e-d9381da235d2';

let key = {
    key: '308204bd02...8b40fdc0bc'
}

let keyPutInCache = await fetch(`${host}/rest/icdx/v1/keychain/${hcpId}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': /* truncate */ 'Basic Y3ZAdGFrdGlrLmNvbTpjMjdiZGUxNi0yN2E1LTRjMDctOTQ4MC1mYjdmOWMzOGY1MTQ='
    },
    body: JSON.stringify(key)
})
    .then(response => response.json());

console.log(`Key put in cache : ${keyPutInCache}`)
```
{% endcode %}
{% endtab %}
{% endtabs %}

In the above example, do not forget to : 
- Use your own login - password; 
- Use your private encryption key;


### Supported FHIR APIs
Based on the [FHIR Specification](https://www.hl7.org/fhir/http.html), iCure is currently supporting the following FHIR APIs :
- [Create a patient](#create-a-patient)
- [Read a patient](#read-a-patient)
- [Delete a patient](#delete-a-patient)
- [Search patients](#search-patients)


- [Create an observation](#create-an-observation)
- [Read an observation](#read-an-observation)
- [Search observations](#search-observations)


- [Batch transaction resource creation](#batch-transaction-resource-creation)


#### FHIR Resource Id 
For Create requests, the id provided in FHIR resources will be transformed as a new identifier, using 
system **https://dxm.icure.dev**. At its place, iCure will provide its own generated id to guarantee the data coherence.

#### Create a patient
Import a new patient in your iCure environment, based on [FHIR r4 Patient](https://www.hl7.org/fhir/patient.html).  
All the references you are passing into the patient (generalPractitioner, organization, ...) need to be previously imported into the iCure
environment.

{% tabs %}
{% tab title="Javascript" %}
{% code title="Create FHIR Patient" %}
```javascript
let patientToCreate = {
    resourceType: "Patient",
    id: "pat1",
    text: {
        status: "generated",
        div: "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      \n      <p>Patient Donald DUCK @ Acme Healthcare, Inc. MR = 654321</p>\n    \n    </div>"
    },
    identifier: [
        {
            use: "usual",
            type: {
                coding: [
                    {
                        system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                        code: "MR"
                    }
                ]
            },
            system: "urn:oid:0.1.2.3.4.5.6.7",
            value: "654321"
        }
    ],
    active: true,
    name: [
        {
            use: "official",
            family: "Donald",
            given: [
                "Duck"
            ]
        }
    ],
    gender: "male",
    photo: [
        {
            contentType: "image/gif",
            data: "R0lGODlhEwARAPcAAAAAAAAA/+9aAO+1AP/WAP/eAP/eCP/eEP/eGP/nAP/nCP/nEP/nIf/nKf/nUv/nWv/vAP/vCP/vEP/vGP/vIf/vKf/vMf/vOf/vWv/vY//va//vjP/3c//3lP/3nP//tf//vf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH5BAEAAAEALAAAAAATABEAAAi+AAMIDDCgYMGBCBMSvMCQ4QCFCQcwDBGCA4cLDyEGECDxAoAQHjxwyKhQAMeGIUOSJJjRpIAGDS5wCDly4AALFlYOgHlBwwOSNydM0AmzwYGjBi8IHWoTgQYORg8QIGDAwAKhESI8HIDgwQaRDI1WXXAhK9MBBzZ8/XDxQoUFZC9IiCBh6wEHGz6IbNuwQoSpWxEgyLCXL8O/gAnylNlW6AUEBRIL7Og3KwQIiCXb9HsZQoIEUzUjNEiaNMKAAAA7"
        }
    ],
    contact: [
        {
            relationship: [
                {
                    coding: [
                        {
                            system: "http://terminology.hl7.org/CodeSystem/v2-0131",
                            code: "E"
                        }
                    ]
                }
            ],
            organization: {
                reference: "Organization/1",
                display: "Walt Disney Corporation"
            }
        }
    ],
    managingOrganization: {
        reference: "Organization/1",
        display: "ACME Healthcare, Inc"
    },
    link: [
        {
            other: {
                reference: "Patient/pat2"
            },
            type: "seealso"
        }
    ]
}

let createdPatient = await fetch(`${host}/rest/fhir/r4/Patient`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': /* truncate */ 'Basic Y3ZAdGFrdGlrLmNvbTpjMjdiZGUxNi0yN2E1LTRjMDctOTQ4MC1mYjdmOWMzOGY1MTQ='
    },
    body: JSON.stringify(patientToCreate)
})
    .then(response => response.json());

console.log(`Created FHIR patient : ${JSON.stringify(createdPatient, null, ' ')}`)
```
{% endcode %}
{% endtab %}
{% endtabs %}

#### Read a patient
Find a patient, using either its FHIR id or its iCure id.

{% tabs %}
{% tab title="Javascript" %}
{% code title="Read FHIR Patient" %}
```javascript
let fetchedPatient = await fetch(`${host}/rest/fhir/r4/Patient/pat1`, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': /* truncate */ 'Basic Y3ZAdGFrdGlrLmNvbTpjMjdiZGUxNi0yN2E1LTRjMDctOTQ4MC1mYjdmOWMzOGY1MTQ='
    }
})
    .then(response => response.json());

console.log(`Fetched FHIR patient : ${JSON.stringify(fetchedPatient, null, ' ')}`)
```
{% endcode %}
{% endtab %}
{% endtabs %}

#### Delete a patient
Delete a patient, using either its FHIR id or its iCure id.

{% tabs %}
{% tab title="Javascript" %}
{% code title="Delete FHIR Patient" %}
```javascript
let deletedPatient = await fetch(`${host}/rest/fhir/r4/Patient?name=Donald`, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': /* truncate */ 'Basic Y3ZAdGFrdGlrLmNvbTpjMjdiZGUxNi0yN2E1LTRjMDctOTQ4MC1mYjdmOWMzOGY1MTQ='
    }
});
```
{% endcode %}
{% endtab %}
{% endtabs %}


#### Search patients
Search patients based on [FHIR Specification](https://www.hl7.org/fhir/search.html).
For now, iCure permits you to search patients by :
- _id;
- gender;
- name;
- _has:Observation:_tag;
- _has:Observation:code;

{% tabs %}
{% tab title="Javascript" %}
{% code title="Search FHIR patients" %}
```javascript
let searchedPatients = await fetch(`${host}/rest/fhir/r4/Patient?_id=pat2&name=Donald&_has%3AObservation%3A_tag=http%3A%2F%2Floinc.org%7C718-7`, {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': /* truncate */ 'Basic Y3ZAdGFrdGlrLmNvbTpjMjdiZGUxNi0yN2E1LTRjMDctOTQ4MC1mYjdmOWMzOGY1MTQ='
    }
})
    .then(response => response.json());

console.log(`Searched FHIR patients : ${JSON.stringify(searchedPatients, null, ' ')}`)
```
{% endcode %}
{% endtab %}
{% endtabs %}


#### Create an observation
Import a new observation in your iCure environment, based on [FHIR r4 Observation](https://www.hl7.org/fhir/observation.html).

All the references you are passing into the observation (subject, ...) need to be previously imported into the iCure 
environment.  

{% tabs %}
{% tab title="Javascript" %}
{% code title="Create FHIR Observation" %}
```javascript
let observationToCreate = {
    "resourceType": "Observation",
    "id": "f001",
    "text": {
        "status": "generated",
        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f001</p><p><b>identifier</b>: 6323 (OFFICIAL)</p><p><b>status</b>: final</p><p><b>code</b>: Glucose [Moles/volume] in Blood <span>(Details : {LOINC code '15074-8' = 'Glucose [Moles/volume] in Blood', given as 'Glucose [Moles/volume] in Blood'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>effective</b>: 02/04/2013 9:30:10 AM --&gt; (ongoing)</p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>A. Langeveld</a></p><p><b>value</b>: 6.3 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></p><p><b>interpretation</b>: High <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'H' = 'High', given as 'High'})</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>3.1 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td><td>6.2 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td></tr></table></div>"
    },
    "identifier": [
        {
            "use": "official",
            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
            "value": "6323"
        }
    ],
    "status": "final",
    "code": {
        "coding": [
            {
                "system": "http://loinc.org",
                "code": "15074-8",
                "display": "Glucose [Moles/volume] in Blood"
            }
        ]
    },
    "subject": {
        "reference": "9a106b7f-2fa1-4b54-b3cb-c29cbfebe2ee",
        "display": "P. van de Heuvel"
    },
    "effectivePeriod": {
        "start": "2013-04-02T09:30:10+01:00"
    },
    "issued": "2013-04-03T15:30:10+01:00",
    "performer": [
        {
            "reference": "Practitioner/f005",
            "display": "A. Langeveld"
        }
    ],
    "valueQuantity": {
        "value": 6.3,
        "unit": "mmol/l",
        "system": "http://unitsofmeasure.org",
        "code": "mmol/L"
    },
    "interpretation": [
        {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                    "code": "H",
                    "display": "High"
                }
            ]
        }
    ],
    "referenceRange": [
        {
            "low": {
                "value": 3.1,
                "unit": "mmol/l",
                "system": "http://unitsofmeasure.org",
                "code": "mmol/L"
            },
            "high": {
                "value": 6.2,
                "unit": "mmol/l",
                "system": "http://unitsofmeasure.org",
                "code": "mmol/L"
            }
        }
    ]
}

let createdObservation = await fetch(`${host}/rest/fhir/r4/Observation`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': /* truncate */ 'Basic Y3ZAdGFrdGlrLmNvbTpjMjdiZGUxNi0yN2E1LTRjMDctOTQ4MC1mYjdmOWMzOGY1MTQ='
    },
    body: JSON.stringify(observationToCreate)
})
    .then(response => response.json());

console.log(`Created FHIR observation : ${JSON.stringify(createdObservation, null, ' ')}`)
```
{% endcode %}
{% endtab %}
{% endtabs %}

#### Read an observation
Find an observation, using either its FHIR id or its iCure id. 

{% tabs %}
{% tab title="Javascript" %}
{% code title="Read FHIR Observation" %}
```javascript
let fetchedObservation = await fetch(`${host}/rest/fhir/r4/Observation/f001`, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': /* truncate */ 'Basic Y3ZAdGFrdGlrLmNvbTpjMjdiZGUxNi0yN2E1LTRjMDctOTQ4MC1mYjdmOWMzOGY1MTQ='
    }
})
    .then(response => response.json());

console.log(`Fetched FHIR observation : ${JSON.stringify(fetchedObservation, null, ' ')}`)
```
{% endcode %}
{% endtab %}
{% endtabs %}


#### Search observations
Search observations based on [FHIR Specification](https://www.hl7.org/fhir/search.html).
For now, iCure permits you to search observations by :
- _tag;
- code;
- _has:Patient:_id;
- _has:Patient:gender;
- _has:Patient:name;


{% tabs %}
{% tab title="Javascript" %}
{% code title="Search FHIR Observations" %}
```javascript
let searchedObservations = await fetch(`${host}/rest/fhir/r4/Observation?_tag=http%3A%2F%2Floinc.org%7C15074-8`, {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': /* truncate */ 'Basic Y3ZAdGFrdGlrLmNvbTpjMjdiZGUxNi0yN2E1LTRjMDctOTQ4MC1mYjdmOWMzOGY1MTQ='
    }
})
    .then(response => response.json());

console.log(`Searched FHIR observations : ${JSON.stringify(searchedObservations, null, ' ')}`)```
{% endcode %}
{% endtab %}
{% endtabs %}


#### Batch transaction resource creation
If you need to create several resources, you can use the batch transaction resource creation and provide them
in a [FHIR Bundle](https://www.hl7.org/fhir/bundle.html).
From this bundle, iCure will create in that order :
- All patients entries;
- All observations entries;

{% tabs %}
{% tab title="Javascript" %}
{% code title="Bundle FHIR Resource transaction creation" %}
```javascript
let bundleToCreate = {
    "type": "transaction",
    "entry": [{
        "resource": {
            "resourceType": "Patient",
            "id": "pat2",
            "text": {
                "status": "generated",
                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t<p>Patient Donald D DUCK @ Acme Healthcare, Inc. MR = 123456</p>\n\t\t</div>"
            },
            "identifier": [
                {
                    "use": "usual",
                    "type": {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                "code": "MR"
                            }
                        ]
                    },
                    "system": "urn:oid:0.1.2.3.4.5.6.7",
                    "value": "123456"
                }
            ],
            "active": true,
            "name": [
                {
                    "use": "official",
                    "family": "Donald",
                    "given": [
                        "Duck",
                        "D"
                    ]
                }
            ],
            "gender": "other",
            "_gender": {
                "extension": [
                    {
                        "url": "http://example.org/Profile/administrative-status",
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/v2-0001",
                                    "code": "A",
                                    "display": "Ambiguous"
                                }
                            ]
                        }
                    }
                ]
            },
            "photo": [
                {
                    "contentType": "image/gif",
                    "data": "R0lGODlhEwARAPcAAAAAAAAA/+9aAO+1AP/WAP/eAP/eCP/eEP/eGP/nAP/nCP/nEP/nIf/nKf/nUv/nWv/vAP/vCP/vEP/vGP/vIf/vKf/vMf/vOf/vWv/vY//va//vjP/3c//3lP/3nP//tf//vf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH5BAEAAAEALAAAAAATABEAAAi+AAMIDDCgYMGBCBMSvMCQ4QCFCQcwDBGCA4cLDyEGECDxAoAQHjxwyKhQAMeGIUOSJJjRpIAGDS5wCDly4AALFlYOgHlBwwOSNydM0AmzwYGjBi8IHWoTgQYORg8QIGDAwAKhESI8HIDgwQaRDI1WXXAhK9MBBzZ8/XDxQoUFZC9IiCBh6wEHGz6IbNuwQoSpWxEgyLCXL8O/gAnylNlW6AUEBRIL7Og3KwQIiCXb9HsZQoIEUzUjNEiaNMKAAAA7"
                }
            ],
            "managingOrganization": {
                "reference": "Organization/1",
                "display": "ACME Healthcare, Inc"
            },
            "link": [
                {
                    "other": {
                        "reference": "Patient/pat1"
                    },
                    "type": "seealso"
                }
            ]
        }
    }, {
        "resource": {
            "resourceType": "Observation",
            "id": "f005",
            "text": {
                "status": "generated",
                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f005</p><p><b>identifier</b>: 6327 (OFFICIAL)</p><p><b>status</b>: final</p><p><b>code</b>: Hemoglobin [Mass/volume] in Blood <span>(Details : {LOINC code '718-7' = 'Hemoglobin [Mass/volume] in Blood', given as 'Hemoglobin [Mass/volume] in Blood'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>effective</b>: 05/04/2013 10:30:10 AM --&gt; 05/04/2013 10:30:10 AM</p><p><b>issued</b>: 05/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>A. Langeveld</a></p><p><b>value</b>: 7.2 g/dl<span> (Details: UCUM code g/dL = 'g/dL')</span></p><p><b>interpretation</b>: Low <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'L' = 'Low', given as 'Low'})</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>7.5 g/dl<span> (Details: UCUM code g/dL = 'g/dL')</span></td><td>10 g/dl<span> (Details: UCUM code g/dL = 'g/dL')</span></td></tr></table></div>"
            },
            "identifier": [
                {
                    "use": "official",
                    "system": 	"http://www.bmc.nl/zorgportal/identifiers/observations",
                    "value": "6327"
                }
            ],
            "status": "final",
            "code": {
                "coding": [
                    {
                        "system": "http://loinc.org",
                        "code": "718-7",
                        "display": "Hemoglobin [Mass/volume] in Blood"
                    }
                ]
            },
            "subject": {
                "reference": "9a106b7f-2fa1-4b54-b3cb-c29cbfebe2ee",
                "display": "P. van de Heuvel"
            },
            "effectivePeriod": {
                "start": "2013-04-05T10:30:10+01:00",
                "end": "2013-04-05T10:30:10+01:00"
            },
            "issued": "2013-04-05T15:30:10+01:00",
            "performer": [
                {
                    "reference": "Practitioner/f005",
                    "display": "A. Langeveld"
                }
            ],
            "valueQuantity": {
                "value": 7.2,
                "unit": "g/dl",
                "system": "http://unitsofmeasure.org",
                "code": "g/dL"
            },
            "interpretation": [
                {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                            "code": "L",
                            "display": "Low"
                        }
                    ]
                }
            ],
            "referenceRange": [
                {
                    "low": {
                        "value": 7.5,
                        "unit": "g/dl",
                        "system": "http://unitsofmeasure.org",
                        "code": "g/dL"
                    },
                    "high": {
                        "value": 10,
                        "unit": "g/dl",
                        "system": "http://unitsofmeasure.org",
                        "code": "g/dL"
                    }
                }
            ],
            "valueCodeableConcept": {
                "coding": [{
                    "system": "CD-ITEM",
                    "code": "adr",
                    "version": "1"
                }],
                "id": "CD-ITEM|adr|1"
            }
        }
    }]
}

let createdBundle = await fetch(`${host}/rest/fhir/r4`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': /* truncate */ 'Basic Y3ZAdGFrdGlrLmNvbTpjMjdiZGUxNi0yN2E1LTRjMDctOTQ4MC1mYjdmOWMzOGY1MTQ='
    },
    body: JSON.stringify(bundleToCreate)
})
    .then(response => response.json());

console.log(`Created FHIR Bundle : ${JSON.stringify(createdBundle, null, ' ')}`)
```
{% endcode %}
{% endtab %}
{% endtabs %}
