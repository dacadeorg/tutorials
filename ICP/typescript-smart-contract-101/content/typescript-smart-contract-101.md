<!-- SPDX-License-Identifier: MIT -->
<!-- Copyright (c) 2023 Dacade.org -->

Welcome to this ICP Azle Development 101 tutorial! This tutorial is designed to provide an introduction to developing on the Internet Computer Protocol (ICP) platform. In this guide, you will learn the basics of building and interacting with decentralized Azle canisters. By the end of this guide, you will have a solid understanding of developing for the ICP platform and be able to create the foundation for decentralized applications.

### What you'll learn
- Setting up your development environment: Understand the necessary tools for ICP development, such as Node.js, Node Version Manager (nvm), and DFX, and learn how to install and use them​.
- Grasping the boilerplate code: Familiarize yourself with the essential files and configurations needed to start an Azle project on the ICP platform, including the `tsconfig.json`, `dfx.json`, and `package.json` files.
- Building and interacting with a messaging canister: Learn how to construct a simple messaging canister that performs CRUD (Create, Read, Update, Delete) operations. You will also learn how to interact with the canister, calling its methods and handling responses. This knowledge will allow you to build a simple message board application, enabling users to create, update, delete, and view messages​.

### What is a Canister?
A canister is a fundamental building block and execution environment for deploying and running software applications on the Internet Computer Protocol (ICP) platform. Canisters bundle together code and state to create a secure and efficient execution environment. They are similar to smart contracts on other blockchain platforms. Canisters enable the development of scalable and decentralized applications, including DeFi platforms, social media applications, DAOs, and more.

### What is Azle?
Azle is a TypeScript Canister Development Kit (CDK) for the Internet Computer (IC). It provides a set of libraries and tools that make it easy to build and deploy canisters on the IC platform. Azle allows web developers to bring their TypeScript/JavaScript skills to the IC and use various npm packages and VS Code intellisense. In this tutorial, you will use Azle to create and deploy your canisters.

It's important to note that Azle is currently in a beta development stage. This means while it offers a robust and valuable framework for development, it is continuously evolving and may undergo significant changes. As such, there may be occasional hiccups, and it doesn't yet have many live, successful, continuously operating applications deployed to the IC. We encourage all users to read the [disclaimer](https://demergent-labs.github.io/azle/azle.html#disclaimer).

If you want to learn more about Azle, check out the [Azle documentation](https://demergent-labs.github.io/azle/the_azle_book.html).

### Prerequisites
While having prior coding experience is necessary, you do not need to have any prior blockchain experience to follow this tutorial. However, we do recommend that you have the following:

- **Knowledge of TypeScript and Node.js**: Familiarity with TypeScript and Node.js is vital, as the tutorial involves building an application using these technologies. If you're new to TypeScript or Node.js, consider going through basic tutorials for both.
- **Text Editor**: You will need a text editor to write and edit code. Visual Studio Code is recommended due to its excellent support for TypeScript and Node.js development, but feel free to use a text editor of your choice.
- **Node.js**: Although you don't need Node.js pre-installed (as we'll show you how to manage it using nvm), it's important to note that Node.js (version 18 or higher) will be necessary for running the DFINITY SDK and the project itself."

### Tech Stack
Here are the key technologies and tools we'll be using:

1.  Internet Computer Protocol (ICP): ICP is a decentralized computing platform that facilitates the creation of software, computation, and data that can run on the public internet. It's the platform we'll be building our application on.
2.  Azle: Azle is a TypeScript framework for creating and managing smart contracts, or "canisters," on the Internet Computer Protocol (ICP).
3.  Node.js: Node.js is a JavaScript runtime that allows for the execution of JavaScript outside of a web browser. We'll be using Node.js version 18 for this tutorial.
4.  Node Version Manager (nvm): Nvm is a tool that enables management and switching between different Node.js versions. We'll be using it to manage our Node.js environment.
5.  DFX: DFX is the command-line interface for the Internet Computer. We'll be using it to create and manage our Azle project.
6.  TypeScript: TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. We'll be using it for writing our application's code, and our project will include a configuration file (`tsconfig.json`) for setting up the TypeScript compiler options.
7.  Candid: Candid is an interface description language (IDL) used by Internet Computer for defining and describing the public interfaces of services, i.e., their methods and their input/output types. We'll be using Candid in our project to describe the interface of our canisters.

### Overview

1. [Setup](#1-setup) (15 min) - This section will guide you through the necessary steps to set up your project.
2. [Constructing the Messaging Canister](#2-constructing-the-messaging-canister) (45 min) - In this section, we will build a messaging canister with basic CRUD(Create, Read, Update Delete) functionality.
3. [Deploying and Interacting with our Canister](#3-deploying-and-interacting-with-our-canister) (15 min) - In this section, we will interact with the messaging canister via our command line and the Candid web interface.
4. [Conclusion](#4-conclusion) (1 min) - Finally, we will conclude this tutorial and give you some ideas on how to continue.


## 1. Setup
In this section, we will help you set up the boilerplate code for our project. By the end of this section, you'll have a development environment pre-configured with all the necessary tools and dependencies, and you'll be ready to start building your canisters.

### 1.1 Preparing your Development Environment

You can set up your development environment either locally on your machine or in the cloud using GitHub Codespaces.

#### 1.1.1 Option 1: Using GitHub Codespaces

GitHub Codespaces provides a complete, ready-to-use dev environment in your browser. It saves you from the need for local setup, allowing you to concentrate on learning and building.

To create a new Codespace with the boilerplate, go to the [ICP-azle-boilerplate](https://github.com/dacadeorg/ICP-azle-boilerplate/) repository.

Next, click on the "Code" button, then select "Create codespace on main". This action will generate a new Codespace, pre-configured with everything you need to start building this project.

Please note that the first time you open the Codespace, the dependencies for this project will be installed automatically. This process may take a few minutes, but you can monitor the installation progress in the terminal.

#### 1.1.2 Option 2: Setting up Locally

If you prefer to set up your development environment locally, start by navigating to the [ICP-azle-boilerplate](https://github.com/dacadeorg/ICP-azle-boilerplate/) repository. Select the "Code" button, then the "Local" tab, and copy the repository's URL.

In your terminal, navigate to the directory where you want to store your project, then clone the repository to your local machine by running:

```Bash
git clone https://github.com/dacadeorg/ICP-azle-boilerplate.git
```

Next, move into the cloned repository's directory with:

```bash
cd ICP-azle-boilerplate
```

Finally, install the project's dependencies by running:

```bash
npm install
```

This command will install all the necessary dependencies for the project. Once the installation is complete, you're ready to start building your canisters!

### 1.2 Preparing Our Terminal
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

5. **Reload your terminal (if using GitHub Codespaces)**: Reload your terminal (if using GitHub Codespaces): If you're using GitHub Codespaces for this tutorial, you'll need to reload your terminal to ensure all changes are properly applied. You can do this by clicking on the "Reload" button located in the top-right corner of your terminal.

### 1.3 Understanding the Boilerplate Code
The boilerplate code we've prepared serves as a basic Azle project. It is designed to help you get started quickly by providing the necessary configuration files and dependencies. This code also includes a simple canister that serves as a reference for constructing your own canisters. Let's explore its key components:

**1. TypeScript Configuration File** (`tsconfig.json`): Located in the root directory of your project, this file sets up the TypeScript compiler options. Here is what it looks like:

```JSON
{
   "compilerOptions": {
      "strict": true,
      "target": "ES2020",
      "moduleResolution": "node",
      "allowJs": true,
      "outDir": "HACK_BECAUSE_OF_ALLOW_JS"
   }
}
```

You can learn more about these options in the [TypeScript documentation](https://www.typescriptlang.org/tsconfig).

**2. DFX Configuration File** (`dfx.json`): Also in the root directory, this file configures DFX and includes the following:
```JSON
{
   "canisters": {
      "message_board": {
         "type": "custom",
         "build": "npx azle message_board",
         "root": "src",
         "ts": "src/index.ts",
         "wasm": ".azle/message_board/message_board.wasm",
         "gzip": true
      }
   }
}
```

This configuration file communicates vital aspects of your canister to the DFINITY SDK (dfx). Here, we're creating a `message_board` canister using the Azle framework. Let's break down the properties:

-   "canisters": The parent property for defining our canister, `message_board` in this case.
- message_board is the name of our canister, used for interacting with it.
- The `main` property is the entry point of our canister. This is where we will be writing our code.
- The `type` property describes the framework/language that is used in this canister. It can be Rust, Motoko, or custom (for Azle).
- The `build` property instructs DFX to use the Azle CLI to build the `message_board` canister.
- The `root` directs DFX to the `src` folder and `src/index.ts` file respectively for our code.
- The `ts` property tells DFX where to look for our TypeScript code.
- The `wasm` property directs DFX to our compiled WebAssembly (WASM) file (`.azle/message_board/message_board.wasm.gz`), a fast, efficient, and secure binary instruction format.
- The `gzip` property tells DFX to gzip our compiled wasm file which will reduce the size of our canister.

**3. Package.json File**: The `package.json` file in the root directory manages the project's metadata and dependencies.

```JSON
{
   "name": "dfinity_project",
   "main": "index.js",
   "dependencies": {
      "@dfinity/agent": "^0.19.2",
      "@dfinity/candid": "^0.19.2",
      "azle": "^0.18.6",
      "uuid": "^9.0.0"
   },
   "engines": {
      "node": "^12 || ^14 || ^16 || ^18"
   },
   "devDependencies": {
      "@types/uuid": "^9.0.1"
   }
}
```

This file is crucial for managing the project's dependencies and scripts. It contains information about the project such as its name, version, and main file. It also lists the dependencies and devDependencies needed for the project, specifying their versions:


- `"azle"`: Azle is a framework for building decentralized applications on the Internet Computer. It provides tools and abstractions that make it easier to write, deploy, and interact with canisters.

- `"uuid"`: The uuid package is a popular JavaScript library for creating unique identifiers. This could be used in your application for any purpose where you need a unique ID, such as creating unique identifiers for users, orders, or other entities.

- The `scripts` section includes commands that can be run from the terminal, while the `engines` section specifies the versions of Node.js that the project is compatible with.

## 2. Constructing the Messaging Canister
In this section, we're going to write our messaging canister. This canister is designed to handle the fundamental CRUD (Create, Read, Update, and Delete) operations, which are key to the functioning of any data-driven application. This functionality enables efficient data management within the canister. More specifically, we're going to use Azle to build a simple message board application, which will allow users to create, update, delete, and view messages.

If you're familiar with TypeScript, you'll find the Azle syntax quite similar. But even if you're new to TypeScript, there's no need to worry - we'll be guiding you through the syntax as we proceed with the development.

### 2.1 Setting Up the Directory and Entry Point

After cloning the boilerplate code, we would see a folder called `src` with a file called `index.ts`. This would be the entrypoint of our canister and will contain our logic.

### 2.2 Importing Dependencies

To start, we need to incorporate several dependencies which our smart contract will make use of. Add the following lines of code at the top of your `index.ts` file:
```
import { query, update, Canister, text, Record, StableBTreeMap, Ok, None, Some, Err, Vec, Result, nat64, ic, Opt, Variant } from 'azle';
import { v4 as uuidv4 } from 'uuid';
```
Here's a brief rundown of what each of these imported items does:

- `$query` is an annotation that allows us to query information from our canister.
- `$update` is an annotation that allows us to update information in our canister.
- `Record` is a type that allows us to create a record type.
- `StableBTreeMap` is used for creating a map data structure.
- `Vec` is a type that allows us to create a vector type.
- `match` is a function that allows us to match on a result.
- `Result` is a type that allows us to create a result type.
- `nat64` is a type that allows us to create a 64-bit unsigned integer type.
- `ic` is a type that allows us to create an Internet Computer type.
- `Opt` is a type that allows us to create an optional type.
- `Variant` is a type that allows us to create a variant type.
- `uuidv4` is a function that allows us to generate a unique ID.

### 2.3 Defining Message Type

Before we start writing the logic of our canister, it's important to define the structure of the data we'll be working with. In our case, this is the 'Message' that will be posted on the board. This definition will help us ensure consistency and clarity when dealing with messages in our smart contract. Add the following code in the `index.ts` file below the import statements:

```JavaScript
/**
 * This type represents a message that can be listed on a board.
 */

const Message = Record({
           id: text,
           title: text,
           body: text,
           attachmentURL: text,
           createdAt: nat64,
           updatedAt: Opt(nat64)
        });
```

This code block defines the 'Message' type, where each message is characterized by a unique identifier, a title, a body, an attachment URL, and timestamps indicating when the message was created and last updated.

### 2.4 Defining Message Payload Type

After defining the structure of a Message, we need to specify what kind of data will be sent to our smart contract. This is called the payload. In our context, the payload will contain the basic information needed to create a new message.

Add the following code in the `index.ts` file below the definition of the message type:

```JavaScript
const MessagePayload = Record({
   title: text,
   body: text,
   attachmentURL: text
});
```

This 'MessagePayload' type outlines the structure of the data that will be sent to our smart contract when a new message is created. Each payload consists of a title, a body, and an attachment URL.


### 2.5 Defining the Error Type

Next, we need to define the type of error that will be returned if something goes wrong. Add the following code in the `index.ts` file below the definition of the message payload type:

```JavaScript
const Error = Variant({
   NotFound: text,
   InvalidPayload: text,
});
```

This 'Error' type outlines the structure of the error that will be returned if something goes wrong. It consists of two possible errors: 'NotFound' and 'InvalidPayload'. The 'NotFound' error is returned when a message with the given ID is not found, while the 'InvalidPayload' error is returned when the payload is invalid.


### 2.6 Defining the Message Storage

Now that we've defined our message types, we need a place to store these messages. For this, we'll be creating a storage variable in our `index.ts` file below the definition of the message payload type:

```
const messagesStorage = StableBTreeMap(text, Message, 0);
```

This line of code establishes a storage variable named `messageStorage`, which is a map associating strings (our keys) with messages (our values). This storage will allow us to store and retrieve messages within our canister.

Let's break down the `new StableBTreeMap` constructor:

-   The first argument `text` sets the type of the key in this map, which is a string.
-   The second argument `Message` sets the type of the value in this map, which is a message.
-   The third argument `0` sets the maximum number of entries in this map. This is optional, and we've set it to 0, which means there is no limit to the number of entries in this map.

**Note: it is not compulsory to use the StableBTreeMap. We can choose between using tools from the JavaScript standard library like Map or the StableBTreeMap. While both options have their uses, it's important to highlight the significance of the StableBTreeMap. It offers durability, ensuring data persists across canister redeployments, making it suitable for storing critical and long-term data. On the other hand, the Map from the JavaScript standard library is ideal for temporary data as it is erased during redeployments. You should carefully consider your data persistence needs when deciding which data structure to use.**


### 2.7 Creating the Canister's default export

The next step is to create the canister's default export. This is the entry point of our canister, and it's where we'll be writing our code. Add the following code to your `index.ts` file below the definition of the message storage:

```JavaScript
export default Canister({
// rest of the code here

})
```

We would add all the the functions we are going to create in the next steps inside the default Canister export.

### 2.8 Creating the Get Messages Function

The next step is to create a function inside of our Canister that retrieves all messages stored within our canister. To accomplish this, add the following code to your `index.ts` file below the definition of the message storage:
```JavaScript
getMessages: query([], Result(Vec(Message), Error), () => {
   return Ok(messagesStorage.values());
}),
```
This `getMessages` function gives us access to all messages on our message board. We return an Ok result with the values of our messageStorage variable..

The function returns a `Result<Vec<Message>, Error>`. This means the function either returns a `Vec<Message>` if successful or an `Error` if unsuccessful.

### 2.9 Creating the Get Message Function

The next step involves creating a function to retrieve a specific message using its unique identifier (ID). Add the following code to your `index.ts` file below the `getMessages` function:

```JavaScript
getMessage: query([text], Result(Message, Error), (id) => {
   const messageOpt = messagesStorage.get(id);
   if ("None" in messageOpt) {
      return Err({ NotFound: `the message with id=${id} not found` });
   }
   return Ok(messageOpt.Some);
}),
```

This is quite similar with the previous function, the difference is we search for a message by its unique ID, if no message is found, we return an error, otherwise, we return the message.

This function, therefore, allows us to specifically query a message by its unique ID. If no message is found for the provided ID, we clearly communicate this by returning an informative error message."

### 2.10 Creating the Add Message Function

Following on, we will create a function to add new messages. Input the following code into your `index.ts` file below the `getMessage` function:
```JavaScript
addMessage: update([MessagePayload], Result(Message, Error), (payload) => {
   const message = { id: uuidv4(), createdAt: ic.time(), updatedAt: None, ...payload };
   messagesStorage.insert(message.id, message);
   return Ok(message);
}),
```
Here's a detailed exploration of the key components:

-   The function `addMessage` is defined, which accepts a parameter `payload` of type `MessagePayload`. This payload will contain the data for the new message to be created.

-   Inside the function, we generate a new `Message` object. The `id` field of the message is assigned a unique identifier generated by the `uuidv4` function. The `createdAt` field is assigned the current time retrieved using `ic.time()`. The `updatedAt` field is set to `Opt.None` since the message has not been updated at the point of creation. Finally, the remaining fields are spread from the `payload` using the spread operator (`...payload`).

-   The newly created message is then inserted into the `messageStorage` using the `insert` method. The `id` of the message is used as the key.

-   The function concludes by returning the newly created message, wrapped in an `Ok` result.

This function thus facilitates the creation of new messages within our canister, providing each with a unique identifier and timestamp.

### 2.11 Developing the Update Message Function
Our next step is to create a function that allows us to update an existing message. Insert the following code into your `index.ts` file below the `addMessage` function:
```JavaScript
updateMessage: update([text, MessagePayload], Result(Message, Error), (id, payload) => {
   const messageOpt = messagesStorage.get(id);
   if ("None" in messageOpt) {
      return Err({ NotFound: `couldn't update a message with id=${id}. message not found` });
   }
   const message = messageOpt.Some;
   const updatedMessage = { ...message, ...payload, updatedAt: Some(ic.time()) };
   messagesStorage.insert(message.id, updatedMessage);
   return Ok(updatedMessage);
}),
```

This function, will change the state of our canister. Here's a breakdown of the new elements:

-   The `updateMessage` function takes two parameters: `text`, which represents the unique identifier of the message to be updated, and `MessagePayload`, which contains the new data for the message.
-  Inside the function, we use the `get` method to retrieve the message with the given ID from our `messageStorage`. If no message is found, we return an error message wrapped in an `Err` result.
-  If a message is found, we use the spread operator (`...`) to spread the message's fields into a new object. We then spread the `payload` into this new object, overwriting the existing fields with the new data. Finally, we set the `updatedAt` field to the current time using `ic.time()`.
- The updated message is then inserted into the `messageStorage` using the `insert` method. The `id` of the message is used as the key.
- The function concludes by returning the updated message, wrapped in an `Ok` result.

This `updateMessage` function thus enables us to update the contents of an existing message within our canister.

### 2.12 Creating a Function to Delete a Message

The final step in our canister development is to create a function that allows for message deletion. Insert the following code into your `index.ts` file below the `updateMessage` function:
```JavaScript
   deleteMessage: update([text], Result(Message, Error), (id) => {
   const deletedMessage = messagesStorage.remove(id);
   if ("None" in deletedMessage) {
      return Err({ NotFound: `couldn't delete a message with id=${id}. message not found` });
   }
   return Ok(deletedMessage.Some);
})
});
```

We use the match function to match on the result of removing a message by its ID. If a message is found, we call the remove function on our messageStorage and return the deleted message. If no message is found, we display an error to the user.

### 2.13 Configuring the UUID Package

A notable point is that the uuidV4 package may not function correctly within our canister. To address this, we need to apply a workaround that ensures compatibility with Azle. Insert the following code at the end of your `index.ts` file:
```JavaScript
// a workaround to make uuid package work with Azle
globalThis.crypto = {
     // @ts-ignore
    getRandomValues: () => {
        let array = new Uint8Array(32)

        for (let i = 0; i < array.length; i++) {
            array[i] = Math.floor(Math.random() * 256)
        }

        return array
    }
}
```

In this block of code, we're extending the `globalThis` object by adding a `crypto` property to it. This property is an object with a method called `getRandomValues`. This method generates an array of random values, which is required by the `uuidV4` function to generate unique IDs. Here's how it works:

-   We create a new `Uint8Array` with 32 elements. Each element is an 8-bit unsigned integer, meaning it can hold a value between 0 and 255.

-   We then iterate over this array, assigning each element a random value between 0 and 255. This is achieved by using `Math.random()` to generate a random float between 0 and 1, then multiplying it by 256 and rounding down to the nearest whole number with `Math.floor()`.

-   Finally, we return this array of random values. This array is used by the `uuidV4` function to create unique IDs for our messages.

By adding this block of code, we ensure that the `uuidV4` package works smoothly with the Azle framework within our canister."

### 2.14 The Final Code
At the end of this step, your `index.ts` file should look like this:

```JavaScript
import { query, update, Canister, text, Record, StableBTreeMap, Ok, None, Some, Err, Vec, Result, nat64, ic, Opt, Variant } from 'azle';
import { v4 as uuidv4 } from 'uuid';

/**
 * This type represents a message that can be listed on a board.
 */
const Message = Record({
   id: text,
   title: text,
   body: text,
   attachmentURL: text,
   createdAt: nat64,
   updatedAt: Opt(nat64)
});

const MessagePayload = Record({
   title: text,
   body: text,
   attachmentURL: text
});

const Error = Variant({
   NotFound: text,
   InvalidPayload: text,
});

/**
 * `messagesStorage` - it's a key-value datastructure that is used to store messages.
 * {@link StableBTreeMap} is a self-balancing tree that acts as a durable data storage that keeps data across canister upgrades.
 * For the sake of this contract we've chosen {@link StableBTreeMap} as a storage for the next reasons:
 * - `insert`, `get` and `remove` operations have a constant time complexity - O(1)
 * - data stored in the map survives canister upgrades unlike using HashMap where data is stored in the heap and it's lost after the canister is upgraded
 *
 * Brakedown of the `StableBTreeMap(text, Message)` datastructure:
 * - the key of map is a `messageId`
 * - the value in this map is a message itself `Message` that is related to a given key (`messageId`)
 *
 * Constructor values:
 * 1) text - the type of the key in the map
 * 2) Message - the type of the value in the map.
 * 3) 0 - memory id where to initialize a map.
 */
const messagesStorage = StableBTreeMap(text, Message, 0);

export default Canister({
   getMessages: query([], Result(Vec(Message), Error), () => {
      return Ok(messagesStorage.values());
   }),
   getMessage: query([text], Result(Message, Error), (id) => {
      const messageOpt = messagesStorage.get(id);
      if ("None" in messageOpt) {
         return Err({ NotFound: `the message with id=${id} not found` });
      }
      return Ok(messageOpt.Some);
   }),
   addMessage: update([MessagePayload], Result(Message, Error), (payload) => {
      const message = { id: uuidv4(), createdAt: ic.time(), updatedAt: None, ...payload };
      messagesStorage.insert(message.id, message);
      return Ok(message);
   }),
   updateMessage: update([text, MessagePayload], Result(Message, Error), (id, payload) => {
      const messageOpt = messagesStorage.get(id);
      if ("None" in messageOpt) {
         return Err({ NotFound: `couldn't update a message with id=${id}. message not found` });
      }
      const message = messageOpt.Some;
      const updatedMessage = { ...message, ...payload, updatedAt: Some(ic.time()) };
      messagesStorage.insert(message.id, updatedMessage);
      return Ok(updatedMessage);
   }),
   deleteMessage: update([text], Result(Message, Error), (id) => {
      const deletedMessage = messagesStorage.remove(id);
      if ("None" in deletedMessage) {
         return Err({ NotFound: `couldn't delete a message with id=${id}. message not found` });
      }
      return Ok(deletedMessage.Some);
   })
});

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
```

## 3. Deploying and Interacting with our Canister

Having completed the coding of our canister, it's now time to deploy and interact with it.

### 3.1. Starting the Local Internet Computer

The first step is to initialize our local Internet Computer replica, which is essentially an instance of the Internet Computer blockchain where our canister will run. We'll start this replica in the background to allow for other operations. This can be done by executing the following command in your terminal:

```Bash
dfx start --background
```

Upon successful execution, your terminal will display an output similar to the one below. This output confirms that a local instance of the Internet Computer is running, and it also provides a link to a dashboard where you can monitor the status of your local instance.

```Bash
Running dfx start for version 0.14.0
Using the default definition for the 'local' shared network because /Users/<username>/.config/dfx/networks.json does not exist.
Dashboard: http://localhost:49846/_/dashboard
```

In this output, the URL for the dashboard (<http://localhost:49846/_/dashboard>) will be particularly helpful for debugging and observing the activity of your local replica.


**IMPORTANT NOTE**
StableBTreeMap, which is the data structure we use for `messageStorage`, has certain constraints that you need to be aware of. Specifically, once a StableBTreeMap is initialized, its configuration becomes immutable. This means that you cannot make changes to aspects such as the data types or sizes of the keys or values.

If you need to make any changes to these elements of the StableBTreeMap, you will need to restart your local replica with the `--clean` flag. The `--clean` flag ensures that the replica is started afresh, allowing for the changes in configuration to take effect.

Here's how you can do it:

```Bash
dfx start --background --clean
```

Remember, only use the `--clean` flag if you have made changes to the configuration of your StableBTreeMap. If no changes have been made, a regular start of the local replica (i.e., without the `--clean` flag) will suffice.

### 3.2. Deploying the Canister
Next, we will compile our canister code and install it on the local network using the `dfx deploy` command:

```Bash
dfx deploy
```

The `dfx deploy` command is a convenient way to register, build, and deploy a canister on the Internet Computer network. By default, it targets all canisters defined in the project's `dfx.json` configuration file. This command combines the following steps into one:

1.  Creating the canister (`dfx canister create --all`)
2.  Building the canister (`dfx build`)
3.  Installing the canister (`dfx canister install --all`)

Executing the `dfx deploy` command should result in an output similar to:
```Bash
Creating the "default" identity.
WARNING: The "default" identity is not stored securely. Do not use it to control a lot of cycles/ICP.
To create a more secure identity, create and use an identity that is protected by a password using the following commands:
    dfx identity new <my-secure-identity-name> # creates a password protected identity
    dfx identity use <my-secure-identity-name> # uses this identity by default

  - generating new key at /Users/alice/.config/dfx/identity/default/identity.pem
Your seed phrase: 
...
```

Note: If this is your first time running the `dfx deploy` command, it may take a moment to register, build, and deploy your application. Take this time to relax as the system does its work.

Once the command completes, you should see a message indicating the successful deployment of your canisters. The output will include URLs for interacting with your backend canister through the Candid interface. For example:
```Bash
Deployed canisters.
URLs:
  Backend canister via Candid interface:
    message_board: http://127.0.0.1:4943/?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai&id=bkyz2-fmaaa-aaaaa-qaaaq-cai
```

The provided URL (in this case: http://127.0.0.1:4943/?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai&id=bkyz2-fmaaa-aaaaa-qaaaq-cai) is the endpoint for your message_board canister. This URL links to a Candid interface, which provides a web-based interface for interacting with your canister's methods.

You can view a GIF illustrating this process:
![](https://hackmd.io/_uploads/rk7ViLpL2.gif)

### 3.3. Interacting with our canister
There are two primary ways to interact with our canister: through the command line interface (CLI) or the web interface. We'll begin with the CLI.

#### 3.3.1. Interacting with our canister through the CLI
To interact with our canister through the CLI, we'll be using the `dfx canister call` command. This command allows us to invoke functions on our canister from the terminal.

**1. Adding a message**
First, let's invoke the addMessage function from our canister file, which we created earlier. This function will add a message to our canister. Execute the following command in your terminal:
```Bash
dfx canister call message_board addMessage '(record {"title"= "Welcome"; "body"= "Hello World"; "attachmentURL"= "url/path/to/some/photo/attachment"})'
```

If the function call is successful, you should receive a response similar to this:

```Bash
(
  variant {
    Ok = record {
      id = "79daba82-18ce-4f69-afa1-7b3389368d1f";
      attachmentURL = "url/path/to/some/photo/attachment";
      title = "Welcome";
      updatedAt = null;
      body = "Hello World";
      createdAt = 1_685_568_853_915_736_000 : nat64;
    }
  },
)
```
This output indicates that the `addMessage` function has successfully added a message to your canister. The message includes a unique identifier, attachment URL, title, body, and creation timestamp. The `updatedAt` field remains `null` because the message has not been updated since it was created.

**2. Retrieving a single message**
To retrieve a single message, invoke the `getMessage` function. Replace `79daba82-18ce-4f69-afa1-7b3389368d1f` with the unique ID of the message you wish to retrieve. Here's the command:

```dfx canister call message_board getMessage '("79daba82-18ce-4f69-afa1-7b3389368d1f")'```

**3. Updating a message**
To update a message, use the `updateMessage` function. Replace `79daba82-18ce-4f69-afa1-7b3389368d1f` with the unique ID of the message you wish to update. Here's the command:

```dfx canister call message_board updateMessage '("79daba82-18ce-4f69-afa1-7b3389368d1f", record {"title"= "new title"; "body"= "new message"; "attachmentURL"= "url/path/to/some/photo/attachment"})'```

**4. Retrieving messages**
To retrieve all messages, invoke the `getMessages` function. In this case, we're not passing any argument to the function. Here's the command:

```dfx canister call message_board getMessages '()'```

**5. Deleting a message**
To delete a message, use the `deleteMessage` function. Replace `79daba82-18ce-4f69-afa1-7b3389368d1f` with the unique ID of the message you wish to delete. Here's the command:

```dfx canister call message_board deleteMessage '("79daba82-18ce-4f69-afa1-7b3389368d1f")'```


Try for yourself, to add, retrieve, update, and delete messages using the CLI.

Now that we've covered the CLI, let's move on to the web interface.

2. **Getting a message with the web interface**
   Now we are using the web interface to get the message we just created. Let's invoke the `getMessage` function from our canister file.

To view the message we just added, we can make use of the candid interface that was generated to us when we ran the  "dfx deploy" command.

It should look something like this:
```
http://127.0.0.1:4943/?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai&id=bkyz2-fmaaa-aaaaa-qaaaq-cai
```

Note: In Codespaces, the web interface might sometimes not be displayed correctly. In that case, you will need to use the CLI to interact with your canister.

In the interface, click on the `getMessage` function. Then, enter the ID of the message you wish to retrieve. In this instance, we'll be retrieving the message we just created, hence we'll need to input the ID that we received from the `addMessage` function response. Please note, your message ID will differ from the example given here.

After entering the ID, click on the `Call` button. If done correctly, you should receive a response similar to this:


```Bash
(
  variant {
    Ok = record {
      id = "79daba82-18ce-4f69-afa1-7b3389368d1f";
      attachmentURL = "url/path/to/some/photo/attachment";
      title = "message list";
      updatedAt = null;
      body = "some important things";
      createdAt = 1_685_568_853_915_736_000 : nat64;
    }
  },
)
```

You can view a GIF illustrating this process of interacting with the web interface:
![](https://hackmd.io/_uploads/HJNcuITI3.gif)

Now you can use the web interface to interact with the same functions we used in the CLI.

To conclude your work session, you can stop your local Azle replica by executing the following command in your terminal:

```Bash
dfx stop
```

This command will shut down your local replica. Remember to always stop your local replica when you're done working to free up system resources."

## 4. Conclusion
In this tutorial, we've walked you through the process of building and interacting with a decentralized Azle canister. We introduced you to key concepts related to the Internet Computer and canisters and then guided you through the steps to set up your project and construct a message web3 canister with basic CRUD functionality.

You learned how to deploy your canister using `dfx deploy` and how to interact with it both through the terminal and the Candid web interface. We explored how to execute various functions like `addMessage`, `getMessages`, `updateMessage`, and `deleteMessage`, and discussed the structure and usage of the commands required.

By working through this tutorial, you have gained hands-on experience with the Azle framework, one of the many tools available for building applications on the Internet Computer. This knowledge is a stepping stone for building more complex and robust decentralized applications (dApps) on this emerging platform.

As you continue to explore and experiment, remember that the Internet Computer and its associated technologies offer a wide array of possibilities. Whether you're interested in decentralized finance (DeFi) platforms, social media applications, decentralized autonomous organizations (DAOs), or something else entirely, the tools and techniques you've learned here will serve as a valuable foundation.

Please note that this course is open source and is licensed under the MIT license. You can also contribute to improving the course content by making pull requests if you have suggestions for improvement. You can do this by visiting the course repository [here](https://github.com/dacadeorg/tutorials/blob/main/ICP/typescript-smart-contract-101/content/typescript-smart-contract-101.md). We welcome any contributions and improvements from the community.

For additional learning and connecting with like-minded individuals, consider visiting the following resources:

- **Discord**: Join the ICP community on Discord where we discuss various topics, troubleshoot, and collaborate. Follow the [link](https://discord.com/invite/cA7y6ezyE2) to join the conversation. Particularly, you can find more focused discussion on Typescript in the specific channel here: [Typescript Channel](https://discord.com/channels/748416164832608337/956466775380336680).
- **Forum**: The [forum](https://forum.dfinity.org/) is a great place to ask questions, share your projects, and learn about what others are working on.
- **The Azle Book**: To deepen your understanding of the Azle framework, check out [The Azle Book](https://demergent-labs.github.io/azle/). It's a comprehensive guide that will take you beyond what we've covered in this tutorial.

These platforms are filled with enthusiastic individuals and helpful resources that can further facilitate your journey into the decentralized web. We look forward to seeing what you'll create!
