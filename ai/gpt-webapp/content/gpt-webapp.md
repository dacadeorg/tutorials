# How to Build an AI Web App with OpenAI API and ChatGPT
In this tutorial, we are going to create a web app that uses the OpenAI API to generate recipes based on a list of ingredients provided by the user. We are going to use ChatGPT to ideate and plan the project, and then use it to generate the code for the project. We will use the [Next.js OpenAI Boilerplate](https://github.com/dacadeorg/nextjs-openai-boilerplate).

### Prerequisites
While having some prior coding experience is beneficial, it is not a hard requirement for this tutorial. ChatGPT will step up to generate the code needed for the project, although it might take a bit more time for beginners.

- **Basic knowledge of JavaScript and React** - Although this isn't strictly necessary, it could prove beneficial. For a quick overview, consider watching these videos: [JavaScript in 100 Seconds](https://www.youtube.com/watch?v=DHjqpvDnNGE), [React in 100 Seconds](https://www.youtube.com/watch?v=Tn6-PIqc4UM) and [Next.js in 100 Seconds](https://www.youtube.com/watch?v=Sklc_fQBmcs).
- **Knowledge of how to use ChatGPT** - If you're new to ChatGPT, this basic tutorial can come in handy: [How To Use Chat GPT by Open AI For Beginners](https://www.youtube.com/watch?v=AXn2XVLf7d0).
- **Familiarity with IDEs** - This tutorial utilizes the web version of VSCode. If you're unfamiliar with IDEs or need a refresher, watch this beginner tutorial on how to use VSCode: [Learn Visual Studio Code in 7min (Official Beginner Tutorial)](https://www.youtube.com/watch?v=B-s71n0dHUk).

### Tech Stack
- [NextJS](https://nextjs.org/) - A popular open-source framework for building React applications with server-side rendering, automatic code splitting, and optimized performance.
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [OpenAI API](https://openai.com/) - A powerful API that can be applied to virtually any task that involves understanding or generating natural language, code, or images.
- [ChatGPT](https://chat.openai.com/) - A tool that allows you to have a conversation with GPT-4/3.5. It is a great tool to ideate, plan your project and also to generate code.
- [Codespaces](https://github.com/features/codespaces) - A feature of GitHub that allows you to develop entirely in the cloud. It is a great tool to get started quickly without having to install anything on your computer.

### Overview

1. [Setup](#1-setup) - This section will guide you through the necessary steps to set up your project.
2. [Ideation](#2-ideation) - Here, we will employ ChatGPT to brainstorm and outline what we aim to construct.
3. [Building the MVP](#3-building-the-mvp) - In this section, we are going to use to build the MVP of our project with ChatGPT
4. [Prompts](#4-prompts) - In this section, we will compile a list of all prompts that we used throughout this tutorial.
5. [Conclusion](#5-conclusion) - Finally, we will conclude this tutorial and give you some ideas on how to continue.


## 1. Setup
In this initial section, we are going to set up our with the boilerplate code, the OpenAI API key and run it in a Codespace.

### 1.1 Create a Codespace from the boilerplate
Visit the repository of the [Next.js OpenAI Boilerplate](https://github.com/dacadeorg/nextjs-openai-boilerplate/) and click on the "Use this template" button. Next, select "Open with Codespaces". This action will spawn a new Codespace with the boilerplate code and install all the necessary dependencies.

### 1.2 Create an OpenAI API key
Navigate to the [OpenAI API](https://platform.openai.com/account/api-keys) and sign up for an account. After that, create an API key. If you're unsure about the process, this tutorial might be of help: [How to Get Your OpenAI API Key](https://www.youtube.com/watch?v=nafDyRsVnXU).

### 1.3 Add the OpenAI API key to the Codespace
Within your Codespace, create a `.env` file and input your API key into it. The file should resemble the following:
```
OPENAI_API_KEY=your_openai_api_key_here
```
Alternatively, you can utilize the `.env.example` file as a template—simply rename it to `.env` and insert your API key.

### 1.4 Test the boilerplate
To test the boilerplate, input the following command in your terminal:
```
npm run dev
```
You should see a notification appearing at the bottom of your screen, prompting you to open the application in a browser. Upon clicking, you should be greeted by a page that looks like this:

![](https://hackmd.io/_uploads/HkwBnXM8n.png)

In our example, we used "dolphin" as the input and received the depicted response. Feel free to experiment with different inputs and observe the corresponding outputs.

Congratulations! You've successfully set up the project and verified the boilerplate's functionality. In the next phase, we will employ ChatGPT to brainstorm and draft our project.

## 2. Ideation

Before we begin to generate code, we need to come up with an idea of what we want to build. In this section, we are going to use ChatGPT to come up with an idea for our project.

You can find the whole conversation with ChatGPT [here](https://chat.openai.com/share/81f2f250-2c5b-480e-b2f2-1b4541afadee).

### 2.1 Initial broad ideas
To initiate our brainstorming process, we start a new thread in ChatGPT, utilizing the GPT4 model for this case. However, the GPT-3.5 model is also a viable choice. Our first step involves providing general instructions and asking for broad ideas. We also include the project's code in the prompt to provide contextual information to the AI.

We will collate all the prompts we use throughout this tutorial in a generic format towards the end of this guide, making it convenient for you to copy and paste: [4. Prompts](#4-prompts).

**Prompt**:
> You are the world's greatest product manager. You are like a modern Steve Jobs specialized in AI web app development with deep knowledge of GPT.
> 
> We have the following code as a boilerplate: "`PROJECTCODE`"
> 
> Come up with ten ideas of what we can build based on this code. We only want to build an MVP version of this first.

Replace `PROJECTCODE` with the code from the boilerplate.

You can retrieve the entire project's code by entering the command `npm run generateTXT` in your terminal. The complete code will be generated in a `projectCode.txt` file. This feature makes it convenient for you to quickly copy and paste the current code into ChatGPT, providing it with ample context for generating useful responses.

For this prompt, simply copy the entire code and paste it in place of "`PROJECTCODE`".

Subsequently, you should receive a response that looks something like the following.

**ChatGPT response**:
> Sure, here are 10 MVP ideas you could build using this code as a foundation:
> 
> 1. Pet Name Generator: Build on the current use case. Users can provide the type of animal they have, and the system generates creative pet names and descriptions.
> 
> 2. Recipe Suggestion Assistant: Users enter the ingredients they have, and the application generates recipe ideas based on the ingredients entered.
> 
> 3. Fashion Advisor: Users input the items of clothing or accessories they have, and the AI suggests outfits and style tips based on current trends.
> 
> 4. Content Ideas Generator: Users can enter a topic, and the application provides ideas for blog posts, social media content, etc.
> 
> 5. AI Tutor: Based on the subject provided by the user, the system generates an easy-to-understand explanation or lesson on the topic.
> 
> 6. Name & Logo Color Suggestion Tool for Startups: Users can input the industry or type of business they're starting, and the system suggests a name and the best colors for their logo.
> 
> 7. Travel Planner: Users can input their destination and interests (like hiking, art, food), and the AI will suggest activities, sights to see, and local foods to try.
> 
> 8. Fiction Story Generator: Users input a genre and some characters, and the AI generates a short story or a story prompt based on that.
> 
> 9. Fitness Plan Generator: Users input their fitness goals and available equipment, and the AI generates a custom workout plan for them.
> 
> 10. Product Name and Description Generator: Users can enter a category or type of product they're creating, and the system generates a unique product name and description.**
> 
> Each of these ideas can be implemented as an MVP with the current setup by just modifying the prompt sent to the OpenAI API, and each has room for future development and feature addition.

### 2.2 Narrowing down in a specific field

To generate more ideas within a specific domain, we continue the conversation within the same thread.

**Prompt**:
> Come up with 10 more in the field of cooking.

**ChatGPT response**:
> Sure, here are 10 MVP ideas related to cooking:
> 
> 1. Recipe Modification Assistant: Users input a recipe, and the AI suggests modifications to make it healthier, vegan, gluten-free, etc.
> 2. Ingredient Substitution Advisor: Users can enter a specific ingredient, and the system suggests potential substitutions and how they would affect the recipe.
> 3. International Recipe Translator: Users input a recipe in one cuisine, and the AI converts it into a similar recipe from a different cuisine. 
> 4. Meal Planner: Users enter dietary restrictions, preferences, and the number of meals needed, and the AI generates a meal plan with recipes. 
> 5. Pairing Suggestion Tool: Users input a dish, and the AI suggests wines or other dishes that pair well with it.
> 6. Cooking Technique Explainer: Users input a cooking technique they're not familiar with, and the AI provides a step-by-step guide on how to do it.
> 7. Grocery Shopping Assistant: Based on the user's weekly meal plan, the AI generates a shopping list, including quantity calculations.
> 8. Food Waste Minimizer: Users input what ingredients they have left over, and the AI generates recipes to use those ingredients.
> 9. Flavor Profile Builder: Users input a few ingredients, and the AI suggests additional ingredients to build a balanced flavor profile.
> 10. Cooking Lesson Planner: Based on a user's skill level and interests, the AI generates a series of cooking lessons with appropriate techniques and recipes to learn.
> 
> Each of these MVPs leverages the AI's ability to generate creative and informative content based on user input.

### 2.3 Focus on one idea and try out prompts

Having sifted through various concepts, we've decided to proceed with the initial idea of the Recipe Suggestion Assistant. Before proceeding to build the entire project, it's helpful to first test whether we can generate useful responses to prompts on this subject.

In this step, we ask ChatGPT to generate a prompt for our chosen idea.

We ask ChatGPT to generate a prompt for it.

**Prompt**:
> I want to create this: "Recipe Suggestion Assistant: Users enter the ingredients they have, and the application generates recipe ideas based on the ingredients entered."
> 
> But first, I want to try out the necessary prompts in order to see if I will get a satisfying result. Suggest the prompt we should try. I don't want to implement it in the code, but try it in ChatGPT.

**ChatGPT response**:
> Sure, the first step would be testing how GPT-3 responds to relevant prompts.
> 
> You can use the following prompt to simulate the behavior of the "Recipe Suggestion Assistant":
> 
> System Prompt:
> "You are a creative and knowledgeable assistant that specializes in generating cooking recipes based on a list of ingredients."
> 
> User Prompt:
> "I have chicken, rice, bell peppers, onions, garlic, and soy sauce. What can I cook with these ingredients?"
> 
> Please note that while GPT-3 is a powerful tool, its responses may require some tuning or adjustment to fit the desired format or meet the specific needs of your application. You can modify the model's temperature parameter or the max tokens to influence the output's creativity and length. Higher temperature values produce more random outputs, while lower values make the output more deterministic. The max tokens parameter can be adjusted to limit the length of the generated content.

This seems promising. We will now use the "User Prompt" to test if we receive a meaningful response.

**Prompt**:
> I have chicken, rice, bell peppers, onions, garlic, and soy sauce. What can I cook with these ingredients?

**ChatGPT response**:
> With the ingredients you have, you can make a delicious Chicken Stir Fry. Here is a simple recipe:
> 
> Chicken Stir Fry with Rice
> 
> Ingredients:
> 
> * Chicken
> * Rice
> * Bell peppers
> * Onions
> * Garlic
> * Soy sauce
> 
> Steps:
> 1. Cook the rice as per the instructions on the packet and keep it aside.
> 2. Cut the chicken into thin slices. Similarly, slice the bell peppers and onions, and mince the garlic.
> 3. Heat some oil in a large frying pan or a wok over medium heat.
> 4. Add the chicken slices and cook until they're no longer pink in the middle. Remove the chicken and set it aside.
> 5. In the same pan, add a bit more oil if needed, then add the minced garlic and sauté it for about a minute until it's fragrant.
> 6. Add the sliced onions and bell peppers to the pan. Stir fry them until they're tender.
> 7. Add the cooked chicken back to the pan, then add soy sauce. Stir well to mix all the ingredients.
> 8. Continue to cook for a couple of more minutes until everything is well combined and heated through.
> 9. Serve the chicken stir fry over the cooked rice.
> 
> Enjoy your meal! Please adjust the quantities and cooking times based on your personal preferences and the number of servings you plan to make.

The response appears to be fine. Ideally, we should now invest additional time in refining the prompt until we get the optimal results, which is best done within OpenAI's [Playground](https://platform.openai.com/playground). However, for the purpose of keeping this tutorial concise, we will proceed with the current prompt.

### 2.4 Create a short description of the MVP
The final stage in our ideation process involves drafting a short description of our intended project. This will serve as a basis for the next section, where we will start bringing our idea to life.

**Prompt**:
> Ok great, I like it. Make a short description of this MVP AI APP so I can build it. Only one short paragraph just focus on the important functionality don't try to advertise it.

**ChatGPT response**:
> The "Recipe Suggestion Assistant" is an AI application designed to generate cooking recipes based on a list of ingredients provided by the user. Its core functionality involves receiving a set of ingredients as input and employing AI to output a recipe that effectively utilizes these ingredients. This tool aims to aid users in deciding what to cook based on what they have on hand, facilitating meal planning and reducing food waste. The interface is simple and user-focused, providing clear, step-by-step cooking instructions for each suggested recipe.

This description is sufficient for our purposes. We will adapt it a bit with our ideas in the next section.

## 3. Building the MVP
In this section, we will start building a Minimum Viable Product (MVP) based on our initial project idea.

We will initiate a new ChatGPT thread. You can view the entire conversation with ChatGPT [here](https://chat.openai.com/share/ffd28040-d85f-47b7-af78-f8f8ef60a9fd).

### 3.1 Create a user flow
In the first step, we are going to create a user flow that will guide the functionality of our app.

**Prompt**:
> You are the world's greatest developer and product manager. You are like Addy Osmani and Wes Bos, and Steve Jobs, specializing in react and next.js development and AI web app development with deep knowledge of GPT.
> 
> We want to build a very simple MVP for a prototype.
> 
> The code should be built based on this next.js boilerplate Opeanai API web app that we already have set up: "`PROJECTCODE`"
> 
> I want to build "Recipe Generator": "A Recipe Generator, a single-screen web application designed to simplify meal planning and cooking. By allowing users to select a protein, a vegetable, and a carbohydrate source, it generates detailed information for a dish, including ingredients and step-by-step cooking, all within a single, static screen."
> 
> Suggest a user flow for the web app only high level don't show any code. Focus only on MVP functionality, not more.

Once more, replace `PROJECTCODE` with the code from the boilerplate. This time, we assign a name to our idea, "Recipe Generator", and provide a brief description. This is slightly different from the description we created in the previous section, as we have now enhanced it with the additional concept that the user can select from various ingredient groups.

**ChatGPT response**:
> Sure, here's a proposed user flow for the "Recipe Generator" web app:
> 
> 1\. **Home Page / Initial Load**: When the user lands on the application, they are greeted with a simple, clean interface. There's a brief description of what the app does and how to use it: "Select a protein, vegetable, and carbohydrate source to generate a detailed recipe."
> 
> 2\. **Ingredient Selection**: The page provides three drop-down menus or selection boxes, one each for Protein, Vegetable, and Carbohydrate. Each box has a wide array of options to choose from.
> 
> 3\. **Recipe Generation**: Once the user makes a selection in all three boxes and hits the "Generate Recipe" button, the request goes to the back end where the OpenAI API is used to generate a recipe based on the selected ingredients.
> 
> 4\. **Displaying the Recipe**: The generated recipe is then displayed on the same page below the selection boxes, without any page reloads. The recipe includes the name of the dish, ingredients, and a step-by-step guide on how to prepare the dish.
> 
> 5\. **Error Handling**: If the OpenAI API fails to generate a recipe or there's an error in the process, an error message is displayed to the user in a user-friendly way.
> 
> 6\. **Recipe Regeneration**: If the user decides to generate a different recipe, they can simply change their selections in the drop-down menus and hit "Generate Recipe" again. The displayed recipe will update based on the new selections.
> 
> 7\. **Responsive Design**: The web application should be responsive and should work seamlessly on different devices and screen sizes.
> 
> Please note that this user flow focuses only on the core functionality for the MVP and does not include potential additional features like user accounts, saving favorite recipes, sharing recipes, etc. The focus is on providing a simple and smooth experience for the user to generate a recipe based on their selection of protein, vegetable, and carbohydrate.

Although there's room to iterate on this user flow, we're content with its current state and aim to keep it straightforward. We'll move forward using this version.

### 3.2 First code planning

Now that we have a clearer idea of how our web app should function, we can start planning the code. We are going to use ChatGPT to plan the implementation of the code. It is often helpful to plan the code before actually writing it, as it helps to use ChatGPT to implement more complex code that requires multiple steps.

**Prompt**:
> I want to develop the above-described web app now; suggest our first step.
> 
> We work in an iterative approach, where we try to make small changes at a time.
> Suggest on a high level, without any code, how we can achieve the suggested changes. Mention the files you want to create or change in the next step. Make a section for each file that we need to change in the next step. Make the description short and high-level.
> 
> Here are some rules:
> - Adjust the prompts if necessary in the promptsUtils.js, and the data returned needs to be in JSON format.
> - Remember, when creating the prompt, that we are using a JSON and that we need to be able to use the same structure to read it.
> - Don't change the openai.js and useApi.js files.
> - Do the API calls via the useApi.js hook.
> - Create new components if needed but try to reuse them.

We've experimented with various prompts, and the following rules proved helpful for working with this boilerplate code. However, feel free to modify them and experiment as per your needs.

**ChatGPT response**:
> Sure, here is a high-level step-by-step guide of what files to create or change to implement the Recipe Generator feature.
> 
> 1.  File: prompts/promptUtils.js
>     -   Update the `getSystemPrompt()` function to reflect the new functionality of generating recipes based on the chosen protein, vegetable, and carbohydrate.
>     -   Update the `getUserPrompt(input)` function to include three parameters - protein, vegetable, and carbohydrate. The new message should reflect the user's chosen ingredients.
> 
> 2.  File: pages/index.js
>     -   Update the page's description and title.
>     -   Replace the single TextInput component with three new drop-down menu components for protein, vegetable, and carbohydrate selection (we might need to create a new component for this).
>     -   Update the `handleSubmit` function to get the user's input from these three new components and send it as the payload for the API call.
>     -   The data returned by the API call (which is in JSON format) will be passed to the existing ResponseDisplay component.
> 3.  File: components/ResponseDisplay.js
>     -   Update this component to display the recipe name, ingredients, and steps instead of the pet name and description.
> 4.  File: pages/_document.js, _app.js, and globals.css
>     -   No changes needed.
> 5.  File: components/TextInput.js and SubmitButton.js
>     -   No changes needed.
> 6.  File: hooks/useApi.js
>     -   No changes needed.
> 7.  Create a new component: DropdownMenu.js
>     -   This component will be used to create the drop-down menus for selecting the protein, vegetable, and carbohydrate.
> 
> The steps above will lead us to a simple Recipe Generator MVP. After implementing these changes, we can continue to iterate on the design and functionality based on user feedback and new feature ideas.

We are again happy with this response and will use it as it is. But you could further iterate, regenerate the response or also adjust it manually if you want.

### 3.3 Implementing the new prompt

In this step, we are going to implement the first step of our code planning. We are going to use ChatGPT to generate the code for us. As outlined in the instructions, we are first going to adjust the prompt so we can generate a recipe instead of a pet name.

**Prompt**:
> I want you to modify the code to create our new web app, as we previously outlined.
> 
> Remember that we are modifying the boilerplate code I initially provided and what we already have done in our previous conversation. Use its components and state management where possible. Remember to keep the code of the boilerplate that you didn't change when you are responding. Only add what is necessary.
> 
> Tell me, in the end, the result I should see or how to test it. 
> 
> If you pass data in the generated code, console.log it for easier debugging.
> Create comments in the generated code.
> Make sure that the code functions as you describe before responding.
> 
> Create code and instructions to implement this step from the following instructions: "File: prompts/promptUtils.js
> 
> Update the getSystemPrompt() function to reflect the new functionality of generating recipes based on the chosen protein, vegetable, and carbohydrate.
> Update the getUserPrompt(input) function to include three parameters - protein, vegetable, and carbohydrate. The new message should reflect the user's chosen ingredients."
> 
> This is the current file content: "FILECONTENT"

We pasted the instructions from the previous code planning step into the prompt. And we will also need to paste the code of our current `promptUtils.js` file into the prompt. 

We paste the code of the file that ChatGPT should adjust into the prompt because this will prevent it from hallucinating and generating code that is different from the file.

**ChatGPT response**:
> Sure, let's update the functions in the "prompts/promptUtils.js" file.
> 
> Here is the updated file:
> 
> ```javascript
> // file: /prompts/promptUtils.js
> 
> export function getSystemPrompt() {
>   return {
>     role: "system",
>     content: "You are a helpful assistant that specializes in generating delicious recipes based on chosen ingredients.",
>   };
> }
> 
> export function getUserPrompt(protein, vegetable, carbohydrate) {
>   console.log(`Protein: ${protein}, Vegetable: ${vegetable}, Carbohydrate: ${carbohydrate}`);
>   return {
>     role: "user",
>     content: `Generate a recipe that includes ${protein}, ${vegetable}, and ${carbohydrate} as main ingredients. The recipe should be provided in JSON format with fields: "name", "ingredients", and "steps".`,
>   };
> }
> ```
> 
> To test the updated functions:
> 
> 1.  Import these functions in any JavaScript file.
> 2.  Call the `getSystemPrompt()` function. It should return a system prompt about generating recipes based on the chosen ingredients.
> 3.  Call the `getUserPrompt()` function with three arguments - protein, vegetable, and carbohydrate. It should return a user prompt that includes these ingredients.
> 4.  The console should print the protein, vegetable, and carbohydrate when the `getUserPrompt()` function is called.
> 
> For example:
> 
> ```javascript
> import { getSystemPrompt, getUserPrompt } from './prompts/promptUtils';
> 
> console.log(getSystemPrompt());
> 
> console.log(getUserPrompt('chicken', 'broccoli', 'rice'));
> ```
> 
> This code will output:
> 
> ```javascript
> {
> { role: 'system', content: 'You are a helpful assistant that specializes in generating delicious recipes based on chosen ingredients.' }
> 
> Protein: chicken, Vegetable: broccoli, Carbohydrate: rice
> { role: 'user', content: 'Generate a recipe that includes chicken, broccoli, and rice as main ingredients. The recipe should be provided in JSON format with fields: "name", "ingredients", and "steps".' }
> }
> ```
> 
> The raw API return data should look something like:
> ```json
> "Data from OpenAI API:  {
>   "name": "Chicken and Broccoli Stir-Fry",
>   "ingredients": [
>     "1 lb chicken breast",
>     "1 cup broccoli",
>     "1 cup rice",
>     "2 tbsp soy sauce",
>     "1 tbsp olive oil"
>   ],
>   "steps": [
>     "Cook the rice according to package instructions.",
>     "Heat the oil in a pan over medium heat.",
>     "Add the chicken and cook until no longer pink.",
>     "Add the broccoli and soy sauce. Stir-fry until the broccoli is tender.",
>     "Serve the stir-fry over the cooked rice."
>   ]
> }"
> ```

The new `promptUtils.js` looks good. In this case, we didn't do the suggested testing in this step, since we will see in the next step if the code works as expected.

### 3.4 Implementing the index page and dropdown menu
In this step, we are going to implement the index page and the dropdown menu as outlined in the code planning step. With this implementation done, we will be able to already test the basic functionality of our web app.

**Prompt**:
> I want you to modify the code to create our new web app, as we previously outlined.
> 
> Remember that we are modifying the boilerplate code I initially provided and what we already have done in our previous conversation. Use its components and state management where possible. Remember to keep the code of the boilerplate that you didn't change when you are responding. Only add what is necessary.
> 
> Tell me, in the end, the result I should see or how to test it.
> 
> If you pass data in the generated code, console.log it for easier debugging.
> Create comments in the generated code.
> Make sure that the code functions as you describe before responding.
> 
> Create code and instructions to implement this step from the following instructions: "File: pages/index.js
> 
> Update the page's description and title.
> Replace the single TextInput component with three new drop-down menu components for protein, vegetable, and carbohydrate selection (we might need to create a new component for this).
> Update the handleSubmit function to get the user's input from these three new components and send it as the payload for the API call.
> The data returned by the API call (which is in JSON format) will be passed to the existing ResponseDisplay component."
> 
> This is the current file content: "FILECONTENT"

As before, we pasted the instructions from the previous code planning step into the prompt. And we will also need to paste the code of our current `index.js` file into the prompt.

**ChatGPT response**:
> Okay, let's add drop-down menu components for protein, vegetable, and carbohydrate selection, and modify the handleSubmit function accordingly. Since the boilerplate doesn't have a dropdown component, we'll create one for this.
> 
> First, create a new file named Dropdown.js under the /components folder:
> 
> ```javascript
> // file: /components/Dropdown.js
> const Dropdown = ({ options, selectedOption, setSelectedOption }) => {
>   return (
>     <select 
>       value={selectedOption}
>       onChange={(event) => setSelectedOption(event.target.value)}
>     >
>       {options.map((option, index) => (
>         <option key={index} value={option}>
>           {option}
>         </option>
>       ))}
>     </select>
>   );
> };
> 
> export default Dropdown;
> ```
> 
> Then, in pages/index.js:
>   
> ```javascript
> // file: /pages/index.js
> import Head from 'next/head';
> import { Inter } from 'next/font/google';
> import { useState } from 'react';
> import Dropdown from '@/components/Dropdown';
> import SubmitButton from '@/components/SubmitButton';
> import ResponseDisplay from '@/components/ResponseDisplay';
> import useApi from '@/hooks/useApi';
> import { getUserPrompt } from "../prompts/promptUtils";
> 
> // Some example options for the dropdown menus
> const proteins = ["Chicken", "Beef", "Tofu"];
> const vegetables = ["Broccoli", "Spinach", "Peas"];
> const carbohydrates = ["Rice", "Pasta", "Potato"];
> 
> const inter = Inter({ subsets: ['latin'] });
> 
> export default function Home() {
>   const [selectedProtein, setSelectedProtein] = useState(proteins[0]);
>   const [selectedVegetable, setSelectedVegetable] = useState(vegetables[0]);
>   const [selectedCarbohydrate, setSelectedCarbohydrate] = useState(carbohydrates[0]);
>   const [submitValue, setSubmitValue] = useState('');
>   const { data, error, loading } = useApi('/api/openai', 'POST', submitValue);
> 
>   const handleSubmit = (event) => {
>     event.preventDefault();
>     console.log(`Selected protein: ${selectedProtein}, vegetable: ${selectedVegetable}, carbohydrate: ${selectedCarbohydrate}`);
>     setSubmitValue(getUserPrompt(selectedProtein, selectedVegetable, selectedCarbohydrate).content);
>   };
> 
>   return (
>     <>
>       <Head>
>         <title>Recipe Generator</title>
>         <meta name="description" content="Select a protein, vegetable, and carbohydrate and get a delicious recipe." />
>         <meta name="viewport" content="width=device-width, initial-scale=1" />
>         <link rel="icon" href="/favicon.ico" />
>       </Head>
>       <main className="container">
>         <h1 className={inter.className}>Recipe Generator</h1>
>         <p className={inter.className}> Select a protein, vegetable, and carbohydrate to get a delicious recipe.
>         </p>
>         <form>
>           <ResponseDisplay data={data} error={error} loading={loading} />
>           <Dropdown options={proteins} selectedOption={selectedProtein} setSelectedOption={setSelectedProtein} />
>           <Dropdown options={vegetables} selectedOption={selectedVegetable} setSelectedOption={setSelectedVegetable} />
>           <Dropdown options={carbohydrates} selectedOption={selectedCarbohydrate} setSelectedOption={setSelectedCarbohydrate} />
>           <SubmitButton onClick={handleSubmit} disabled={loading} />
>         </form>
>       </main>
>     </>
>   );
> }
> ```
> 
> To test, run your Next.js server and navigate to the homepage. You should see three dropdowns for protein, vegetable, and carbohydrate. Once you select

Sometimes, if the response is too long, ChatGPT will stop the response mid-sentence. In this case, we can just instruct ChatGPT to continue the response.

**Prompt**:
> continue

**ChatGPT response**:
> Once you select options from each dropdown and click submit, the API will be called with your selections as the input.
> 
> The console should log the selected options upon submitting the form:
> 
> ```javascript
> Selected protein: Chicken, vegetable: Broccoli, carbohydrate: Rice
> ```
> 
> This signifies that the dropdown components are correctly capturing the user's selections and passing them into the handleSubmit function. The form's submission should then trigger the OpenAI API call with the selected ingredients as the parameters.
> 
> In the UI, the ResponseDisplay component will show the loading state until the data or error comes back from the API call. If there's an error, it will display that. If the data comes back successfully, it will be displayed in this component.
> 
> Keep in mind that the display of this data will depend on how the API call is implemented and how the ResponseDisplay component is structured to handle and display the data. These elements are not covered in the provided scope and may need to be adjusted based on the specifics of your application and API.
> 
> Also note that in a real-world application, you would likely want to fetch the options for your dropdown menus from an API or database. In this example, we have hard-coded some example options for simplicity. You may need to adjust this based on the specifics of your use case.

This looks good, we can now already test the basic functionality of our web app. We can select the ingredients and submit the form. We will see the loading state and then the response from the API. We can also see the console log of the selected ingredients.

### 3.5 Implementing the response display
In the last step, for our basic MVP, we are going to adjust the display of the response.

> **Prompt**:
> I want you to modify the code to create our new web app, as we previously outlined.
> 
> Remember that we are modifying the boilerplate code I initially provided and what we already have done in our previous conversation. Use its components and state management where possible. Remember to keep the code of the boilerplate that you didn't change when you are responding. Only add what is necessary.
> 
> Tell me, in the end, the result I should see or how to test it. 
> 
> If you pass data in the generated code, console.log it for easier debugging.
> Create comments in the generated code.
> Make sure that the code functions as you describe before responding.
> 
> Create code and instructions to implement this step from the following instructions: "File: components/ResponseDisplay.js
> 
> Update this component to display the recipe name, ingredients, and steps instead of the pet name and description."
> 
> This is the current file content: "FILECONTENT"

As before, we pasted the instructions from the previous code planning step into the prompt. And we will also need to paste the code of our current `ResponseDisplay.js` file into the prompt.

**ChatGPT response**:
> Based on the provided instructions, you will need to update the `ResponseDisplay` component to display the recipe name, ingredients, and steps instead of the pet name and description. Here is how you can modify the `ResponseDisplay.js`:
> 
> ```javascript
> // file: /components/ResponseDisplay.js
> const ResponseDisplay = ({ data, error, loading }) => {
>   console.log("data in ResponseDisplay", data);
>   let content;
> 
>   if (loading) {
>     content = "Loading...";
>   } else if (error) {
>     content = `Error: ${error.message}`;
>   } else if (data) {
>     content = (
>       <>
>         <h2>{data.result.name}</h2>
>         <h3>Ingredients</h3>
>         {data.result.ingredients.map((ingredient, index) => (
>           <div key={index}>
>             <p>Name: {ingredient.name}</p>
>             <p>Quantity: {ingredient.quantity}</p>
>             <p>Notes: {ingredient.notes}</p>
>           </div>
>         ))}
>         <h3>Steps</h3>
>         {data.result.steps.map((step, index) => (
>           <p key={index}>{step}</p>
>         ))}
>       </>
>     );
>   } else {
>     content = "";
>   }
> 
>   return <div className="response-display">{content}</div>;
> };
> 
> export default ResponseDisplay;
> ```
> 
> To test this, you should see in the `ResponseDisplay` component:
> 
> 1.  The name of the recipe at the top.
> 2.  The ingredients section next, with the name, quantity, and notes of each ingredient displayed.
> 3.  The steps section at the bottom, with each step displayed in the order they appear in the API response.
> 
> This information should populate after selecting your options from the dropdown menus on the index page and submitting the form, triggering the OpenAI API call. You should also see the "Loading..." message in the `ResponseDisplay` component while the API call is in progress, and any errors should be displayed if they occur.
> 
> Ensure that you have your browser console open while testing, as the `console.log` will output the data from the API response, which will be helpful for debugging.

Nice, this already works but we can improve the display of the ingredients. We can adjust the `ResponseDisplay.js` file to display the ingredients on one line.

**Prompt**:
> "Name: Beef
> 
> Quantity: 1 pound
> 
> Notes: sliced into thin strips"
> For each ingredient could be all on the same line and we dont need to write name, quantity and notes each time before the it. Tis makes it harder to read.

We just copy what we see from the screen and write a slopy prompt. You will need to try out what works best for you. If the code of `ResponseDisplay.js` gets changed unintentionally you might need to add the code of the file to the prompt.

**ChatGPT response**:
> Sure! Here's the updated `ResponseDisplay.js` file that formats the ingredients on a single line:
> 
> ```javascript
> // file: /components/ResponseDisplay.js
> const ResponseDisplay = ({ data, error, loading }) => {
>   console.log("data in ResponseDisplay", data);
>   let content;
> 
>   if (loading) {
>     content = "Loading...";
>   } else if (error) {
>     content = `Error: ${error.message}`;
>   } else if (data) {
>     content = (
>       <>
>         <h2>{data.result.name}</h2>
>         <h3>Ingredients</h3>
>         {data.result.ingredients.map((ingredient, index) => (
>           <p key={index}>
>             {ingredient.name} - {ingredient.quantity} ({ingredient.notes})
>           </p>
>         ))}
>         <h3>Steps</h3>
>         {data.result.steps.map((step, index) => (
>           <p key={index}>{step}</p>
>         ))}
>       </>
>     );
>   } else {
>     content = "";
>   }
> 
>   return <div className="response-display">{content}</div>;
> };
> 
> export default ResponseDisplay;
> ```
> 
> Now, each ingredient is shown on one line, and the name, quantity, and notes are separated by hyphens and parentheses for clarity. For example, "Beef - 1 pound (sliced into thin strips)". The steps remain unchanged.
> 
> Remember to test this by running the web app, selecting the options from the dropdown menus on the index page, and submitting the form to make the OpenAI API call. The ingredients and steps should now be more readable.

Ok, this looks good, we are happy with it for now, although we could further improve the display of the steps. But we want to keep things simple.

### 3.6 Adding more options to the dropdown menus
We make some more adjustments, in this case, we want to add more options to the dropdown menus.

**Prompt**:
> I want to have more selection of the protein vegetable and carbohydrates generate 15 more for each

**ChatGPT response**:
> Sure, for extending the selection options in our `SelectInput` component, we just need to add more options in our `options` arrays for `proteinOptions`, `vegetableOptions`, and `carbohydrateOptions` in the `/pages/index.js` file.
> 
> Here's an example of how to add more options:
> 
> ```javascript
> // Add more options in these arrays
> const proteinOptions = [
>   "Chicken", "Beef", "Pork", "Fish", "Shrimp", "Tofu", "Lentils",
>   "Beans", "Chickpeas", "Eggs", "Sausage", "Bacon", "Turkey",
>   "Salmon", "Tuna", "Sardines"
> ];
> 
> const vegetableOptions = [
>   "Broccoli", "Peas", "Spinach", "Kale", "Green Beans", "Sweet Potatoes",
>   "Mushrooms", "Bell Peppers", "Carrots", "Onions", "Tomatoes",
>   "Zucchini", "Cabbage", "Cauliflower", "Eggplant", "Artichokes"
> ];
> 
> const carbohydrateOptions = [
>   "Rice", "Pasta", "Quinoa", "Couscous", "Bread", "Potatoes",
>   "Sweet Potatoes", "Corn", "Oats", "Buckwheat", "Barley",
>   "Rye", "Bulgur", "Farro", "Amaranth", "Millet"
> ];
> ```
> After updating these arrays, you should see the new options in the dropdown menus on the web page. Try selecting these new options and submit the form to see how the recipe changes based on your selection.

If we test this we now get an error. You can see what happens when you don't provide the code of the current file along with the instructions in the prompt.

### 3.7 Debugging the dropdown menu
Let's debug this problem.

**Prompt**:
> I get this error on my screen: 
> 
> "Unhandled Runtime Error
> ReferenceError: proteins is not defined
> 
> Source
> pages\index.js (33:57) @ proteins
> 
>   31 | 
>   32 | export default function Home() {
> > 33 | const [selectedProtein, setSelectedProtein] = useState(proteins[0]);
>      |                                                       ^
>   34 | const [selectedVegetable, setSelectedVegetable] = useState(vegetables[0]);
>   35 | const [selectedCarbohydrate, setSelectedCarbohydrate] = useState(carbohydrates[0]);
>   36 | const [submitValue, setSubmitValue] = useState('');
> "
> 
> This the file: "FILECONTENT"

For debugging it is always good to post the error message and the content of the file in which the error occurred.

**ChatGPT response**:
> I see, you have accidentally used `proteins`, `vegetables`, and `carbohydrates` instead of `proteinOptions`, `vegetableOptions`, and `carbohydrateOptions` when initializing the state and when passing the options to the `Dropdown` component.
> 
> Let's fix that:
>   
> ```javascript
> export default function Home() {
>   // Initialize states with the first option from each array
>   const [selectedProtein, setSelectedProtein] = useState(proteinOptions[0]);
>   const [selectedVegetable, setSelectedVegetable] = useState(vegetableOptions[0]);
>   const [selectedCarbohydrate, setSelectedCarbohydrate] = useState(carbohydrateOptions[0]);
>   const [submitValue, setSubmitValue] = useState('');
>   const { data, error, loading } = useApi('/api/openai', 'POST', submitValue);
> 
>   const handleSubmit = (event) => {
>     event.preventDefault();
>     console.log(`Selected protein: ${selectedProtein}, vegetable: ${selectedVegetable}, carbohydrate: ${selectedCarbohydrate}`);
>     setSubmitValue(getUserPrompt(selectedProtein, selectedVegetable, selectedCarbohydrate).content);
>   };
> 
>   return (
>     <>
>       {/* ... */}
>       <form>
>         <ResponseDisplay data={data} error={error} loading={loading} />
>         <Dropdown options={proteinOptions} selectedOption={selectedProtein} setSelectedOption={setSelectedProtein} />
>         <Dropdown options={vegetableOptions} selectedOption={selectedVegetable} setSelectedOption={setSelectedVegetable} />
>         <Dropdown options={carbohydrateOptions} selectedOption={selectedCarbohydrate} setSelectedOption={setSelectedCarbohydrate} />
>         <SubmitButton onClick={handleSubmit} disabled={loading} />
>       </form>
>     </>
>   );
> }
> ```
> 
> This should fix the error you're encountering. When you run the app now, you should see the dropdown menus filled with the provided options and the first option of each being pre-selected.

Ok, the error is fixed.

### 3.8 Design adjustments
Now in the last step, we are going to adjust the design of our web app.

**Prompt**:
> I want you to make the design of the dropdowns nicer.
> 
> I want you to design in the style of Jonathan Ive's Apple software design, simple, elegant and functional.
> Use the global.css file for styling.
> 
> This is the global.css: "FILECONTENT"

In this case, we just do all the styling in the global.css file to make things simpler.

**ChatGPT response**:
> Let's update the `global.css` file to add styles for our dropdown component. We'll follow the minimal and clean design aesthetic, similar to the Apple software design by Jonathan Ive:
> 
> ```css
> /* // file: styles/globals.css */
> body {
>   font-family: 'Inter', sans-serif;
>   margin: 0;
>   padding: 0;
>   box-sizing: border-box;
>   background-color: #F5F5F5;
> }
> 
> .container {
>   max-width: 800px;
>   margin: 0 auto;
>   padding: 2rem;
>   background-color: #FFFFFF;
>   border-radius: 8px;
>   box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
> }
> 
> .text-input,
> .dropdown {
>   width: 100%;
>   padding: 0.5rem;
>   font-size: 1rem;
>   border: 1px solid #ccc;
>   border-radius: 8px;
>   margin-bottom: 1rem;
>   background: #FFFFFF;
>   color: #333333;
>   outline: none;
> }
> 
> .submit-button {
>   display: inline-block;
>   margin: 1rem 0;
>   padding: 0.5rem 1rem;
>   font-size: 1rem;
>   color: white;
>   background-color: #0070f3;
>   border: none;
>   border-radius: 8px;
>   cursor: pointer;
>   transition: background-color 0.3s;
>   width: 100%;
> }
> 
> .submit-button:hover {
>   background-color: #0051cc;
> }
> 
> .response-display {
>   margin-top: 1rem;
>   padding: 1rem;
>   border-radius: 8px;
>   background: #F5F5F5;
> }
> ```
> 
> Now, let's add the `dropdown` class to our dropdown component:
> 
> ```javascript
> // file: /components/Dropdown.js
> 
> const Dropdown = ({ options, selectedOption, setSelectedOption }) => {
>   return (
>     <select 
>       value={selectedOption}
>       onChange={(event) => setSelectedOption(event.target.value)}
>       className="dropdown"
>     >
>       {options.map((option, index) => (
>         <option key={index} value={option}>
>           {option}
>         </option>
>       ))}
>     </select>
>   );
> };
> 
> export default Dropdown;
> ```
> 
> This will style your dropdowns in a minimal and clean design, which is consistent with the style of Jonathan Ive's Apple software design. The dropdown will now have a comfortable margin around it, a rounded border, and colors that match with the rest of the application. Please replace your current files with the above versions and refresh your page.

This looks good, but we don't want to change the background color of the response display and let's make the button black. Let's create a new prompt to adjust this.

**Prompt**:
> It looks weird that the output response now has a grey background. Make it white again. Also, make the submit button black.
> 
> I want you to design in the style of Jonathan Ive's Apple software design, simple, elegant, and functional.
> Use the global.css file for styling.
> 
> This is the global.css:"FILECONTENT"

**ChatGPT response**:
> Sure, let's adjust the global.css file to make the response display background white and the submit button black. Here's the updated CSS:
> 
> ```css
> /* // file: styles/globals.css */
> body {
>   font-family: 'Inter', sans-serif;
>   margin: 0;
>   padding: 0;
>   box-sizing: border-box;
>   background-color: #F5F5F5;
> }
> 
> .container {
>   max-width: 800px;
>   margin: 0 auto;
>   padding: 2rem;
>   background-color: #FFFFFF;
>   border-radius: 8px;
>   box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
> }
> 
> .text-input,
> .dropdown {
>   width: 100%;
>   padding: 0.5rem;
>   font-size: 1rem;
>   border: 1px solid #ccc;
>   border-radius: 8px;
>   margin-bottom: 1rem;
>   background: #FFFFFF;
>   color: #333333;
>   outline: none;
> }
> 
> .submit-button {
>   display: inline-block;
>   margin: 1rem 0;
>   padding: 0.5rem 1rem;
>   font-size: 1rem;
>   color: white;
>   background-color: #000000;  /* Updated background color to black */
>   border: none;
>   border-radius: 8px;
>   cursor: pointer;
>   transition: background-color 0.3s;
>   width: 100%;
> }
> 
> .submit-button:hover {
>   background-color: #333333;  /* Updated hover color to dark grey */
> }
> 
> .response-display {
>   margin-top: 1rem;
>   padding: 1rem;
>   border-radius: 8px;
>   background: #FFFFFF; /* Updated background color to white */
> }
> ```
> 
> Now your submit button will be black and your response display will have a white background. This design keeps the clean and minimal aesthetic associated with Jonathan Ive's design philosophy. Please replace your current global.css file with the updated one and refresh your page.

This looks good for a rough prototype! We got our basic functionality we could now add more features, improve further the design or refactor our code to make it more efficient, but for the scope of this tutorial, we will stop here. 

## 4. Prompts

### 4.1 Prompt for ideation
> You are the world's greatest product manager. You are like a modern Steve Jobs specialized in AI web app development with deep knowledge of GPT.
> 
> We have the following code as a boilerplate: "`PROJECTCODE`"
> 
> Come up with ten ideas of what we can build based on this code. We only want to build an MVP version of this first.

### 4.2 Starting prompt (User flow)
> You are the world's greatest developer and product manager. You are like Addy Osmani and Wes Bos, and Steve Jobs, specializing in react and next.js development and AI web app development with deep knowledge of GPT.
> 
> We want to build a very simple MVP for a prototype.
> 
> The code should be built based on this next.js boilerplate Opeanai API web app that we already have set up: "`PROJECTCODE`"
> 
> I want to build "`APPNAME`": "`APPDESCRIPTION`"
> 
> Suggest a user flow for the web app only high level don't show any code. Focus only on MVP functionality, not more.

### 4.3 Prompt for code planning
> I want to develop the above-described web app now; suggest our first step.
> 
> We work in an iterative approach, where we try to make small changes at a time.
> Suggest on a high level, without any code, how we can achieve the suggested changes. Mention the files you want to create or change in the next step. Make a section for each file that we need to change in the next step. Make the description short and high-level.
> 
> Here are some rules:
> - Adjust the prompts if necessary in the promptsUtils.js, and the data returned needs to be in JSON format.
> - Remember, when creating the prompt, that we are using a JSON and that we need to be able to use the same structure to read it.
> - Don't change the openai.js and useApi.js files.
> - Do the API calls via the useApi.js hook.
> - Create new components if needed but try to reuse them.

You can adapt the first paragraph to what feature you want to plan next, in our case we only needed to plan once.

### 4.4 Prompt for code implementation
> I want you to modify the code to create our new web app, as we previously outlined.
> 
> Remember that we are modifying the boilerplate code I initially provided and what we already have done in our previous conversation. Use its components and state management where possible. Remember to keep the code of the boilerplate that you didn't change when you are responding. Only add what is necessary.
> 
> Tell me, in the end, the result I should see or how to test it. 
> 
> If you pass data in the generated code, console.log it for easier debugging.
> Create comments in the generated code.
> Make sure that the code functions as you describe before responding.
> 
> Create code and instructions to implement this step from the following instructions: "`INSTRUCTIONS`"
> 
> This is the current file content: "`FILECONTENT`"

### 4.5 Prompt for debugging
>`PROBLEMDESCRIPTION/ERRORMESSAGE`
>
>I want you to debug the above-mentioned problem. If you think it's necessary, ask me for error codes, console.log statements, data shown in the terminal, and the code of the file if you need it.
>
>If it's a problem with the data, try to console.log it. Generate high-level instructions on how we can find the problem in an iterative process with steps. Don't show me the code.
>
>Here is the code: "`CODE`"

This is a general prompt for debugging, usually you should be fine with just pasting the error message and the code of the file in which the error occurred.

### 4.6 Prompt for design adjustments
> `DESCRIPTION`
>
>I want you to design in the style of Jonathan Ive's Apple software design, simple, elegant, and functional.
>Use the global.css file for styling.
>
>This is the global.css: "`GLOBALCSSCODE`"

## 5. Conclusion
We have seen how we can use ChatGPT to generate code for our web app. We have seen how we can use ChatGPT to generate prompts for ideation, user flows, code planning, code implementation, debugging, and design adjustments. 

Now you should have the necessary knowledge and tools to create your own web app with ChatGPT.