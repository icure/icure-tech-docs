# The XDS Concept

## Actors

XDS.b declares 4 types of actors: Document Source, Document Repository, Document Registry, and Document Consumer.&#x20;

* A **Document Source** is responsible for the document publishing and provides the clinical documents to a Document Consumer or the Document Repository.&#x20;
* A **Document Consumer** requests and retrieves documents from the XDS network, either from a Document Repository or a Document Source.&#x20;
* The **Document Repository** handles the document storage in a transparent, secure, reliable, and persistent manner. It is also responsible for delivering the requested documents to the Document Consumer.          &#x20;
* The **Document Registry** manages and stores the metadata associated with the documents and allows Documents Consumers to perform various searches to identify the documents of interest and subsequently retrieve them from the Document Repository.

## XDS.b endpoints

Xds.b is based upon ebXML Registry standards and SOAP.\
iCure acts as a Document Registry and a Document Repository and supports de following ITIs: iti-8, iti-18, iti-41, iti-42, iti-43, iti-44, iti-57, iti-61, iti-62, RAD-68.

### ITI-8: Patient Identity Feed

This endpoint is used by a Patient Identity source to update the patient identity stored in the document Registry. The transaction is conducted by an HL7 ADT message.&#x20;

The Document Registry will store only the patient identifiers of the patient identification domain designated by the XDS Affinity Domain for document sharing in the registry. If other patient identification domains are present in a received message, they will be ignored.

:information\_source:[ITI TF-2a section 3.8](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE\_ITI\_TF\_Vol2a.pdf#nameddest=3\_8\_Patient\_Identity\_Feed\_\_ITI\_) for the detailed definition of the transaction.

### **ITI-43: **Retrieve Document Set

This transaction is used by a Document Consumer to retrieve a set of documents from the Document Repository.

When receiving a Retrieve Document Set Request, the Document Repository will generate a Retrieve Document Set Response containing the requested documents.

:information\_source:[ITI TF-2b section 3.43](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE\_ITI\_TF\_Vol2b.pdf#nameddest=3\_43\_Retrieve\_Document\_Set\_\_ITI) for the detailed definition of the transaction.

### ITI-44: Patient Identity Feed HL7 V3

ITI-44 uses patient identifiers provided by Patient Identity Source to ensure that XDS Documents metadata registered is associated with a known patient and updates patient identity in document metadata by tracking identity change operations.

The Document Registry accepts Patient Registry Record Added and Patient Registry Record Revised messages.

The Document Registry stores only the patient identifiers of the patient identification domain designated by the Affinity Domain for document sharing in the registry. Patient identifiers of other patient identification domains, if present in a received message, will be ignored.

:information\_source:[ITI TF-2b section 3.44](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE\_ITI\_TF\_Vol2b.pdf#nameddest=3\_44\_Patient\_Identity\_Feed\_HL7\_) for the detailed definition of the transaction.

### ITI-57: Update Document Set

When receiving an Update Document Set Request message, the Document Registry parses the supplied metadata and makes the updates triggered by the metadata objects in the message. In general, each metadata object supplied triggers a separate metadata update.

The registry is capable of storing multiple versions of DocumentEntry and Folder metadata objects and makes them available through the ITI-18 transaction

:information\_source:[XDS Metadata Update section 3.57](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE\_ITI\_Suppl\_XDS\_Metadata\_Update.pdf) for the detailed definition of the transaction.

### ITI-61: Register On-Demand Document Entry

ITI-61 allows the Registry to receive and store metadata about available on-demand documents.

An on-demand document is one that collects the latest, most recently available information at the time of retrieval. For more information about the on-demand document see [ITI TF-3 section 4.1.1](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE\_ITI\_TF\_Vol3.pdf).

Upon receipt of a Register On-Demand Document Entry Request message, the Document Registry will:&#x20;

1. Perform metadata validations&#x20;
2. Store all IHE-defined metadata attributes

:information\_source:[ITI TF-2b section 3.61](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE\_ITI\_TF\_Vol2b.pdf#nameddest=3\_61\_Register\_On\_Demand\_Documen) for the detailed definition of the transaction.

### ITI-62: Remove Metadata

The Remove Metadata transaction is used by a Document Administrator to submit a list of entry UUID attributes identifying the metadata objects to be removed from the Document Registry including Submission Set, Document Entry, Folder, and Association objects.

:information\_source: [RMD](https://ihe.net/uploadedFiles/Documents/ITI/IHE\_ITI\_Suppl\_Remove\_Metadata\_And\_Documents\_Rev1.0\_PC\_2017-03-01.pdf) for the detailed definition of the transaction.

### RAD-68: Provide and Register Imaging Document Set

RAD-68 is very similar to the ITI-41 transaction, with different metadata.

:information\_source: [IHE RAD TF-3](https://www.ihe.net/uploadedFiles/Documents/Radiology/IHE\_RAD\_TF\_Vol3.pdf) for the detailed definition of the transaction

