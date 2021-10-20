# The Data Stack

## A full feature Data Stack

The iCure Data Stack facilitates a smooth data management cycle, that includes Data creation, Structuring, Transformation, Sharing, Storage, Recalling, Analyzing and Disposal.&#x20;

**Every iCure implementation regardless of size utilizes the full Data Stack properties** and features, to ensure that all data are managed scalably_ _to the highest standards.&#x20;

The iCure Data Stack has been built on top of the Data Storage and ensures the Integrity, Security, Structure and Exchange of Data in a compliant manner. It is also Data Model agnostic, as it imposes minimal restrictions to the type and structure of stored Data. &#x20;

## Secured by end-to-end encryption

When you look at the definition of a [patient](../icure-data-model/patient/) or a [contact](../icure-data-model/contact/), you see many properties that are related to encryption. They are detailed [here](../end-to-end-encryption.md). Understanding how they are used to guarantee the privacy of the data is not a small task but fortunately, you do not need to grasp the intricacies of the cryptographic scheme to encrypt and decrypt the data.

The high-level methods of the APIs take care of the encryption for you if you respect a few steps

1. Always use the APIs returned by the `Api()` method. Those APIs have been instrumented to automatically encrypt or decrypt the data before transmitting it.
2. Always call `newInstance` on the API before using a model object. This method makes sure that all the information needed to handle the encryption properly has been added to the model before you use it.
3. Make sure that your private key is available before starting to use APIs that rely on encryption.
