# Secure Log-in App

iCure data is protected by end-to-end encryption. Users of the iCure platform must make sure they have a copy of their keys. The iCure Access App, available on the Apple App Store and on Google Play, lets you store a copy of your encryption keys on your phone. It is possible, that a single person owns more than one key, as described in[** Encryption Key Structure**](../advanced-topics/encryption-key-structure.md).

![iCure Authentication App](<../.gitbook/assets/iCure App Authentication.png>)

The iCure access App integrates seamlessly in the daily practice the management of an intricate token scheme, removing technical complexity for the User, who is often untrained in IT concepts.

### Download App

The access App is independently available in [**Google Play**](https://play.google.com/store/apps/details?id=com.icureaccessapp\&hl=en\_ZA\&gl=US) and the [**App Store**](https://apps.apple.com/ca/app/icureaccess/id1528356671)****

### Functionality

The app has has spartan design to enable easier use. The initial screen leads to a scanning mode, that automatically recognizes the function to be performed:&#x20;

#### A. Store a Private Key

This way the user does not require to download a key in his computer device, that is cumbersome to use. A downloaded key as a physical file (a printed QR code) or a saved file (stored in the file system) can be easily lost and the fact that this key is unique will result in the loss of all the data, that have been encrypted exclusively with this key.&#x20;

#### B. Authenticate using a stored key

Keys are stored in the app and the user can select the key to be used in order to authenticate himself, if he has two discrete roles in the IT system.&#x20;

In the topics [Encryption Key Structure](../advanced-topics/encryption-key-structure.md) and [Access Rights Management](../icure-data-stack/rights-management.md) is described, how a user may have two or more private keys.&#x20;

#### C. Recover Key

If the user fails to authenticate 3 times, a key recovery action is initiated via the registered email, so that the keys are being restored. The process differs per iCure implementation.

iCure owner may enable the [Shamir Secret Sharing algorithm](http://web.mit.edu/6.857/OldStuff/Fall03/ref/Shamir-HowToShareASecret.pdf). This enables unique users to split and share their keys within a number of other users, even outside iCure, who only own one part of the key, that is completely unusable on its own. In that case, recovery would have to be initiated by the user but approved by every other user, who has a part of the key.&#x20;

### **Key Management**

The iCure flow that uses the app ensures that the browser is enabled with the proper authentication key. If the user is being used for the first time, then the app helps the user create and store the new encryption key.&#x20;

![new encryption key generation](<../.gitbook/assets/image (21).png>)



If the key is already stored in the browser, then the app uses the encrypted call of the server to confirm the user credentials.

If the key is not stored in the browser, then the app ascertains that a key exchange takes place between the server and the browser, as the QR on the browser to be scanned also sets the question to the app.&#x20;

\
\
****

****

\
\
