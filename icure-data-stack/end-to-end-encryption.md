# End-to-End-Encryption

iCure combines asymmetric (RSA-2048) and symmetric key (AES-256) cryptography to protect the data of its users.

Asymmetric key cryptography allows for the sharing of confidential information between parties without the need for a previous exchange of keys. A secret (private) key is created by one of the parties along with a public key that is shared with the other party. The public key is used for encryption, while the private key is used for decryption. As the private key is never shared with any third party, the confidential information can only be decrypted by the intended recipient.

Symmetric cryptography is orders of magnitude faster than Asymmetric encryption but depends on the availability of a previously shared secret. The transmission of the shared secret is usually done using an asymmetric key cryptographic scheme.

iCure leverage those two complementary schemes to leverage the security of end to end encryption without compromising on the speed of the application.

### Encryption of the data in a database object

Patient, Contact, Form, HealthcareElement all support the encryption of all or part of their content.&#x20;

Describing the way encryption works is done using a lexic defined hereunder:

* Hcp stands for healthcare party
* "4567" is a non encrypted primary key
* {AB} is the Hcp key (symmetric key) of the pair AB, where Hcp A gives delegation to Hcp B. The hcp key is stored encrypted in the Hcp Keys list of Hcp A (see below)
* \<ABCD>\_{AB} is the key ABCD encrypted with Hcp key {AB}
* <{AB}>\_{A} is the Hcp key {AB} encrypted (using asymmetric encryption) with the public key of hcParty A

Let's imagine we wish to encrypt the data of a patient John Keats. Important data for John Keats is here :&#x20;

```
id: 1234
encryptionKeys: { 
    A→A: <HGFE>_{AA}, 
    A→B: <HGFE>_{AB} 
}
encryptedSelf: u1iaebufg0dsyvd12acyzgduyvzgfetfs
```

When John Keats has been created, a secret random key (HGFE) unique to John Keats has been generated. This key has been used to encrypt the data of John Keats and is stored inside John Keats database object inside encryptionKeys. It is encrypted as many times as there are healthcare parties needing access to John Keats (in this case twice).

Keys AA and AB are called Hcp keys. They are stored inside the Hcp object under the field hcPartyKeys.

```
id: A
hcPartyKeys: {
    →A: [<{AA}>_{A}]
    →B: [<{AB}>_{A}, <{AB}>_{B}]
}
```

They are generated once for each couple of healthcare parties that wish to exchange data. They are encrypted twice when they involve two distinct parties (once for each party) using the public key of each party. That way the hcp key can be decrypted by any party of the pair.

Example of usage for decryption:

Hcp B wants to decrypt the encrypted data inside patient 1234 (John Keats)

Hcp B scans the encryptionKeys and notices that Hcp A has shared an encryption key \<HGFE>\_{AB} with him. He recovers the hcp key <{AB}>\_{B} (the one that has been encrypted with his public key {B}) and decrypts it. Because it is very likely that A has shared something else with him, he saves the key for later use. Using the decrypted hcp key {AB}, he decrypts the encryption key \<HGFE>. Using HGFE, he can now decrypt the encrypted data.

### Encryption of the links between database objects

Two kinds of data are used in this example : a patient John Keats and a Contact for John Keats. Two scenarios are considered: obtaining the contacts linked to John Keats and getting the patient linked to a provided contact.

#### Obtaining the contacts linked to a patient

For the patient John Keats

```
id: 1234
firstName: John
lastName: Keats
delegations: { 
    A→A: <ABCD>_{AA}, 
    A→B: <ABCD>_{AB} 
}

```

and the contact

```
id: 4567
secretForeignKeys: [ "ABCD" ]
cryptedForeignKeys: { 
    A→A: <1234>_{AA}, 
    A→B: <1234>_{AB} 
}
encryptionKeys: { 
    A→A: <HIJK>_{AA}, 
    A→B: <HIJK>_{AB} 
}
encryptedSelf: shkx78uiaebufgdsyvdacyzgduyvzgfetf

```

Note that the id (in clear inside the patient) is encrypted inside the contact and that the secret key (encrypted inside the delegations) is in clear inside the contact.

To run that scenario, Hcp B scans the delegations of patient 1234 and notices that Hcp A has shared a primary key with him. He either reuse the hcp key that he saved from a previous operation or recovers it, decrypts it and saves it for later use. Using the decrypted hcp key {AB}, he decrypts the encrypted primary key. Using ABCD, he can now query the database and obtain the connected contacts.

#### Obtaining the patient linked to a contact

To run that scenario, Hcp B scans the cryptedForeignKeys of contact 4567 and notices that Hcp A has shared a foreign key with him. He either reuse the hcp key that he saved from a previous operation or recovers it, decrypts it and saves it for later use. Using the decrypted hcp key {AB}, he decrypts the crypted foreign key . Using 1234, he can now query the database and obtain the connected patient.

### Advantages of this scheme

#### **The healthcare party keeps full control of the decryption**

The private key of an Hcp having been explicitly given access to the data is needed to initiate the decryption chain. Without the private key, the hcp key is not decryptable and the \<ABCD>, <1234>, \<HIJK> or \<HGFE> cannot be accessed.

In other words, encryption cannot be circumvented by a third party, be it a hacker, a government or even the cloud provider. Access to the private data is prevented.

#### **The performance impact is extremely limited**

Symmetric key decryption is extremely fast, even in the browser (1GB/s. on a mid-range computer). The only operation that has a significant impact on performances is the decryption of the hcp keys; the only operation that involves asymmetric key decryption. Fortunately, because virtual care groups are limited in size and because the the hcp keys matrix is sparse, very few such keys have to be decrypted to access all the medical data of a patient record. Hcp keys can often be reused from one patient to another.&#x20;

#### **Sharing of information is cheap and easy**

When information needs to be shared between Hcp A and a new Hcp C, the only work that needs to be done is:

* Create a new Hcp key (once for every pair of Hcps) if it hasn’t been done before.
* Compute: A→C: \<ABCD>\_{AC} }
* Compute: A→C: \<HIJK>\_{AC} }
* Compute: A→C: <1234>\_{AC} }
* Compute: A→C: \<HGFE>\_{AC} }

ABCD, HIJK, 1234 and HGFE are very short (typically 16 bytes) compared to the encrypted data that can be several megabytes. The extra cost in terms of space and computation time is thus extremely limited.

#### **Sharing of information is controlled by the Hcps**

Because keys ABCD, DCBA, 1234 and HGFE need to be decrypted before they can be re-encrypted for a new Hcp, only the parties that have access to the medical data can take the decision to share it.

This replicates the real life situation where sharing of medical data among healthcare parties always happen in the framework of peer to peer relationships.
