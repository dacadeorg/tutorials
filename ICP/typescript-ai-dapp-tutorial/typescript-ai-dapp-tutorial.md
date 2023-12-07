# TypeScript AI Dapp Tutorial
Welcome to the TypeScript AI Chatbot Tutorial! In this tutorial, we will be building a decentralized AI chatbot using the Internet Computer Protocol (ICP). The chatbot will be able to respond to user messages and answer questions using the OpenAI API. We will also be using the DFINITY Canister SDK to deploy the chatbot on the Internet Computer.

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
git clone https://github.com/Jonath-z/assistant-deBot.git
```

### 2.2 Setting Up Credentials
The chatbot uses the OpenAI API, which requires API credentials. You need to create a **`credential.js`** file in the root directory with your OpenAI API key and the assistant ID. Follow these steps:

1. Copy the **`credential.exemple.js`** file and rename the copy to **`credential.js`**.
2. Open **`credential.js`** and set your OpenAI API key and assistant ID:
    
    ```jsx
    export const OPEN_AI_API_KEY = "YOUR_OPEN_AI_API_KEY";
    export const ASSISTANT_ID = "YOUR_ASSISTANT_ID";
    ```
Replace **`YOUR_OPEN_AI_API_KEY`** and **`YOUR_ASSISTANT_ID`** with your actual OpenAI API key and assistant ID, respectively.

- You can find your OpenAI API key and assistant ID in the interface of your OpenAI account. If you don't have an account yet, you can create one [here](https://platform.openai.com/). 
- The API key can be found in the [API keys](https://platform.openai.com/api-keys) page of your account.
- You can find the assistant ID in the assistant's page [here](https://platform.openai.com/assistants). Navigate to your assistant and copy the id from under the assistant's name, it will look like this: "asst_I5U3ic2gLfMuIK4D2LDwdxH0".

### 2.3 Installing DFX
The DFINITY Canister SDK (DFX) is a toolkit for building and deploying applications on the Internet Computer. We will be using DFX to deploy the chatbot on the Internet Computer Protocol. Follow the instructions [here](https://internetcomputer.org/docs/current/developer-docs/setup/install#installing-the-ic-sdk-1) to install DFX on your machine. Make sure to install the latest version of DFX, currently **`0.15.*`**.

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

We are using the **`--clean`** flag to ensure that the replica is started with a clean slate. This is useful when you have previously deployed canisters to the local network and want to start fresh.

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

Once you are logged in, you can start chatting with the assistant. Depending on your assistant's configuration, you may need to ask a specific question to get a response. For example, if your assistant is configured to answer questions about cooking, you can ask it **`How do I make a pizza?`**. The assistant will then respond with an answer.

## 3. Exploring the Code
In this chapter, we will be exploring the code of the project and discussing the architecture of the chatbot. We will also be looking into the most important files of the project.

### 3.1 Project Structure
The project is structured as follows:

```bash
├── .gitignore
├── README.md
├── credential.js
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
- **`credential.js`**: Contains the OpenAI API key and assistant ID. We have created this file in the previous chapter.
- **`deploy-local-ledger.sh`**: A shell script for deploying the canisters to the local network.
- **`dfx.json`**: The configuration file for DFX. It contains the configuration for the canisters and the local network.
- **`dfinity_js_backend`**: The directory containing the source code of the backend canister.
- **`dfinity_js_frontend`**: The directory containing the source code of the frontend canister.

### 3.2 Backend Canister
The backend canister is responsible for communicating with the OpenAI API and providing the frontend canister with the response. It is written in TypeScript and uses the DFINITY Canister SDK to communicate with the Internet Computer Protocol. The backend canister is located in the **`dfinity_js_backend`** directory.

The structure of the backend canister is as follows:
```bash
src/
    dfinity_js_backend/
        ├── assistant.ts
        ├── index.did
        ├── index.ts
        ├── user.ts
        models/
            ├── assistant.ts
            ├── error.ts
```

#### 3.2.1 `assistant.ts`

We are looking at the **`assistant.ts`** file located in the **`dfinity_js_backend`** directory. This file contains the code for the **`Assistant`** class, which is responsible for managing the assistant and its interactions with the user. The class contains methods for retrieving the assistant's ID, saving a thread, retrieving a thread, and deleting a thread. It also contains methods for checking if a thread exists for a given user identity.

```jsx
import { update, text, Ok, Err, Result, StableBTreeMap, query, bool } from "azle";
import { ErrorResponse } from "./models/error";
import { CreateThead, Thread } from "./models/assistant";
```
The file starts by importing necessary functions and types from **`azle`**, a library for building decentralized applications on the Internet Computer Protocol
in TypeScript. It also imports models such as **`ErrorResponse`** and thread-related structures (**`CreateThead`**, **`Thread`**) for data handling.

```jsx
const threadStorage = StableBTreeMap(text, CreateThead, 4);
```
Next, the file initializes **`threadStorage`** as a **`StableBTreeMap`**, a data structure used for storing threads. The map is keyed by `text` and contains `CreateThead` values. The map is initialized with a capacity of 4.

```jsx
class Assistant {
  getAssistant(assistantId: string) {
    return query([], Result(text, ErrorResponse), () => {
      return Ok(assistantId);
    });
  }
```
The **`Assistant`** class encapsulates various methods for managing threads and interactions with the assistant. The **`getAssistant`** method retrieves an assistant's ID. It uses a **`query`** function, indicating that it fetches data without modifying the state.

```jsx
  saveThread(userIdentity: string, thread: Thread) {
    if (!userIdentity || !thread || typeof thread !== "object") {
      return Err(ErrorResponse("Invalid input"));
    }
    const threadToSave = {
      thread: thread,
      userIdentity: userIdentity,
    };
    threadStorage.insert(userIdentity, threadToSave);
    return Ok(threadToSave.thread);
  }
```

The **`saveThread`** method saves a thread. It takes a user identity and a thread as inputs. It uses an **`insert`** function to insert the thread into the **`threadStorage`** map. It then returns the saved thread.

There are additional methods for retrieving, and deleting threads, we will not be going over them in this tutorial. 

#### 3.2.2 `index.did`
This file contains the interface for the backend canister. It defines the service provided by the canister and the methods it exposes. The file is written in Candid, an interface description language for the Internet Computer Protocol. This file automatically generated by DFX when you deploy the canister. If you want to learn more follow the Typescript Smart Contract 101 tutorial [here](https://sdk.dfinity.org/docs/typescript-101.html).
<!-- TODO: Add link -->

#### 3.2.3 `index.ts`
The **`index.ts`** file contains the code for the backend canister. It uses the **`dfx`** library to communicate with the Internet Computer Protocol. This file is responsible for initializing the canister and exposing the service defined in the **`index.did`** file.

#### 3.2.4 `user.ts`
The **`user.ts`** file contains the code for the **`User`** class, which is responsible for managing user identities. The class contains methods for retrieving a username and updating a username. It also contains a method for checking if a username exists for a given user identity.

#### 3.2.5 `models/assistant.ts`
The **`assistant.ts`** file contains models for data handling. The file contains models for saving an assistant, a thread, and creating a thread. These models are used by the **`Assistant`** class.

#### 3.2.6 `models/error.ts`
The **`error.ts`** file contains the **`ErrorResponse`** model, which is used for returning error messages. The model is used by the **`Assistant`** class.

### 3.3 Frontend Canister
The frontend canister is responsible for providing the user interface for the chatbot. It is written in TypeScript and uses the DFINITY Canister SDK to communicate with the Internet Computer Protocol. The frontend canister is located in the **`dfinity_js_frontend`** directory.

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
                context/
                    ├── assistantProvider.js
                    ├── userProvider.js
                utils/
                    ├── assistantCanister.js
                    ├── auth.js
                    ├── canisterFactory.js
                    ├── chat.js
                    ├── icp.js
                    ├── localStorageController.js
```
The most important files and directories are:
- **`src/App.js`**: The main file of the frontend canister. It contains the code for the chatbot's user interface.
- **`src/index.js`**: The entry point of the frontend canister. It contains the code for initializing the canister and rendering the chatbot's user interface.
- **`src/components`**: The directory containing the React components of the chatbot. We will not be going over them here, they should be pretty straightforward.
- **`src/context`**: The directory containing the React contexts of the chatbot. We will be going over them in the next section.
- **`src/utils`**: The directory containing utility functions for the chatbot. We will be going over them in a later section.

#### 3.3.1 `context/assistantProvider.js`
The **`assistantProvider.js`** file contains the code for the **`AssistantProvider`** component, which is responsible for managing the assistant and its interactions with the user. It uses the **`AssistantContext`** context to provide the assistant and thread to its children. It also uses the **`UserContext`** context to retrieve the user identity.

#### 3.3.2 `context/userProvider.js`
The **`userProvider.js`** file contains the code for the **`UserProvider`** component, which is responsible for managing the user identity and its interactions with the assistant. It uses the **`UserContext`** context to provide the user identity to its children.

#### 3.3.3 `utils/assistantCanister.js`
The **`assistantCanister.js`** file contains functions for communicating with the backend canister. It uses the **`window.canister`** object to access the backend canister. The file contains functions for retrieving the assistant, saving a thread, retrieving a thread, deleting a thread, and checking if a thread exists for a given user identity.

#### 3.3.4 `utils/auth.js`
The **`auth.js`** file contains functions for managing the user's authentication. It uses the **`@dfinity/auth-client`** library to handle authentication. The file contains functions for logging in and logging out.

#### 3.3.5 `utils/canisterFactory.js`
The **`canisterFactory.js`** file contains functions for creating canister actors. It uses the **`@dfinity/agent`** library to create canister actors. The file contains a function for creating a canister actor for the chatbot canister. A canister actor is an object that allows you to call methods on a canister.

#### 3.3.6 `utils/chat.js`
The **`chat.js`** file contains functions for communicating with the OpenAI API. It uses the **`openai`** library to communicate with the OpenAI API. The file contains functions for creating a thread, saving a thread, retrieving a thread, creating a message, retrieving all messages, and analyzing runs steps.

```jsx
const openai = new Openai({
  apiKey: OPEN_AI_API_KEY,
  dangerouslyAllowBrowser: true,
});
```
We are using the **`openai`** library to communicate with the OpenAI API. The library is initialized with the OpenAI API key and the **`dangerouslyAllowBrowser`** flag set to **`true`**. This flag allows the library to be used in the browser, which is not recommended in a production environment.

```jsx
export const runTheAssistantOnTheThread = async (threadId, assistantId) => {
  try {
    const run = await openai.beta.threads.runs.create(threadId, {
      assistant_id: assistantId,
    });
    return run.id;
  } catch (e) {
    console.log(e);
  }
};
```
The **`runTheAssistantOnTheThread`** function runs the assistant on a given thread. It takes a thread ID and an assistant ID as inputs. It uses the **`openai.beta.threads.runs.create`** function to run the assistant on the thread. It then returns the run ID. Which is needed to retrieve the assistant's response.

We then have functions for creating a thread, saving a thread, retrieving a thread, creating a message, retrieving all messages, and analyzing runs steps.

```jsx
export const analyseRunsStepsDone = async (threadId, runId) => {
  const runStep = await openai.beta.threads.runs.steps.list(threadId, runId);
  const completedStep = runStep.data.find(
    (step) => step.status === "completed"
  );

  if (completedStep) {
    return true;
  } else {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return await analyseRunsStepsDone(threadId, runId);
  }
};
```
The **`analyseRunsStepsDone`** function analyzes the steps of a run. It takes a thread ID and a run ID as inputs. It uses the **`openai.beta.threads.runs.steps.list`** function to retrieve the steps of the run. It then checks if the run is completed. If it is, it returns **`true`**. If not, it waits for 3 seconds and calls itself again.

```jsx
export const retreiveAssistantFromOpenai = async (assistantid) => {
  const assistant = await openai.beta.assistants.retrieve(assistantid);
  return assistant;
};
```
The **`retreiveAssistantFromOpenai`** function retrieves an assistant from the OpenAI API. It takes an assistant ID as input. It uses the **`openai.beta.assistants.retrieve`** function to retrieve the assistant. It then returns the assistant.

#### 3.3.7 `utils/icp.js`
The **`icp.js`** file contains functions for initializing the canister and the authentication client. It uses the **`@dfinity/agent`** library to create canister actors. The file contains a function for creating a canister actor for the chatbot canister. A canister actor is an object that allows you to call methods on a canister.

#### 3.3.8 `utils/localStorageController.js`
The **`localStorageController.js`** file contains functions for managing the local storage. It contains a function for retrieving data from the local storage and a function for saving data to the local storage.

## 4. Conclusion
Congratulations! You have successfully completed the TypeScript AI Chatbot Tutorial. You have learned how to configure and deploy a chatbot on the Internet Computer Protocol. You have also learned how to integrate OpenAI API for AI-driven chat functionalities. Finally, you have learned how to manage and secure sensitive credentials in a decentralized application.

Please note that this course is open source and is licensed under the MIT license. You can also contribute to improving the course content by making pull requests if you have suggestions for improvement. You can do this by visiting the course repository [here]
<!-- Todo: Add repo -->
. We welcome any contributions and improvements from the community.

For additional learning and connecting with like-minded individuals, consider visiting the following resources:

- **Discord**: Join the ICP community on Discord where we discuss various topics, troubleshoot, and collaborate. Follow the [link](https://discord.com/invite/cA7y6ezyE2) to join the conversation. Particularly, you can find more focused discussion on Typescript in the specific channel here: [Typescript Channel](https://discord.com/channels/748416164832608337/956466775380336680).
- **Forum**: The [forum](https://forum.dfinity.org/) is a great place to ask questions, share your projects, and learn about what others are working on.
- **The Azle Book**: To deepen your understanding of the Azle framework, check out [The Azle Book](https://demergent-labs.github.io/azle/). It's a comprehensive guide that will take you beyond what we've covered in this tutorial.

We hope you enjoyed this tutorial and we look forward to seeing what you build with the Internet Computer Protocol!