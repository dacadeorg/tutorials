Welcome to the TypeScript AI Dapp Tutorial! In this tutorial, we will be building a decentralized AI chatbot using the Internet Computer Protocol (ICP). The chatbot will be able to respond to user messages and answer questions using the OpenAI API. We will also be using the DFINITY Canister SDK to deploy the chatbot on the Internet Computer.

## 1. Introduction

### 1.1 Learning Objectives

By the end of this tutorial, learners will be able to:

1. Understand the architecture of a decentralized AI chatbot.
2. Configure and deploy a chatbot on the Internet Computer Protocol.
3. Integrate OpenAI API for AI-driven chat functionalities.
4. Manage and secure sensitive credentials in a decentralized application.

### 1.2 Tech Stack

Here are the technologies we will be using in this tutorial:

- **Internet Computer Protocol (ICP)**: The core platform for deploying the chatbot, providing a decentralized infrastructure.
- **JavaScript/TypeScript**: Used for the development of the chatbot, leveraging modern web development practices.
- **Node.js**: The runtime environment for executing the JavaScript code outside of a browser.
- **Express**: Node.js web application framework that provides a robust set of features for web and mobile applications, APIs.
- **DFINITY Canister SDK**: A toolkit for building and deploying applications on the Internet Computer.
- **Internet Identity**: A decentralized identity management system for the Internet Computer.
- **OpenAI API**: Utilized for AI functionalities within the chatbot.

### 1.3 Prerequisites

- Basic understanding of JavaScript and TypeScript.
- Familiarity with Node.js and its ecosystem.
- Knowledge of decentralized applications (DApps) is beneficial but not necessary.
- Access to OpenAI API credentials.

### 1.4 Overview

1. **Introduction**: You are here! We will be going over the learning objectives, tech stack, and prerequisites for this tutorial.
2. **Setting Up the Project**: We will be setting up the project and installing the necessary dependencies.
3. **Exploring the Code**: We will be exploring the code of the project and discussing the architecture of the chatbot and looking into the most important files.
4. **Conclusion**: We will be concluding the tutorial and discussing next steps.

## 2. Setting Up the Project

In this chapter, we'll guide you through setting up the TypeScript AI Chatbot project. This process includes cloning the project repository, installing necessary dependencies, and preparing your development environment. Follow these steps to ensure a smooth setup.

### 2.1 Cloning the Repository

First, you need to clone the repository containing the project's code. Open your terminal and run the following command:

```bash
git clone https://github.com/Jonath-z/Decentralized-bot
```

### 2.2 Setting Up Credentials

The chatbot uses the OpenAI API, which requires API credentials.

- You can find your OpenAI API key in the interface of your OpenAI account. If you don't have an account yet, you can create one [here](https://platform.openai.com/).
- The API key can be found in the [API keys](https://platform.openai.com/api-keys) page of your account.

### 2.3 Installing DFX

The DFINITY Canister SDK (DFX) is a toolkit for building and deploying applications on the Internet Computer. We will be using DFX to deploy the chatbot on the Internet Computer Protocol. Follow the instructions [here](https://internetcomputer.org/docs/current/developer-docs/setup/install#installing-the-ic-sdk-1) to install DFX on your machine. Make sure to install the latest version of DFX, currently **`0.17.*`**.

Once the installation is complete, run the following command to verify that DFX is installed correctly:

```bash
dfx --version
```

### 2.4 Installing Dependencies

Once DFX is installed, install the dependencies for the chatbot canister. Make sure you are in the root directory of the project and run the following command:

```bash
npm install
```

### 2.5 Running the Chatbot Locally

Now that the project is set up, you can run the chatbot locally. Before we do that, we need to start the local Internet Computer replica. Run the following command to start the replica:

```bash
dfx start --clean
```

We are using the **`--clean`** flag to ensure that the replica is started with a clean state. This is useful when you have previously deployed canisters to the local network and want to start fresh.

Once the replica is running, open a **new terminal window**, make sure you are in the root directory of the project, and run the following command:

```bash
dfx deploy
```

This command deploys both the frontend and backend canisters to your local network. However, you could also deploy the canisters separately.

After the deployment is complete, you should see an output similar to this:

```bash
Frontend canister via browser dfinity_js_frontend: http://127.0.0.1:4943/?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai
Backend canister via Candid interface dfinity_js_backend: http://127.0.0.1:4943/?canisterId=br5f7-7uaaa-aaaaa-qaaca-cai&id=bkyz2-fmaaa-aaaaa-qaaaq-cai
internet_identity: http://127.0.0.1:4943/?canisterId=br5f7-7uaaa-aaaaa-qaaca-cai&id=be2us-64aaa-aaaaa-qaabq-cai
```

You can now access the chatbot at the URL of the frontend canister. In this case, the URL is **`http://127.0.0.1:4943/?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai`** but it may be different for you. Copy the URL and paste it in your browser to access the chatbot.

### 2.6 Testing the Chatbot

Now that the chatbot is running locally, you can test it. First, you need to log in to the chatbot using the Internet Identity. Click on the **`Login`** button and follow the instructions to log in. You may need to create a new Internet Identity, but since we are running it locally, this is goes very quickly.

Once you are logged in, you can start chatting with the bot.

## 3. Exploring the Code

In this chapter, we will be exploring the code of the project and discussing the architecture of the chatbot. We will also be looking into the most important files of the project.

### 3.1 Project Structure

The project is structured as follows:

```bash
├── .gitignore
├── README.md
├── deploy-local-ledger.sh
├── dfx.json
├── package-lock.json
├── package.json
├── tsconfig.json
├── webpack.config.js
src/
    dfinity_js_backend/
    dfinity_js_frontend/
```

The most important files and directories are:

- **`deploy-local-ledger.sh`**: A shell script for deploying the canisters to the local network.
- **`dfx.json`**: The configuration file for DFX. It contains the configuration for the canisters and the local network.
- **`dfinity_js_backend`**: The directory containing the source code of the backend canister.
- **`dfinity_js_frontend`**: The directory containing the source code of the frontend canister.

### 3.2 Backend Canister

The backend canister is responsible for storing the chat history. It is written in TypeScript and uses the DFINITY Canister SDK to communicate with the Internet Computer Protocol. The backend canister is located in the **`dfinity_js_backend`** directory.

The structure of the backend canister is as follows:

```bash
src/
    dfinity_js_backend/src
        ├── index.did
        ├── index.ts
        utils/
            ├── ai.ts
```

#### 3.2.1 `index.ts`

We are looking at the **`index.ts`** file located in the **`dfinity_js_backend/src`** directory. This file contains the code which is responsible for managing the routes calls and saving the messages.
It contains routes for creating a conversation, add a message in a conversation deleting the conversation, as well as retreiving the conversation.

```ts
import { StableBTreeMap, Server } from "azle";
import { v4 as uuidv4 } from "uuid";
import { systemMessage } from "./utils/ai";
import express, { Request, Response } from "express";
import cors from "cors";
```

The file starts by importing necessary functions from **`azle`**, a library for building decentralized applications on the Internet Computer Protocol
in TypeScript. It also imports **`express`** a Node.js framework that provides a set of features for building web and mobile applications.
Last, it imports **`cors`** a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

```ts
type Message = {
  role: string;
  content: string;
  id: string;
};

type ConversationPayload = { userIdentity: string };

type AddMessgeToConversationPayload = {
  userIdentity: string;
  conversationId: string;
  message: Partial<Message>;
};

type Conversation = {
  id: string;
  conversation: Message[];
};

type ErrorMessage = { message: string };
```

In this file, we aslo defines all the models for the data that will be used in our express canister,
**`Message`** for the message, **`Conversation`** for the conversation, **`ErrorMessage`** for the error message that will be sent to the frontend in case of an error, **`ConversationPayload`** the payload model for creating a new conversation, **`AddMessgeToConversationPayload`** the payload model for adding a new message in a conversation.

```ts
const userConversation = StableBTreeMap<string, Conversation>(0);
```

Next, the file initializes **`userConversation`** as a **`StableBTreeMap`**, a data structure used for storing conversations. The map is keyed by `string` and contains `Conversation` values. The map is initialized with an memory id of 0.

```ts
export default Server(() => {
  const app = express();
  app.use(express.json());
  app.use(cors());

  ...
})
```

The code exports a default function **`Server`** a function imported from azle for building canisters that act as HTTP servers on ICP. These servers can serve static files or act as API backends, or both.
Inside this function, the server is defined along with its routes.

Here, **`express()`** creates an Express application. **`express.json()`** middleware is used to parse incoming JSON payloads. **`cors()`** middleware is used to enable Cross-Origin Resource Sharing (CORS), allowing the server/canister to handle requests from different origins.

```ts
app.put("/conversation", (req: Request, res: Response) => {
  const conversationPayload = req.body as ConversationPayload;
  if (!conversationPayload) {
    return res.status(400).json({ message: "Invalid conversation payload" });
  }

  // Generate unique IDs for message and conversation
  const message = { ...systemMessage, id: uuidv4() };
  const conversation = { id: uuidv4(), conversation: [message] };

  // Insert the conversation into storage
  userConversation.insert(conversationPayload.userIdentity, conversation);

  // Respond with the created conversation
  return res.status(200).json({
    conversation,
    id: conversation.id,
    initiator: conversationPayload.userIdentity,
  });
});
```

This endpoint is used to create a new conversation. It expects a JSON payload containing information about the conversation (**`conversationPayload`**). It creates a system message with a unique ID, creates a conversation object with a unique ID containing this message, and then stores this conversation in **`userConversation`** storage. Finally, it responds with the created conversation object.

There are additional routes for retrieving, and deleting conversation, we will not be going over them in this tutorial.

#### 3.2.2 `index.did`

This file contains the interface for the backend canister. It defines the service provided by the canister and the methods it exposes. The file is written in Candid, an interface description language for the Internet Computer Protocol. This file automatically generated by DFX when you deploy the canister. If you want to learn more follow the Typescript Smart Contract 101 tutorial [here](https://dacade.org/communities/icp/courses/typescript-smart-contract-101).

#### 3.2.3 `utils/ai.ts`

The **`ai.ts`** file contains and export a message object that set the system message for the bot.

```ts
export const systemMessage = {
  role: "system",
  content:
    "Hello! 👋 I'm a decentralized chatbot deployed on ICP (Internet Computer Protocol) blockchain",
};
```

### 3.3 Frontend Canister

The frontend canister is responsible for providing the user interface for the chatbot. It is written in JavaScript and uses the JavaScript **`fetch`** API to communicate with the Backend canister. The frontend canister is located in the **`dfinity_js_frontend`** directory.

The structure of the frontend canister is as follows:

```bash
        dfinity_js_frontend/
            ...
            src/
                ├── App.js
                ├── index.js
                ...
                components/
                ...
                hooks/
                    ├── useApi.js
                utils/
                    ├── auth.js
                    ├── canisterFactory.js
                    ├── chat.js
                    ├── icp.js
                    ├── localStorageController.js
                    ├── encryptData.js.js
```

The most important files and directories are:

- **`src/App.js`**: The main file of the frontend canister. It contains the code for the chatbot's user interface.
- **`src/index.js`**: The entry point of the frontend canister. It contains the code for initializing the canister and rendering the chatbot's user interface.
- **`src/components`**: The directory containing the React components of the chatbot. We will not be going over them here, they should be pretty straightforward.
- **`src/hooks`**: The directory containing the custom hook for managing API calls. We will be going over them in the next section.
- **`src/utils`**: The directory containing utility functions for the chatbot. We will be going over them in a later section.

#### 3.3.1 `hooks/useApi.js`

```ts
import { useState, useCallback } from "react";
import toast from "react-hot-toast";
import { addMessageToConversation } from "../utils/chat";
import { decryptData } from "../utils/encryptData";

const useApi = () => {
  const [data, setData] = useState("");
  const [chatMessage, setChatMessage] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const OPEN_AI_API_KEY = () =>
    decryptData(localStorage.getItem("icp-dai-open-ai"));

  const chatCompletion = useCallback(async (payload) => {
    const url = "https://api.openai.com/v1/chat/completions";
    setLoading(true);
    try {
      await addMessageToConversation(payload.at(-1));
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + OPEN_AI_API_KEY()?.split('"')[1],
        },
        body: JSON.stringify({
          messages: payload.map((message) => ({
            content: message.content,
            role: message.role,
          })),
          model: "gpt-3.5-turbo",
          temperature: 1,
        }),
      });

      const result = await response.json();

      if (response.status !== 200) {
        const message = result.error.message;
        toast.error(message);
        throw new Error(message);
      }

      const assistantContent = result.choices[0].message.content;
      const messageToSaveFromAssistant = {
        content: assistantContent,
        role: "assistant",
      };
      setChatMessage((prev) => [...prev, messageToSaveFromAssistant]);
      await addMessageToConversation(messageToSaveFromAssistant);
      setData(assistantContent);
      setError(null);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }, []);

  return {
    data,
    error,
    loading,
    chatCompletion,
    uploading,
    setData,
    chatMessage,
    setChatMessage,
  };
};

export default useApi;
```

The **`useApi.js`** file contains a custom hook with functions and states for managing API calls. This file is responsible for managing the communication between the frontend application and an external API, specifically the OpenAI API and the backend canister in this case.

This is the break down the functionality provided by this hook:

1. **State Management**: The hook utilizes the `useState` hook from React to manage various states such as `data`, `chatMessage`, `error`, `loading`, and `uploading`. These states are used to track data received from the API, chat messages exchanged between the user and the AI model, error messages, and loading/uploading statuses.

2. **API Interaction**: The `chatCompletion` function is a callback function created using the `useCallback` hook. It handles the completion of chat messages by sending a payload containing the user's messages to OpenAI API. Upon receiving a response from the API, it processes the data and updates the state accordingly.

3. **Error Handling**: Error handling is implemented within the `try...catch` block. If there's an error during the API call, it sets the appropriate error state and notifies the user via a toast notification.

4. **Local Storage Interaction**: The hook interacts with local storage to retrieve an API key required for authorization to OpenAI API. It utilizes encryption and decryption functions (`decryptData`) to secure the API key stored in local storage.

5. **Updating Chat Messages**: Upon successful completion of the chat interaction with the OpenAI API, the hook updates the chat message state with the response from the AI model. It also saves the exchanged messages to the conversation in the backend canister using the `addMessageToConversation` utility function.

#### 3.3.2 `utils/auth.js`

The **`auth.js`** file contains functions for managing the user's authentication. It uses the **`@dfinity/auth-client`** library to handle authentication. The file contains functions for logging in and logging out.

#### 3.3.3 `utils/canisterFactory.js`

The **`canisterFactory.js`** file contains functions for creating canister actors. It uses the **`@dfinity/agent`** library to create canister actors. The file contains a function for creating a canister actor for the chatbot canister. A canister actor is an object that allows you to call methods on a canister.

#### 3.3.6 `utils/chat.js`

The **`chat.js`** file contains functions for interacting with a backend server to manage conversations.

```ts
import { localStorageController } from "./localStorageController";
```

We are using the **`localStorageController`**. This function is used to interact with the local storage of the browser.

```jsx
const baseUrl = "http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943";
const endpoints = {
  createConversation: "conversation",
  addMessageToConversation: "add/conversation",
  getConversation: (userIdentity) => `conversation/${userIdentity}`,
  deleteConversation: (userIdentity) => `conversation/${userIdentity}`,
};
```

Here we define some constants like **`baseUrl`** and **`endpoints`**. **`baseUrl`** specifies the base URL of the backend canister, and **`endpoints`** contains various endpoint URLs for different operations related to conversations.

```ts
export async function createConversation(userIdentity) {
  try {
    const response = await fetch(`${baseUrl}/${endpoints.createConversation}`, {
      method: "PUT",
      headers: [["Content-Type", "application/json"]],
      body: JSON.stringify({ userIdentity }),
    });

    if (!response.ok) {
      throw await response.json();
    }

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
```

This function is used to create a new conversation.It sends a PUT request to the server with the logged in **`userIdentity`** in the request body. If the response is successful (status code 200), it returns the JSON response. Otherwise, it logs the error to the console.

```jsx
export async function addMessageToConversation(message) {
  try {
    const userIdentity = window.auth.principalText;
    const conversationId = localStorageController("conversation")?.id;

    const response = await fetch(
      `${baseUrl}/${endpoints.addMessageToConversation}`,
      {
        method: "POST",
        headers: [["Content-Type", "application/json"]],
        body: JSON.stringify({
          userIdentity,
          conversationId,
          message,
        }),
      }
    );

    if (!response.ok) {
      throw await response.json();
    }

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
```

It retrieves the **`userIdentity`** from the authentication mechanism (**`window.auth.principalText`**) and the **`conversationId`** from the local storage. Then, it sends a POST request to add the message to the conversation. If successful, it returns the JSON response. Otherwise, it logs the error.

There are more functions in this file, for deleting and retreiving the conversation that we will not cover in this section.

#### 3.3.7 `utils/icp.js`

The **`icp.js`** file contains functions for initializing the canister and the authentication client.

```ts
import { getAuthClient } from "./auth";
...

export async function initializeContract() {
  const authClient = await getAuthClient();
  window.auth = {};
  window.canister = {};
  window.auth.client = authClient;
  window.auth.isAuthenticated = await authClient.isAuthenticated();
  window.auth.identity = authClient.getIdentity();
  window.auth.principal = authClient.getIdentity()?.getPrincipal();
  window.auth.principalText = authClient.getIdentity()?.getPrincipal().toText();
  ...
}
```

#### 3.3.8 `utils/localStorageController.js`

The **`localStorageController.js`** file contains functions for managing the local storage. It contains a function for retrieving data from the local storage and a function for saving data to the local storage.

## 4. Conclusion

Congratulations! You have successfully completed the TypeScript AI Chatbot Tutorial. You have learned how to configure and deploy a chatbot on the Internet Computer Protocol. You have also learned how to integrate OpenAI API for AI-driven chat functionalities. Finally, you have learned how to manage and secure sensitive credentials in a decentralized application.

Please note that this course is open source and is licensed under the MIT license. You can also contribute to improving the course content by making pull requests if you have suggestions for improvement. You can do this by visiting the course repository [here](https://github.com/dacadeorg/tutorials/blob/main/ICP/typescript-ai-dapp-tutorial/content/typescript-ai-dapp-tutorial.md). We welcome any contributions and improvements from the community.

For additional learning and connecting with like-minded individuals, consider visiting the following resources:

- **Discord**: Join the ICP community on Discord where we discuss various topics, troubleshoot, and collaborate. Follow the [link](https://discord.com/invite/cA7y6ezyE2) to join the conversation. Particularly, you can find more focused discussion on Typescript in the specific channel here: [Typescript Channel](https://discord.com/channels/748416164832608337/956466775380336680).
- **Forum**: The [forum](https://forum.dfinity.org/) is a great place to ask questions, share your projects, and learn about what others are working on.
- **The Azle Book**: To deepen your understanding of the Azle framework, check out [The Azle Book](https://demergent-labs.github.io/azle/). It's a comprehensive guide that will take you beyond what we've covered in this tutorial.

We hope you enjoyed this tutorial and we look forward to seeing what you build with the Internet Computer Protocol!
