# iCure for MedTech: Getting Started
At the end of this tutorial, you will : 
- Have a ready iCure environment; 
- Have an iCure user to import data into your iCure environment;
- Have access to the iCure Cloud Manager to manage your databases and users. 

You can discover all the possibilities iCure offers you by visiting [this page](../../../../README.md).

## Init your iCure environment
To init your iCure environment in the cloud, you will need the [iCure Cloud Manager console](../../../../get-started/use-the-console.md).
In the future, the iCure Cloud Manager will also permit you to manage your databases and your users. 

You also have the possibility to start an [iCure environment on your local machine](../../../../icure-data-stack/what-is-icure/install-icure.md) 
but this is not part of our tutorial.

### Register using iCure Cloud Manager
Head to [https://console.icure.dev](https://console.icure.dev) and create a new user by registering you on the iCure Cloud Manager. For this, complete the different required information and click on **Register.**

![Register to iCure Cloud Manager Platform](../../../../.gitbook/assets/icure\_registration\_to\_cloud\_manager.png)

After submitting your information, a message should confirm you that an invitation email has been sent. 

Go to your mailbox, where you will find the Invitation mail from **ad@taktik.com** similar to the following one. Click on **Verify.**&#x20;

![Invitation email you will receive during registration process](../../../../.gitbook/assets/icure\_registration\_email\_verification.png)

### Generate your encryption keys
Once you clicked, you will be redirected to the iCure Cloud Manager, where you will be asked to generate your keys. 
2 keys will be generated : 
- A public one, that will be stored in the iCure environment and that will be used to sign your data;
- A private one, that you will need to keep securely;

Click on **I got it. Generate my keys**.&#x20;

![Encryption keys generation to secure your data](../../../../.gitbook/assets/icure\_registration\_keys\_generation.png)

The generation of your keys will start the download of your private encryption 
key. **Keep it preciously** : You will need to use it in order to encrypt your data in your iCure environment and so, keep 
your data safe.&#x20;

If you want more information about how iCure ensure full security of your data, go to [End-to-End-Encryption](../../../end-to-end-encryption.md) page.&#x20;

### Set Password
Once it's done, choose a strong password for your iCure user and click on **Set password**.

![After generating your keys, you will be asked for a password](../../../../.gitbook/assets/icure\_registration\_set\_password.png)


&#x20;Your user is now ready to exchange data with iCure using appropriate tools. 


### What's next ? 
Now that your iCure environment is ready, next step is to import data in your new system. 

To exchange data with the iCure system in your solution, you will have two possibilities:
- [Call the iCure - FHIR Bridge APIs](medtech-in-fhir.md), which will permit you to exchange data using FHIR format.
- [Integrate the iCure SDK](medtech-using-sdk.md), which will permit you to exchange data using iCure data model format. This option will
  require the learning of the iCure data model but will let you much more flexibility to manage your data;
  