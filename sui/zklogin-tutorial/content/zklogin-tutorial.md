<!-- SPDX-License-Identifier: MIT -->
<!-- Copyright (c) 2024 Dacade.org -->

# Sui zkLogin Tutorial
Welcome to the Sui zkLogin Tutorial! In this tutorial, we will explore how to build a Dapp (Decentralized Application) with a React frontend, Move contract and integrate zkLogin for secure user authentication.

## 1. Introduction
We will be building a React frontend for a note contract, that we will write in Move. The note contract will allow users to create and delete notes. For the authentication, we will be using zkLogin. zkLogin allows users to sign in to dApps using familiar web credentials, such as email and password. It is built on the Sui blockchain and is designed to be developer-friendly, secure, and user-friendly.

### 1.1 What You'll Learn
- **Interacting with Your Contract from a Frontend:** Develop a frontend with React to create an interface for your contract.
- **Integrating zkLogin for Secure User Authentication:** Explore the integration of zkLogin for a streamlined and secure authentication process.
- **Leverage the power of zkLogin:** Offer users an easy way to access their on-chain assets.

### 1.2 Prerequisites
Below are listed the prerequisites that can help you get the most out of this tutorial:

- **Contract creation and Sui blockchain with Move (covered in the previous course).** - If you haven't completed the previous course, you can find it here: [Create Contracts and SUI Blockchain with Move]( )
- **Basic knowledge of Blockchain technology** - It is recommended that you have a basic understanding of blockchain technology.
- **Basic knowledge of the Sui Blockchain** - Although not necessary, it would be helpful to have a basic understanding of the Sui blockchain and its features.
- **Understanding of the terminal** - It is recommended that you have a basic understanding of the terminal and how to use it.

### 1.3 Technologies Used
Here are the key technologies used in this tutorial:

1. **Sui Blockchain** - Sui is a permissionless layer 1 blockchain designed to be both developer and user-friendly. It can support a wide range of application development with unrivaled speed at low cost. Focusing on asset ownership and programmability, Sui enables the creation of new financial primitives and the seamless exchange of assets.
2. **Move Language** - The Move language is based on Rust and is a resource-oriented programming language. Move aims to address limitations and vulnerabilities in existing blockchain smart contract languages by focusing on resource management, safety, and flexibility for blockchain assets.
3. **React** - React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
4. **zkLogin** - zkLogin is a decentralized authentication protocol that allows users to sign in to dApps using familiar web credentials, such as email and password. It is built on the Sui blockchain and is designed to be developer-friendly, secure, and user-friendly.

### 1.5 What is zkLogin?
ZkLogin simplifies the user experience for interacting with dApps on the SUI blockchain. With zkLogin, users can sign in using familiar web credentials, just like they would on platforms such as Google or Facebook. Application developers can choose to abstract the interaction with the chain using invisible wallets or provide an enhanced on-chain asset access experience.

zkLogin generates user accounts using familiar OAuth credentials. The user is prompted to log in with their web credentials. This information is used to generate a JSON web token (JWT) that is then combined with random data (called a Salt) and passed to a service that generates a zero-knowledge proof (ZKP).

This 2-minute video explains how zkLogin works: [What is zkLogin?](https://www.youtube.com/watch?v=CZSH9B7j-AY).

This 1-hour video explains how zkLogin works in detail: [A Complete Guide to zkLogin](https://www.youtube.com/watch?v=Jk4mq5IOUYc).

You can find the zkLogin documentation here: [zkLogin Documentation](https://docs.sui.io/concepts/cryptography/zklogin).

### 1.6 Overview
1. [Introduction](#1-introduction) (5 min) - You are here! This section provides an overview of the tutorial and gives you a brief introduction to it.
2. [Setup](#2-setup) (10 min) - In this section, we will install the necessary tools and dependencies to begin working with the boilerplate.
3. [Creating the Authentication Service](#3-creating-the-authentication-service) (15 min) - In this section, we will explore the functionalities of the existing note contract which allows us to create and delete notes from the sui blockchain.
4. [Building the React Frontend](#4-build-the-react-frontend) (45 min) - In this section, we will develop a React frontend for the note contract and integrate zkLogin for secure user authentication.
5. [Testing the Application](#5-testing-the-application)(30 min) - In this section, we will learn how to interact with the note contract using the developed frontend and zkLogin authentication.
1. [Conclusion](#6-conclusion) (5 min) - This section concludes the tutorial and provides you with some next steps.

If you want to have a look at the completed code, you can find it here: [zkLogin Boilerplate](https://github.com/dacadeorg/sui-zklogin)

### 1.7 Educational Disclaimer
The provided contract and integration is intended for learning purposes and has not undergone a formal security audit. Users are encouraged to thoroughly review the code, conduct security assessments, and understand associated risks before deploying in any production environment.

## 2. Setup
In this section, we will install the necessary tools and dependencies to begin working with the boilerplate.

### 2.1 Bootstraping the Boilerplate
This boilerplate provides a starting point for your smart contract development.

**1. Open your terminal.**

**2. Clone the boilerplate repository using the following command:**
```bash
git clone https://github.com/dacadeorg/zk-login-boilerplate
```

**3. Change into the boilerplate directory:**
```bash
cd zk-login-boilerplate
```

**4. Install the dependencies:**
```bash
npm install
``` 

or if you are using yarn 
```bash
yarn install
```

**Note: If the NPM command fails, try to install the dependencies via yarn.**

### 2.2 Understanding the Boilerplate Code
Now that we've set up the boilerplate, let's explore the structure of the provided code and understand the purpose of each file.

#### 2.3.1 Boilerplate Code Structure
You should see the following code structure in your boilerplate directory:

```bash
├── public
├── src
│   ├── components
│   ├── utils
├── download_zhkey.sh
├── package.json

```

Let's take a look at the purpose of each file in the boilerplate:

- **`public`** - This directory contains the `index.html` file, which is the entry point for the React application. It also contains the `favicon.ico` file, which is the icon that appears in the browser tab.
-  **`src`** - This directory contains the `index.js` file, which is the entry point for the React application. It also contains the `App.js` file, which is the main React component.  
-  **`utils`** - This directory will contain helper functions to interact with the contract and zkLogin.
- **`download_zhkey.sh`** - This file contains the script to download the zhkey file, which is used to sign transactions.
- **`package.json`** - This file contains the dependencies and scripts for the React application.

### 2.3.2 Understanding the Note Contract
Below is the code for the note contract we will be using for this tutorial. The note contract is a very simple proof of concept that allows users to create and delete notes.

```rust
#[lint_allow(self_transfer)]
module dacade_zklogin::notes {
    use sui::tx_context::{TxContext, Self};
    use sui::transfer::Self;
    use sui::object::{Self, UID};
    use std::string::String;

    struct Notes has key {
        id: UID
    }

    struct Note has key, store {
        id: UID,
        title: String,
        body: String
    }

    #[allow(unused_function)]
    fun init(ctx: &mut TxContext) {
        let notes = Notes{
            id: sui::object::new(ctx),
        };
        transfer::share_object(notes)
    }

    public fun create_note(title: String, body: String, ctx: &mut TxContext) {
        let note = Note {
            id: object::new(ctx),
            title,
            body
        };
        transfer::transfer(note, tx_context::sender(ctx))
    }

    public fun delete_note(note: Note, _ctx: &mut TxContext) {
        let Note {id, title, body} = note;
        sui::object::delete(id)
    }
}
```

Let's break down the code above. The contract is it pretty straight forward. It has two structs: `Notes` and `Note`. The `Notes` struct is used to store the `id` of the `Note` struct. The `Note` struct is used to store the `id`, `title`, and `body` of the note.

The `init` function is used to initialize the `Notes` struct. The `create_note` function is used to create a new note. The `delete_note` function is used to delete a note.

## 3. Creating the Authentication Service
In this section, we will create the authentication service for our application. 

### 3.1 Setting up Google Oauth Credentials
In this section, we will set up Google OAuth credentials for our application. This is required for zkLogin to work since zkLogin uses Oauth to authenticate users and sign transactions.

You can find a video with a walkthrough of the steps below [here](https://youtu.be/CWsG0Aw3Q_w).

**1. Go to [console.cloud.google.com](https://console.cloud.google.com/).**

**2. Click on "Select a project" and then click on "New Project".**

**3. Enter a project name and click on "Create".**

**4. Click on "Credentials" on the left sidebar.**

**5. Click on "Create Credentials" and then click on "OAuth client ID".**

**6. Select "Web application" and enter a name. You can enter any name you want.**

**7. Enter the following URL in the "Authorized JavaScript origins" field:**
```bash
http://localhost:8080
```

**8. Enter the following URL in the "Authorized redirect URIs" field:**
```bash
http://localhost:8080
```

**9. Click on "Create".**

**10. Copy the "Client ID" and "Client Secret" and save them in a safe place. We will need them later.**

<!-- TODO: Add video and step missing in auth instructions that Moritz had to set up. And search for credentials -->

### 3.2 Setting up environment variables
Create a file called `.env` in the root directory of your project. This file will contain the environment variables for our application.

Add the following values to the `.env` file:
```bash
REACT_APP_CLIENT_ID="<CLIENT_ID>" // replace <CLIENT_ID> with the client ID you copied in the previous section from the Google Console

REACT_APP_PROVER_URL="https://prover-dev.mystenlabs.com/v1"
REACT_APP_REDIRECT_URL="http://localhost:8080"
REACT_APP_OPENID_PROVIDER_URL="https://accounts.google.com/.well-known/openid-configuration"
REACT_APP_FULLNODE_URL="http://127.0.0.1:9000"
REACT_APP_PACKAGE_ID="0x1c12dfe9c2e2438156fedd844afeb1c1bbc0aed48c60d83b98ed91d0e2055427"
```

Let's break down the values we added to the `.env` file:
- **REACT_APP_CLIENT_ID** -  This is the Google client ID. The Google client ID is used to authenticate the user. Ensure to replace <YOUR_GOOGLE_CLIENT_ID> with the client ID you copied in the previous section from the Google Console.
- **REACT_APP_PROVER_URL** - This is the prover URL. The prover URL is used to verify the partial zkLogin signature. The prover URL is provided by zkLogin.
- **REACT_APP_REDIRECT_URL** - This is the redirect URL. The redirect URL is used to redirect the user after authentication. It is also used to redirect the user after the user signs a transaction.
- **REACT_APP_OPENID_PROVIDER_URL** - This is the OpenID provider URL. The OpenID provider URL is used to get the authorization endpoint. The authorization endpoint is used to authenticate the user.
- **REACT_APP_FULLNODE_URL** - This is the node RPC URL. The node RPC URL is used to interact with the SUI blockchain.
- **REACT_APP_PACKAGE_ID** - This is the contract address. The contract address is used to interact with the note contract.

**Note**:  Ensure to always add your .env file to your .gitignore file so that it is not pushed to GitHub to prevent your credentials from being exposed to the public.

### 3.3 Setting up the SUI Client
Before we can set up the authentication services, we need to set up the SUI client. The SUI client is used to interact with the SUI blockchain. We need it to get the latest SUI system state and to sign transactions.

Firstly, lets create a folder called `utils` in the `src` directory. This folder will contain all our services.

Next, create a file called `suiClient.ts` in the `utils` directory. This file will contain the code for our SUI client.

Your structure should look like this:
```bash
├── public
├── src
│   ├── components
│   ├── utils
│   │   ├── suiClient.ts
```

Next, we will add the following code to the `suiClient.ts` file:
```typescript

import { SuiClient } from '@mysten/sui.js/client';

// node rpc url
const FULLNODE_URL = process.env.REACT_APP_FULLNODE_URL;
// the id of the package of a deployed contract
export const PACKAGE_ID = process.env.REACT_APP_PACKAGE_ID;

export const SUI_CLIENT = new SuiClient({ url: FULLNODE_URL });

``` 

he code above is pretty straight forward. We are importing the SuiClient from the `@mysten/sui.js/client` package. We also import the `FULLNODE_URL` and `PACKAGE_ID` from the `.env` file and then a new instance of the SuiClient and exporting it.

### 3.4 Setting up the Sui Service
Create a file called `suiService.ts` in the `utils` directory. This file will contain utility functions we will use to interact with the SUI blockchain.

Add the following code to the `suiService.ts` file:
```typescript
import { SUI_CLIENT } from "./suiClient";

export class SuiService {
    async getFormattedBalance(owner: string) {
        const res = await SUI_CLIENT.getBalance({
            owner
        });
        return Number(Number(res.totalBalance) / 1000_000_000).toFixed(2);
    }
}
```

We are importing the SUI_CLIENT from the `suiClient.ts` file. We are then creating a new class called `SuiService`. This class contains a function called `getFormattedBalance`. This function is used to get the balance of a wallet. It takes in the wallet address as a parameter and returns the balance of the wallet.

The balance is returned in the smallest unit of the currency. Since Sui uses 9 decimal places, we divide the balance by 1000_000_000 to get the balance in Sui.

### 3.5 Setting up the Authentication Service
Create a file called `authService.ts` in the `utils` directory. This file will contain the code for our authentication services, it will be a bit more complex than the previous services.

Firstly, add the imports to the `authService.ts` file:
```typescript
import axios from "axios";
import { SUI_CLIENT } from "./suiClient";
import { Ed25519Keypair } from '@mysten/sui.js/keypairs/ed25519';
import { generateNonce, generateRandomness, getExtendedEphemeralPublicKey } from '@mysten/zklogin';
import { jwtToAddress } from '@mysten/zklogin';
import { genAddressSeed, getZkLoginSignature } from "@mysten/zklogin";
import { jwtDecode } from "jwt-decode";
import { SerializedSignature } from "@mysten/sui.js/cryptography";
```

We are importing the following:
- **axios** - Axios is a promise-based HTTP client for the browser and Node.js. It is used to make HTTP requests.
- **SUI_CLIENT** - This is the SUI client we created in the previous section.
- **Ed25519Keypair** - This is the Ed25519 keypair from the `@mysten/sui.js/keypairs/ed25519` package.
- **generateNonce** - This is the generateNonce function from the `@mysten/zklogin` package. 
- **generateRandomness** - This is the generateRandomness function from the `@mysten/zklogin` package. 
- **getExtendedEphemeralPublicKey** - This is the getExtendedEphemeralPublicKey function from the `@mysten/zklogin` package. We will use it to generate an extended ephemeral public key. 
- **jwtToAddress** - This is the jwtToAddress function from the `@mysten/zklogin` package. We will use it to get the address from a JWT. JWTs are tokens that are used to authenticate users.
- **genAddressSeed** - This is the genAddressSeed function from the `@mysten/zklogin` package. We will use it to generate an address seed.
- **getZkLoginSignature** - This is the getZkLoginSignature function from the `@mysten/zklogin` package. We will use it to sign transactions.
- **jwtDecode** - This is the jwtDecode function from the `jwt-decode` package. We will use it to decode a JWT.
- **SerializedSignature** - This is the SerializedSignature type from the `@mysten/sui.js/cryptography` package. 

Next, add the following values which will be gotten from the `.env` file:
```typescript
// imports

const PROVER_URL = process.env.REACT_APP_PROVER_URL;
const REDIRECT_URL = process.env.REACT_APP_REDIRECT_URL;
const OPENID_PROVIDER_URL = process.env.REACT_APP_OPENID_PROVIDER_URL;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
```

Now, go ahead and create your AuthService class:
```typescript
export class AuthService {

    static getAddressSeed() {
        const jwt = AuthService.decodeJwt();
        const salt = AuthService.salt();
        return genAddressSeed(BigInt(salt!), "sub", jwt.sub, jwt.aud.toString()).toString();
    }

    static getEd25519Keypair(): Ed25519Keypair {
        const jwtData = AuthService.getJwtData();
        const publicKey = new Uint8Array(Object.values(jwtData.ephemeralKeyPair.keypair.publicKey));
        const secretKey = new Uint8Array(Object.values(jwtData.ephemeralKeyPair.keypair.secretKey));
        return new Ed25519Keypair({ publicKey, secretKey })
    }

    static async getPartialZkLoginSignature(): Promise<any> {
        const keyPair = AuthService.getEd25519Keypair();
        const extendedEphemeralPublicKey = getExtendedEphemeralPublicKey(keyPair.getPublicKey());
        const verificationPayload = {
            jwt: AuthService.jwt(),
            extendedEphemeralPublicKey,
            maxEpoch: this.getMaxEpoch(),
            jwtRandomness: this.getRandomness(),
            salt: AuthService.salt(),
            keyClaimName: "sub"
        };
        return await AuthService.verifyPartialZkLoginSignature(verificationPayload);
    }

    private static async verifyPartialZkLoginSignature(zkpRequestPayload: any) {
        try {
            const proofResponse = await axios.post(PROVER_URL, zkpRequestPayload, {
                headers: {
                    'content-type': 'application/json'
                }
            });
            const partialZkLoginSignature = proofResponse.data as PartialZkLoginSignature;
            return partialZkLoginSignature;
        } catch (error) {
            console.log("failed to reqeust the partial sig: ", error);
            return {};
        }
    }

    static async generateZkLoginSignature(userSignature: string): Promise<SerializedSignature> {
        const partialZkLoginSignature = await AuthService.getPartialZkLoginSignature();
        const addressSeed = AuthService.getAddressSeed();
        const maxEpoch = AuthService.getMaxEpoch();
        return getZkLoginSignature({
            inputs: {
                ...partialZkLoginSignature,
                addressSeed
            },
            maxEpoch,
            userSignature,
        });
    }

    static getMaxEpoch() {
        return AuthService.getJwtData().maxEpoch;
    }

    static getRandomness() {
        return AuthService.getJwtData().randomness;
    }

    private static getJwtData() {
        return JSON.parse(sessionStorage.getItem("jwt_data"));
    }

    private static decodeJwt(): JwtPayload {
        const jwt = sessionStorage.getItem('sui_jwt_token');
        return jwtDecode(jwt) as JwtPayload;
    }

    private static salt() {
        const email = AuthService.claims()['email'];
        return AuthService.hashcode(email);
    }

    static walletAddress() {
        const email = AuthService.claims()['email'];
        return jwtToAddress(AuthService.jwt(), AuthService.hashcode(email));
    }

    private static claims() {
        const token = AuthService.jwt();
        if (token)
            return JSON.parse(atob(token.split('.')[1]));
    }

    private static hashcode(s: string) {
        var h = 0, l = s.length, i = 0;
        if (l > 0)
            while (i < l)
                h = (h << 5) - h + s.charCodeAt(i++) | 0;
        return h.toString();
    }

    static isAuthenticated() {
        const token = AuthService.jwt();
        return token && token !== 'null';
    }

    static jwt() {
        return sessionStorage.getItem("sui_jwt_token");
    }

    async login() {
        const { epoch } = await SUI_CLIENT.getLatestSuiSystemState();

        const maxEpoch = Number(epoch) + 2222;
        const ephemeralKeyPair = new Ed25519Keypair();
        const randomness = generateRandomness();
        const nonce = generateNonce(ephemeralKeyPair.getPublicKey(), maxEpoch, randomness);
        const jwtData = {
            maxEpoch,
            nonce,
            randomness,
            ephemeralKeyPair,
        };

        console.log({jwtData})

        sessionStorage.setItem("jwt_data", JSON.stringify(jwtData));

        const params = new URLSearchParams({
            client_id: CLIENT_ID,
            redirect_uri: REDIRECT_URL,
            response_type: 'id_token',
            scope: 'openid email',
            nonce: nonce,
        });

        console.log({params})
        try {
            const { data } = await axios.get(OPENID_PROVIDER_URL);
            console.log({data})
            const authUrl = `${data.authorization_endpoint}?${params}`;
            window.location.href = authUrl;
        } catch (error) {
            console.error('Error initiating Google login:', error);
        }
    }
}
export interface JwtPayload {
    iss?: string;
    sub?: string;
    aud?: string[] | string;
    exp?: number;
    nbf?: number;
    iat?: number;
    jti?: string;
}

export type PartialZkLoginSignature = Omit<
    Parameters<typeof getZkLoginSignature>['0']['inputs'],
    'addressSeed'
>;
```

We have quite a number of functions in the AuthService class. Let's break down the important ones:

- **getAddressSeed** - This function is used to get the address seed. The address seed is used to generate a keypair. It gets the JWT from the sessionStorage and uses the `genAddressSeed` function to generate the address seed.

- **getEd25519Keypair** - This function is used to get the Ed25519 keypair. It gets the JWT from the sessionStorage and uses the `getExtendedEphemeralPublicKey` function to generate the extended ephemeral public key. It then uses the extended ephemeral public key to generate the keypair.

- **getPartialZkLoginSignature** - This function is used to get the partial zkLogin signature. This signature is used to sign transactions. It gets the JWT from the sessionStorage and uses the `getExtendedEphemeralPublicKey` function to generate the extended ephemeral public key. It then uses the extended ephemeral public key to generate the partial zkLogin signature.

- **verifyPartialZkLoginSignature** - This function ensures that the JWT is valid and that the user is authenticated by verifying the partial zkLogin signature. It makes a POST request to the prover URL with the verification payload. The verification payload contains the JWT, the extended ephemeral public key, the max epoch, the JWT randomness, the salt, and the key claim name. The prover URL is used to verify the partial zkLogin signature. The prover URL is provided by zkLogin.

- **generateZkLoginSignature** - This function is used to generate the zkLogin signature. It gets the partial zkLogin signature from the `getPartialZkLoginSignature` function. It then uses the `getZkLoginSignature` function to generate the zkLogin signature.

- **getMaxEpoch** - This function is used to get the max epoch. The max epoch is used to generate the nonce. It gets the JWT from the sessionStorage and returns the max epoch.

- **getRandomness** - This function is used to get the randomness. The randomness is used to generate the nonce. It gets the JWT from the sessionStorage and returns the randomness.

- **getJwtData** - This function is used to get the JWT data. It gets the JWT data from the sessionStorage and returns it.

- **decodeJwt** - This function is used to decode the JWT. It gets the JWT from the sessionStorage and uses the `jwtDecode` function to decode it.

- **walletAddress** - This function is used to get the wallet based on the user's email returned when the user authenticates through OAuth. It gets the JWT from the sessionStorage and uses the `jwtToAddress` function to generate the wallet address.

- **isAuthenticated** - This function is used to check if the user is authenticated. It gets the JWT from the sessionStorage and checks if it is null.

- **login** - This function is used to log the user in. It gets the latest SUI system state and uses it to generate the max epoch. It then generates the nonce, the randomness, and the ephemeral keypair. It then stores the JWT data in the sessionStorage. It then makes a GET request to the OpenID provider URL to get the authorization endpoint. It then redirects the user to the authorization endpoint.


Also note that we have the `JwtPayload` and `PartialZkLoginSignature` interfaces. These interfaces are used to define the types of the JWT payload and the partial zkLogin signature. 

### 3.6 Setting up the Note Service
Create a file called `noteService.ts` in the `utils` directory. This file will contain the code that allows us to interact with the note contract.

Add the following code to the `noteService.ts` file:
```typescript
import { TransactionBlock } from '@mysten/sui.js/transactions';
import { PACKAGE_ID, SUI_CLIENT } from "./suiClient";
import { AuthService } from "./authService";

// a service to interact with the smart contract using SUI SDK
export class NotesService {

    async addNote(title: string, body: string) {
        const txb = new TransactionBlock();
        const txData = {
            target: `${PACKAGE_ID}::notes::create_note`,
            arguments: [
                txb.pure.string(title),
                txb.pure.string(body),
            ]
        };
        return this.makeMoveCall(txData, txb);
    }

    async getNotes() {
        const sender = AuthService.walletAddress();
        let ownedObjects = await SUI_CLIENT.getOwnedObjects({
            owner: sender
        });
        let ownedObjectsDetails = await Promise.all(ownedObjects.data.map(async (obj) => {
            return await SUI_CLIENT.getObject({ id: obj.data.objectId, options: { showType: true, showContent: true } });
        }));
        return ownedObjectsDetails.filter(obj => {
            return `${PACKAGE_ID}::notes::Note` === obj.data.type
        }).map(obj => obj.data.content['fields']);
    }

    async deleteNote(id: any) {
        const sender = AuthService.walletAddress();
        const txb = new TransactionBlock();
        txb.setSender(sender);
        const txData = {
            target: `${PACKAGE_ID}::notes::delete_note`,
            arguments: [
                txb.object(id.id),
            ]
        };
        await this.makeMoveCall(txData, txb);
    }

    private async makeMoveCall(txData: any, txb: TransactionBlock) {
        const keypair = AuthService.getEd25519Keypair();
        const sender = AuthService.walletAddress()
        txb.setSender(sender);
        txb.moveCall(txData);
        const { bytes, signature: userSignature } = await txb.sign({
            client: SUI_CLIENT,
            signer: keypair,
        });
        const zkLoginSignature = await AuthService.generateZkLoginSignature(userSignature);
        return SUI_CLIENT.executeTransactionBlock({
            transactionBlock: bytes,
            signature: zkLoginSignature,
        });
    }
}
```

We are importing the following:
- **TransactionBlock** - This is the TransactionBlock type from the `@mysten/sui.js/transactions` package. We will use it to sign transactions.
- **PACKAGE_ID** - This is the contract address we get from our `.env` file. We will use it to interact with the note contract.
- **SUI_CLIENT** - This is the SUI client we created in the previous section.
- **AuthService** - This is the AuthService class we created in the previous section.

We are then creating a new class called `NotesService`. This class contains the following functions:
- **addNote** - This function is used to add a note. It takes in the title and body of the note as parameters. It then creates a new transaction block and sets the transaction data. It makes a move call to the note contract and signs the transaction using the `sign` function. It then generates the zkLogin signature using the `generateZkLoginSignature` function. And finally executes the transaction block using the `executeTransactionBlock` function.
- **getNotes** - This function is used to return the notes. It uses the wallet address of the user and fethces all objects owned by the user. It then filters the objects to get only the notes and returns them.
- **deleteNote** - This function is used to delete a note. It takes the id of the note as a parameter. It then creates a new transaction block and sets the target to the `delete_note` function of the note contract. It sets the arguments to the id of the note. And finally calls the `makeMoveCall` function to sign the transaction and send it to the note contract.
- **makeMoveCall** - This function is used to sign the transaction and send it to the note contract. It takes in the transaction data and the transaction block as parameters. It then gets the keypair from the AuthService class and gets the wallet address of the user. It sets the sender of the transaction block to the wallet address of the user and sets the target and arguments of the transaction block to the transaction data. It then signs the transaction block and gets the zkLogin signature. Finally it sends the transaction block to the note contract.

Now we have all our services set up. Let's move on to the next section where we will create our React components.

## 4. Building the React Frontend
In this section, we will set up the React application. We will also implement the services we created in the previous section. The application makes use of React Router to handle routing. It also makes use of Bootstrap for styling.

### 4.1 Setting up the Routes
Firstly, open up the `index.js` file in the `src` directory. This file contains the entry point of our React application. We will set up the routes in this file.

Add the following code to the `index.js` file:
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Callback from './Callback';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/notes" element={<App />} />
      <Route path="/" element={<Callback />} />
    </Routes>
  </Router>
);

reportWebVitals();
```
We create a new root and render our application. We then set up our routes. We set the `/notes` route to render the `App` component and the `/` route to render the `Callback` component.

We do not have the `Callback` component yet. Let's go ahead and create it. 

### 4.2 Creating the Callback Component
Create a file called `Callback.js` in the `src` directory. This callback component will be used to handle the callback from the authentication service. We will elaborate more on this later.

Add the following code to the `Callback.js` file:
```javascript
import React, { useEffect } from 'react';

const Callback = () => {
  useEffect(() => {
    const handleCallback = async () => {
      try {
        const params = new URLSearchParams(window.location.hash.substr(1));
        const jwtToken = params.get("id_token");

        sessionStorage.setItem("sui_jwt_token", jwtToken);
        window.location.href = '/notes';
      } catch (error) {
        console.error('Error handling callback:', error);
      }
    };

    handleCallback();
  }, []);

  return (
    <div>
      <p>Processing callback...</p>
    </div>
  );
};

export default Callback;
```

We are importing the `useEffect` hook from React. We are then creating a new component called `Callback`. 
In our `Callback` component, we are using the `useEffect` hook to trigger the `handleCallback` function when this page loads. We are getting the JWT from the URL and storing it in the sessionStorage. We are then redirecting the user to the `/notes` route.

### 4.3 Creating the App Component
Next, open the `App.js` file in the `src` directory. This file contains the main component of our React application. We pointed the `/notes` route to this component in the `index.js` file. 
Go ahead and clear the code in the `App.js` file and add the following code:

```javascript
import React, { useState, useCallback, useEffect } from "react";
import { Container, Nav } from "react-bootstrap";
import Wallet from "./components/Wallet";
import Notes from "./components/notes/Notes";
import Cover from "./components/utils/Cover";
import coverImg from "./assets/img/notebook.jpg";
import { Notification } from "./components/utils/Notifications";
import "./App.css";
import { AuthService } from './utils/authService';
import { SuiService } from './utils/suiService';
```

We import the `SuiService` and `AuthService` classes from the `suiService.ts` and `authService.ts` files respectively that we created in the previous section.

Next, we create a new component called `App`:
```javascript
// ... imports

const App = () => {
  const [balance, setBalance] = useState("0");

  let walletAddress;
  const suiService = new SuiService();

```

We are creating a new state called `balance` and initializing it to `0`. We are also creating a new instance of the `SuiService` class so we can access the functions in the class.

Next, we create a function called `getBalance`:
```javascript
// .... previous code

const getBalance = useCallback(async () => {
    try {
      if (AuthService.isAuthenticated()) {
        setBalance(await suiService.getFormattedBalance(AuthService.walletAddress()));
      }
    } catch (error) {
      console.log({ error });
    } finally {
    }
  });

  const logout = async () => {
    sessionStorage.clear();

    window.location.href = '/notes';
  };

  if (AuthService.isAuthenticated()) {
    walletAddress = AuthService.walletAddress();
  }

  useEffect(() => {
    getBalance();
  }, [getBalance]);

```

Let us break down the code above:
We are creating a function called `getBalance` to get the balance of the user's wallet. We are using the `useCallback` hook to memoize the function. To learn more about the `useCallback` hook, check out this article: [React useCallback Hook](https://www.robinwieruch.de/react-usecallback-hook).

We are then creating a function called `logout` to log the user out and redirect the user to the `/notes` route. 

Finally, we check if the user is authenticated. If the user is authenticated, we get the wallet address of the user and use the `useEffect` hook to trigger the `getBalance` function when this page loads.

Now, we return the JSX for our `App` component:
```javascript
// ... rest of the code 

  return (
    <>
      <Notification />
      {AuthService.isAuthenticated() ? (
        <Container fluid="md">
          <Nav className="justify-content-end pt-3 pb-5">
            <Nav.Item>
              <Wallet
                address={walletAddress}
                amount={balance}
                symbol="SUI"
                destroy={logout}
              />
            </Nav.Item>
          </Nav>
          <main>
            <Notes />
          </main>
        </Container>
      ) : (
        <Cover name="SUI zkLogin Notes" coverImg={coverImg} />
      )
      }
    </>
  );
};

export default App;
```

We are rendering the `Notification` component. This component is used to display notifications to the user and has already been implemented for you. You can check out the code in the `Notification.js` file in the `src/components/utils` directory.
We are then checking if the user is authenticated. If the user is authenticated, we render the `Wallet` component and the `Notes` component. The `Wallet` component is used to display the user's wallet address and balance. The `Notes` component is used to display the notes. We have not implemented `Notes` components yet. We will do that in the next section.

If the user is not authenticated, we render the `Cover` component. We need to grant the users ability to login from the `Cover` component. Let's go ahead and implement that.

### 4.4 Implementing the Cover Component
Open the `Cover.js` file in the `src/components/utils` directory. This file contains the code for the cover component, we will need to grant the users the ability to login from here. We already have the interface for the cover component. Let's go ahead and implement the login functionality.

At the top of the `Cover.js` file, import the `AuthService` class:
```javascript
// ... existing imports
import { AuthService } from "../../utils/authService";
```

Next, we need to create an instance of the `AuthService` class:
```javascript

// ... previous imports 

const Cover = ({ name, coverImg }) => {
  const authService = new AuthService();

// ... rest of the code

```

Finally, we need to attach the login functionality to the login button:
```javascript

// ...rest of the code
            <h1>{name}</h1>
          <p>Please login with your Google account to create a SUI account for you</p>
          <Button
            onClick={() => authService.login()}
            variant="outline-light"
            className="rounded-pill px-3 mt-3"
          >
            Login with Google
          </Button>

// ... rest of the code

```

The final code for the `Cover` component should look like this:
```javascript
import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { AuthService } from "../../utils/authService";

const Cover = ({ name, coverImg }) => {
  const authService = new AuthService();
  if ((name, coverImg)) {
    return (
      <div
        className="d-flex justify-content-center flex-column text-center "
        style={{ background: "#000", minHeight: "100vh" }}
      >
        <div className="mt-auto text-light mb-5">
          <div
            className=" ratio ratio-1x1 mx-auto mb-2"
            style={{ maxWidth: "320px" }}
          >
            <img src={coverImg} alt="" />
          </div>
          <h1>{name}</h1>
          <p>Please login with your Google account to create a SUI account for you</p>
          <Button
            onClick={() => authService.login()}
            variant="outline-light"
            className="rounded-pill px-3 mt-3"
          >
            Login with Google
          </Button>
        </div>
        <p className="mt-auto text-secondary">Powered by SUI</p>
      </div>
    );
  }
  return null;
};

Cover.propTypes = {
  name: PropTypes.string,
};

Cover.defaultProps = {
  name: "",
};

export default Cover;

```

### 4.5 Creating the Notes Components
Create a folder called `notes` in the `src/components` directory. This folder will contain all the components related to the notes. 

We will need three components for the notes:
- `Notes.js` - This file will contain the code for the list of notes.
- `Note.js` - This file will contain the code for a single note.
- `AddNote.js` - This file will contain the code for the form to add a note.

At the end of this section, your structure should look like this:
```bash
src
├── components
│   ├── notes
│   │   ├── AddNote.js
│   │   ├── Note.js
│   │   └── Notes.js
```

### 4.5.1 Creating the Note Component
Create a file called `Note.js` in the `src/components/notes` directory. This file will contain the code for a single note aswell as the code to delete a note.

Add the following code to the `Note.js` file:
```javascript
import React from "react";
import { Card, Button, Col } from "react-bootstrap";

const Note = ({ note, deleteNote }) => {
  const { id, title, body } = note;

  return (
    <Col key={id.id}>
      <Card className=" h-100">
        <Card.Body className="d-flex  flex-column text-center">
          <Card.Title>{title}</Card.Title>
          <Card.Text className="flex-grow-1 ">{body}</Card.Text>
          <Button
            variant="outline-dark"
            onClick={() => deleteNote(id)}
            className="w-100 py-3"
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Note;
```

This component takes in the note and deleteNote function as props and renders the title and body of the note. We haven't implemented the `deleteNote` function yet. We will do that in in the next sections.

### 4.5.2 Creating the AddNote Component
Create a file called `AddNote.js` in the `src/components/notes` directory. This file will contain the code for the form to add a note.

Add the following code to the `AddNote.js` file:
```javascript
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";

const AddNote = ({ save }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const isFormFilled = () => title && body;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        onClick={handleShow}
        variant="dark"
        className="rounded-pill px-0"
        style={{ width: "38px" }}
      >
        <i className="bi bi-plus"></i>
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>New Note</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <FloatingLabel
              controlId="inputTitle"
              label="Title"
              className="mb-3"
            >
              <Form.Control
                type="text"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                placeholder="Title"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputBody"
              label="Body"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="body"
                style={{ height: "80px" }}
                onChange={(e) => {
                  setBody(e.target.value);
                }}
              />
            </FloatingLabel>
          </Modal.Body>
        </Form>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="dark"
            disabled={!isFormFilled()}
            onClick={() => {
              save({
                title,
                body,
              });
              handleClose();
            }}
          >
            Save note
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

AddNote.propTypes = {
  save: PropTypes.func.isRequired,
};

export default AddNote;

```

This component takes in the save function as a prop and renders the form to add a note. We have not implemented the `save` function yet. We will do that in the next sections.
We also setup validations to ensure that the user fills the form before submitting it. Once the user submits the form, the `save` function is called and the form is closed.

### 4.5.3 Creating the Notes Component
Create a file called `Notes.js` in the `src/components/notes` directory. This file will contain the code for the list of notes.

Add the following code to the `Notes.js` file:
```javascript
import React, { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import AddNote from "./AddNote";
import Note from "./Note";
import Loader from "../utils/Loader";
import { Row } from "react-bootstrap";
import { NotificationSuccess, NotificationError } from "../utils/Notifications";
import { NotesService } from "../../utils/notesService";
```

We are importing the NotesService class from the `notesService.ts` file we created previously. We are also importing the `Loader`, `NotificationSuccess` and `NotificationError` components from the `Notifications.js` file in the `src/components/utils` directory to provide feedback to the user when the application is loading or when an error occurs. And of course, we are importing the `AddNote` and `Note` components we created in the previous sections.

Next, we create a new component called `Notes` and initialize the `notes` state and create a new instance of the `NotesService` class:
```javascript
//... previous code
const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  const notesService = new NotesService();
```

We can then create functions to get the notes, delete a note, and save a note:
```javascript
//... previous code
const getNotes = useCallback(async () => {
    try {
      setLoading(true);
      setNotes(await notesService.getNotes());
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  });

  const addNote = async (data) => {
    try {
      setLoading(true);
      const { title, body } = data;
      await notesService.addNote(title, body)

      getNotes();
      toast(<NotificationSuccess text="A note added successfully." />);
    } catch (error) {
      console.log({ error });
      toast(<NotificationError text="Failed to create a note." />);
    } finally {
      setLoading(false);
    }
  };

  const deleteNote = async (id) => {
    try {
      await notesService.deleteNote(id)
      getNotes();

      toast(<NotificationSuccess text="Delete the note successfully" />);
    } catch (error) {
      toast(<NotificationError text="Failed to delete the note." />);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

```

Let us break down the code above:
- **getNotes** - This function is used to get the notes. It uses the `useCallback` hook to memoize the function. It then sets the loading state to true and uses the `notesService` instance to fetch the notes. It then sets the notes state to the notes gotten from the `notesService` instance and the loading state to false.
- **addNote** - This function is used to add a note. It takes in the title and body of the note as parameters. It then sets the loading state to true and uses the `notesService` instance to add the note. It calls the `getNotes` function to get the notes and finally sets the loading state to false.
- **deleteNote** - This function is used to delete a note. It takes in the id of the note as a parameter and sets the loading state to true. It then uses the `notesService` instance to delete the note. It calls the `getNotes` function to get the notes and sets the loading state to false.
- **useEffect** - This hook is used to trigger the `getNotes` function when this page loads.

Finally, we return the JSX for our `Notes` component:
```javascript
//... previous code
return (
    <>
      {!loading ? (
        <>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="fs-4 fw-bold mb-0">Street Food</h1>
            <AddNote save={addNote} />
          </div>
          <Row xs={1} sm={2} lg={3} className="g-3  mb-5 g-xl-4 g-xxl-5">
            {notes.map((_note) => (
              <Note
                note={{
                  ..._note,
                }}
                deleteNote={deleteNote}
              />
            ))}
          </Row>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Notes;
```
We are rendering the `Loader` component if the application is loading. We are also rendering the `AddNote` component and the `Note` component. We are passing the `addNote` function to the `AddNote` component and the `deleteNote` function to the `Note` component.

The final code for the `Notes` component should look like this:
```javascript
import React, { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import AddNote from "./AddNote";
import Note from "./Note";
import Loader from "../utils/Loader";
import { Row } from "react-bootstrap";
import { NotificationSuccess, NotificationError } from "../utils/Notifications";
import { NotesService } from "../../utils/notesService";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  const notesService = new NotesService();

  const getNotes = useCallback(async () => {
    try {
      setLoading(true);
      setNotes(await notesService.getNotes());
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  });

  const addNote = async (data) => {
    try {
      setLoading(true);
      const { title, body } = data;
      await notesService.addNote(title, body)

      getNotes();
      toast(<NotificationSuccess text="A note added successfully." />);
    } catch (error) {
      console.log({ error });
      toast(<NotificationError text="Failed to create a note." />);
    } finally {
      setLoading(false);
    }
  };

  const deleteNote = async (id) => {
    try {
      await notesService.deleteNote(id)
      getNotes();

      toast(<NotificationSuccess text="Delete the note successfully" />);
    } catch (error) {
      toast(<NotificationError text="Failed to delete the note." />);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="fs-4 fw-bold mb-0">Street Food</h1>
            <AddNote save={addNote} />
          </div>
          <Row xs={1} sm={2} lg={3} className="g-3  mb-5 g-xl-4 g-xxl-5">
            {notes.map((_note) => (
              <Note
                note={{
                  ..._note,
                }}
                deleteNote={deleteNote}
              />
            ))}
          </Row>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Notes;
```

Congratulations! You have successfully implemented the React frontend. Now let's test it out.

## 5. Testing the Application
In this section, we will test the application. We will first setup all the necessary configurations. We will then run it locally and test our Note taking application.

### 5.1 Installing Sui and Dev Tools
The first step is to install Sui, Move, and the necessary dev tools. Follow the instructions below based on your operating system.
Please note that if you are on a windows machine, you will need to install WSL2 to run Sui. You can find the instructions [here](https://www.omgubuntu.co.uk/how-to-install-wsl2-on-windows-10).

#### **5.2.1 Installing on MacOS**

#### 1. Install Sui Binaries
Firstly you need to run this command to grant execute permissions to the script.
```bash
chmod u+x download-sui-binaries.sh
```

Then you can run the script to install Sui and the necessary dev tools.

If you are on a Silicon based Mac, run the following command:
```bash
./download-sui-binaries.sh "v1.15.0" "devnet" "macos-arm64"
```

If you are on an Intel based Mac, run the following command:
```bash
./download-sui-binaries.sh "v1.15.0" "devnet" "macos-x86_64"
```

#### 2. Install Rust and Cargo
Run the following command to install Rust and Cargo.
```bash
curl https://sh.rustup.rs -sSf | sh
```
After running this command, you will be prompted to select an option. Type 1 and press Enter to proceed with the installation.

After installation is successful, run this command
```bash
source "$HOME/.cargo/env"
```

When this process is complete, restart your terminal and run the following command to verify that Rust and Cargo have been installed correctly.
```bash
rustc --version
```

Also, run the following command to verify that Sui has been installed correctly.
```bash
sui --version
```

#### **5.2.2 Installing on Ubuntu/Debian/WSL2(Ubuntu)**
#### 1. Install Required Dependencies
Run the following commands to install the required dependencies.
```bash
sudo apt update
sudo apt install curl git-all cmake gcc libssl-dev pkg-config libclang-dev libpq-dev build-essential -y
```
#### 2. Install Rust and Cargo
Run the following command to install Rust and Cargo.
```bash
curl https://sh.rustup.rs -sSf | sh
```
After running this command, you will be prompted to select an option. Type 1 and press Enter to proceed with the installation.
When this process is complete, restart your terminal and run the following command to verify that Rust and Cargo have been installed correctly.
```bash
rustc --version
```

#### 3. Install Sui
Firstly you need to run this command to grant execute permissions to the script.
```bash
chmod u+x download-sui-binaries.sh
```

Then you can run the script to install Sui and the necessary dev tools.
```bash
./download-sui-binaries.sh "v1.15.0" "devnet" "ubuntu-x86_64"
```


The script takes three arguments:
- **Sui Version:** The version of Sui to install. This should be a valid Sui version number. For example, "v1.15.0".
- **Sui Branch:** The environment that you are targeting, in our case it's devnet. Other available options are: testnet and mainnet.
- **Target:** The target platform to install Sui for. This should be a valid target platform. For example, "ubuntu-x86_64". Other examples include "macos-x86_64" and "windows-x86_64".

Finally, restart your terminal and run the following command to verify that Sui has been installed correctly.
```bash
sui --version
```

### 5.3 Running the Sui Blockchain Locally
Open a new terminal and run the following commands:

#### **1. Run the test network locally:**
```bash
RUST_LOG="off,sui_node=info" sui-test-validator
```

If you are on an a Silicon based Mac(M1, M2 ...) and this command fails, you can try to install Postgresql to resolve the issue. You can do this by running the following command:
```bash
brew install postgresql@14
```

When this process runs completely, you should see the following output:
```bash
2023-12-14T15:19:00.260974Z  INFO jwk_updater_task{epoch=0}: sui_node: Submitting JWK to consensus: JwkId { iss: "https://kauth.kakao.com", kid: "9f252dadd5f233f93d2fa528d12fea" }
Fullnode RPC URL: http://127.0.0.1:9000
Faucet URL: http://127.0.0.1:9123
```

The Fullnode RPC URL and Faucet URL are important for interacting with our contract, so make sure to copy them somewhere.

#### **2. Run the Sui node locally:**
To run the application, run the following command in your terminal:
```bash
npm start
```

or

```bash
yarn start
```

This will start the application on port `8080`. You can access the application on your browser at `http://localhost:8080`. You should see the following page:
![Screenshot 2024-01-09 at 19.22.46](https://github.com/dacadeorg/tutorials/assets/40989414/2e5bfcbc-715a-4353-a298-75cece22e15c)

Click on the `Login with Google` button to login and go through the authentication process. Once you are authenticated, you should see the following page:

![Screenshot 2024-01-09 at 19.33.12](https://github.com/dacadeorg/tutorials/assets/40989414/4704c427-e51e-4e95-89ee-b2c64bc92a34)

#### **3. Fund the wallet:**
If you check your wallet balance at the top right corner of the screen, you will see that your wallet is empty with 0 SUI tokens.
In order to fund the wallet, we'll need to use the faucet. The faucet is a service that provides free SUI tokens for testing purposes. We'll use the Faucet URL from the previous section to interact with the faucet.

Firstly, you will need your wallet address. To easily get this, navigate to your running frontend application on your browser at `http://localhost:8080/notes` and copy the address from the top right corner of the screen after you login:
![Screenshot 2024-01-09 at 19.51.45](https://github.com/dacadeorg/tutorials/assets/40989414/38547414-f1d0-4569-a4b0-341e0fb76bad)

Simply click on the address to copy it.

Next, copy this command and replace `<ADDRESS>` with the address of the wallet you created in the previous step.
```bash
curl --location --request POST 'http://127.0.0.1:9123/gas' --header 'Content-Type: application/json' \
--data-raw '{
    "FixedAmountRequest": {
        "recipient": "<ADDRESS>"
    }
}'
```

Run the above command in your terminal. After running this command, you should see a similar output confirming your account was funded.
```bash
{"transferredGasObjects":[{"amount":200000000000,"id":"0x08fdc5ce630e45fa35df020b550c1f352303fc85063db6212062785d611c0543","transferTxDigest":"BHTNxuZYZSfmcHNvmxV8rQKLCpSmjeUFt154e4UaFUoe"},{"amount":200000000000,"id":"0x090e0b177ff2
```

You can also check the balance of your wallet using the following command:
```bash
sui client objects
```

If your output looks like this, then your wallet has been funded successfully:
```bash
{
    "objects": [
        {
            "objectType": "0x2::sui::SUI",
            "object": {
                "type": "coin",
                "value": {
                    "amount": 200000000000,
                    "id": "0x08fdc5ce630e45fa35df020b550c1f352303fc85063db6212062785d611c0543"
                }
            }
        }
    ]
}
```

To confirm that your wallet has been funded, you can also check the balance on your frontend application. You should see the balance of your wallet on the top right corner of the screen.

#### **4. Interacting with the application:**
Now that your wallet has been funded, you can start interacting with the application. You can add a note by clicking on the `+` button at the top right corner of the screen. You can also delete a note by clicking on the `Delete` button at the bottom of the note.

That's it! You have successfully finished this tutorial. Great job!

## 6. Conclusion
In this tutorial, we learned how to create a React frontend for our note contract and integrate zkLogin for secure user authentication. We also learned how to interact with our contract from the frontend. We hope you enjoyed this tutorial and learned a lot from it. 

By working through this tutorial, you have gained hands-on experience with ZK Login and Sui frontend development. You can use this knowledge to build your own Sui frontend applications, explore the ZK Login framework in more detail, and experiment with new functionalities for Sui applications.

Please note that this course is open source and is licensed under the MIT license. You can also contribute to improving the course content by making pull requests if you have suggestions for improvement. You can do this by visiting the course repository [here]
<!-- TODO: Add repo -->

For additional learning and connecting with like-minded individuals, consider visiting the following resources:

- **[Sui zkLogin Documentation](https://docs.sui.io/concepts/cryptography/zklogin)**: The official Sui zkLogin documentation. This is a great place to learn more about zkLogin and Sui.
- **[Sui Discord](https://discord.com/invite/sui)**: The official Discord server for Sui. This is a great place to connect with other developers and ask questions.
- **[Forum](https://forums.sui.io/)**: The official Sui forum with dedicated sections for developers. Here you can follow technical discussions and find answers to your questions.

These platforms are filled with enthusiastic individuals and helpful resources that can further facilitate your journey into the Sui ecosystem.

We hope that you enjoyed this tutorial, as a next step, we encourage you to build your own Sui applications using Sui and zkLogin. Participate in our challenges, earn rewards and receive feedback from your peers. We are looking forward to seeing what you build!