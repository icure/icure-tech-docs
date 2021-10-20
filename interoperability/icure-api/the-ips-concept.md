# The IPS Concept

### Introduction

**IHE IPS** a standardized report format for connecting with compatible EHRs, that has been codified with the [CEN/TC 251](https://standards.cen.eu/dyn/www/f?p=204:110:0::::FSP\_PROJECT,FSP\_ORG\_ID:65797,6232\&cs=161C7CF4C93D84B07327805D4194C55BA) an EU endorsed standard (EN 17269:2019). This addresses the issue of data exchange between isolated EHRs in a modern but also standardized way.

[For HL7, IPS](http://www.hl7.org/implement/standards/product\_section.cfm?section=10) is part of their Clinical Documentation Architecture Product Series.

![IPS Standards in the HL7 SAIF Interoperability Matrix, source: HL7-IPS Project Page](<../../.gitbook/assets/image (29).png>)

### The IPS Concept

The IPS dataset is per its definition in EN 17269:2019 a _minimal, non-exhaustive set of data elements required for the international patient summary._

_‘Minimal’ reflects the ideas of ‘summary’ and the need to be concise, but also alludes to the existence of a core set of data elements that all health care professionals can use; it is intended to be a speciality agnostic and condition independent set. It does not imply that all the items in the data set will be used in every summary. It is also possible to refine the extract from a record such that the content of the summary is more relevant to a particular condition (e.g. asthma) but no asthma-specific elements will be specified in this standard. The IPS Document or IPS can be extended by non-IPS standard condition-specific data. ‘Non-exhaustive’ recognizes that the ideal data set is not closed, and is likely to be extended, not just in terms of requirement evolution, but also pragmatically in instances of use. _

The standard [can be purchased from ISO](https://www.iso.org/obp/ui/#iso:std:iso:27269:ed-1:v1:en) or a sneak preview is available through the final draft before publication.&#x20;

{% file src="../../.gitbook/assets/CEN _ TC 251 Final Draft.pdf" %}
CEN TC 251 Final Draft before Standardization
{% endfile %}

### The Dataset

The International Patient Summary’ (IPS), defines a minimal dataset; one that is focussed upon the generic and important aspects of a person’s healthcare history to inform continuity of care between healthcare units. The data set library contains strict definitions of important patient healthcare aspects and the file contains the necessary information to achieve patient care handover.

![source: HL7 ](<../../.gitbook/assets/image (17).png>)

![source: HL7](<../../.gitbook/assets/image (19).png>)

More exhaustive information can be found in the [webpage of HL7 on IPS](https://international-patient-summary.net/index.php?title=Main\_Page).

### Global Scope

The scope of IPS extends beyond the EU regulations and implementations are being developed for the global market, based on the guidance of HL7. This ensures future-forward compatibility to potential future data exchange requirements for iCure implementations.

### FHIR IPS Implementation

The FHIR IPS implementation is available on [Github](https://github.com/HL7/fhir-ips/) and is based on FHIR R4.

### SNOMED IPS Implementation

SNOMED CT has created [a subset](https://confluence.ihtsdotools.org/display/RMT/SNOMED+CT+International+Patient+Set+\(IPS\)+RF2+refset+package+Release+Notes+-+July+2020) that is IPS compatible and is a part of the free [Global Patient Set](https://www.snomed.org/snomed-international/learn-more/global-patient-set) released by SNOMED Internation.



