<!-- SPDX-License-Identifier: MIT -->
<!-- Copyright (c) 2023 Dacade.org -->

Welcome to the Vector Database Course! In this course, you'll learn how to create, integrate, and query vector databases. We will create a simple application that will have a that is connected to OpenAI's GPT but augement it's knowledge with your own data via a vector database.

Potential  use cases for vector databases include:
- **Chatbots**: You can use vector databases to augment chatbots with your own data. For instance, you could use a vector database to store and retrieve vectors of product descriptions and use them to generate chatbot responses.
- **Recommendation Systems**: You can use vector databases to store and retrieve vectors of user preferences and use them to generate recommendations.
- **Similarity Searches**: You can use vector databases to store and retrieve vectors of text and use them to find similar text.

### What You Will Learn
Throughout this course, you will acquire the following essential skills:

1. **Vector Database Creation and Utilization**: You will learn to create and set up a vector database and use it to store and retrieve vectors.
2. **Embedding Generation and Integration**: Learn how to generate embeddings to transform text input into vectors and integrate them into your vector database.
3. **Vector Database Querying**: You will learn how to query your vector database to retrieve vectors and extend OpenAI's GPT-3 models knowledge with your vectors.

### What are Vectors or Embeddings?
Embeddings are a form of feature engineering used predominantly in machine learning to convert text or other data into numerical vectors. These vectors capture semantic meaning and contextual relationships among words or items, making it easier for machine learning algorithms to understand text. Various algorithms like Word2Vec, GloVe, and BERT offer different methods for generating embeddings.

For instance, in the case of the word 'happy', it gets converted into a numerical array, say `[0.12, 0.25, -0.47, ...]`, in a 300-dimensional space. This high-dimensionality allows the model to understand nuanced relationships, like how 'happy' is closer in meaning to 'joyful' than to 'sad'.

Embeddings are not just for word representation; they are pivotal in various NLP tasks such as sentiment analysis, text classification, and even machine translation.

### What is a Vector Database?
A vector database is a specialized data storage and retrieval system designed to manage high-dimensional vectors like the ones generated by embeddings. Unlike traditional databases that are optimized for text or numerical data, vector databases are engineered to perform fast similarity searches within the high-dimensional space where these vectors reside.

To draw a parallel, if embeddings are the language that machine learning algorithms use to understand text, then a vector database is like a highly efficient library for this language. This 'library' can quickly identify which 'words' (vectors) are similar to a given 'word' (query vector), making it incredibly useful for tasks such as recommendation systems, similarity searches, and even enhancing chatbot intelligence.

For instance, after converting a text query into its corresponding vector using embeddings, you could search a vector database for the most similar vectors. These could then be used to generate chatbot responses, recommend products, or classify the text.

### Prerequisites
In order to follow along with this course, you will need to have the following:

- **Node.js (Version 12 or higher)**: You should have Node.js installed on your machine. If you do not, you can download it [here](https://nodejs.org/en/download/).
- **Basic React Knowledge**: You should be familiar with React and Next.js. If you are not, you can check out the [React documentation](https://reactjs.org/docs/getting-started.html) and the [Next.js documentation](https://nextjs.org/docs/getting-started).
- **Basic Node.js Knowledge**: You should be familiar with Node.js. If you are not, you can check out the [Node.js documentation](https://nodejs.org/en/docs/).

### Tech Stack
Here are the technologies we will be using in this tutorial:

- [Supabase](https://supabase.io/) - Supabase is an open-source Firebase alternative. It allows you to create vector databases and store and retrieve vectors.
- [Langchain](https://js.langchain.com/) - Langchain an open-source framework for developing applications powered by large language models (LLMs). 
- [OpenAI API](https://openai.com/) - The OpenAI API gives you access to powerful AI models, such as the GPT-3 model, which we will be using in this tutorial.
- [Next.js](https://nextjs.org/) - Next.js is a React framework for building server-side rendered and statically generated applications.
- [Codespaces](https://github.com/codespaces) - Codespaces is a cloud-based development environment that allows you to develop entirely in the cloud.

### Overview

1. **Set Up Your Supabase Project**: We will create a Supabase project and enable it to store vector datatypes.
2. **Set Up the Next.js Boilerplate**: We will set up the boilerplate application and run it.
3. **Test the Boilerplate**: We will test the boilerplate application in the browser and the terminal.
4. **Exploring the Boilerplate Code**: We will explore the code of the boilerplate application.
5. **Conclusion**: We will conclude the course.

## 1. Set Up Your Supabase Project
In the first step, we will create a Supabase project and enable it to store vector datatypes.

### 1.1 Create an Account on Supabase
If you already have a Supabase account, you can skip this step. Otherwise, go to [supabase.com](https://supabase.com/dashboard/sign-in?) and create an account.

### 1.2 Create a New Project on Supabase
Once you have created an account, you can create a new project.

  ![Imgur](https://i.imgur.com/LwRjVYU.png)
  Click on the "New project" button.
  
  ![Imgur](https://i.imgur.com/zaRDMnH.png)
  Select an organization and fill out the project details.

  ![Imgur](https://i.imgur.com/cjQcuc4.png)
  Finally click on the "Create New Project" button.

Now that you have created a project, you can proceed to enable it to store vector datatypes.
### 1.3 Enable Supabase to Store Vector Datatypes
When you create a new Supabase project, with a PostgreSQL database you will not be able to store vector datatypes. To enable PostgreSQL to work with vector datatypes, you can follow these steps: 

![Imgur](https://i.imgur.com/A7XRCW5.png)
1. In the sidebar of your Supabase project, click on the SQL editor button.
2. Click on Quickstarts.
3. Select "LangChain" from the Quickstarts tiles.

![Imgur](https://i.imgur.com/Ul2d7jP.png)
Click on the "Run" button.

After running the query successfully, you will receive the following message: "Success. No rows returned."
   
Now that you have enabled PostgreSQL to work with vector datatypes, you can proceed to set up the boilerplate application.

## 2. Set Up the Next.js Boilerplate
In this step, we will set up the boilerplate application and run it. You can either use Codespaces or your local machine to set up the boilerplate. If want to use Codespaces follow the steps below otherwise skip to the next section (2.1.2).

### 2.1.1 Option 1: Codespaces Boilerplate Setup
GitHub Codespaces provides a complete, ready-to-use cloud-based dev environment in your browser. It saves you from the need for local setup, allowing you to concentrate on learning and building.

1. Create a GitHub account if you don't have one.

2. To create a new Codespace with the boilerplate, go to the 

[Vectordatabase-boilerplate repository](](https://github.com/dacadeorg/vector-database-boilerplate)).

3. Click on the "Use this template" button and then, click on "Open with Codespaces." 
   
When opening the Codespace, it will automatically install the dependencies.

### 2.1.2 Option 2: Local Machine Boilerplate Setup

1. Clone this repository:
  ```
  git clone https://github.com/dacadeorg/vector-database-boilerplate.git
  ```
2. Move to the project directory:
  ```
  cd vector-database-boilerplate
  ```
3. Install dependencies:

  ```
  npm install
  ```

### 2.2 Set Up Environment Variables
Open the `.env.example` file and add your OpenAI API key, Supabase project API key, and Supabase reference ID. 

**1. OpenAI API Key**

Your `OPENAI_API_KEY` key can be located in your [OpenAI Dashboard](https://platform.openai.com/account/api-keys).

**2. Supabase Reference ID**

To get your `SUPABASE_REFERENCE_ID`, click on the settings icon on the sidebar menu of your Supabase project, copy the Reference ID, and assign it to `SUPABASE_REFERENCE_ID`. 

![Imgur](https://i.imgur.com/oSUNLCV.png)
`SUPABASE_REFERENCE_ID=` - 

**3. Supabase Project API Key**

To get `SUPABASE_PROJECT_API_KEY`, click on [API](https://supabase.com/dashboard/project/ktrkrjsmtaomgqtvyppm/settings/api), click copy, and assign it to your `SUPABASE_PROJECT_API_KEY` in your `.env.example` file. Copy only the key with `anon` and `public` labels.

![Imgur](https://i.imgur.com/A5kifxw.png)

**4. Rename .env.example to .env**

Rename .env.example to .env.

### 2.3 Run the Boilerplate
```bash
npm run dev
```
Access the application by navigating to [http://localhost:3000](http://localhost:3000/). The boilerplate application should now be live.

## 3. Test the Boilerplate

The boilerplate application is a simple chatbot that uses OpenAI's GPT-3 model to generate responses. It doesn't use any data from the vector database yet. To test it, type a message in the input field and press enter. The chatbot will respond with a message generated by the unaugmented GPT-3 model. We will now augment the chatbot with our own data.

If you ask it what the Javascript toolkit "bun" is for example it will not know the answer. Since it's knowledge cut off date is 2022-01-01.

![Imgur](https://i.imgur.com/UfspVk7.png)

Now you can enter content that you want to vectorize and store in your vector database. For example, content of the bun documentation.

After you have entered the content, you can click on the "Vectorize" button. This will vectorize the content and store it in your vector database. Then you can ask the chatbot about the bun toolkit again. This time, it will know the answer because it has been augmented with your data.

![Imgur](https://i.imgur.com/Kkfirgn.png)

### 3.1 Test the Boilerplate in the Terminal
In this step, we will add content to our vector database via the terminal. For most of your projects you will probably not have a UI to add content to your vector database, here we will use a script.

We will use the `uploadEmbedding.js` file from the scripts folder. This file will read the content from the `document.txt` file from the `scripts/content` folder and upload it to the vector database.

To run the script, you can use the following command:

```bash
node ./scripts/uploadEmbedding.js
```

Don't worry about this warning: "No storage option exists to persist the session, which may result in unexpected behavior when using auth. If you want to set `persistSession` to true, please provide a storage option, or you may set `persistSession` to false to disable this warning." Just wait until you see "Uploaded" logged in the terminal.

After this is done you are ready to test the chatbot again. This time you can ask it about the bun toolkit and it will know the answer because it has been augmented with your data.

## 4. Exploring the Boilerplate Code
In this chapter we will explore the code of the boilerplate application. We will especially focus on the `pages/api/openai.js` and `pages/api/embed.js` files.

### 4.1 `pages/api/openai.js`
Lets first have a look in the `openai.js` file. This file is responsible for handling the request that comes from the client and respond back with the result. Here we will add our own data to the OpenAI model.

On line 34 we initialize the OpenAI model with an object parameter with three items: `temperature`, `openAIApiKey`, `stream`.

```js
  const model = new OpenAI({
    temperature: 1,
    openAIApiKey: process.env.OPENAI_API_KEY,
    streaming: false,
  });
```

On line 40, we initialize the vector store with the Supabase client and the table where we stored our vectors. This is responsible for giving us access to the vector database.

```js
  const vectorStore = await SupabaseVectorStore.fromExistingIndex(
    new OpenAIEmbeddings({ openAIApiKey: process.env.OPENAI_API_KEY }),
    {
      client: supabase,
      tableName: "documents",
      queryName: "match_documents",
    }
  );
```

`ConversationalRetrievalQAChain` is a type of chain in LangChain that is specifically designed for conversational question answering. It works by combining a retrieval component with a large language model (LLM).

Chains in LangChain are reusable components that can be linked together to perform complex tasks. Chains can be formed using various types of components, such as prompt templates, LLMs, arbitrary functions, and other chains.

In a `ConversationalRetrievalQAChain`, the retrieval component searches for relevant documents from a knowledge base based on the user's question. The LLM then uses these documents to generate a comprehensive and informative answer.

On line 49 we use the `fromLLM` method to create a `ConversationalRetrievalQAChain` from an LLM and a retriever. The LLM is the OpenAI model we initialized earlier. The retriever is the vector store we initialized earlier.

```js
  const chain = ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorStore.asRetriever()
  );
```

Finally on line 54, we make the final call to get the response.
We need to pass an object that contains the question and the chat history. The chat history is not required to have elements, however if you pass the chat history, the model will be aware of the history. The format should be like this: ` [ { role: "assistant', content: "" }, { role: "user', content: "" } ] `;

```js
  const answer = await chain.call({ question: question, chat_history: [] });
  return res.status(200).json({ data: answer });
```

Now we passed the question to the chain which will use the vector store and the OpenAI model to generate an answer. The answer will be returned to the client.


### 4.2 `pages/api/embed.js`

```javascript
// Import necessary libraries and modules
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import {
  MarkdownTextSplitter,
  RecursiveCharacterTextSplitter,
} from "langchain/text_splitter";
import { v4 as uuidv4 } from "uuid";
import { SupabaseVectorStore } from "langchain/vectorstores/supabase";
import { supabase } from "@/utils/supabase";

// Define an asynchronous function to handle incoming requests
export default async function handler(req, res) {
  try {
    // Extract the 'payload' field from the request body
    const content = req.body.payload;

    // Create a content text splitter instance
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 150,
      chunkOverlap: 2,
    });
    
    const document = await splitter.createDocuments([content]);

    // Generate and store embeddings for the text documents
    const response = await generateAndStoreEmbedding(document, {
      chat_id: uuidv4(),
    });

    // Send a JSON response with the result
    res.status(200).json({ result: response });
  } catch (error) {
    // Handle any errors and send a 500 Internal Server Error response
    res.status(500).json({ error: JSON.stringify(error) });
  }
}

// Define an asynchronous function to generate and store embeddings
const generateAndStoreEmbedding = async (docs, fields) => {

  // Modify the metadata of each chunked document by adding specified fields
  const splitedDocs = docs.map((e) => ({
    ...e,
    metadata: { ...e.metadata, ...fields },
  }));

  // Generate and store embeddings using SupabaseVectorStore and OpenAIEmbeddings
  return await SupabaseVectorStore.fromDocuments(
    splitedDocs,
    new OpenAIEmbeddings({
      openAIApiKey: process.env.OPENAI_API_KEY,
    }),
    {
      client: supabase,
      tableName: "documents",
    }
  );
};
```

This file is responsible for handling the request that comes from the client and 
transform the content into vectors and store them in our vector database.

This file contains two functions, the `handler` function and the `generateAndStoreEmbedding` function. 

#### 4.1.1 Handler function
The `handler` function is the main function that is responsible for handling the request that comes from the client and respond back with the result. 

On line 18, we use `RecursiveCharacterTextSplitter` to create a text splitter instance. 

```Javascript
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 150,
      chunkOverlap: 2,
    });
```

`RecursiveCharacterTextSplitter` is responsible for splitting the content into chunks. It takes two parameters: `chunkSize` and `chunkOverlap`. The `chunkSize` parameter specifies the maximum number of characters in each chunk. The `chunkOverlap` parameter specifies the number of characters that each chunk should overlap with the previous chunk. Overlap in text splitting allows adjacent chunks to share common information, which can improve performance and accuracy of text processing tasks.

You can read more about text splitting [here](https://js.langchain.com/docs/modules/data_connection/document_transformers/text_splitters/recursive_text_splitter). 

On line 48, we use `SupabaseVectorStore.fromDocuments` to generate the embeddings via the OpenAI embedding model and store it in our Supabase vector database. 

```Javascript
 return await SupabaseVectorStore.fromDocuments(
    splitedDocs,
    new OpenAIEmbeddings({
      openAIApiKey: process.env.OPENAI_API_KEY,
    }),
    {
      client: supabase,
      tableName: "documents",
    }
  );
```

`The SupabaseVectorStore.fromDocuments()` function takes three arguments:

- **splitedDocs** - An array of text passages to generate embeddings for. We will add the chunks we have generated with the `RecursiveCharacterTextSplitter` to the `splitedDocs` array.
- **embeddingModel** - An embedding model to use to generate the embeddings. We will use `OpenAIEmbeddings` from the Langchain library, which uses the OpenAI API to generate embeddings. Learn more about the Open AI embeddings [here](https://platform.openai.com/docs/guides/embeddings).
- **options** - A configuration object for the vector store. We will pass the Supabase client and the table name where we want to store our vectors.
  
## 5. Conclusion
In this course, you learned how to create, integrate, and query vector databases. You learned how to create a vector database using Supabase, how to integrate it with OpenAI's GPT-3 model, and how to query it to retrieve vectors. You also learned how to use vector databases to augment chatbots with your own data.

Please note that this course is open source and is licensed under the MIT license. You can also contribute to improving the course content by making pull requests if you have suggestions for improvement. You can do this by visiting the course repository [here](https://github.com/dacadeorg/tutorials/blob/main/ai/vector-database-tutorial/vector-database-tutorial.md). We welcome any contributions and improvements from the community.