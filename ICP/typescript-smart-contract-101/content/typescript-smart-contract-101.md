<!-- SPDX-License-Identifier: MIT -->
<!-- Copyright (c) 2023 Dacade.org -->

Welcome to this ICP Azle Development 101 tutorial! This tutorial is designed to provide an introduction to developing on the Internet Computer Protocol (ICP) platform. In this guide, you will learn the basics of building and interacting with decentralized Azle canisters. By the end of this guide, you will have a solid understanding of developing for the ICP platform and be able to create the foundation for decentralized applications.

If you want to skip the tutorial and jump straight into the code, you can access the final code for this tutorial in the [Course Repo](https://github.com/dacadeorg/icp-message-board-contract) repository.

## 1. Introduction
In this section, we'll provide an overview of the tutorial, including what you'll learn, the prerequisites, and the tech stack. We'll also introduce you to Azle, the TypeScript framework we'll be using to build our canisters.

### 1.1 What you'll learn
- Setting up your development environment: Understand the necessary tools for ICP development, such as Node.js, Node Version Manager (nvm), and DFX, and learn how to install and use them​.
- Grasping the boilerplate code: Familiarize yourself with the essential files and configurations needed to start an Azle project on the ICP platform, including the `tsconfig.json`, `dfx.json`, and `package.json` files.
- Building and interacting with a messaging canister: Learn how to construct a simple messaging canister that performs CRUD (Create, Read, Update, Delete) operations. You will also learn how to interact with the canister, calling its methods and handling responses. This knowledge will allow you to build a simple message board application, enabling users to create, update, delete, and view messages​.

### 1.2 What is a Canister?
A canister is a fundamental building block and execution environment for deploying and running software applications on the Internet Computer Protocol (ICP) platform. Canisters bundle together code and state to create a secure and efficient execution environment. They are similar to smart contracts on other blockchain platforms. Canisters enable the development of scalable and decentralized applications, including DeFi platforms, social media applications, DAOs, and more.

### 1.3 What is Azle?
Azle is a TypeScript Canister Development Kit (CDK) for the Internet Computer (IC). It provides a set of libraries and tools that make it easy to build and deploy canisters on the IC platform. Azle allows web developers to bring their TypeScript/JavaScript skills to the IC and use various npm packages and VS Code intellisense. In this tutorial, you will use Azle to create and deploy your canisters.

It's important to note that Azle is currently in a beta development stage. This means while it offers a robust and valuable framework for development, it is continuously evolving and may undergo significant changes. As such, there may be occasional hiccups, and it doesn't yet have many live, successful, continuously operating applications deployed to the IC. We encourage all users to read the [disclaimer](https://demergent-labs.github.io/azle/azle.html#disclaimer).

If you want to learn more about Azle, check out the [Azle documentation](https://demergent-labs.github.io/azle/the_azle_book.html).

### 1.4 Prerequisites
While having prior coding experience is necessary, you do not need to have any prior blockchain experience to follow this tutorial. However, we do recommend that you have the following:

- **Knowledge of TypeScript and Node.js**: Familiarity with TypeScript and Node.js is vital, as the tutorial involves building an application using these technologies. If you're new to TypeScript or Node.js, consider going through basic tutorials for both.
- **Text Editor**: You will need a text editor to write and edit code. Visual Studio Code is recommended due to its excellent support for TypeScript and Node.js development, but feel free to use a text editor of your choice.
- **Node.js**: Although you don't need Node.js pre-installed (as we'll show you how to manage it using nvm), it's important to note that Node.js (version 18 or higher) will be necessary for running the DFINITY SDK and the project itself."

### 1.5 Tech Stack
Here are the key technologies and tools we'll be using:

1.  Internet Computer Protocol (ICP): ICP is a decentralized computing platform that facilitates the creation of software, computation, and data that can run on the public internet. It's the platform we'll be building our application on.
2.  Azle: Azle is a TypeScript framework for creating and managing smart contracts, or "canisters," on the Internet Computer Protocol (ICP).
3.  Node.js: Node.js is a JavaScript runtime that allows for the execution of JavaScript outside of a web browser. We'll be using Node.js version 18 for this tutorial.
4.  Node Version Manager (nvm): Nvm is a tool that enables management and switching between different Node.js versions. We'll be using it to manage our Node.js environment.
5.  DFX: DFX is the command-line interface for the Internet Computer. We'll be using it to create and manage our Azle project.
6.  TypeScript: TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. We'll be using it for writing our application's code, and our project will include a configuration file (`tsconfig.json`) for setting up the TypeScript compiler options.
7.  Candid: Candid is an interface description language (IDL) used by Internet Computer for defining and describing the public interfaces of services, i.e., their methods and their input/output types. We'll be using Candid in our project to describe the interface of our canisters.

### 1.6 Overview

1. [Introduction](#1-introduction) (5 min) - In this section, we'll provide an overview of the tutorial, including what you'll learn, the prerequisites, and the tech stack. We'll also introduce you to Azle, the TypeScript framework we'll be using to build our canisters.

2. [Setup](#2-setup) (15 min) - This section will guide you through the necessary steps to set up your project.
3. [Constructing the Messaging Canister](#3-constructing-the-messaging-canister) (45 min) - In this section, we will build a messaging canister with basic CRUD(Create, Read, Update Delete) functionality.
4. [Deploying and Interacting with our Canister](#4-deploying-and-interacting-with-our-canister) (15 min) - In this section, we will interact with the messaging canister via our command line and the Candid web interface.
5. [Conclusion](#5-conclusion) (1 min) - Finally, we will conclude this tutorial and give you some ideas on how to continue.

## 2. Setup
In this section, we will help you set up the boilerplate code for our project. By the end of this section, you'll have a development environment pre-configured with all the necessary tools and dependencies, and you'll be ready to start building your canisters.

### 2.1 Preparing your Development Environment

You can set up your development environment either locally on your machine or in the cloud using GitHub Codespaces.

#### 2.1.1 Option 1: Using GitHub Codespaces

GitHub Codespaces provides a complete, ready-to-use dev environment in your browser. It saves you from the need for local setup, allowing you to concentrate on learning and building.

To create a new Codespace with the boilerplate, go to the [ICP-azle-boilerplate](https://github.com/dacadeorg/ICP-azle-boilerplate/) repository.

Next, click on the "Code" button, then select "Create codespace on main". This action will generate a new Codespace, pre-configured with everything you need to start building this project.

Please note that the first time you open the Codespace, the dependencies for this project will be installed automatically. This process may take a few minutes, but you can monitor the installation progress in the terminal.

#### 2.1.2 Option 2: Setting up Locally

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

### 2.2 Preparing Our Terminal
In this section, we will prepare our terminal environment by installing key tools: Node Version Manager (nvm) and DFX. Please note that the following instructions are specifically for Unix-like systems such as Linux and macOS. If you're on a Windows system, you would need to set up the Windows Subsystem for Linux (WSL) to follow along, or alternatively, you could use GitHub Codespaces. Let's get started.

1. **Install Node Version Manager (nvm)**: Nvm is a useful tool that allows for the management of multiple active Node.js versions. With nvm, switching between different Node.js versions is a breeze. For this tutorial, we'll utilize Node.js version 18. To install nvm, execute the following command in your terminal:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

2. **Switch to Node.js version 20**: Node.js is a JavaScript runtime that enables the execution of JavaScript outside of a browser environment, and it's necessary for running our Azle project. To switch to Node.js version 18 using nvm, use the following command:
```bash
nvm use 20
```

### 2.3.1 Installing DFX
DFX is the command-line interface for the Internet Computer. It provides a set of tools for creating, deploying, and managing canisters.

#### 2.3.1 Installing DFX on MacOS

1. **Install Homebrew**: Homebrew is a package manager for macOS that simplifies the installation of software. To install Homebrew if you do not already have that setup, execute the following command in your terminal:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```


2. ** Update command line tools**:
Go to the terminal and run the following command:
```
xcode-select --install
```

3. **Install Podman**:

Next, install Podman, a container management tool that will be used by DFX. Run the following command in your terminal:

```bash
brew install podman
```

4. **Install DFX**:

```bash
DFX_VERSION=0.16.1 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
```

5. **Add DFX to your PATH**:

```bash
echo 'export PATH="$PATH:$HOME/bin"' >> "$HOME/.bashrc"
```

6. **Verify the installation**:

Restart your terminal and run the following command to verify that DFX has been installed:

```bash
dfx --version
```

#### 2.3.1 Installing DFX on Ubuntu and WSL2
1. **Run sudo installations**:
   Run the command below to install the necessary dependencies:

```bash
sudo apt-get install podman

```

Then continue from step 4 in the MacOS installation guide above.


### 2.3 Understanding the Boilerplate Code
The boilerplate code we've prepared serves as a basic Azle project. It is designed to help you get started quickly by providing the necessary configuration files and dependencies. This code also includes a simple canister that serves as a reference for constructing your own canisters. Let's explore its key components:

**1. TypeScript Configuration File** (`tsconfig.json`): Located in the root directory of your project, this file sets up the TypeScript compiler options. Here is what it looks like:

```JSON
{
   "compilerOptions": {
      "allowSyntheticDefaultImports": true,
      "strictPropertyInitialization": false,
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
         "main": "src/index.ts",
         "candid": "src/index.did",
         "candid_gen": "http",
         "build": "npx azle message_board",
         "wasm": ".azle/message_board/message_board.wasm",
         "gzip": true,
         "metadata": [
            {
               "name": "candid:service",
               "path": "src/index.did"
            },
            {
               "name": "cdk:name",
               "content": "azle"
            }
         ]
      }
   }
}
```

This configuration file communicates vital aspects of your canister to the DFINITY SDK (dfx). Here, we're creating a `message_board` canister using the Azle framework. Let's break down the properties:

-   "canisters": The parent property for defining our canister, `message_board` in this case.
-   "message_board": The name of our canister, used for interacting with it.
-   "type": Describes the framework/language that is used in this canister. It can be Rust, Motoko, or custom (for Azle).
-   "build": Instructs DFX to use the Azle CLI to build the `message_board` canister.
-   "candid": Points DFX to our Candid file (`src/index.did`), an interface description language (IDL) used by Internet Computer.
-   "wasm": Directs DFX to our compiled WebAssembly (WASM) file (`.azle/message_board/message_board.wasm.gz`), a fast, efficient, and secure binary instruction format.
-  "gzip": Indicates that the WASM file should be compressed using gzip.
- "metadata": Contains additional information about the canister, such as its Candid service and the name of the CDK (Canister Development Kit) used. This information is used by DFX to interact with the canister.

**3. Package.json File**: The `package.json` file in the root directory manages the project's metadata and dependencies.

```JSON
  {
   "name": "message_board",
   "version": "0.1.0",
   "description": "Internet Computer message board application",
   "dependencies": {
      "@dfinity/agent": "^0.21.4",
      "@dfinity/candid": "^0.21.4",
      "azle": "^0.20.2",
      "express": "^4.18.2",
      "uuid": "^9.0.1"
   },
   "engines": {
      "node": "^20"
   },
   "devDependencies": {
      "@types/express": "^4.17.21"
   }
}

```

This file is crucial for managing the project's dependencies and scripts. It contains information about the project such as its name, version, and main file. It also lists the dependencies and devDependencies needed for the project, specifying their versions:


- `"azle"`: Azle is a framework for building decentralized applications on the Internet Computer. It provides tools and abstractions that make it easier to write, deploy, and interact with canisters.

- `"uuid"`: The uuid package is a popular JavaScript library for creating unique identifiers. This could be used in your application for any purpose where you need a unique ID, such as creating unique identifiers for users, orders, or other entities.

- The `scripts` section includes commands that can be run from the terminal, while the `engines` section specifies the versions of Node.js that the project is compatible with.

## 3. Constructing the Messaging Canister
In this section, we're going to write our messaging canister. This canister is designed to handle the fundamental CRUD (Create, Read, Update, and Delete) operations, which are key to the functioning of any data-driven application. This functionality enables efficient data management within the canister. More specifically, we're going to use Azle to build a simple message board application, which will allow users to create, update, delete, and view messages.

If you're familiar with TypeScript, you'll find the Azle syntax quite similar. But even if you're new to TypeScript, there's no need to worry - we'll be guiding you through the syntax as we proceed with the development.

### 3.1 Setting Up the Directory and Entry Point

After cloning the boilerplate code, we would see a folder called `src` with a file called `index.ts`. This would be the entrypoint of our canister and will contain our logic.

### 3.2 Importing Dependencies

To start, we need to incorporate several dependencies which our smart contract will make use of. Add the following lines of code at the top of your `index.ts` file:

```typescript
import { v4 as uuidv4 } from 'uuid';
import { Server, StableBTreeMap, ic } from 'azle';
import express from 'express';

```

Here's a brief rundown of what each of these imported items does:

-   `v4 as uuidv4`: This imports the `v4` function from the `uuid` package, which we'll use to generate unique identifiers for our messages.
-  `Server`: This is a class from Azle that represents the server for our canister. It allows us to define and run our canister's HTTP server.
- `StableBTreeMap`: This is a data structure from Azle that we'll use to store our messages. It's a map that associates keys with values, allowing us to store and retrieve messages within our canister.
- `ic`: This is an object from Azle that provides access to the Internet Computer's environment, including the ability to retrieve the current time.
- `express`: This is a popular web framework for Node.js that we'll use to create our HTTP server.

These dependencies will be crucial for building our messaging canister, enabling us to generate unique identifiers, store messages, and create an HTTP server for interacting with our canister.

### 3.3 Defining Message Type

Before we start writing the logic of our canister, it's important to define the structure of the data we'll be working with. In our case, this is the 'Message' that will be posted on the board. This definition will help us ensure consistency and clarity when dealing with messages in our smart contract. Add the following code in the `index.ts` file below the import statements:

```JavaScript
/**
    This type represents a message that can be listed on a board.
*/
class Message {
   id: string;
   title: string;
   body: string;
   attachmentURL: string;
   createdAt: Date;
   updatedAt: Date | null
}

```

This code block defines the 'Message' type, where each message is characterized by a unique identifier, a title, a body, an attachment URL, and timestamps indicating when the message was created and last updated.


### 3.4 Defining the Message Storage

Now that we've defined our message types, we need a place to store these messages. For this, we'll be creating a storage variable in our `index.ts` file below the definition of the message payload type:

```
const messagesStorage = StableBTreeMap<string, Message>(0);

```

This line of code creates a new `StableBTreeMap` called `messagesStorage`. This map will store our messages, associating each message with a unique identifier. The `StableBTreeMap` is a data structure from Azle that provides a durable and efficient way to store and retrieve data within our canister. It's ideal for storing critical and long-term data, ensuring that our messages persist across canister redeployments.


Let's break down the `new StableBTreeMap` constructor:

-   `StableBTreeMap`: This is the class from Azle that represents the stable B-tree map data structure. It's used to store and retrieve data within our canister.
-  `<string, Message>`: This specifies the types of the keys and values in our map. In this case, the keys are strings (the unique identifiers of our messages), and the values are of type `Message`.
-   `(0)`: This is the ID of the stable memory region where our map will be stored. It's used to ensure that our map persists across canister redeployments.


**Note: it is not compulsory to use the StableBTreeMap. We can choose between using tools from the JavaScript standard library like Map or the StableBTreeMap. While both options have their uses, it's important to highlight the significance of the StableBTreeMap. It offers durability, ensuring data persists across canister redeployments, making it suitable for storing critical and long-term data. On the other hand, the Map from the JavaScript standard library is ideal for temporary data as it is erased during redeployments. You should carefully consider your data persistence needs when deciding which data structure to use.**

### 3.5 Creating the Server

The next step is to create an HTTP server that will handle requests to our canister. This server will be responsible for processing incoming requests and returning appropriate responses. Add the following code to your `index.ts` file below the `messageStorage` definition:

```JavaScript
export default Server(() => {
   const app = express();
   app.use(express.json());
```

We initialize our server by calling the `Server` function from Azle. This function takes a callback that returns an instance of the `express` app. We then create an instance of the `express` app and use the `express.json()` middleware to parse incoming requests with JSON payloads.


### 3.6 Creating the Add Message Function

Following on, we will create a function to add new messages. Input the following code into your `index.ts` file :
```JavaScript
   app.post("/messages", (req, res) => {
   const message: Message =  {id: uuidv4(), createdAt: getCurrentDate(), ...req.body};
   messagesStorage.insert(message.id, message);
   res.json(message);
});

```

If you have knowledge of RESTful APIs, you'll recognize that this function is designed to handle POST requests to the `/messages` endpoint. Here's a breakdown of the code:

-   `app.post("/messages", (req, res) => {`: This line sets up a route for POST requests to the `/messages` endpoint. It takes a callback function that receives the request (`req`) and response (`res`) objects.
-  `const message: Message =  {id: uuidv4(), createdAt: getCurrentDate(), ...req.body};`: This line creates a new message object by combining the unique identifier generated by `uuidv4()`, the current date and time, and the data sent in the request body (`req.body`). The `...` syntax is the spread operator, which allows us to merge the properties of `req.body` into the new message object.
- `messagesStorage.insert(message.id, message);`: This line inserts the new message into our `messagesStorage` map, associating it with the unique identifier generated by `uuidv4()`.
- `res.json(message);`: This line sends a JSON response containing the newly created message back to the client.

This function, therefore, allows us to add new messages to our canister.

** Note: The `getCurrentDate` function is not yet defined. We will define it in soon.**

### 3.7 Creating the Get Messages Function

The next step involves creating a function to retrieve all messages that have been added to our canister. Go ahead and the following code into your `index.ts` file:

```JavaScript
  app.get("/messages", (req, res) => {
   res.json(messagesStorage.values());
});
```

This function is relatively straightforward. It sets up a route for GET requests to the `/messages` endpoint and sends a JSON response containing all the messages stored in our `messagesStorage` map. This function, therefore, allows us to retrieve all messages that have been added to our canister.
We call the `values` method on our `messagesStorage` map to retrieve all the messages it contains. This method returns an array of all the values in the map, which we then send back to the client as a JSON response.


### 3.8 Creating the Get Message Function

Our next step is to create a function that allows us to retrieve a specific message by its unique identifier. Insert the following code into your `index.ts` file:

```JavaScript

app.get("/messages/:id", (req, res) => {
   const messageId = req.params.id;
   const messageOpt = messagesStorage.get(messageId);
   if ("None" in messageOpt) {
      res.status(404).send(`the message with id=${messageId} not found`);
   } else {
      res.json(messageOpt.Some);
   }
});
```

This function sets up a route for GET requests to the `/messages/:id` endpoint, where `:id` is a route parameter representing the unique identifier of the message to be retrieved. Here's a breakdown of the code:

-   `app.get("/messages/:id", (req, res) => {`: This line sets up a route for GET requests to the `/messages/:id` endpoint. It takes a callback function that receives the request (`req`) and response (`res`) objects.
-  `const messageId = req.params.id;`: This line retrieves the unique identifier of the message from the route parameters.
- `const messageOpt = messagesStorage.get(messageId);`: This line retrieves the message from our `messagesStorage` map by its unique identifier. The `get` method returns an `Opt` type, which represents the possibility of a value being present (`Some`) or absent (`None`).
- `if ("None" in messageOpt) {`: This line checks if the message was found in the `messagesStorage` map. If it wasn't found, we send a 404 status code and a message indicating that the message with the provided ID was not found.
- `res.json(messageOpt.Some);`: This line sends a JSON response containing the retrieved message back to the client.

This function, therefore, allows us to retrieve a specific message by its unique identifier.

### 3.9 Developing the Update Message Function
Our next step is to create a function that allows us to update an existing message. Add the following code into your `index.ts`:
```JavaScript
  app.put("/messages/:id", (req, res) => {
   const messageId = req.params.id;
   const messageOpt = messagesStorage.get(messageId);
   if ("None" in messageOpt) {
      res.status(400).send(`couldn't update a message with id=${messageId}. message not found`);
   } else {
      const message = messageOpt.Some;
      const updatedMessage = { ...message, ...req.body, updatedAt: getCurrentDate()};
      messagesStorage.insert(message.id, updatedMessage);
      res.json(updatedMessage);
   }
});

```

This function sets up a route for PUT requests to the `/messages/:id` in order to update a specific message by its unique identifier. Here's a breakdown of the code:

-   `app.put("/messages/:id", (req, res) => {`: This line sets up a route for PUT requests to the `/messages/:id` endpoint. It takes a callback function that receives the request (`req`) and response (`res`) objects.
- `const messageId = req.params.id;`: This line retrieves the unique identifier of the message from the route parameters.
- `const messageOpt = messagesStorage.get(messageId);`: This line retrieves the message from our `messagesStorage` map by its unique identifier. The `get` method returns an `Opt` type, which represents the possibility of a value being present (`Some`) or absent (`None`).
- `if ("None" in messageOpt) {`: Just lime in the previous section, line checks if the message was found in the `messagesStorage` map. If it wasn't found, we send a 400 status code and a message indicating that the message with the provided ID was not found.
- `const message = messageOpt.Some;`: This line retrieves the message from the `messageOpt` object.
- `const updatedMessage = { ...message, ...req.body, updatedAt: getCurrentDate()};`: This line creates an updated message by merging the existing message with the data sent in the request body (`req.body`) and adding the current date and time as the `updatedAt` property. The `...` syntax is the spread operator, which allows us to merge the properties of `req.body` into the existing message.
- `messagesStorage.insert(message.id, updatedMessage);`: This line inserts the updated message into our `messagesStorage` map, associating it with the unique identifier of the original message.
- `res.json(updatedMessage);`: This line sends a JSON response containing the updated message back to the client.

### 3.10 Creating a Function to Delete a Message

The final step in our canister development is to create a function that allows for message deletion. Go ahead and add the following code into your `index.ts` file below the `updateMessage` function:
```JavaScript
app.delete("/messages/:id", (req, res) => {
   const messageId = req.params.id;
   const deletedMessage = messagesStorage.remove(messageId);
   if ("None" in deletedMessage) {
      res.status(400).send(`couldn't delete a message with id=${messageId}. message not found`);
   } else {
      res.json(deletedMessage.Some);
   }
});
```
Just like in the previous sections, this function sets up a route for DELETE requests to the `/messages/:id` endpoint in order to delete a specific message by its unique identifier.
We use the `remove` method on our `messagesStorage` map to delete the message with the provided ID. This method returns an `Opt` type, which represents the possibility of a value being present (`Some`) or absent (`None`). If the message was found and deleted, we send a JSON response containing the deleted message back to the client. If the message was not found, we send a 400 status code and a message indicating that the message with the provided ID was not found.

Finally, in order to allow our server to listen for incoming requests, we need to add the following line of code at the end of our `index.ts` file:
```JavaScript
return app.listen();
}); // to close the Server function.
```

### 3.11 Get Current Date Function

Before we can run our canister, we need to define the `getCurrentDate` function that we've been using in our code.
**Note: The `getCurrentDate` function will be defined outside the `Server` function.**

```JavaScript
function getCurrentDate() {
    const timestamp = new Number(ic.time());
    return new Date(timestamp.valueOf() / 1000_000);
}
```

This function retrieves the current time from the Internet Computer environment using the `ic.time()` method. It then converts the timestamp to a JavaScript `Date` object and returns it. This function will be used to set the `createdAt` and `updatedAt` properties of our messages.


### 3.12 The Final Code
At the end of this step, your `index.ts` file should look like this:

```JavaScript
import { v4 as uuidv4 } from 'uuid';
import { Server, StableBTreeMap, ic } from 'azle';
import express from 'express';

/**
 * `messagesStorage` - it's a key-value datastructure that is used to store messages.
 * {@link StableBTreeMap} is a self-balancing tree that acts as a durable data storage that keeps data across canister upgrades.
 * For the sake of this contract we've chosen {@link StableBTreeMap} as a storage for the next reasons:
 * - `insert`, `get` and `remove` operations have a constant time complexity - O(1)
 * - data stored in the map survives canister upgrades unlike using HashMap where data is stored in the heap and it's lost after the canister is upgraded
 *
 * Brakedown of the `StableBTreeMap(string, Message)` datastructure:
 * - the key of map is a `messageId`
 * - the value in this map is a message itself `Message` that is related to a given key (`messageId`)
 *
 * Constructor values:
 * 1) 0 - memory id where to initialize a map.
 */

/**
 This type represents a message that can be listed on a board.
 */
class Message {
   id: string;
   title: string;
   body: string;
   attachmentURL: string;
   createdAt: Date;
   updatedAt: Date | null
}

const messagesStorage = StableBTreeMap<string, Message>(0);

export default Server(() => {
   const app = express();
   app.use(express.json());

   app.post("/messages", (req, res) => {
      const message: Message =  {id: uuidv4(), createdAt: getCurrentDate(), ...req.body};
      messagesStorage.insert(message.id, message);
      res.json(message);
   });

   app.get("/messages", (req, res) => {
      res.json(messagesStorage.values());
   });

   app.get("/messages/:id", (req, res) => {
      const messageId = req.params.id;
      const messageOpt = messagesStorage.get(messageId);
      if ("None" in messageOpt) {
         res.status(404).send(`the message with id=${messageId} not found`);
      } else {
         res.json(messageOpt.Some);
      }
   });

   app.put("/messages/:id", (req, res) => {
      const messageId = req.params.id;
      const messageOpt = messagesStorage.get(messageId);
      if ("None" in messageOpt) {
         res.status(400).send(`couldn't update a message with id=${messageId}. message not found`);
      } else {
         const message = messageOpt.Some;
         const updatedMessage = { ...message, ...req.body, updatedAt: getCurrentDate()};
         messagesStorage.insert(message.id, updatedMessage);
         res.json(updatedMessage);
      }
   });

   app.delete("/messages/:id", (req, res) => {
      const messageId = req.params.id;
      const deletedMessage = messagesStorage.remove(messageId);
      if ("None" in deletedMessage) {
         res.status(400).send(`couldn't delete a message with id=${messageId}. message not found`);
      } else {
         res.json(deletedMessage.Some);
      }
   });

   return app.listen();
});

function getCurrentDate() {
   const timestamp = new Number(ic.time());
   return new Date(timestamp.valueOf() / 1000_000);
}
```

## 4. Deploying and Interacting with our Canister

Having completed the coding of our canister, it's now time to deploy and interact with it.

### 4.1. Starting the Local Internet Computer

The first step is to initialize our local Internet Computer replica, which is essentially an instance of the Internet Computer blockchain where our canister will run. We'll start this replica in the background to allow for other operations. This can be done by executing the following command in your terminal:

```Bash
dfx start --host 127.0.0.1:8000
```

Upon successful execution, your terminal will display an output similar to the one below. This output confirms that a local instance of the Internet Computer is running, and it also provides a link to a dashboard where you can monitor the status of your local instance.

```Bash
Running dfx start for version 0.16.1
Using the default definition for the 'local' shared network because /Users/<username>/.config/dfx/networks.json does not exist.
Dashboard: http://localhost:49846/_/dashboard
```

In this output, the URL for the dashboard (<http://localhost:49846/_/dashboard>) will be particularly helpful for debugging and observing the activity of your local replica.


**IMPORTANT NOTE**
StableBTreeMap, which is the data structure we use for `messageStorage`, has certain constraints that you need to be aware of. Specifically, once a StableBTreeMap is initialized, its configuration becomes immutable. This means that you cannot make changes to aspects such as the data types or sizes of the keys or values.

If you need to make any changes to these elements of the StableBTreeMap, you will need to restart your local replica with the `--clean` flag. The `--clean` flag ensures that the replica is started afresh, allowing for the changes in configuration to take effect.

Here's how you can do it:

```Bash
dfx start --host 127.0.0.1:8000 --clean
```

Remember, only use the `--clean` flag if you have made changes to the configuration of your StableBTreeMap. If no changes have been made, a regular start of the local replica (i.e., without the `--clean` flag) will suffice.

### 4.2. Deploying the Canister

#### 4.2.1. Deploying the Canister on Codespaces
If you are on codespaces, simply run the already prepared 'canister_urls.py' script. This script will deploy the canister and print the canister's URL.
Run the following command:
```Bash
./canister_urls.py
```

Finally, click the generated link to the canister's URL to interact with it.

#### 4.2.2. Deploying the Canister on Localhost
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


**Note: if you would like your canister to auto reload after changes, you can run the command**

```
AZLE_AUTORELOAD=true dfx deploy
```

Ensure to set this to false when deploying to the mainnet.

```Bash


### 4.3. Interacting with our canister
There are two primary ways to interact with our canister: through the command line interface (CLI) or the web interface. We'll begin with the CLI.

#### 4.3.1. Interacting with our canister through the CLI
To interact with our canister through the CLI, we'll be using the `curl` command. This command allows us to make HTTP requests to our canister's endpoints. We'll be using the `curl` command to add, retrieve, update, and delete messages.

Before we begin, we need to first get our canister ID. This can be done by executing the following command in your terminal:

```Bash
dfx canister id <CANISTER_NAME>
```
where `<CANISTER_NAME>` is the name of your canister. In our case, it's `message_board` so the command will be:
```Bash
dfx canister id message_board
```

This command will return the unique identifier of your canister. You will need this identifier to interact with your canister.

After running the `dfx canister id` command, you should receive a response similar to this:
```Bash
bkyz2-fmaaa-aaaaa-qaaaq-cai
```

This output indicates that the unique identifier of your canister is `bkyz2-fmaaa-aaaaa-qaaaq-cai`. You will use this identifier to interact with your canister.

With tha generated, the url of your canister will be:
```Bash
http://<CANISTER_ID>.localhost:8000
``` 
where `<CANISTER_ID>` is the unique identifier of your canister. In our case, it's `bkyz2-fmaaa-aaaaa-qaaaq-cai` so the url will be:
```Bash
http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:8000
```

Now that we have our canister ID, we can begin interacting with our canister through the CLI. We'll be using the `curl` command to make HTTP requests to our canister's endpoints.

**1. Adding a message**
First, let's invoke the addMessage function from our canister file, which we created earlier. This function will add a message to our canister. Execute the following command in your terminal:
```Bash
curl -X POST http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:8000/messages -H "Content-type: application/json" -d '{"title": "todo list", "body": "some important things", "attachmentURL": "url/path/to/some/photo/attachment"}'
```

If the function call is successful, you should receive a response similar to this:

```Bash
{
    "id": "d8326ec8-fe70-402e-8914-ca83f0f1055b",
    "createdAt": "2024-02-09T11:24:32.441Z",
    "title": "todo list",
    "body": "some important things",
    "attachmentURL": "url/path/to/some/photo/attachment"
}
```
This output indicates that the `addMessage` function has successfully added a message to your canister.

**2. Retrieving a single message**
To retrieve a single message, invoke the `getMessage` function.

```curl http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:8000/messages/d8326ec8-fe70-402e-8914-ca83f0f1055b```
Where `d8326ec8-fe70-402e-8914-ca83f0f1055b` is the unique ID of the message you wish to retrieve.

**3. Updating a message**
To update a message, use the `updateMessage` function.
```curl -X PUT  http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:8000/messages/d8326ec8-fe70-402e-8914-ca83f0f1055b -H "Content-type: application/json" -d '{"title": "UPDATED TITLE", "body": "some important things", "attachmentURL": "url/path/to/some/photo/attachment"}'```
Where `d8326ec8-fe70-402e-8914-ca83f0f1055b` is the unique ID of the message you wish to update.

**4. Retrieving messages**
To retrieve all messages, invoke the `getMessages` function. In this case, we're not passing any argument to the function. Here's the command:

```curl http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:8000/messages```

**5. Deleting a message**
To delete a message, use the `deleteMessage` function. Replace `79daba82-18ce-4f69-afa1-7b3389368d1f` with the unique ID of the message you wish to delete. Here's the command:

```curl -X DELETE http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:8000/messages/d8326ec8-fe70-402e-8914-ca83f0f1055b```
Where `d8326ec8-fe70-402e-8914-ca83f0f1055b` is the unique ID of the message you wish to delete.


Try for yourself, to add, retrieve, update, and delete messages using the CLI.

Now that we've covered the CLI, let's move on to the web interface.

#### 4.3.2. **Getting a message with the web interface**
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

## 5. Conclusion
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
