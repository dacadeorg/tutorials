<!-- SPDX-License-Identifier: MIT -->
<!-- Copyright (c) 2023 Dacade.org -->

Welcome to the advanced ICP Azle Development 201 tutorial! Building upon the fundamentals you've learned in the ICP Azle Development 101 course, this guide will take you through the development of a decentralized marketplace on the Internet Computer Protocol (ICP) platform. By the end of this guide, you will not only have a deeper understanding of ICP canisters but also a functional decentralized marketplace application.

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
Start by navigating to the [ICP-azle-boilerplate](https://github.com/dacadeorg/ICP-azle-boilerplate/) repository. Select the "Code" button, then the "Local" tab, and copy the repository's URL.

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
├── deploy-local-ledger.sh
├── dfx.json
├── package-lock.json
├── package.json
├── tsconfig.json
└── webpack.config.js
```

We have gone more into the setup of the boilerplate code in the [ICP Typescript 101 Course](https://dacade.org/communities/icp/courses/typescript-smart-contract-101). If you haven't taken this course yet, we recommend you do so before starting this one.

## 3. Canister Development (Backend)
Now that we have our boilerplate code set up, we can begin creating our Marketplace Dapp.

In this section, we will create the Marketplace Canister, implementing functions for adding, viewing, updating, deleting, and buying products, along with a set of helper functions. These functionalities are at the core of your decentralized marketplace application.

The backend of our ICP Marketplace Canister is located in the `src/dfinity_js_backend` folder. The backend is responsible for storing the data and executing the logic of our ICP Marketplace Canister.

### 3.1 Importing Dependencies
Firstly, let us navigate to the `src/dfinity_js_backend/src` folder. You will find a file called `index.ts`. This is where we will create our canister.

Let us first import the necessary libraries.

```typescript
import { query, update, text, Record, StableBTreeMap, Variant, Vec, None, Some, Ok, Err, ic, Principal, Opt, nat64, Duration, Result, bool, Canister } from "azle";
import {
    Ledger, binaryAddressFromAddress, binaryAddressFromPrincipal, hexAddressFromPrincipal
} from "azle/canisters/ledger";
import { hashCode } from "hashcode";
import { v4 as uuidv4 } from "uuid";
```

The code begins with a series of import statements from the Azle library.
These modules provide data structures and functions for working with various data types, including text, records, maps, variants, sequences, and more. They also provide functions for querying and updating data, interacting with the Internet Computer, and working with time durations.

Next, we import the Ledger canister from the Azle library. This canister provides functions for managing financial transactions and ledger operations. It is essential for handling payments within the marketplace smart contract.

We also import the hashCode library and the uuid package. These libraries are used for generating unique identifiers for products and orders within the marketplace smart contract.

### 3.2 Defining Record and Variant Types
In this section, we will define the record and variant types that we will be using in our marketplace smart contract to represent products, orders, and messages.

First, we define the Product record type. This record type will be used to store the data of each product.

```typescript

const Product = Record({
    id: text,
    title: text,
    description: text,
    location: text,
    price: nat64,
    seller: Principal,
    attachmentURL: text,
    soldAmount: nat64
});
```

The `Product` includes fields such as `id` for a unique identifier, `title` for the product's name, `description` for a detailed product description, `location` for the product's origin or shipping address, `price` for the product's price in natural numbers, seller for the `identity` of the product's seller, `attachmentURL` for optional URLs that provide additional product information or images, and `soldAmount` for the amount of the product that has been sold. This record type serves as the foundation for managing and representing products on the marketplace.

In a real-world scenario, this record type would be used to store and manage product listings in the marketplace smart contract. It allows for the structured representation of various product attributes and information.

Let us go ahead and define the other record types that we will be using in our marketplace smart contract.

```typescript
const ProductPayload = Record({
    title: text,
    description: text,
    location: text,
    price: nat64,
    attachmentURL: text
});
```

This record type is used to represent the payload or data needed when creating a product listing. It includes similar fields to the Product record. However, it does not include fields such as `id`, `seller`, and `soldAmount`, which are not required when creating a product listing. This record type is used to represent the data required when creating a product listing.
The `ProductPayload` record will be used when users add new products to the marketplace.


```typescript
const OrderStatus = Variant({
    PaymentPending: text,
    Completed: text
});

const Order = Record({
    productId: text,
    price: nat64,
    status: OrderStatus,
    seller: Principal,
    paid_at_block: Opt(nat64),
    memo: nat64
});

```

The `OrderStatus` variant type represents the possible states an order can have. It includes two states: "PaymentPending" and "Completed," which describe the status of an order. The Order record type, on the other hand, represents an order in the marketplace. It includes fields such as `productId` for the `ID` of the product being ordered, `price` for the order's price, `status` for the order's status (which is one of the variants defined in OrderStatus), `seller` for the identity of the seller, `paid_at_block` to record the block when payment was made (with an optional option), and `memo` for additional order information.

The Order record and OrderStatus variant are essential for tracking and managing orders within the marketplace.

```typescript
const Message = Variant({
    NotFound: text,
    InvalidPayload: text,
    PaymentFailed: text,
    PaymentCompleted: text
});
```

Message Variant: Lastly, the `Message` variant type is used for representing messages or responses within the marketplace. It includes various message types such as "NotFound," "InvalidPayload," "PaymentFailed," and "PaymentCompleted." These message types are used to communicate different outcomes or states of operations within the marketplace, such as finding a product, encountering an invalid payload, handling payment failures, or confirming payment completion.

The Message variant type plays a crucial role in conveying information and feedback to users and clients of the marketplace smart contract.

At this point, our contract should look like this:

```typescript
import { query, update, text, Record, StableBTreeMap, Variant, Vec, None, Some, Ok, Err, ic, Principal, Opt, nat64, Duration, Result, bool, Canister } from "azle";
import {
    Ledger, binaryAddressFromAddress, binaryAddressFromPrincipal, hexAddressFromPrincipal
} from "azle/canisters/ledger";
import { hashCode } from "hashcode";
import { v4 as uuidv4 } from "uuid";

/**
 * This type represents a product that can be listed on a marketplace.
 * It contains basic properties that are needed to define a product.
 */
const Product = Record({
    id: text,
    title: text,
    description: text,
    location: text,
    price: nat64,
    seller: Principal,
    attachmentURL: text,
    soldAmount: nat64
});

const ProductPayload = Record({
    title: text,
    description: text,
    location: text,
    price: nat64,
    attachmentURL: text
});

const OrderStatus = Variant({
    PaymentPending: text,
    Completed: text
});

const Order = Record({
    productId: text,
    price: nat64,
    status: OrderStatus,
    seller: Principal,
    paid_at_block: Opt(nat64),
    memo: nat64
});

const Message = Variant({
    NotFound: text,
    InvalidPayload: text,
    PaymentFailed: text,
    PaymentCompleted: text
});
```

### 3.3 Defining Constants and Storage Variables

Now that we have defined the record types that we will be using in our marketplace smart contract, let us go ahead and define some constants and storage variables that we will be using in our marketplace smart contract.

```typescript
/**
 * `productsStorage` - it's a key-value data structure used to store products listed by sellers in the marketplace.
 * {@link StableBTreeMap} is a self-balancing tree acting as durable data storage that preserves data across canister upgrades.
 * For this contract, we've chosen {@link StableBTreeMap} for several reasons:
 * - `insert`, `get`, and `remove` operations have a constant time complexity of O(1).
 * - Data stored in this map persists across canister upgrades, unlike using a HashMap where data is stored in the heap and can be lost after a canister upgrade.
 */
const productsStorage = StableBTreeMap(text, Product, 0);
```
The `productsStorage` is a key-value data structure used to store products listed by sellers in the marketplace. It is implemented as a `StableBTreeMap`, which is a self-balancing tree with the ability to retain data across canister upgrades. We chose this data structure for its efficient time complexities (O(1) for insert, get, and remove operations) and its resilience against canister upgrades, unlike other data storage options. Canister upgrades are a common occurrence in the ICP ecosystem, and it's essential to ensure data persistence across upgrades.

```typescript
/**
 * `persistedOrders` and `pendingOrders` are also instances of {@link StableBTreeMap}.
 * These data structures are used to manage and store orders within the marketplace.
 */
const persistedOrders = StableBTreeMap(Principal, Order, 1);
const pendingOrders = StableBTreeMap(nat64, Order, 2);

```

The marketplace also uses `persistedOrders` and `pendingOrders` as StableBTreeMap instances to manage and store different types of orders. This includes completed orders, pending orders, and other order-related information.

```typescript
/**
 * `ORDER_RESERVATION_PERIOD` is a constant that defines the reservation period for orders in seconds.
 * This period allows users to reserve products for a specific duration before completing the purchase.
 */
const ORDER_RESERVATION_PERIOD = 120n;

/**
 * Initialization of the Ledger canister, which handles financial transactions and ledger operations.
 * The principal text value is hardcoded here, as it is set in the `dfx.json` configuration.
 */
const icpCanister = Ledger(Principal.fromText("ryjl3-tyaaa-aaaaa-aaaba-cai"));
```
The constant `ORDER_RESERVATION_PERIOD` is used to define the duration, in seconds, during which users can reserve products before confirming their purchase. This adds a layer of flexibility and user experience to the marketplace.
The code initializes the `icpCanister` as a Ledger canister, which handles financial transactions and ledger operations. The principal text value is hardcoded here, as it's typically set in the `dfx.json` configuration.

### 3.4 Defining Query Functions

Now let us implement the body of our canister. We will start by implementing the `getProducts` function.

```typescript
 getProducts: query([], Vec(Product), () => {
    return productsStorage.values();
}),
```
This method is a query to retrieve all products available in the marketplace. It returns a list of products from `productsStorage`.

Next up, we will implement the `getOrders` function.

```typescript
getOrders: query([], Vec(Order), () => {
    return persistedOrders.values();
}),
```
This query returns all orders from persistedOrders.

Next up, we will implement the `getPendingOrders` function.

```typescript
  getPendingOrders: query([], Vec(Order), () => {
    return pendingOrders.values();
}),
```

Similar to getOrders, this query returns pending orders from `pendingOrders`.

### 3.5 Defining Product Management Functions

Next up, let us create the code responsible for managing products within the marketplace smart contract. It encompasses operations such as fetching product details, adding new products, updating existing products, and deleting products.

```typescript
 getProduct: query([text], Result(Product, Message), (id) => {
    const productOpt = productsStorage.get(id);
    if ("None" in productOpt) {
        return Err({ NotFound: `product with id=${id} not found` });
    }
    return Ok(productOpt.Some);
}),
    addProduct: update([ProductPayload], Result(Product, Message), (payload) => {
    if (typeof payload !== "object" || Object.keys(payload).length === 0) {
        return Err({ NotFound: "invalid payoad" })
    }
    const product = { id: uuidv4(), soldAmount: 0n, seller: ic.caller(), ...payload };
    productsStorage.insert(product.id, product);
    return Ok(product);
}),

    updateProduct: update([Product], Result(Product, Message), (payload) => {
    const productOpt = productsStorage.get(payload.id);
    if ("None" in productOpt) {
        return Err({ NotFound: `cannot update the product: product with id=${payload.id} not found` });
    }
    productsStorage.insert(productOpt.Some.id, payload);
    return Ok(payload);
}),
    deleteProduct: update([text], Result(text, Message), (id) => {
    const deletedProductOpt = productsStorage.remove(id);
    if ("None" in deletedProductOpt) {
        return Err({ NotFound: `cannot delete the product: product with id=${id} not found` });
    }
    return Ok(deletedProductOpt.Some.id);
}),

```

### 3.6 Defining Order Management Functions

Next, let us create our `createOrder` function. This function is responsible for creating orders within the marketplace smart contract.

```typescript
  /*
        on create order we generate a hashcode of the order and then use this number as corelation id (memo) in the transfer function
        the memo is later used to identify a payment for this particular order.

        The entire flow is divided into the three main parts:
            1. Create an order
            2. Pay for the order (transfer ICP to the seller). 
            3. Complete the order (use memo from step 1 and the transaction block from step 2)
            
        Step 2 is done on the FE app because we cannot create an order and transfer ICP in the scope of the single method. 
        When we call the `createOrder` method, the ic.caller() would the principal of the identity which initiated this call in the frontend app. 
        However, if we call `ledger.transfer()` from `createOrder` function, the principal of the original caller won't be passed to the 
        ledger canister when we make this call. 
        In this case, when we call `ledger.transfer()` from the `createOrder` method,
        the caller identity in the `ledger.transfer()` would be the principal of the canister from which we just made this call - in our case it's the marketplace canister.
        That's we split this flow into three parts.
    */
createOrder: update([text], Result(Order, Message), (id) => {
    const productOpt = productsStorage.get(id);
    if ("None" in productOpt) {
        return Err({ NotFound: `cannot create the order: product=${id} not found` });
    }
    const product = productOpt.Some;
    const order = {
        productId: product.id,
        price: product.price,
        status: { PaymentPending: "PAYMENT_PENDING" },
        seller: product.seller,
        paid_at_block: None,
        memo: generateCorrelationId(id)
    };
    pendingOrders.insert(order.memo, order);
    discardByTimeout(order.memo, ORDER_RESERVATION_PERIOD);
    return Ok(order);
}),

```

The `createOrder` function takes in a product `ID` as an argument and returns a Result type. If the product is found, it creates an order and returns it. Otherwise, it returns an error message.
It calls the `discardByTimeout` function to discard the order after a certain period of time. This is done to prevent users from reserving products for too long.
We will implement the `discardByTimeout` function later in this tutorial.

The `generateCorrelationId` function also generates a correlation ID for the order which as passed to the memo. This is used to identify the order when making payments.

Now, we can go ahead and implement our `completePurchase` function. This function is responsible for completing orders within the marketplace smart contract. It verifies the payment, updates the order status, and records it in `persistedOrders`.

```typescript
  completePurchase: update([Principal, text, nat64, nat64, nat64], Result(Order, Message), async (seller, id, price, block, memo) => {
    const paymentVerified = await verifyPaymentInternal(seller, price, block, memo);
    if (!paymentVerified) {
        return Err({ NotFound: `cannot complete the purchase: cannot verify the payment, memo=${memo}` });
    }
    const pendingOrderOpt = pendingOrders.remove(memo);
    if ("None" in pendingOrderOpt) {
        return Err({ NotFound: `cannot complete the purchase: there is no pending order with id=${id}` });
    }
    const order = pendingOrderOpt.Some;
    const updatedOrder = { ...order, status: { Completed: "COMPLETED" }, paid_at_block: Some(block) };
    const productOpt = productsStorage.get(id);
    if ("None" in productOpt) {
        throw Error(`product with id=${id} not found`);
    }
    const product = productOpt.Some;
    product.soldAmount += 1n;
    productsStorage.insert(product.id, product);
    persistedOrders.insert(ic.caller(), updatedOrder);
    return Ok(updatedOrder);
}),

```

### 3.7 Verifying and Making Payments

Now let us explore functions to verify and make payments.

```typescript
 /*
        another example of a canister-to-canister communication
        here we call the `query_blocks` function on the ledger canister
        to get a single block with the given number `start`.
        The `length` parameter is set to 1 to limit the return amount of blocks.
        In this function we verify all the details about the transaction to make sure that we can mark the order as completed
    */
verifyPayment: query([Principal, nat64, nat64, nat64], bool, async (receiver, amount, block, memo) => {
    return await verifyPaymentInternal(receiver, amount, block, memo);
}),

    // not used right now. can be used for transfers from the canister for instances when a marketplace can hold a balance account for users
    makePayment: update([text, nat64], Result(Message, Message), async (to, amount) => {
    const toPrincipal = Principal.fromText(to);
    const toAddress = hexAddressFromPrincipal(toPrincipal, 0);
    const transferFeeResponse = await ic.call(icpCanister.transfer_fee, { args: [{}] });
    const transferResult = ic.call(icpCanister.transfer, {
        args: [{
            memo: 0n,
            amount: {
                e8s: amount
            },
            fee: {
                e8s: transferFeeResponse.transfer_fee.e8s
            },
            from_subaccount: None,
            to: binaryAddressFromAddress(toAddress),
            created_at_time: None
        }]
    });
    if ("Err" in transferResult) {
        return Err({ PaymentFailed: `payment failed, err=${transferResult.Err}` })
    }
    return Ok({ PaymentCompleted: "payment completed" });
});

```

The `verifyPayment` function is a query method that communicates with the ledger canister to verify the payment details of a completed order. It takes parameters such as the receiver's identity, payment amount, block number, and a correlation ID for the payment.
This function queries the ledger canister to retrieve transaction details, ensuring the payment's validity and whether it can be marked as completed. It calls the `verifyPaymentInternal` function which we would implement later in this tutorial.

The `makePayment` function is an update method used to initiate a payment transaction from the marketplace canister to a specified recipient. It takes two parameters: the recipient's address and the payment amount.
The function converts the recipient's address from text to a Principal, crucial for addressing canister identities. It calculates the transfer fee and initiates the payment transaction through the ledger canister using the `ic.call` function. It creates a payment request with details such as the memo, payment amount, and transfer fee, then sends it to the recipient's address. If the payment is successful, it returns a Result with the message "payment completed"; otherwise, it returns an error message indicating the failure of the payment transaction.

### 3.8 Helper Functions

Great now we can go ahead and create our helper functions. These functions will be used to help us manage orders within the marketplace smart contract.

```typescript
/*
    a hash function that is used to gene/*
    a hash function that is used to generate correlation ids for orders.
    also, we use that in the verifyPayment function where we check if the used has actually paid the order
*/
function hash(input: any): nat64 {
    return BigInt(Math.abs(hashCode().value(input)));
};

// a workaround to make uuid package work with Azle
globalThis.crypto = {
    // @ts-ignore
    getRandomValues: () => {
        let array = new Uint8Array(32);

        for (let i = 0; i < array.length; i++) {
            array[i] = Math.floor(Math.random() * 256);
        }

        return array;
    }
};

function generateCorrelationId(productId: text): nat64 {
    const correlationId = `${productId}_${ic.caller().toText()}_${ic.time()}`;
    return hash(correlationId);
};

/*
    after the order is created, we give the `delay` amount of minutes to pay for the order.
    if it's not paid during this timeframe, the order is automatically removed from the pending orders.
*/
function discardByTimeout(memo: nat64, delay: Duration) {
    ic.setTimer(delay, () => {
        const order = pendingOrders.remove(memo);
        console.log(`Order discarded ${order}`);
    });
}
function hash(input: any): nat64 {
    return BigInt(Math.abs(hashCode().value(input)));
};

// a workaround to make uuid package work with Azle
globalThis.crypto = {
    // @ts-ignore
    getRandomValues: () => {
        let array = new Uint8Array(32);

        for (let i = 0; i < array.length; i++) {
            array[i] = Math.floor(Math.random() * 256);
        }

        return array;
    }
};

function generateCorrelationId(productId: text): nat64 {
    const correlationId = `${productId}_${ic.caller().toText()}_${ic.time()}`;
    return hash(correlationId);
};

/*
    after the order is created, we give the `delay` amount of minutes to pay for the order.
    if it's not paid during this timeframe, the order is automatically removed from the pending orders.
*/
function discardByTimeout(memo: nat64, delay: Duration) {
    ic.setTimer(delay, () => {
        const order = pendingOrders.remove(memo);
        console.log(`Order discarded ${order}`);
    });
};
```

Let's have a quick look at the above functions.
Hash Function: The `hash` function is utilized to generate correlation IDs for orders within the marketplace canister. These correlation IDs are vital for tracking and verifying payments associated with specific orders. This function takes any input and returns a nat64 value, ensuring it's unique and suitable for use as a correlation ID. It leverages the hashCode library to produce a hash code for the provided input, ensuring a consistent and unique identifier.

Workaround for UUID Package: This section addresses a workaround to make the uuid package compatible with Azle. To ensure that the uuid package functions as expected, a replacement for the `crypto.getRandomValues` function is provided. This replacement generates a pseudo-random array of 32 bytes, facilitating the creation of universally unique identifiers (UUIDs) required for certain operations within the canister.

Generate Correlation ID: The `generateCorrelationId` function is responsible for creating correlation IDs for orders. It combines the product ID, the caller's principal (identity), and the current timestamp to form a unique identifier. This identifier is crucial for distinguishing and verifying orders, especially during payment transactions. It ensures each order has a distinct and traceable correlation ID.

Discard by Timeout: This function is integral to managing pending orders in the marketplace canister. After an order is created, a delay period is specified for the payment to be completed. If the payment is not received within this timeframe, the order is automatically removed from the pending orders. This mechanism prevents orders from remaining in a pending state indefinitely and ensures the marketplace operates efficiently. The function uses the `ic.setTimer` method to trigger the removal of orders after the specified delay, logging a message to indicate the discarded order.

### 3.9 Verifying Payments

Finally, we can create the `verifyPaymentInternal` function. This function is responsible for verifying payments within the marketplace smart contract. It communicates with the ledger canister to retrieve transaction details and verify the payment's validity.

```typescript
async function verifyPaymentInternal(receiver: Principal, amount: nat64, block: nat64, memo: nat64): Promise<bool> {
    const blockData = await ic.call(icpCanister.query_blocks, { args: [{ start: block, length: 1n }] });
    const tx = blockData.blocks.find((block) => {
        if ("None" in block.transaction.operation) {
            return false;
        }
        const operation = block.transaction.operation.Some;
        const senderAddress = binaryAddressFromPrincipal(ic.caller(), 0);
        const receiverAddress = binaryAddressFromPrincipal(receiver, 0);
        return block.transaction.memo === memo &&
            hash(senderAddress) === hash(operation.Transfer?.from) &&
            hash(receiverAddress) === hash(operation.Transfer?.to) &&
            amount === operation.Transfer?.amount.e8s;
    });
    return tx ? true : false;
};
```

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
const IDENTITY_PROVIDER = `http://localhost:4943/?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai#authorize`;
const MAX_TTL = 7 * 24 * 60 * 60 * 1000 * 1000 * 1000;

export async function getAuthClient() {
    return await AuthClient.create();
}

export async function login() {
    const authClient = window.auth.client;

    const isAuthenticated = await authClient.isAuthenticated();

    if (!isAuthenticated) {
        await authClient?.login({
            identityProvider: IDENTITY_PROVIDER,
            onSuccess: async () => {
                window.auth.isAuthenticated = await authClient.isAuthenticated();
                window.location.reload();
            },
            maxTimeToLive: MAX_TTL,
        });
    }
}

export async function logout() {
    const authClient = window.auth.client;
    authClient.logout();
    window.location.reload();
}
```
The auth.js file contains functions for user authentication and logout using the DFINITY AuthClient. Here's an explanation of each part:
- Import AuthClient: The file imports the AuthClient from the `@dfinity/auth-client` package, which is used for authentication.
- Identity Provider URL: `IDENTITY_PROVIDER` is the URL of the webapp for the Internet Identity. This URL is used for user authentication. The canister ID might be different for you, rely on the output of the deploy command to get the correct canister ID.
- Maximum Time to Live: `MAX_TTL` defines the maximum time to live for authentication in nanoseconds. It sets the maximum amount of time the authentication session is allowed to exist before it expires.
- `getAuthClient` Function: This function is used to create an instance of the AuthClient.
- `login` Function: The login function is used to initiate the user login process. It checks if the user is already authenticated, and if not, it uses the AuthClient to trigger the login process. It specifies the identity provider URL, an `onSuccess` callback that updates the page upon successful login, and the maximum time to live for authentication.
- `logout` Function: The logout function is used to log the user out. It calls the logout method of the AuthClient and then reloads the page to reflect the logged-out state.

These functions provide a way for users to log in and log out of the application securely using the DFINITY AuthClient and the Internet Identity.

### 4.2 Canister Factory
Next, let us create another file under the `utils` folder called `canisterFactory.js` with the following code:

```typescript
import { HttpAgent, Actor } from "@dfinity/agent";
import { idlFactory as marketPlaceIDL } from "../../../declarations/dfinity_js_backend/dfinity_js_backend.did.js";
import { idlFactory as ledgerIDL } from "../../../declarations/ledger_canister/ledger_canister.did.js";

const MARKETPLACE_CANISTER_ID = "be2us-64aaa-aaaaa-qaabq-cai";
const LEDGER_CANISTER_ID = "ryjl3-tyaaa-aaaaa-aaaba-cai";
const HOST = "http://localhost:4943";

export async function getMarketplaceCanister() {
    return await getCanister(MARKETPLACE_CANISTER_ID, marketPlaceIDL);
}

export async function getLedgerCanister() {
    return getCanister(LEDGER_CANISTER_ID, ledgerIDL);
}

async function getCanister(canisterId, idl) {
    const authClient = window.auth.client;
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
At the beginning of the code, we import the necessary modules. These modules provide functions and utilities for working with canisters. For instance, we use the `HttpAgent` and `Actor` modules from the `@dfinity/agent` package, and we load the IDL (Interface Description Language) factories for the marketplace and ledger canisters which was generated for us when we ran the `generate` command in the previous section.

We define constant variables that store the canister IDs (`MARKETPLACE_CANISTER_ID` and `LEDGER_CANISTER_ID`) and the host URL (`HOST`). The canister IDs are unique identifiers for the canisters you want to interact with, and the host URL specifies where your application will communicate with these canisters.

To interact with the marketplace canister, we create a function named `getMarketplaceCanister()`. This function invokes another function called `getCanister()` to obtain an instance of the marketplace canister using its canister ID and IDL.

Similarly, for the ledger canister, we have the `getLedgerCanister() `function. This function also calls the `getCanister()` function to retrieve an instance of the ledger canister using its canister ID and IDL.

Finally, the `getCanister()` function is a utility function that encapsulates the process of creating a canister actor. It accepts two important parameters: the canister's unique ID and its associated IDL.

It fetches the user's authenticated identity using the `AuthClient`. An authenticated identity is required to access and interact with the canisters.
An HTTP agent is created to serve as the intermediary between your application and the canister. The agent specifies the development host and the user's identity.
We use await `agent.fetchRootKey()` to fetch the root key.
Finally, it creates an actor for the specified canister using the provided IDL, agent, and canister ID. This actor instance can be used to interact with the methods exposed by the canister.

### 4.3 Ledger utility functions

Next, let us create a file under the `utils` folder called `ledger.js` and paste in the following code:

```javascript
import { AccountIdentifier } from "@dfinity/nns";

export async function transferICP(sellerAddress, amount, memo) {
    const canister = window.canister.ledger;
    const account = AccountIdentifier.fromHex(sellerAddress);
    const result = await canister.transfer({
        to: account.toUint8Array(),
        amount: { e8s: amount },
        memo,
        fee: { e8s: 10000n },
        from_subaccount: [],
        created_at_time: []
    });
    return result.Ok;
}

export async function balance() {
    const canister = window.canister.ledger;
    const address = await window.canister.marketplace.getAddressFromPrincipal(window.auth.principal);
    const balance = await canister.account_balance_dfx({account: address});
    return (balance?.e8s / BigInt(10**8)).toString();
}
```

The file begins by importing the `AccountIdentifier` module from the `@dfinity/nns` package. This module is essential for working with account identifiers.

The `transferICP` function is responsible for transferring ICP from one account to another. It accepts three parameters:

- `sellerAddress`: This parameter represents the address of the account to which ICP will be transferred.
- `amount`: The amount of ICP to transfer, specified in "e8s," which is the smallest unit of ICP (equivalent to one hundred millionth of an ICP).
- `memo`: A memo is a unique identifier for the transaction.

Inside the function:

- We obtain an instance of the ledger canister from the `window.canister` object. This instance is necessary to interact with the ledger.
- We create an `AccountIdentifier` using the provided `sellerAddress`.
- Using the `canister.transfer` method, we initiate the ICP transfer. We specify the recipient's account, the transfer amount, the memo, a fee, and other relevant details.
- The result is then returned. If the transfer is successful, the function returns `true`.

The `balance` function is used to retrieve the account balance of the currently authenticated user. It doesn't transfer ICP but rather queries the balance. It has no parameters.

Inside the function:

- We obtain an instance of the ledger canister from the `window.canister` object.
- We call the `getAddressFromPrincipal` function from the marketplace canister to retrieve the user's account address. This address is necessary for querying the account balance.
- We then use the ledger canister's `account_balance_dfx` method to get the balance of the user's account. The result is an object that contains the balance in "e8s."
- To present the balance in a more user-friendly format, we divide the balance by `BigInt(10**8)` to convert it to ICP.
- The function returns the balance as a string, making it suitable for display in the user interface.

### 4.4 Marketplace utility functions
Next, let us create a file under the `utils` folder called `marketplace.js` with the following code:

```javascript
import { Principal } from "@dfinity/principal";
import { transferICP } from "./ledger";

export async function createProduct(product) {
    return window.canister.marketplace.addProduct(product);
}

export async function getProducts() {
    try {
        return await window.canister.marketplace.getProducts();
    } catch (err) {
        if (err.name === "AgentHTTPResponseError") {
            const authClient = window.auth.client;
            await authClient.logout();
        }
        return [];
    }
}

export async function buyProduct(product) {
    const marketplaceCanister = window.canister.marketplace;
    const orderResponse = await marketplaceCanister.createOrder(product.id);
    const sellerPrincipal = Principal.from(orderResponse.Ok.seller);
    const sellerAddress = await marketplaceCanister.getAddressFromPrincipal(sellerPrincipal);
    const block = await transferICP(sellerAddress, orderResponse.Ok.price, orderResponse.Ok.memo);
    await marketplaceCanister.completePurchase(sellerPrincipal, product.id, orderResponse.Ok.price, block, orderResponse.Ok.memo);
}
```
This file provides functions to interact with the marketplace canister. These functions enable actions such as creating products, retrieving product listings, and buying products within your Internet Computer application.

The `createProduct` function allows users to create and list a new product on the marketplace. It accepts a `product` object as a parameter, which should include essential details about the product, such as its title, description, price, and more. Here's how it works:

- When a user invokes this function, it delegates the request to the `window.canister.marketplace.addProduct(product)` method. This method triggers the creation and listing of the product on the marketplace canister.
- The product details are passed as a parameter to the function.
- The function initiates a call to the marketplace canister, adding the product to the marketplace's listings.
- The result of this operation is returned, indicating the success or failure of the product creation.

The `getProducts` function is responsible for retrieving a list of available products from the marketplace canister. It provides users with the ability to browse and view the products offered on the platform. Here's how it works:

- The function calls `window.canister.marketplace.getProducts()` to request the list of products from the marketplace canister.
- It handles potential errors by checking for an `"AgentHTTPResponseError"` in case of network issues. If such an error occurs, it attempts to log the user out using the authentication client (`window.auth.client`) to maintain a secure user experience.
- The retrieved list of products is returned, allowing the application to display them to the user.

The `buyProduct` function enables users to purchase a product from the marketplace. It involves several steps to complete the purchase transaction. Here's how it works:

- The function first retrieves the marketplace canister instance from `window.canister.marketplace`.
- It initiates the purchase process by calling the `createOrder` method on the marketplace canister, passing the product ID as a parameter. This creates an order and returns essential details, including the seller's information and a memo for the transaction.
- The seller's principal and address are extracted from the order response.
- The function calls the `transferICP` function from the ledger to send the payment to the seller. This step includes details such as the seller's address, the payment amount, and the memo.
- After the payment is successfully sent, the function calls `completePurchase` on the marketplace canister to mark the order as completed.
- The user is now the proud owner of the purchased product.


### 4.5 Notifications utility functions

Next, we'll explore the `initializeContract` function, which plays a vital role in setting up your Internet Computer application by initializing the necessary contracts, including the marketplace and ledger canisters. This initialization step is crucial to ensure a smooth user experience.

Go ahead and create a file called `icp.js` inside your `utils` folder with the following code.

```javascript
import { getMarketplaceCanister, getLedgerCanister } from "./canisterFactory";
import { getAuthClient } from "./auth";

export async function initializeContract() {
    const authClient = await getAuthClient();
    window.auth = {};
    window.canister = {};
    window.auth.client = authClient;
    window.auth.isAuthenticated = await authClient.isAuthenticated();
    window.auth.identity = authClient.getIdentity();
    window.auth.principal = authClient.getIdentity()?.getPrincipal();
    window.auth.principalText = authClient.getIdentity()?.getPrincipal().toText();
    window.canister.marketplace = await getMarketplaceCanister();
    window.canister.ledger = await getLedgerCanister();
}
```

When developing on the Internet Computer, it's essential to create an environment where your application can securely interact with the canisters on the network.
The `initializeContract` function helps establish this environment by:

- Initializing the authentication client.
- Creating a container for the authentication client, the user's identity, and important contract instances.
- Providing essential data such as the user's principal information for further interactions.
- Initializing the marketplace and ledger canisters.

Here's a breakdown of the steps within the `initializeContract` function:

1. **Authentication Client Initialization**:
    - The function begins by initializing the authentication client using the `getAuthClient` function. This client is crucial for authenticating users and managing their identities securely.

2. **Container Setup**:
    - The `window.auth` object is created to store essential user authentication data.
    - The `window.canister` object is created to store instances of canisters, enabling the application to interact with them.

3. **Authentication Data**:
    - The user's authentication status is determined using `await authClient.isAuthenticated()`. This information is stored in `window.auth.isAuthenticated`, which reflects whether the user is currently authenticated.

4. **User Identity and Principal**:
    - The user's identity and principal information are obtained using the authentication client:
        - `window.auth.identity` holds the user's identity, providing a secure and unique identifier.
        - `window.auth.principal` holds the principal information, which represents the user's identity on the Internet Computer.
        - `window.auth.principalText` converts the principal to a text format for ease of display.

5. **Marketplace and Ledger Initialization**:
    - The `getMarketplaceCanister` and `getLedgerCanister` functions are used to initialize instances of the marketplace and ledger canisters, respectively. These instances are stored in `window.canister` for future interactions.


Once you set all this up successfully, your folder structure should look like this

```bash
├── src
│   ├── declarations
│   ├── dfinity_js_backend
│   └── dfinity_js_frontend
│   │   ├── src
│   │   │   ├── utils
│   │   |       ├── auth.js
│   │   |       ├── icp.js.js
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
import { balance as principalBalance } from "./utils/ledger"
import Cover from "./components/utils/Cover";
import { Notification } from "./components/utils/Notifications";


const App = function AppWrapper() {
    const isAuthenticated = window.auth.isAuthenticated;
    const principal = window.auth.principalText;

    const [balance, setBalance] = useState("0");

    const getBalance = useCallback(async () => {
        if (isAuthenticated) {
            setBalance(await principalBalance());
        }
    });

    useEffect(() => {
        getBalance();
    }, [getBalance]);

    return (
        <>
            <Notification />
            {isAuthenticated ? (
                <Container fluid="md">
                    <Nav className="justify-content-end pt-3 pb-5">
                        <Nav.Item>
                            <Wallet
                                principal={principal}
                                balance={balance}
                                symbol={"ICP"}
                                isAuthenticated={isAuthenticated}
                                destroy={destroy}
                            />
                        </Nav.Item>
                    </Nav>
                    <main>
                        <Products />
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

- **User Authentication and Principal**:
    - The `isAuthenticated` variable determines whether the user is authenticated. If authenticated, the user's `principalText` is obtained from `window.auth` to identify them.

- **Wallet Balance**:
    - The user's wallet balance is managed with the `balance` state variable and displayed in the wallet component. It is initially set to "0" and updated when the user is authenticated and their balance is retrieved.

- **UseEffect Hook**:
    - The `useEffect` hook is utilized to trigger the `getBalance` function. This function retrieves the user's balance, ensuring it's up-to-date. The hook's dependencies include the `getBalance` function to handle the balance update.

- **Authenticated User View**:
    - When a user is authenticated, the component displays the user's wallet and products available on the marketplace. The user can interact with the wallet, view products, and make purchases.

- **Unauthenticated User View**:
    - If the user is not authenticated, the component displays a cover image and an invitation to log in. Users can log in using the `login` function from the `auth` module.

- **Notification Component**:
    - A `Notification` component is included for user notifications, although its implementation details are not provided in this tutorial.

The `App` component is a central piece of your Internet Computer application, providing an entry point for users to interact with your platform.

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

```bash
bash deploy-local-ledger.sh
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

Next, go ahead and deploy the internet identity canister. This canister is responsible for managing the authentication of users on the marketplace.

Run the following command:

```bash
dfx deploy internet_identity
```

This command will deploy the internet identity canister to our local replica and create a wallet canister for our user. This wallet canister will be used to manage the ICP balance of our user.

After running the command, you should see a similar output:

```bash
Deploying: internet_identity
Creating a wallet canister on the local network.
The wallet canister on the "local" network for user "minter" is "be2us-64aaa-aaaaa-qaabq-cai"
Creating canisters...
Creating canister internet_identity...
internet_identity canister created with canister id: br5f7-7uaaa-aaaaa-qaaca-cai
Building canisters...
Installing canisters...
Installing code for canister internet_identity, with canister ID br5f7-7uaaa-aaaaa-qaaca-cai
Deployed canisters.
URLs:
  Backend canister via Candid interface:
    dfinity_js_backend: http://127.0.0.1:4943/?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai&id=bkyz2-fmaaa-aaaaa-qaaaq-cai
    internet_identity: http://127.0.0.1:4943/?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai&id=br5f7-7uaaa-aaaaa-qaaca-cai
    ledger_canister: http://127.0.0.1:4943/?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai&id=ryjl3-tyaaa-aaaaa-aaaba-cai
```

With that done, we can now deploy our marketplace canister. Run the following command:

```bash
dfx deploy dfinity_js_backend

```

This command will deploy the marketplace canister to our local replica and also create a Candid interface for our canister. This interface will be used to interact with our canister through the generated interface.

If you are running this command for the first time, it may take a while to deploy. This is because the dfx command line tool needs to build your canister before deploying it. This may take a few minutes.

After running the command, you should see a similar output:

```bash
Deploying: dfinity_js_backend
All canisters have already been created.
Building canisters...
Executing 'npx azle dfinity_js_backend'

Building canister dfinity_js_backend

Done in 77.39s

🎉 Built canister dfinity_js_backend at .azle/dfinity_js_backend/dfinity_js_backend.wasm

Installing canisters...
Upgrading code for canister dfinity_js_backend, with canister ID be2us-64aaa-aaaaa-qaabq-cai
 Deployed canisters.
URLs:
  Frontend canister via browser
    dfinity_js_frontend: http://127.0.0.1:4943/?canisterId=br5f7-7uaaa-aaaaa-qaaca-cai
  Backend canister via Candid interface:
    dfinity_js_backend: http://127.0.0.1:4943/?canisterId=bnz7o-iuaaa-aaaaa-qaaaa-cai&id=be2us-64aaa-aaaaa-qaabq-cai
    internet_identity: http://127.0.0.1:4943/?canisterId=bnz7o-iuaaa-aaaaa-qaaaa-cai&id=bd3sg-teaaa-aaaaa-qaaba-cai
    ledger_canister: http://127.0.0.1:4943/?canisterId=bnz7o-iuaaa-aaaaa-qaaaa-cai&id=ryjl3-tyaaa-aaaaa-aaaba-cai
```

Next, let us go ahead and generate the declaration files for our canisters. Run the following command:

```bash
dfx generate dfinity_js_backend
```

After running the command, you should see a similar output:

```bash
Generating type declarations for canister dfinity_js_backend:
  src/declarations/dfinity_js_backend/dfinity_js_backend.did.d.ts
  src/declarations/dfinity_js_backend/dfinity_js_backend.did.js
  src/declarations/dfinity_js_backend/dfinity_js_backend.did
 ```

After running the command, your folder structure should look like this:

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
