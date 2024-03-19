<!-- SPDX-License-Identifier: MIT -->
<!-- Copyright (c) 2023 Dacade.org -->

Welcome to the advanced ICP TypeScript Development 201 tutorial! Building upon the fundamentals you've learned in the ICP TypeScript Smart Contract 101 course, this guide will take you through the development of a decentralized marketplace on the Internet Computer Protocol (ICP) platform. By the end of this guide, you will not only have a deeper understanding of ICP canisters but also a functional decentralized marketplace application.

## 1. Introduction
In this tutorial, we will build a Marketplace canister that allows users to add, view, update, delete, and buy products. We will also build a frontend that allows users to interact with the canister.

### 1.1 What you'll learn
- **Creating a Marketplace Canister**: Dive into the details of creating a decentralized marketplace canister, covering smart contract development and establishing a secure execution environment.
- **Canister Interaction**: Gain practical experience with canister interaction through the command line and Candid interface, essential for testing and ensuring canister functionality.
- **Developing a React Frontend**: Step-by-step guidance on building a React frontend that integrates with your marketplace canister, providing a seamless user experience.
- **Deploying your canister**: Learn how to deploy your canister.

### 1.2 Prerequisites
While having prior coding experience is necessary, you do not need to have any prior blockchain experience to follow this tutorial. However, we do recommend that you have the following:

- **Knowledge of Typescript 101 Course** -  This tutorial builds on the concepts taught in the [Typescript 101 Course](https://dacade.org/communities/icp/courses/typescript-smart-contract-101). If you haven't taken this course yet, we recommend you do so before starting this one.
- **Knowledge of TypeScript and Node.js**: Familiarity with TypeScript and Node.js is vital, as the tutorial involves building an application using these technologies. If you're new to TypeScript or Node.js, consider going through basic tutorials for both.
- **Text Editor**: You will need a text editor to write and edit code. Visual Studio Code is recommended due to its excellent support for TypeScript and Node.js development, but feel free to use a text editor of your choice.
- **Node.js**: Although you don't need Node.js pre-installed (as we'll show you how to manage it using nvm), it's important to note that Node.js (version 18 or higher) will be necessary for running the DFINITY SDK and the project itself."all it on your machine.
- **React**: You will need to have a basic understanding of React to follow this tutorial. If you're new to React, consider going through a basic tutorial first. You can also check out the [React documentation](https://react.dev/reference/react) for more information.


### 1.3 Tech Stack
Here are the key technologies and tools we'll be using:

1.  Internet Computer Protocol (ICP): ICP is a decentralized computing platform that facilitates the creation of software, computation, and data that can run on the public internet. It's the platform we'll be building our application on.
2.  Azle: Azle is a TypeScript framework for creating and managing smart contracts, or "canisters," on the Internet Computer Protocol (ICP).
3.  Node.js: Node.js is a JavaScript runtime that allows for the execution of JavaScript outside of a web browser. We'll be using Node.js version 18 for this tutorial.
4.  Node Version Manager (nvm): Nvm is a tool that enables management and switching between different Node.js versions. We'll be using it to manage our Node.js environment.
5.  DFX: DFX is the command-line interface for the Internet Computer. We'll be using it to create and manage our Azle project.
6.  TypeScript: TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. We'll be using it for writing our application's code, and our project will include a configuration file (`tsconfig.json`) for setting up the TypeScript compiler options.
7.  Candid: Candid is an interface description language (IDL) used by Internet Computer for defining and describing the public interfaces of services, i.e., their methods and their input/output types. We'll be using Candid in our project to describe the interface of our canisters.
8.  React: React is a JavaScript library for building user interfaces. We'll be using it to build the frontend of our application.

### 1.4 What is Ledger?
The ledger on ICP is a canister running on the Internet Computer blockchain that records all ICP token transactions. It consists of account identifiers and balances for all ICP token holders. Each account identifier is a unique value derived from the identity of the principal, the identifier of someone performing a request or "call", that controls the account. The balance represents the quantity of ICP assigned to the principal of the account. The ledger allows for operations such as sending ICP to another account and notifying recipient canisters of incoming transfers.

### 1.5 What is Internet Identity?
The Internet Identity is an advanced and secure method of cryptographic authentication on the Internet Computer blockchain. It is designed to replace traditional usernames and passwords, which can be difficult to manage and vulnerable to security breaches. Internet Identity allows users to create and manage anonymous, independent accounts for each website they visit, providing privacy and protection from data collection by websites.

### 1.6 Overview
1. [Introduction](#1-introduction) (5 min) - This section will guide you through some key concepts and terminology that you will need to know in order to complete this tutorial.
2. [Setup](#2-setup) (10 min) - This section will guide you through the necessary steps to set up your project, preparing the groundwork for your ICP Marketplace Canister development.
3. [Building the Marketplace Canister](#3-building-the-marketplace-canister) (40 min) - In this section, we will construct a powerful Marketplace Canister, implementing functions for adding, viewing, updating, deleting, and buying products, along with a set of helper functions. These functionalities are at the core of your decentralized marketplace application.
4. [Building the Frontend](#4-building-the-frontend) (40 min) - In this section, we will build a React frontend that integrates with your Marketplace Canister, providing a seamless user experience.
5. [Conclusion](#5-conclusion) (2 min) - Finally, we will conclude this tutorial, and we'll provide you with some ideas on how to advance your skills and take your ICP Marketplace Canister to the next level.

If you want to skip to the complete code, you can find the GitHub repository [here](https://github.com/dacadeorg/icp-azle-201/blob/main).

## 2. Setup
In this initial section, we are going to set up our boilerplate code and run it on your local machine.

## 2.1 Preparing Your Local Development Environment
Start by navigating to the [ICP-azle-boilerplate](https://github.com/dacadeorg/icp-azle-201-boilerplate.git) repository. Select the "Code" button, then the "Local" tab, and copy the repository's URL.

In your terminal, navigate to the directory where you want to store your project, then clone the repository to your local machine by running:

```Bash
git clone https://github.com/dacadeorg/icp-azle-201-boilerplate.git
```

Next, move into the cloned repository's directory with:

```bash
cd ICP-azle-201-boilerplate
```

Finally, install the project's dependencies by running:

```bash
npm install
```

This command will install all the necessary dependencies for the project. Once the installation is complete, you're ready to start building your canisters!

### 2.2 Preparing Our Terminal
In this section, we will prepare our terminal environment by installing key tools: Node Version Manager (nvm) and DFX. Please note that the following instructions are specifically for Unix-like systems such as Linux and macOS. If you're on a Windows system, you would need to set up the Windows Subsystem for Linux (WSL) to follow along, or alternatively, you could use GitHub Codespaces. Let's get started.

1. **Install Node Version Manager (nvm)**: Nvm is a useful tool that allows for the management of multiple active Node.js versions. With nvm, switching between different Node.js versions is a breeze. For this tutorial, we'll utilize Node.js version 18. To install nvm, execute the following command in your terminal:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

2. **Switch to Node.js version 18**: Node.js is a JavaScript runtime that enables the execution of JavaScript outside of a browser environment, and it's necessary for running our Azle project. To switch to Node.js version 18 using nvm, use the following command:
```bash
nvm use 18
```

3. **Install DFX**: DFX is the command-line interface for the Internet Computer, and we'll use it to create our Azle project. To install DFX, execute this command:
```bash
DFX_VERSION=0.15.0 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
```

4. **Add DFX to your path**: Add DFX to your PATH: Now that DFX is installed, we need to add it to our system's PATH. This allows us to execute DFX commands from any location within the terminal. Run this command to add DFX to your PATH:
```bash
echo 'export PATH="$PATH:$HOME/bin"' >> "$HOME/.bashrc"
```

### 2.3 Understanding the Boilerplate Code
The boilerplate code we've prepared serves as a basic Azle project. It is designed to help you get started quickly by providing the necessary configuration files and dependencies. This code also includes a simple canister that serves as a reference for constructing your own canisters. Let's explore its key components:

The boilerplate code is structured as follows:

```bash
├── src
│   ├── dfinity_js_backend
│   │   ├── index.ts
│   └── dfinity_js_frontend
│   │   ├── .babelrc
│   │   ├── src
│   │   │   ├── components
│   │   │   ├── utils
│   │   │   ├── assets
│   │   │   ├── App.js
│   │   │   ├── index.js
│   │   │   ├── index.css
├── .gitignore
├── README.md
├── canister_urls.py
|── deploy-local-backend-canister.sh
├── deploy-local-icrc-ledger.sh
├── deploy-local-identity.sh
├── deploy-local-ledger.sh
├── dfx.json
├── package-lock.json
├── package.json
├── tsconfig.json
└── webpack.config.js
```

The `src` directory contains two subdirectories: `dfinity_js_backend` and `dfinity_js_frontend`. The `dfinity_js_backend` directory contains the backend code for our canister, while the `dfinity_js_frontend` directory contains the frontend code for our application.

The `dfinity_js_backend` directory contains an `index.ts` file, which serves as the entry point for our canister's backend code. This file contains the logic for our canister's functionality, including query and update functions, record and variant types, and helper functions.

The `dfinity_js_frontend` directory contains a `.babelrc` file, a `src` directory, and an `index.js` file. The `src` directory contains subdirectories for components, utilities, and assets, along with an `App.js` file. This directory structure is typical of a React application, and it provides the foundation for building a frontend that interacts with our canister.

In our root directory, we have few scripts that we will use to deploy our canister and interact with the ledger canister. We also have a `canister_urls.py` file that contains the canister IDs for our canisters.
Let us break down the scripts:

- `deploy-local-backend-canister.sh`: This script is used to deploy our backend canister to the local Internet Computer environment.
- `deploy-local-icrc-ledger.sh`: This script is used to deploy the icrc2 ledger canister to the local Internet Computer environment. The icrc2 ledger canister is used to manage financial transactions and ledger operations.
- `deploy-local-identity.sh`: This script is used to deploy the identity canister to the local Internet Computer environment. The identity canister is used to manage cryptographic authentication on the Internet Computer. It outputs the canister id to `.env` as the `IDENTITY_CANISTER_ID` variable. Once it's deployed, the `js-agent` library will be talking to it to register identities. There is UI that acts as a wallet where you can select existing identities.
- `deploy-local-ledger.sh`: This script is used to deploy the ledger canister to the local Internet Computer environment. The ledger canister is used to record all ICP token transactions.
- `canister_urls.py`: This file contains the canister IDs for our canisters. We will use these IDs to interact with our canisters.


We have gone more into the setup of the boilerplate code in the [ICP Typescript 101 Course](https://dacade.org/communities/icp/courses/typescript-smart-contract-101). If you haven't taken this course yet, we recommend you do so before starting this one.

## 3. Canister Development (Backend)
Now that we have our boilerplate code set up, we can begin creating our Marketplace Dapp.

In this section, we will create the Marketplace Canister, implementing functions for adding, viewing, updating, deleting, and buying products, along with a set of helper functions. These functionalities are at the core of your decentralized marketplace application.

The backend of our ICP Marketplace Canister is located in the `src/dfinity_js_backend` folder. The backend is responsible for storing the data and executing the logic of our ICP Marketplace Canister.

### 3.1 Importing Dependencies
Firstly, let us navigate to the `src/dfinity_js_backend/src` folder. You will find a file called `index.ts`. This is where we will create our canister.

Let us first import the necessary libraries.

```typescript
import { v4 as uuidv4 } from 'uuid';
import { Server, StableBTreeMap, ic, Principal, serialize, Result } from 'azle';
import express from 'express';
import cors from 'cors';
import { hexAddressFromPrincipal } from "azle/canisters/ledger";
```

The code begins with an import of the 'uuid' package which  is used to generate unique identifiers for products.
Next, we go ahead and import a bunch of modules from the 'Azle' library.
These modules provide data structures and functions for working with various data types, including text, records, maps, variants, sequences, and more. They also provide functions for querying and updating data, interacting with the Internet Computer, and working with time durations.

We also import the 'express' and 'cors' modules. These modules are used to create a web server and enable cross-origin resource sharing (CORS) for our canister. We will use them to create an HTTP server that can handle requests from our frontend application.

Finally, we import the 'hexAddressFromPrincipal' function from the 'ledger' module. This function is used to convert a principal to a hexadecimal address, which is necessary for addressing canister identities.

### 3.2 Defining Record and Variant Types
In this section, we will define class types that we will be using in our marketplace smart contract to represent products, orders, and messages.

First, we define the Product record type, which represents a product that can be listed on a marketplace.
```typescript
class Product {
    id: string;
    title: string;
    description: string;
    location: string;
    price: number;
    seller: string;
    attachmentURL: string;
    soldAmount: number
}

```

The `Product` includes fields such as `id` for a unique identifier, `title` for the product's name, `description` for a detailed product description, `location` for the product's origin or shipping address, `price` for the product's price in natural numbers, seller for the `identity` of the product's seller, `attachmentURL` for optional URLs that provide additional product information or images, and `soldAmount` for the amount of the product that has been sold. This record type serves as the foundation for managing and representing products on the marketplace.

In a real-world scenario, this record type would be used to store and manage product listings in the marketplace smart contract. It allows for the structured representation of various product attributes and information.

Let us go ahead and define the other record types that we will be using in our marketplace smart contract.

```typescript
class ProductPayload {
    title: string;
    description: string;
    location: string;
    price: number;
    attachmentURL: string
}
```

This class is used to represent the payload or data needed when creating a product listing. It includes similar fields to the Product record. However, it does not include fields such as `id`, `seller`, and `soldAmount`, which are not required when creating a product listing.
The `ProductPayload` record will be used when users add new products to the marketplace.


```typescript
enum OrderStatus {
    PaymentPending,
    Completed
}
class Order {
    productId: string;
    price: number;
    status: string;
    seller: string;
}
```

The `OrderStatus` enum represents the possible states an order can have. It includes two states: "PaymentPending" and "Completed," which describe the status of an order. 
The Order class on the other hand, represents an order in the marketplace.
It includes fields such as `productId` for the `ID` of the product being ordered, `price` for the order's price, `status` for the order's status (which is one of the variants defined in OrderStatus), and `seller` for the identity of the seller.
The Order record and OrderStatus variant are essential for tracking and managing orders within the marketplace.


Finally, let us define the product storage tree map

```Javascript
const productsStorage = StableBTreeMap<string, Product>(0);
const orders = StableBTreeMap<string, Order>(1);

/* 
    initialization of the ICRC Ledger canister. The principal text value is hardcoded because 
    we set it in the `dfx.json`
*/
const ICRC_CANISTER_PRINCIPAL = "mxzaz-hqaaa-aaaar-qaada-cai";
```

The `productsStorage` is a key-value data structure used to store products listed by sellers in the marketplace. It is implemented as a `StableBTreeMap`, which is a self-balancing tree with the ability to retain data across canister upgrades. We chose this data structure for its efficient time complexities (O(1) for insert, get, and remove operations) and its resilience against canister upgrades, unlike other data storage options. Canister upgrades are a common occurrence in the ICP ecosystem, and it's essential to ensure data persistence across upgrades.
We create a similar `StableBTreeMap` for orders, which is used to manage and store orders within the marketplace.
Finally, we initialize the ICRC Ledger canister, which is used to manage financial transactions and ledger operations. The principal text value is hardcoded here, as it's typically set in the `dfx.json` configuration.

At this point, our contract should look like this:

```typescript
import { v4 as uuidv4 } from 'uuid';
import { Server, StableBTreeMap, ic, Principal, serialize, Result } from 'azle';
import express from 'express';
import cors from 'cors';
import { hexAddressFromPrincipal } from "azle/canisters/ledger";

class Product {
    id: string;
    title: string;
    description: string;
    location: string;
    price: number;
    seller: string;
    attachmentURL: string;
    soldAmount: number
}

class ProductPayload {
    title: string;
    description: string;
    location: string;
    price: number;
    attachmentURL: string
}

enum OrderStatus {
    PaymentPending,
    Completed
}

class Order {
    productId: string;
    price: number;
    status: string;
    seller: string;
}

const productsStorage = StableBTreeMap<string, Product>(0);
const orders = StableBTreeMap<string, Order>(1);

const ICRC_CANISTER_PRINCIPAL = "mxzaz-hqaaa-aaaar-qaada-cai";
```

### 3.3 Setting up the HTTP Server

Next, we will set up an HTTP server to handle requests from our frontend application. We will use the `express` module to create the server and the `cors` module to enable cross-origin resource sharing (CORS) for our canister.

```typescript
export default Server(() => {
    const app = express();
    // only for development purposes. For production-ready apps, one must configure CORS appropriately
    app.use(cors());
    app.use(express.json());
    
```

We create an instance of the `express` application and enable CORS by using the `cors` middleware. This allows our canister to handle requests from our frontend application, which may be hosted on a different domain. We also use the `express.json` middleware to parse incoming requests with JSON payloads.


### 3.4 Setting up canister CRUD endpoints
Next, we define the routes for our canister. We will create routes for adding, viewing, updating, and deleting products, as well as creating and completing orders.

```typescript

app.get("/products", (req, res) => {
        res.json(productsStorage.values());
    });

    app.get("/orders", (req, res) => {
        res.json(orders.values());
    });
    
 ```

The `/products` route is used to retrieve all products listed in the marketplace. It returns a JSON response containing the products stored in the `productsStorage` map.
The `/orders` route is used to retrieve all orders in the marketplace. It returns a JSON response containing the orders stored in the `orders` map.

Next, we define the routes for getting a product by ID.

```typescript
 app.get("/products/:id", (req, res) => {
        const productId = req.params.id;
        const productOpt = productsStorage.get(productId);
        if ("None" in productOpt) {
            res.status(404).send(`the product with id=${productId} not found`);
        } else {
            res.json(productOpt.Some);
        }
    });

```

It takes the product ID as a URL parameter and returns a JSON response containing the product details if the product is found. If the product is not found, it returns a 404 status code and an error message.

Next, we define the routes for adding, updating, and deleting products.

```typescript

 app.post("/products", (req, res) => {
        const payload = req.body as ProductPayload;
        const product = { id: uuidv4(), soldAmount: 0, seller: ic.caller().toText(), ...payload };
        productsStorage.insert(product.id, product);
        return res.json(product);
    });

    app.put("/products/:id", (req, res) => {
        const productId = req.params.id;
        const payload = req.body as ProductPayload;
        const productOpt = productsStorage.get(productId);
        if ("None" in productOpt) {
            res.status(400).send(`couldn't update a product with id=${productId}. product not found`);
        } else {
            const product = productOpt.Some;
            const updatedProduct = { ...product, ...payload, updatedAt: getCurrentDate() };
            productsStorage.insert(product.id, updatedProduct);
            res.json(updatedProduct);
        }
    });

    app.delete("/products/:id", (req, res) => {
        const productId = req.params.id;
        const deletedProductOpt = productsStorage.remove(productId);
        if ("None" in deletedProductOpt) {
            res.status(400).send(`couldn't delete a product with id=${productId}. product not found`);
        } else {
            res.json(deletedProductOpt.Some);
        }
    });
    
```
The methods are pretty straight forward as we simply have three endpoints, one to add a product to the canister, second ti edit a product based on the ID, and lastly, to remove a product via its ID.

We use a method called 'getCurrentDate' in the `/products/:id` which we haven't created yet. We would do that in the upcoming section.

### 3.4 Defining Create Order Endpoints

Now let us implement the endpoint to allow users place an order for a particular product.

```typescript
 /*
        Before the order is received, the icrc2_approve is called - that's where we create
        an allowance entry for the canister to make a transfer of an ICRC token on behalf of the sender to the seller of the product.
        Here, we make an allowance transfer by calling icrc2_transfer_from.
    */
    app.post("/orders", async (req, res) => {
        const productOpt = productsStorage.get(req.body.productId);
        if ("None" in productOpt) {
            res.send(`cannot create the order: product=${req.body.productId} not found`);
        } else {
            const product = productOpt.Some;
            const allowanceResponse = await allowanceTransfer(product.seller, BigInt(product.price));
            if (allowanceResponse.Err) {
                res.send(allowanceResponse.Err);
                return;
            }
            const order: Order = {
                productId: product.id,
                price: product.price,
                status: OrderStatus[OrderStatus.Completed],
                seller: product.seller
            };
            orders.insert(uuidv4(), order);
            product.soldAmount += 1;
            productsStorage.insert(product.id, product);
            res.json(order);
        }
    });

```

### 3.5 Defining Order Management Functions

Next, let us create our `createOrder` function. This function is responsible for creating orders within the marketplace smart contract.

```typescript
 /*
        Before the order is received, the icrc2_approve is called - that's where we create
        an allowance entry for the canister to make a transfer of an ICRC token on behalf of the sender to the seller of the product.
        Here, we make an allowance transfer by calling icrc2_transfer_from.
    */
app.post("/orders", async (req, res) => {
    const productOpt = productsStorage.get(req.body.productId);
    if ("None" in productOpt) {
        res.send(`cannot create the order: product=${req.body.productId} not found`);
    } else {
        const product = productOpt.Some;
        const allowanceResponse = await allowanceTransfer(product.seller, BigInt(product.price));
        if (allowanceResponse.Err) {
            res.send(allowanceResponse.Err);
            return;
        }
        const order: Order = {
            productId: product.id,
            price: product.price,
            status: OrderStatus[OrderStatus.Completed],
            seller: product.seller
        };
        orders.insert(uuidv4(), order);
        product.soldAmount += 1;
        productsStorage.insert(product.id, product);
        res.json(order);
    }
});

```

The `createOrder` function takes in a product `ID` as an argument and returns a Result type. If the product is found, it creates an order and returns it. Otherwise, it returns an error message.

It calls the `allowanceTransfer` function to create an allowance entry for the canister to make a transfer of an ICRC token on behalf of the sender to the seller of the product. This is done to ensure that the canister has the necessary allowance to make the payment on behalf of the buyer.

Finally, lets add an endpoint to get the address from the pricipal and close out our contract server.

```typescript

app.get("/principal-to-address/:principalHex", (req, res) => {
    const principal = Principal.fromText(req.params.principalHex);
    res.json({ account: hexAddressFromPrincipal(principal, 0) });
});

return app.listen();
});
```

The `getAddressFromPrincipal` function takes a principal as an argument and returns the address of the principal in hexadecimal format. This function is used to convert a principal to an address, which is necessary for addressing canister identities.

Finally, we return the `app.listen()` method to start the HTTP server and listen for incoming requests.

### 3.6 Defining Helper Functions

Now let us go ahead and define our helper functions which we referenced in the previous sections.

```typescript

function getCurrentDate() {
    const timestamp = new Number(ic.time());
    return new Date(timestamp.valueOf() / 1000_000);
}

async function allowanceTransfer(to: string, amount: bigint): Promise<Result<any, string>> {
    try {
        const response = await fetch(`icp://${ICRC_CANISTER_PRINCIPAL}/icrc2_transfer_from`, {
            body: serialize({
                candidPath: "/src/icrc1-ledger.did",
                args: [{
                    // for optional values use an empty array notation [] instead of None is they should remain empty
                    spender_subaccount: [],
                    created_at_time: [],
                    memo: [],
                    amount,
                    fee: [],
                    from: { owner: ic.caller(), subaccount: [] },
                    to: { owner: Principal.fromText(to), subaccount: [] }
                }]
            })
        });
        return Result.Ok(response);
    } catch (err) {
        let errorMessage = "an error occurred on approval";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        return Result.Err(errorMessage);
    }
}

```

The `getCurrentDate` function returns the current date and time as a JavaScript Date object. It uses the `ic.time()` function to get the current time in nanoseconds, then converts it to seconds and creates a new Date object.

The `allowanceTransfer` function is an asynchronous function that takes a recipient's address and an amount as arguments and returns a Result type. It makes an allowance transfer by calling the `icrc2_transfer_from` method on the ICRC Ledger canister. 
This function is used to create an allowance entry for the canister to make a transfer of an ICRC token on behalf of the sender to the seller of the product. It sends a POST request to the `icrc2_transfer_from` method, passing the necessary arguments such as the spender's subaccount, created at time, memo, amount, fee, from, and to. If the transfer is successful, it returns a Result with the response; otherwise, it returns an error message.


At the end, our canister should look like [this](https://github.com/dacadeorg/icp-azle-201/blob/main/src/dfinity_js_backend/src/index.ts).

## 4. Frontend Development

Now that we have our canister ready, let us go ahead and create our frontend. We will be using React for this tutorial.

For the sake of the tutorial, we will only focus on the frontend code that is relevant to the marketplace canister. You can find the complete code [here](https://github.com/dacadeorg/icp-azle-201/tree/main/src/dfinity_js_frontend).

Let us start by navigating into our `src/dfinity_js_frontend/src/utils` folder. This folder will house all the reusable functions we will use across the frontend implementation to help us interact with our canister.
If this folder does not exist, go ahead and create the utils folder inside the following path `src/dfinity_js_frontend/src/`.

### 4.1 Authentication utility functions
Firstly, under the `utils` folder, create a file called `auth.js` with the following code:
```typescript
import { AuthClient } from "@dfinity/auth-client";

// that is the url of the webapp for the internet identity. 
const IDENTITY_PROVIDER = `http://${process.env.IDENTITY_CANISTER_ID}.${window.location.hostname}:4943`;
const MAX_TTL = 7 * 24 * 60 * 60 * 1000 * 1000 * 1000;

export async function getAuthClient() {
    return await AuthClient.create();
}

export async function getPrincipal() {
    const authClient = await getAuthClient();
    return authClient.getIdentity()?.getPrincipal();
}

export async function getPrincipalText() {
    return (await getPrincipal()).toText();
}

export async function isAuthenticated() {
    try {
        const authClient = await getAuthClient();
        return await authClient.isAuthenticated();
    } catch (err) {
        logout();
    }
}

export async function login() {
    const authClient = await getAuthClient();
    const isAuthenticated = await authClient.isAuthenticated();

    if (!isAuthenticated) {
        await authClient?.login({
            identityProvider: IDENTITY_PROVIDER,
            onSuccess: async () => {
                window.location.reload();
            },
            maxTimeToLive: MAX_TTL,
        });
    }
}

export async function logout() {
    const authClient = await getAuthClient();
    authClient.logout();
    window.location.reload();
}
```
The auth.js file contains functions for user authentication and logout using the DFINITY AuthClient. Here's an explanation of each part:
- Import AuthClient: The file imports the AuthClient from the `@dfinity/auth-client` package, which is used for authentication.
- Identity Provider URL: `IDENTITY_PROVIDER` is the URL of the webapp for the Internet Identity. This URL is used for user authentication. The canister ID might be different for you, rely on the output of the deploy command to get the correct canister ID.
- Maximum Time to Live: `MAX_TTL` defines the maximum time to live for authentication in nanoseconds. It sets the maximum amount of time the authentication session is allowed to exist before it expires.
- Get AuthClient: The `getAuthClient` function creates and returns an instance of the AuthClient. This function is used to obtain the AuthClient for user authentication.
- Get Principal: The `getPrincipal` function returns the principal of the authenticated user. It uses the AuthClient to get the user's identity and principal.
- Get Principal Text: The `getPrincipalText` function returns the principal of the authenticated user as a text value. It uses the `getPrincipal` function to get the principal and converts it to a text value.
- Is Authenticated: The `isAuthenticated` function checks if the user is authenticated. It uses the AuthClient to determine if the user is authenticated. If an error occurs, it calls the `logout` function.
- Login: The `login` function initiates the login process for the user. It uses the AuthClient to log in the user, specifying the identity provider URL, the maximum time to live, and a callback function for successful login.
- Logout: The `logout` function logs out the user. It uses the AuthClient to log out the user and reloads the page to clear the user's session.

These functions provide a way for users to authenticate and log in to the application using the Internet Identity. They also allow users to log out of the application when they are done.

### 4.2 Canister Factory
Next, let us create another file under the `utils` folder called `canisterFactory.js` with the following code:

```typescript
import { HttpAgent, Actor } from "@dfinity/agent";
import { getAuthClient } from "./auth.js"

const HOST = window.location.origin;

export async function createCanisterActor(canisterId, idl) {
    const authClient = await getAuthClient();
    const agent = new HttpAgent({
        host: HOST,
        identity: authClient.getIdentity()
    });
    await agent.fetchRootKey(); // this line is needed for the local env only
    return Actor.createActor(idl, {
        agent,
        canisterId,
    });
}
```

These functions are essential for setting up and obtaining instances of canisters, allowing interaction with their exposed functionality within the application.
At the beginning of the code, we import the necessary modules. These modules provide functions and utilities for working with canisters. For instance, we use the `HttpAgent` and `Actor` modules from the `@dfinity/agent` package.

The `createCanisterActor` function is used to create an actor instance for a specific canister. It accepts two parameters: `canisterId` and `idl`. The `canisterId` parameter represents the unique identifier of the canister, while the `idl` parameter represents the interface definition language (IDL) of the canister.

Inside the function, we obtain an instance of the AuthClient using the `getAuthClient` function. This instance is necessary for obtaining the user's identity and authentication status. We then create an instance of the `HttpAgent` using the `HOST` and the user's identity. The `HOST` represents the origin of the application, while the user's identity is obtained from the AuthClient.

We call the `agent.fetchRootKey` method to fetch the root key of the agent. This line is needed for the local environment only. It ensures that the agent has the necessary root key to interact with the canister.

Finally, we create an actor instance using the `Actor.createActor` method, passing the IDL, agent, and canister ID as parameters. This actor instance is returned, allowing interaction with the canister's exposed functionality.

### 4.3 Ledger utility functions

Next, let us create a file under the `utils` folder called `ledger.js` and paste in the following code:

```javascript
import { createCanisterActor } from "./canisterFactory";
import { getPrincipalText, isAuthenticated, logout } from "./auth";
import { getAddressFromPrincipal } from "./marketplace";
import { idlFactory as ledgerIDL } from "../../../declarations/ledger_canister/ledger_canister.did.js";

const LEDGER_CANISTER_ID = "ryjl3-tyaaa-aaaaa-aaaba-cai";

export async function icpBalance() {
    const authenticated = await isAuthenticated();
    if (!authenticated) {
        return "0";
    }
    const canister = await getLedgerCanister();
    const principal = await getPrincipalText();
    try {
        const account = await getAddressFromPrincipal(principal);
        const balance = await canister.account_balance_dfx(account);
        return (balance.e8s / BigInt(10 ** 8)).toString();
    } catch(err) {
        if (err.name === 'AgentHTTPResponseError') {
            logout();
        }
    }
}

async function getLedgerCanister() {
    return createCanisterActor(LEDGER_CANISTER_ID, ledgerIDL);
}
```

The `ledger.js` file contains functions for interacting with the ledger canister. These functions enable actions such as transferring ICP, querying account balances, and more. Here's an explanation of each part:

- Import Canister Factory: The file imports the `createCanisterActor` function from the `canisterFactory` module. This function is used to create an actor instance for a specific canister.
- Import Auth Functions: The file imports the `getPrincipalText`, `isAuthenticated`, and `logout` functions from the `auth` file we created earlier. These functions are used for user authentication and principal management.
- Import Marketplace Functions: The file imports the `getAddressFromPrincipal` function from the `marketplace` module. This function is used to retrieve the account address of a principal.
- Import Ledger IDL: The file imports the IDL factory for the ledger canister from the `ledger_canister.did.js` file. This IDL factory is used to create an instance of the ledger canister actor.
- Define Ledger Canister ID: The `LEDGER_CANISTER_ID` constant represents the unique identifier of the ledger canister. This ID is used to interact with the ledger canister.
- ICP Balance Function: The `icpBalance` function is responsible for retrieving the ICP balance of the currently authenticated user. It doesn't transfer ICP but rather queries the balance. It calls the `isAuthenticated` function to check if the user is authenticated. If the user is not authenticated, it returns a balance of "0." If the user is authenticated, it obtains an instance of the ledger canister using the `getLedgerCanister` function. It then retrieves the principal of the authenticated user and obtains the account address using the `getAddressFromPrincipal` function. Finally, it calls the `account_balance_dfx` method on the ledger canister to get the balance of the user's account. The result is then returned as a string, making it suitable for display in the user interface.
- Get Ledger Canister Function: The `getLedgerCanister` function is a helper function that creates an instance of the ledger canister actor using the `createCanisterActor` function. It returns the actor instance, allowing interaction with the ledger canister's exposed functionality.


### 4.4 ICRC2 Ledger utility functions
Go ahead and create a file under the `utils` folder called `icrc2_ledger.js` with the following code:

```javascript
import { createCanisterActor } from "./canisterFactory";
import { getPrincipal, getPrincipalText, isAuthenticated } from "./auth";
import { idlFactory as icrcIDL } from "../../../declarations/icrc1-ledger/icrc1-ledger.did.js";
import { Principal } from "@dfinity/principal";

const ICRC_CANISTER_ID = "mxzaz-hqaaa-aaaar-qaada-cai";

export async function approve(spender, amount) {
    const canister = await getIcrc1Canister();
    const currentPrincipal = await getPrincipal();
    return await canister.icrc2_approve({ spender: { owner: Principal.fromText(spender), subaccount: [] }, from: { owner: currentPrincipal, subaccount: [] }, amount: BigInt(amount), fee: [], memo: [], from_subaccount: [], created_at_time: [], expected_allowance: [], expires_at: [] })
}

export async function tokenBalance() {
    const authenticated = await isAuthenticated();
    if (!authenticated) {
        return "";
    }
    const canister = await getIcrc1Canister();
    const principal = await getPrincipalText();
    const balance = await canister.icrc1_balance_of({ owner: Principal.fromText(principal), subaccount: [] });
    return balance.toString();
}

export async function tokenSymbol() {
    const authenticated = await isAuthenticated();
    if (!authenticated) {
        return "";
    }
    const canister = await getIcrc1Canister();
    const symbol = await canister.icrc1_symbol();
    return symbol;
}

async function getIcrc1Canister() {
    return createCanisterActor(ICRC_CANISTER_ID, icrcIDL);
}
```

The `icrc2_ledger.js` file contains functions for interacting with the ICRC2 ledger canister. These functions enable actions such as approving token transfers, querying token balances, and retrieving token symbols. Here's an explanation of each part:

- Approve Function: The `approve` function is responsible for creating an allowance entry for the canister to make a transfer of an ICRC token on behalf of the sender to the spender. It accepts the spender's principal and the amount to approve as arguments. It obtains an instance of the ICRC1 ledger canister using the `getIcrc1Canister` function. It then retrieves the principal of the authenticated user using the `getPrincipal` function. Finally, it calls the `icrc2_approve` method on the ICRC1 ledger canister to create an allowance entry for the specified spender and amount. The result is then returned.
- Token Balance Function: The `tokenBalance` function is responsible for retrieving the token balance of the currently authenticated user. It calls the `isAuthenticated` function to check if the user is authenticated. If the user is not authenticated, it returns an empty string. If the user is authenticated, it obtains an instance of the ICRC1 ledger canister using the `getIcrc1Canister` function. It then retrieves the principal of the authenticated user and obtains the token balance using the `icrc1_balance_of` method on the ICRC1 ledger canister. The result is then returned as a string, making it suitable for display in the user interface.
- Token Symbol Function: The `tokenSymbol` function is responsible for retrieving the symbol of the token. It calls the `isAuthenticated` function to check if the user is authenticated. If the user is not authenticated, it returns an empty string. If the user is authenticated, it obtains an instance of the ICRC1 ledger canister using the `getIcrc1Canister` function. It then retrieves the token symbol using the `icrc1_symbol` method on the ICRC1 ledger canister. The result is then returned as a string, representing the token symbol.
- Get ICRC1 Canister Function: The `getIcrc1Canister` function is a helper function that creates an instance of the ICRC1 ledger canister actor using the `createCanisterActor` function. It returns the actor instance, allowing interaction with the ICRC1 ledger canister's exposed functionality.
- ICRC1 Ledger Canister ID: The `ICRC_CANISTER_ID` constant represents the unique identifier of the ICRC1 ledger canister. This ID is used to interact with the ICRC1 ledger canister.
- Import ICRC1 Ledger IDL: The file imports the IDL factory for the ICRC1 ledger canister from the `icrc1-ledger.did.js` file. This IDL factory is used to create an instance of the ICRC1 ledger canister actor.

### 4.5 IC HTTP utility functions
Next, let us create a file under the `utils` folder called `ichttp.js` with the following code:

```javascript
import { logout } from "./auth";

class IcHttp {
    #agent;
    #decoder;
    #encoder;

    constructor(agent) {
        this.#agent = agent;
        this.#decoder = new TextDecoder('utf-8');
        this.#encoder = new TextEncoder();
    }

    async GET(req) {
        return await this.#doRequest(req.path, "GET", req.params);
    }

    async POST(req) {
        return await this.#doRequest(req.path, "POST", req.params, req.data);
    }

    async #doRequest(path, method, params, data) {
        try {
            const queryParams = new URLSearchParams(params ? params : {});
            const url = params ? `${path}?${queryParams}` : path;
            let response;
            switch (method) {
                case "GET":
                    response = await this.#agent.http_request({
                        url,
                        method,
                        body: [],
                        headers: [],
                        certificate_version: [],
                    });
                    return this.#parseResponse(response);
                case "POST":
                case "PUT":
                case "DELETE":
                    const body = data ? this.#encoder.encode(JSON.stringify(data)) : [];
                    response = await this.#agent.http_request_update({
                        url,
                        method,
                        body,
                        headers: [['Content-Type', 'application/json; charset=utf-8'], ['Content-Length', `${body.length}`]],
                        certificate_version: [],
                    });
                    return this.#parseResponse(response);
                default:
                    throw new Error(`Unknown method: ${method}`);
            }
        } catch (err) {
            if (err.name === 'AgentHTTPResponseError') {
                logout();
            }
        }
    }

    #parseResponse(response) {
        try {
            const body = this.#decoder.decode(response.body);
            if (response.status_code !== 200) {
                throw new Error(body);
            }
            const contentType = response.headers.filter(header => "content-type" === header[0].toLowerCase()).map(header => header[1]);
            if (contentType && contentType.length === 1 && contentType[0].toLowerCase() === 'application/json; charset=utf-8') {
                return JSON.parse(body);
            }
            return body;
        } catch (err) {
            throw err;
        }
    }
}
export default IcHttp;
```

For this section, you do not need to understand the entire code. The `ichttp.js` file contains a class called `IcHttp` that provides a simple HTTP client for making requests to the Internet Computer. It uses the `@dfinity/agent` package to send HTTP requests to canisters and handle responses. The class includes methods for making GET, POST, PUT, and DELETE requests, as well as a private method for parsing responses. The class also includes error handling to log out the user if an HTTP response error occurs.

### 4.6 Marketplace utility functions
Next, let us create a file under the `utils` folder called `marketplace.js` with the following code:

```javascript
import { approve } from "./icrc2_ledger";
import { createCanisterActor } from "./canisterFactory";
import { idlFactory as marketPlaceIDL } from "../../../declarations/dfinity_js_backend/dfinity_js_backend.did.js";
import IcHttp from "./ichttp";

const marketplaceAgentCanister = await createCanisterActor(process.env.BACKEND_CANISTER_ID, marketPlaceIDL);
const httpClient = new IcHttp(marketplaceAgentCanister);

export async function createProduct(data) {
    return httpClient.POST({path: "/products", data});
}

export async function getAddressFromPrincipal(principalHex) {
    return httpClient.GET({path: `/principal-to-address/${principalHex}`});
}

export async function getProducts() {
    return httpClient.GET({path: "/products"});
}

export async function buyProduct(product) {
    const { id, price } = { ...product };
    await approve(process.env.BACKEND_CANISTER_ID, price);
    return await httpClient.POST({path: "/orders", data: {productId: id}});
}
```
This file provides functions to interact with the marketplace canister. These functions enable actions such as creating products, retrieving product listings, and buying products within your Internet Computer application.

The `createProduct` function is responsible for creating a new product listing in the marketplace. It accepts product data as an argument and sends a POST request to the `/products` endpoint to create the product.

The `getAddressFromPrincipal` function is responsible for retrieving the account address of a principal. It accepts the principal in hexadecimal format as an argument and sends a GET request to the `/principal-to-address` endpoint to retrieve the account address.

The `getProducts` function is responsible for retrieving all product listings in the marketplace. It sends a GET request to the `/products` endpoint to retrieve the product listings.

The `buyProduct` function is responsible for buying a product in the marketplace. It accepts a product object as an argument, approves the payment using the `approve` function, and sends a POST request to the `/orders` endpoint to create an order for the product.

Once you set all this up successfully, your folder structure should look like this

```bash
├── src
│   ├── declarations
│   ├── dfinity_js_backend
│   └── dfinity_js_frontend
│   │   ├── src
│   │   │   ├── utils
│   │   |       ├── auth.js
│   │   |       ├── canisterFactory.js
│   │   |       ├── ichttp.js
│   │   |       ├── icrc2_ledger.js
│   │   |       ├── ledger.js
│   │   |       ├── marketplace.js

```

### 4.6 Setting up App.js

Now that we have our utility functions in place to interact with the canister contracts, let us go ahead and create our `App.js` file. This file will house the main logic of our application.

Navigate into your `src/dfinity_js_frontend/src` folder with the following code into your `App.js` file.

```javascript
import React, { useEffect, useCallback, useState } from "react";
import { Container, Nav } from "react-bootstrap";
import Products from "./components/marketplace/Products";
import "./App.css";
import Wallet from "./components/Wallet";
import coverImg from "./assets/img/sandwich.jpg";
import { login, logout as destroy } from "./utils/auth";
import Cover from "./components/utils/Cover";
import { Notification } from "./components/utils/Notifications";
import { isAuthenticated, getPrincipalText } from "./utils/auth";
import { tokenBalance, tokenSymbol } from "./utils/icrc2_ledger";
import { icpBalance } from "./utils/ledger";
import { getAddressFromPrincipal } from "./utils/marketplace";

const App = function AppWrapper() {
    const [authenticated, setAuthenticated] = useState(false);
    const [principal, setPrincipal] = useState('');
    const [icrcBalance, setICRCBalance] = useState('');
    const [balance, setICPBalance] = useState('');
    const [symbol, setSymbol] = useState('');
    const [address, setAddress] = useState('');

    const getICRCBalance = useCallback(async () => {
        if (authenticated) {
            setICRCBalance(await tokenBalance());
        }
    });

    const getICPBalance = useCallback(async () => {
        if (authenticated) {
            setICPBalance(await icpBalance());
        }
    });

    useEffect(async () => {
        setSymbol(await tokenSymbol());
    }, [setSymbol]);

    useEffect(async () => {
        setAuthenticated(await isAuthenticated());
    }, [setAuthenticated]);

    useEffect(async () => {
        const principal = await getPrincipalText();
        setPrincipal(principal);
    }, [setPrincipal]);

    useEffect(async () => {
        const principal = await getPrincipalText();
        const account = await getAddressFromPrincipal(principal);
        setAddress(account.account);
    }, [setAddress]);

    useEffect(() => {
        getICRCBalance();
    }, [getICRCBalance]);

    useEffect(() => {
        getICPBalance();
    }, [getICPBalance]);

    return (
        <>
            <Notification />
            {authenticated ? (
                <Container fluid="md">
                    <Nav className="justify-content-end pt-3 pb-5">
                        <Nav.Item>
                            <Wallet
                                address={address}
                                principal={principal}
                                icpBalance={balance}
                                icrcBalance={icrcBalance}
                                symbol={symbol}
                                isAuthenticated={authenticated}
                                destroy={destroy}
                            />
                        </Nav.Item>
                    </Nav>
                    <main>
                        <Products tokenSymbol={symbol} />
                    </main>
                </Container>
            ) : (
                <Cover name="Street Food" login={login} coverImg={coverImg} />
            )}
        </>
    );
};

export default App;
```

The `App` component plays a crucial role in providing a seamless and user-friendly experience to your application's users. It is responsible for:

- Displaying the marketplace and user wallet components based on the user's authentication status.
- Managing user authentication, including login and logout.
- Retrieving and displaying the user's wallet balance.

Here's a breakdown of the key elements within the `App` component:

- `useEffect` Hooks: The `useEffect` hooks are used to manage the side effects of the component. They are used to fetch and update the user's ICP and ICRC balances, as well as the user's principal and address. The `useEffect` hooks are also used to check the user's authentication status and retrieve the token symbol.
- Wallet Component: The `Wallet` component is used to display the user's wallet information, including the user's address, principal, ICP balance, and ICRC balance. It also provides a button for the user to log out.
- Products Component: The `Products` component is used to display the product listings in the marketplace. It accepts the token symbol as a prop to display the correct currency symbol for the products.
- Cover Component: The `Cover` component is used to display a cover image and a login button when the user is not authenticated. It provides a seamless login experience for the user.
- Notification Component: The `Notification` component is used to display notifications to the user. It provides a user-friendly way to communicate important information to the user.
- Login and Logout Functions: The `login` and `destroy` functions are used to handle user authentication and logout. They are imported from the `auth` module and are used to manage the user's authentication status.
- Utility Functions: The `getPrincipalText`, `isAuthenticated`, `tokenBalance`, `tokenSymbol`, `icpBalance`, and `getAddressFromPrincipal` functions are used to interact with the canister contracts and retrieve user information. They are imported from the `auth`, `icrc2_ledger`, and `marketplace` modules.
- State Management: The component uses the `useState` hook to manage the state of the user's authentication status, principal, ICP balance, ICRC balance, token symbol, and address.


## 4. Deploying the Marketplace

Now that we have our canister and frontend ready, let us go ahead and test our application.

### 4.1 Deploying the Marketplace Canister

Firstly, we need to start a local Internet Computer replica. To do this, run the following command:

```bash
dfx start --background
```

Next, run the `deploy-local-ledger.sh` file. This script will deploy the ledger canister to our local replica. This canister is responsible for managing the ICP balance of users on the marketplace.

If you are on a Windows machine, you may need to install the `bash` shell. You can do this by following the instructions [here](https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/)

Once you have installed the bash shell, you can run the following command:

```
./deploy-local-ledger.sh
```

After running the command, you should see a similar output:

```bash 
Your seed phrase for identity 'minter': similar dice when become trick promote talk afraid adjust crop mobile happy noble clump raise situate salute surge fee dynamic drive lazy change wrist
This can be used to reconstruct your key in case of emergency, so write it down in a safe place.
Created identity: "minter".
Using identity: "minter".
Using identity: "default".
Using identity: "minter".
Deploying: ledger_canister
Creating canisters...
Creating canister ledger_canister...
ledger_canister canister created with canister id: ryjl3-tyaaa-aaaaa-aaaba-cai
Building canisters...
Installing canisters...
Installing code for canister ledger_canister, with canister ID ryjl3-tyaaa-aaaaa-aaaba-cai
2023-10-19 18:27:38.687462 UTC: [Canister ryjl3-tyaaa-aaaaa-aaaba-cai] [ledger] init(): minting account is 0bfa8cdfca4432d21bd42b5c330b1b8d8d035b1ab8e52f48f203e7eb7c68f2b2
2023-10-19 18:27:38.687462 UTC: [Canister ryjl3-tyaaa-aaaaa-aaaba-cai] [ledger] init(): using default maximum message size: 1048576
Deployed canisters.
URLs:
  Backend canister via Candid interface:
    dfinity_js_backend: http://127.0.0.1:4943/?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai&id=bkyz2-fmaaa-aaaaa-qaaaq-cai
    ledger_canister: http://127.0.0.1:4943/?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai&id=ryjl3-tyaaa-aaaaa-aaaba-cai
```

Next, go ahead and run 'deploy-local-icrc-ledger' script. This script will deploy the ICRC ledger canister to our local replica. This canister is responsible for managing the ICRC token balances of users on the marketplace.

Run the following command:

```bash
./deploy-local-icrc-ledger.sh
```
After running the command, you should see a similar output:

```bash
Deploying: icrc1_ledger_canister
Creating canisters...
Creating canister icrc1_ledger_canister...
icrc1_ledger_canister canister created with canister id: mxzaz-hqaaa-aaaar-qaada-cai
Building canisters...
Installing canisters...
Installing code for 
```

With that done, we can run the 'deploy-local-identity' script. This script will deploy the Internet Identity canister to our local replica. This canister is responsible for managing user authentication and identity on the marketplace.
```bash
./deploy-local-identity.sh
```
After running the command, you should see a similar output:

```bash
Using identity: "default".
Deploying: internet_identity
Creating canisters...
Creating canister internet_identity...
Creating a wallet canister on the local network.
The wallet canister on the "local" network for user "default" is "bkyz2-fmaaa-aaaaa-qaaaq-cai"
internet_identity canister created with canister id: bd3sg-teaaa-aaaaa-qaaba-cai
Building canisters...
Installing canisters...
Installing code for canister internet_identity, with canister ID bd3sg-teaaa-aaaaa-qaaba-cai
Deployed canisters.
URLs:
  Backend canister via Candid interface:
    icrc1_ledger_canister: http://127.0.0.1:8000/?canisterId=bnz7o-iuaaa-aaaaa-qaaaa-cai&id=mxzaz-hqaaa-aaaar-qaada-cai
    internet_identity: http://127.0.0.1:8000/?canisterId=bnz7o-iuaaa-aaaaa-qaaaa-cai&id=bd3sg-teaaa-aaaaa-qaaba-cai
    ledger_canister: http://127.0.0.1:8000/?canisterId=bnz7o-iuaaa-aaaaa-qaaaa-cai&id=ryjl3-tyaaa-aaaaa-aaaba-cai
Generating type declarations for canister internet_identity:
  /Users/emmanuel/Desktop/work_folder/dacade_official/temporary/src/declarations/internet_identity/internet_identity.did.d.ts
  /Users/emmanuel/Desktop/work_folder/dacade_official/temporary/src/declarations/internet_identity/internet_identity.did.js
  src/declarations/internet_identity/internet_identity.did
```
After running the command, your folder structure should look like this as it also generates the type declarations for the canister:

```bash
├── src
│   ├── declarations
│   ├── dfinity_js_backend
│   │   ├── index.ts
│   │   ├── index.d.ts
│   └── dfinity_js_frontend
│   │   ├── .babelrc
│   │   ├── src
│   │   │   ├── components

```

We are almost done. Go ahead and deploy the backend canister with the following command

```bash
./deploy-local-backend-canister.sh
```
If running for the first time, this may take a while.
After running the command, you should see a similar output:

```bash
Generating type declarations for canister dfinity_js_backend:
  src/declarations/dfinity_js_backend/dfinity_js_backend.did.d.ts
  src/declarations/dfinity_js_backend/dfinity_js_backend.did.js
  src/declarations/dfinity_js_backend/dfinity_js_backend.did
 ```

**Note: Do not forget to run dfx generate dfinity_js_backend anytime you add/remove functions in the canister or when you change the signatures. Otherwise, these changes won't be reflected in IDL's and won't work when called using the JS agent.**

### 4.2 Deploying the Frontend

Next, we need to build our frontend. To do this, run the following command:

```bash
dfx deploy dfinity_js_frontend
```

After running the command, you should see a similar output:

```bash

🎉 Built canister dfinity_js_backend at .azle/dfinity_js_backend/dfinity_js_backend.wasm

Building frontend...
...
Installing canisters...
Module hash bcbbf7090ac24915300e175a6ad419660843e13ca2e54ebd9ed9c95d794512e6 is already installed.
Module hash 587d03a5e6a48c9047e2cf2e8dabc625fb9b999e1e3889b39cfc5fa37b52d9e5 is already installed.
Uploading assets to asset canister...
Fetching properties for all assets in the canister.

  /index.js.map 2/3 (1900000 bytes) sha 46da63c895057ec74ce5d4da8a4982e7b00af89b0fcfd992b5f7897bf5c9263c 
Committing batch.
Committing batch with 29 operations.
Deployed canisters.
URLs:
  Frontend canister via browser
    dfinity_js_frontend: http://127.0.0.1:4943/?canisterId=br5f7-7uaaa-aaaaa-qaaca-cai
  Backend canister via Candid interface:
    dfinity_js_backend: http://127.0.0.1:4943/?canisterId=bnz7o-iuaaa-aaaaa-qaaaa-cai&id=be2us-64aaa-aaaaa-qaabq-cai
    internet_identity: http://127.0.0.1:4943/?canisterId=bnz7o-iuaaa-aaaaa-qaaaa-cai&id=bd3sg-teaaa-aaaaa-qaaba-cai
    ledger_canister: http://127.0.0.1:4943/?canisterId=bnz7o-iuaaa-aaaaa-qaaaa-cai&id=ryjl3-tyaaa-aaaaa-aaaba-cai

```

This command will build our frontend and deploy it to the local replica. It allows you run your custom frontend on the local replica and interact with your canisters.

You can open the frontend in your browser by clicking on the localhost link provided in the dfinity_js_frontend section of the output. It should look like this:

```
  Frontend canister via browser
    dfinity_js_frontend: http://127.0.0.1:4943/?canisterId=br5f7-7uaaa-aaaaa-qaaca-cai
```


**Note**: If you are on codespaces, you need to run the 'canister_urls.py' script with the following comamand

```
./canister_urls.py
```
Then click the links it generates for you to view your deployed application

## 5. Conclusion
In this tutorial, we've explored the process of building a decentralized marketplace on the Internet Computer. We've covered the basics of creating a marketplace canister, including the creation of products, listing products, and purchasing products. We've also explored the process of creating a frontend application that interacts with the marketplace canister. We've covered the basics of user authentication, product listing, and purchasing products.

Now that you've completed this tutorial, you should have a solid understanding of how to build decentralized applications on the Internet Computer.

As you continue to explore and experiment, remember that the Internet Computer and its associated technologies offer a wide array of possibilities. Whether you're interested in decentralized finance (DeFi) platforms, social media applications, decentralized autonomous organizations (DAOs), or something else entirely, the tools and techniques you've learned here will serve as a valuable foundation.

Please note that this course is open source and is licensed under the MIT license. You can also contribute to improving the course content by making pull requests if you have suggestions for improvement. You can do this by visiting the course repository [here](https://github.com/dacadeorg/tutorials/blob/main/ICP/typescript-smart-contract-101/content/typescript-smart-contract-101.md). We welcome any contributions and improvements from the community.

For additional learning and connecting with like-minded individuals, consider visiting the following resources:

- **Discord**: Join the ICP community on Discord where we discuss various topics, troubleshoot, and collaborate. Follow the [link](https://discord.com/invite/cA7y6ezyE2) to join the conversation. Particularly, you can find more focused discussion on Typescript in the specific channel here: [Typescript Channel](https://discord.com/channels/748416164832608337/956466775380336680).
- **Forum**: The [forum](https://forum.dfinity.org/) is a great place to ask questions, share your projects, and learn about what others are working on.
- **The Azle Book**: To deepen your understanding of the Azle framework, check out [The Azle Book](https://demergent-labs.github.io/azle/). It's a comprehensive guide that will take you beyond what we've covered in this tutorial.

These platforms are filled with enthusiastic individuals and helpful resources that can further facilitate your journey into the decentralized web. We look forward to seeing what you'll create!
