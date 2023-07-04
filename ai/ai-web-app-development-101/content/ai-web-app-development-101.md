In this tutorial, we are going to create a web app that uses the OpenAI API to generate recipes based on a list of ingredients provided by the user. We are going to use ChatGPT to ideate and plan the project, and then use it to generate the code for the project. We will use the [Next.js OpenAI Boilerplate](https://github.com/dacadeorg/nextjs-openai-boilerplate).

### Prerequisites
While having some prior coding experience is beneficial, it is not a hard requirement for this tutorial. ChatGPT will step up to generate the code needed for the project, although it might take a bit more time for beginners.

- **Basic knowledge of JavaScript and React** - Although this isn't strictly necessary, it could prove beneficial. For a quick overview, consider watching these videos: [JavaScript in 100 Seconds](https://www.youtube.com/watch?v=DHjqpvDnNGE), [React in 100 Seconds](https://www.youtube.com/watch?v=Tn6-PIqc4UM) and [Next.js in 100 Seconds](https://www.youtube.com/watch?v=Sklc_fQBmcs).
- **Knowledge of how to use ChatGPT** - If you're new to ChatGPT, this basic tutorial can come in handy: [How To Use Chat GPT by Open AI For Beginners](https://www.youtube.com/watch?v=AXn2XVLf7d0).
- **Familiarity with IDEs** - This tutorial utilizes the web version of VSCode. If you're unfamiliar with IDEs or need a refresher, watch this beginner tutorial on how to use VSCode: [Learn Visual Studio Code in 7min (Official Beginner Tutorial)](https://www.youtube.com/watch?v=B-s71n0dHUk).

### Tech Stack
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [NextJS](https://nextjs.org/) - A popular open-source framework for building React applications with server-side rendering, automatic code splitting, and optimized performance.
- [OpenAI API](https://openai.com/) - A powerful API that can be applied to virtually any task that involves understanding or generating natural language, code, or images.
- [ChatGPT](https://chat.openai.com/) - A tool that allows you to have a conversation with GPT-4/3.5. It is a great tool to ideate, plan your project and also to generate code.
- [Codespaces](https://github.com/features/codespaces) - A feature of GitHub that allows you to develop entirely in the cloud. It is a great tool to get started quickly without having to install anything on your computer.

### Overview
1. [Setup](#1-setup) (10 min) - This section will guide you through the necessary steps to set up your project.
2. [Ideation](#2-ideation) (15 min) - Here, we will employ ChatGPT to brainstorm and outline what we aim to construct.
3. [Building the MVP](#3-building-the-mvp) (45 min) - In this section, we are going to use to build the MVP of our project with ChatGPT
4. [Prompts](#4-prompts) (5 min) - In this section, we will compile a list of all prompts that we used throughout this tutorial.
5. [Conclusion](#5-conclusion) (2 min) - Finally, we will conclude this tutorial and give you some ideas on how to continue.

## 1. Setup
In this initial section, we are going to set up our boilerplate code, the OpenAI API key and run it in a Codespace.

### 1.1 Create a Codespace from the boilerplate
If you don't have a GitHub account yet, create one at [github.com](https://github.com/). GitHub is a platform where developers can collaborate on projects and share code. It is also the platform where the boilerplate code is hosted and that we will use to create a Codespace.

Visit the repository of the [Next.js OpenAI Boilerplate](https://github.com/dacadeorg/nextjs-openai-boilerplate/) and click on the "Use this template" button. Next, select "Open with Codespaces". This action will spawn a new Codespace with the boilerplate code and install all the necessary dependencies.

### 1.2 Create an OpenAI API key
Navigate to the [OpenAI API](https://platform.openai.com/account/api-keys) and sign up for an account. After that, create an API key. If you're unsure about the process, this tutorial might be of help: [How to Get Your OpenAI API Key](https://www.youtube.com/watch?v=nafDyRsVnXU).

### 1.3 Add the OpenAI API key to the Codespace
Within your Codespace, create a `.env` file and input your API key into it. The file should resemble the following:
```
OPENAI_API_KEY=your_openai_api_key_here
```
Alternatively, you can utilize the `.env.example` file as a template simply rename it to `.env` and insert your API key.

### 1.4 Test the boilerplate
To test the boilerplate, input the following command in your terminal:
```
npm run dev
```
You should see a notification appearing at the bottom of your screen, prompting you to open the application in a browser. Upon clicking, you should be greeted by a page that looks like this:

![](https://i.imgur.com/QUECo91.png)

In our example, we used "dolphin" as the input and received the depicted response. Feel free to experiment with different inputs and observe the corresponding responses.

Congratulations! You've successfully set up the project and verified the boilerplate's functionality. In the next phase, we will employ ChatGPT to brainstorm and draft our project.

## 2. Ideation

Before we begin to generate code, we need to come up with an idea of what we want to build. In this section, we are going to use ChatGPT to come up with an idea for our project.

You can find the whole conversation with ChatGPT [here](https://chat.openai.com/share/e7177220-5062-4e89-a3ca-7b289bf96826 ).

### 2.1 Initial broad ideas
To initiate our brainstorming process, we start a new thread in ChatGPT, we are utilizing the GPT4 model in this case. However, if you have only access to the GPT-3.5 model, this is also a viable choice. 
Our first step involves providing general instructions and asking for broad ideas. We also include the project's code in the prompt to provide contextual information to the AI.

We will collate all the prompts we use throughout this tutorial in a generic format towards the end of this guide, making it convenient for you to copy and paste: [4. Prompts](#4-prompts).

**Prompt**:
> You are the world's greatest product manager. You are like a modern Steve Jobs specialized in AI web app development with deep knowledge of GPT.
> 
> We have the following code as a boilerplate: "`PROJECTCODE`"
> 
> Come up with ten ideas of what we can build based on this code. We only want to build an MVP version of this first.

Replace `PROJECTCODE` with the code from the boilerplate.

You can retrieve the entire project's code by entering the command `npm run generateTXT` in your terminal. The project's code will be generated in the `projectCode.txt` file. This feature makes it convenient for you to quickly copy and paste the current code of the project into ChatGPT, providing it with context for generating useful responses to your project.

For this prompt, simply copy the entire code and paste it in place of "`PROJECTCODE`".

Subsequently, you should receive a response that looks something like the following.

**ChatGPT response**:
> Sure, here are ten MVP ideas based on the current boilerplate code:
> 
> 1.  Pet Naming AI: This is already suggested in the prompts file. The AI can suggest creative pet names and also provide a fun, whimsical description of the pet based on user input of pet type.
> 
> 2.  AI Story Generator: Users could input characters, a setting, or a theme, and the AI could generate a creative short story based on the inputs.
> 
> 3.  AI Recipe Generator: Users could input ingredients they have on hand, and the AI could suggest a recipe using those ingredients.
> 
> 4.  AI Workout Plan Generator: Users input their current fitness level, equipment they have, and their fitness goals, and the AI generates a personalized workout plan.
> 
> 5.  AI Dream Interpreter: Users describe their dreams, and the AI provides possible interpretations of the dream based on common dream symbolism.
> 
> 6.  AI Plant Care Guide: Users input the type of plant they have, and the AI provides specific care instructions for that type of plant.
> 
> 7.  AI Music Reviewer: Users input a song or album, and the AI generates a comprehensive review of that music, discussing its qualities and offering critique.
> 
> 8.  AI Film Suggestions: Users input a film they enjoyed, and the AI suggests similar films the user might enjoy based on the input.
> 
> 9.  AI Coding Helper: Users describe the functionality they want to achieve, and the AI provides coding suggestions or snippets to achieve that functionality.
> 
> 10. AI Financial Advisor: Users input their financial goals and current status, and the AI provides financial advice tailored to their needs.
> 
> Each of these ideas can be built upon the current boilerplate and extended later with additional features or functionalities.

### 2.2 Narrowing down in a specific field

To generate more ideas within a specific domain, we continue the conversation within the same thread.

**Prompt**:
> Come up with 10 more in the field of cooking.

**ChatGPT response**:
> Absolutely, here are ten more MVP ideas within the field of cooking:
> 
> 1.  AI Ingredient Substitute Recommender: The AI would suggest possible ingredient substitutes when users input a recipe ingredient they don't have.
> 
> 2.  AI Culinary Technique Demonstrator: Users input a culinary technique they want to learn, like 'how to julienne a carrot,' and the AI provides a step-by-step guide.
> 
> 3.  AI Recipe Modifier: The AI could modify a recipe based on dietary restrictions or preferences. For example, users could input a recipe, specify they're vegan, and the AI could provide a vegan version of the recipe.
> 
> 4.  AI Meal Planner: The AI would generate a week's worth of meal plans based on user's dietary preferences and restrictions.
> 
> 5.  AI Flavor Pairing Advisor: Users could input a specific ingredient, and the AI would suggest other ingredients that pair well with it.
> 
> 6.  AI Food History Educator: Users input a dish or ingredient, and the AI provides a brief history or origin story of the dish or ingredient.
> 
> 7.  AI Wine Pairing Expert: Users input the dish they are cooking, and the AI suggests a suitable wine to pair with the dish.
> 
> 8.  AI Seasonal Recipe Generator: Users specify their location and the AI provides recipes using ingredients that are in season in their area.
> 
> 9.  AI Leftover Recipe Advisor: Users input the leftovers they have in the fridge, and the AI suggests recipes that could help utilize those leftovers.
> 
> 10. AI Kitchen Gadget Utilizer: Users input a kitchen gadget they own (like an Instant Pot or a blender) and the AI provides a variety of recipes specifically for that gadget.
> 
> Each of these ideas leverages the power of AI to provide valuable and personalized assistance in the kitchen.

### 2.3 Focus on one idea and try out prompts

Having sifted through various concepts, we've decided to proceed with the initial idea of the Recipe Suggestion Assistant. Before proceeding to build the entire project, it's helpful to first test whether we can generate useful responses to prompts on this subject.

In this step, we ask ChatGPT to generate a prompt for our chosen idea.

**Prompt**:
> I want to create this: “AI Recipe Generator: Users could input ingredients they have on hand, and the AI could suggest a recipe using those ingredients.”
> 
> But first, I want to try out the necessary prompts in order to see if I will get a satisfying result. Suggest the prompt we should try. I don’t want to implement it in the code, but try it in ChatGPT here with you.

**ChatGPT response**:
> Certainly, we can use the chat-based format of GPT-3 to generate this conversation. Here is an example of how you might structure the prompt:
> 
> -   System: "You are a highly knowledgeable culinary AI assistant capable of suggesting recipes based on specific ingredients."
> 
> -   User: "I have chicken, tomatoes, garlic, onions, and pasta on hand. What can I cook with these ingredients?"
> 
> Remember, this is just an example. You can adjust the user's message to fit your use case. The AI assistant should be able to come up with a recipe using the given ingredients. Let's try it:
> 
> User: I have chicken, tomatoes, garlic, onions, and pasta on hand. What can I cook with these ingredients?

This seems promising. We will now use one of the "User Prompt"s to test if we receive a meaningful response.

**Prompt**:
> I have chicken, tomatoes, garlic, onions, and pasta on hand. What can I cook with these ingredients?

**ChatGPT response**:
> With chicken, tomatoes, garlic, onions, and pasta on hand, you can prepare a classic Chicken Pasta with Tomato Garlic Sauce. Here's a simplified version of the recipe:
> 
> Ingredients:
> 
> 1.  Chicken - 500g
> 2.  Tomatoes - 2
> 3.  Garlic - 3 cloves
> 4.  Onion - 1
> 5.  Pasta - 200g
> 
> Instructions:
> 
> 1.  Cook the pasta according to the package instructions, then drain and set aside.
> 2.  While the pasta is cooking, dice the onion, mince the garlic, and chop the tomatoes.
> 3.  Cut the chicken into bite-sized pieces.
> 4.  In a large skillet, heat a bit of oil over medium heat. Add the chicken pieces and cook until they're no longer pink in the center. Remove the chicken from the skillet and set aside.
> 5.  In the same skillet, add the diced onion and minced garlic. Sauté until the onion is translucent.
> 6.  Add the chopped tomatoes to the skillet and cook until they start to break down.
> 7.  Add the cooked chicken back into the skillet and stir to combine with the tomato mixture.
> 8.  Finally, add the cooked pasta to the skillet and stir to combine everything well. Cook for a couple more minutes until everything is heated through.
> 9.  Season with salt and pepper to taste, and garnish with fresh herbs if you have them on hand.
> 
> Enjoy your meal!
> 
> Note: This is a very basic recipe. Depending on your taste and what other ingredients you have available, you might want to add some herbs or spices, like basil, oregano, red pepper flakes, or a sprinkle of parmesan cheese on top.

The response appears to be fine. Ideally, we should now invest additional time in refining the prompt until we get the optimal results, which is best done within OpenAI's [Playground](https://platform.openai.com/playground). However, for the purpose of keeping this tutorial concise, we will proceed with the current prompt.

### 2.4 Create a short description of the MVP
The final stage in our ideation process involves drafting a short description of our intended project. This will serve as a basis for the next section, where we will start bringing our idea to life.

**Prompt**:
> Ok great, I like it. Make a short description of this MVP AI APP so I can build it. Only one short paragraph just focus on the important functionality don't try to advertise it.

**ChatGPT response**:
> The AI Recipe Generator is an MVP web application designed to simplify the cooking process for users. Its core function is to generate recipes based on user-inputted available ingredients. Users input the ingredients they have on hand, and the AI provides a suitable recipe using these ingredients, complete with a list of necessary quantities and a step-by-step cooking guide. This app aims to eliminate the guesswork from cooking and assist in reducing food waste, making it a practical solution for everyday meal planning.

This description is sufficient for our purposes. We will adapt it a bit with our ideas in the next section.

## 3. Building the MVP
In this section, we will start building a Minimum Viable Product (MVP) based on our initial project idea.

We will initiate a new ChatGPT thread. You can view the entire conversation with ChatGPT [here](https://chat.openai.com/share/71345afb-370b-4f38-aa6d-3a6d8ef484e4).

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

Once more, replace `PROJECTCODE` with the code from the boilerplate. This time, we assign a name to our idea, "Recipe Generator", and provide a brief description. This is slightly different from the description we created in the previous section, as we have now enhanced it with the additional concept that the user can select from various ingredient groups, the expected output, and the fact that it should be a single-screen web application.

**ChatGPT response**:
> Sure, I'd be happy to suggest a high-level user flow for a Recipe Generator application.
> 
> 1.  Welcome Screen: Users arrive on the homepage of the application, which provides a brief introduction and the purpose of the application.
> 
> 2.  Selection Interface: Users can see three drop-down menus, or alternatively interactive graphical selectors, to choose a protein source, a vegetable, and a carbohydrate source from the list.
> 
> 3.  Generate Button: After making their selections, users can click on a "Generate Recipe" button.
> 
> 4.  Loading Indicator: As the AI processes the request and generates a recipe, a loading indicator such as a spinner or a progress bar gives users feedback that their request is being processed.
> 
> 5.  Display Recipe: Once the AI finishes generating the recipe, the result is displayed on the screen. It includes the name of the dish, a list of ingredients (including the chosen protein, vegetable, and carbohydrate), and a step-by-step guide on how to cook the dish.
> 
> 6.  New Recipe Button: If the user wants to create a new dish, they can press the "New Recipe" button. The screen will reset to the selection interface, and they can start the process again.
> 
> 7.  Save Recipe Option (Optional): An option to save the recipe could be provided. Saved recipes could be displayed in a list at the bottom of the screen. (This functionality is optional for MVP and can be added in future iterations of the application.)
> 
> This flow covers the basic functionality of the Recipe Generator application, providing a simple yet efficient user experience. The UI is straightforward and minimalist, focusing on the functionality of generating a recipe based on user input.

Although there's room to iterate on this user flow, we're happy with its current state and want to keep it simple. We'll move forward using this version.

### 3.2 First code planning

Now that we have a clearer idea of how our web app should function, we can start planning the code. We are going to use ChatGPT to plan the implementation of the code. It is often helpful to plan the code before actually writing it, as it helps to use ChatGPT to implement more complex code that requires multiple steps.

**Prompt**:
> I want to develop the above-described web app now; suggest our first step.
> 
> We work in an iterative approach, where we try to make small changes at a time.
> Suggest on a high level, without any code, how we can achieve the suggested changes. Mention the files you want to create or change in the next step. Make a section for each file that we need to change in the next step. Make the description short and high-level. make sure to have a logical order where each step is testable and builds on the one before.
> 
> Here are some rules:
> 
> - Adjust the prompts and functions if necessary in the promptsUtils.js, and the data returned needs to be in JSON format.
> - Remember, when creating the prompt, that we are using a JSON and that we need to be able to use the same structure to read it.
> - Don’t change the openai.js and useApi.js files.
> - Do the API calls via the useApi.js hook.
> - Create new components if needed but try to reuse them.

We've experimented with various prompts, and the following rules proved helpful for working with this boilerplate code. However, feel free to modify and experiment with them as you see fit.

**ChatGPT response**:
> Absolutely! Let's plan our first steps in order to make this process organized and efficient.
> 
> 1.  Modification of prompts/promptUtils.js: We'll need to adjust our prompts and the expected function structure to fit the new context of a recipe generator. Update the `getSystemPrompt`, `getUserPrompt` and `getFunctions` functions to be suitable for a recipe generator. We'll need to specify that the assistant is a recipe generator, and in the user prompt, it should request a recipe based on the user's choice of protein, vegetable, and carb. The function should return a dish name, ingredients, and cooking instructions.
> 
> 2.  Create new components: We will need to create a new component, `DropdownSelect.js` for the protein, vegetable, and carbohydrate selections. This component will be a reusable dropdown menu that we can customize with different options for each category.
> 
> 3.  Modification of pages/index.js: This file will require quite a few changes. First, we need to import and utilize the new `DropdownSelect.js` components. We need three instances of the component, each with different options corresponding to protein, vegetable, and carbohydrate. Next, we will need to change the `handleSubmit` function to take the values from these dropdown menus and pass them to the `getUserPrompt` function from `promptUtils.js`.
> 
> 4.  Modification of components/ResponseDisplay.js: We need to update this component to show the generated recipe. It should display the name of the dish, the list of ingredients, and the cooking instructions.
> 
> After making these changes, we'll be able to see a basic functioning application where the user can select a protein, vegetable, and carb, click submit, and see a generated recipe based on those selections.
> 
> As we follow this iterative approach, we'll be able to validate and verify our changes at each step, allowing for quick error detection and resolution. By keeping our modifications modular, we ensure that our app remains robust and adaptable to future updates.

We are again happy with this response and will use it as it is. But you could further iterate, regenerate the response or also adjust it manually if you want.

### 3.3 Implementing the new prompt

In this step, we are going to implement the first step of our code planning. We are going to use ChatGPT to generate the code for us. As per the instructions outlined earlier, our first task will be to modify the prompt, so it generates a recipe rather than a pet name.

**Prompt**:
> I want you to modify the code to create our new web app, as we previously outlined.
> 
> Remember that we are modifying the boilerplate code I initially provided and what we already have done in our previous conversation. Use its components and state management where possible. Remember to keep the code of the boilerplate that you didn’t change when you are responding. Only add what is necessary.
> 
> Tell me, in the end, the result I should see or how to test it.
> 
> If you pass data in the generated code, console.log it for easier debugging.
> Create comments in the generated code.
> Make sure that the code functions as you describe before responding.
> 
> Create code and instructions to implement this step from the following instructions: "Modification of prompts/promptUtils.js: We'll need to adjust our prompts and the expected function structure to fit the new context of a recipe generator. Update the getSystemPrompt, getUserPrompt and getFunctions functions to be suitable for a recipe generator. We'll need to specify that the assistant is a recipe generator, and in the user prompt, it should request a recipe based on the user's choice of protein, vegetable, and carb. The function should return a dish name, ingredients, and cooking instructions."
> 
> This is the current file content: "FILECONTENT"

We'll insert the instructions from the previous code planning step into the prompt. We'll also need to copy and paste the content of our current promptUtils.js file into the prompt, replacing "FILECONTENT".

The reason we paste the exact code of the file that ChatGPT is expected to modify is to prevent it from generating code that differs from our target file – an occurrence known as hallucination in AI terms.

**ChatGPT response**:
> We'll modify the `promptUtils.js` to suit the requirements of the recipe generator. Here's the updated version of the file:
> 
> 
> ```Javascript
> // file: /prompts/promptUtils.js
> 
> // Modified the system prompt to reflect the assistant's new role
> export function getSystemPrompt() {
>   return {
>     role: "system",
>     content: "You are a helpful assistant that specializes in generating recipes based on a given protein, vegetable, and carbohydrate.",
>   };
> }
> 
> // Modified the user prompt to request a recipe based on user's choice of protein, vegetable, and carb
> export function getUserPrompt(protein, vegetable, carb) {
>   console.log(`Selected Protein: ${protein}, Vegetable: ${vegetable}, Carb: ${carb}`);  // Log the user's selections for debugging
>   return {
>     role: "user",
>     content: `Generate a recipe using ${protein} as protein, ${vegetable} as vegetable, and ${carb} as carbohydrate.`,
>   };
> }
> 
> // Modified the function structure to be suitable for a recipe generator
> export function getFunctions() {
>   return [
>     {
>       name: "generate_recipe",
>       description: "Generate a recipe based on a given protein, vegetable, and carbohydrate.",
>       parameters: {
>         type: "object",
>         properties: {
>           dishName: {
>             type: "string",
>             description: "The generated name for the dish",
>           },
>           ingredients: {
>             type: "array",
>             description: "The generated list of ingredients needed for the recipe",
>             items: {
>               type: "string",
>             },
>           },
>           instructions: {
>             type: "string",
>             description: "The generated cooking instructions for the dish",
>           },
>         },
>         "required": ["dishName", "ingredients", "instructions"]
>       },
>     },
>   ];
> }
> ```
> 
> With this modified `promptUtils.js`, your application will now be oriented around generating recipes.
> 
> To test the changes, run your application and check the console logs. It should print the user's selected protein, vegetable, and carb when `getUserPrompt` is called. Also, ensure that `getFunctions` returns the correct new function structure.

The new `promptUtils.js` looks good. We can test this by running the application and entering something in the input field. We should then see a response in our terminal that looks something like this:

![](https://hackmd.io/_uploads/S1FaSNytn.png)

It is not fully functional yet, but we can see that the `getUserPrompt` function is working as expected. We can now move on to the next step.

### 3.4 Implementing the dropdown component
In this step, we are going to implement the dropdown menu as outlined in the code planning step. We will again use ChatGPT to generate the code for us.

**Prompt**:
> I want you to modify the code to create our new web app, as we previously outlined.
> 
> Remember that we are modifying the boilerplate code I initially provided and what we already have done in our previous conversation. Use its components and state management where possible. Remember to keep the code of the boilerplate that you didn’t change when you are responding. Only add what is necessary.
> 
> Tell me, in the end, the result I should see or how to test it.
> 
> If you pass data in the generated code, console.log it for easier debugging.
> Create comments in the generated code.
> Make sure that the code functions as you describe before responding.
> 
> Create code and instructions to implement this step from the following instructions: "Create new components: We will need to create a new component, DropdownSelect.js for the protein, vegetable, and carbohydrate selections. This component will be a reusable dropdown menu that we can customize with different options for each category."

Just like in the previous step, we will insert the instructions from our earlier code planning phase into the prompt. We don't need to add the code of the file, because it's a new component.

**ChatGPT response**:
> Sure, let's create the `DropdownSelect.js` component. This reusable component will take a label for display, a change handler for the selected value, and an array of options to populate the dropdown. Here's the code for this component:
> 
> ```Jsx
> // file: /components/DropdownSelect.js
> 
> import React from 'react';
> 
> // The DropdownSelect component takes three props:
> // - label: A string that will be displayed as the label for the dropdown
> // - handleChange: A function that will handle changes to the dropdown's selected value
> // - options: An array of strings that will be the options in the dropdown
> const DropdownSelect = ({ label, handleChange, options }) => {
>   return (
>     <div className="dropdown-select">
>       <label>{label}</label>
>       <select onChange={(e) => handleChange(e.target.value)}>
>         {options.map((option, index) =>
>           <option key={index} value={option}>{option}</option>
>         )}
>       </select>
>     </div>
>   );
> };
> 
> export default DropdownSelect;
> ```
> 
> You can use this new component in your existing component structure where necessary. Remember to pass the required props.
> 
> 
> ```Jsx
> // file: /components/RecipeGenerator.js
> 
> import DropdownSelect from './DropdownSelect';
> 
> // Define some dummy data for now
> const proteins = ['Chicken', 'Beef', 'Tofu'];
> const vegetables = ['Broccoli', 'Carrots', 'Peas'];
> const carbs = ['Rice', 'Potatoes', 'Pasta'];
> 
> // Define handlers for dropdown changes
> const handleProteinChange = (selectedProtein) => {
>   console.log(`Selected protein: ${selectedProtein}`);
>   // Here you would normally update some state with the selected value
> };
> 
> // Do the same for veggies and carbs...
> 
> const RecipeGenerator = () => {
>   return (
>     <div>
>       <DropdownSelect label="Choose a protein" handleChange={handleProteinChange} options={proteins} />
>       {/* Repeat for veggies and carbs... */}
>     </div>
>   );
> };
> 
> export default RecipeGenerator;
> ```

We will only use the `DropdownSelect.js` component and won't test it just yet. We will test it in the next step. Let's assume we are really a total beginner and don't know where to put the code. We can ask ChatGPT to help us with that.

**Prompt**:
> Where should I create this new component?

**ChatGPT response**:
> You should create this new component in the `components` directory of your project. The exact path would be `/components/DropdownSelect.js`.
> 
> This is a standard structure followed in React projects where all the reusable components are kept in a separate `components` directory. This helps in better organization and management of the code.
> 
> This structure can vary based on the project configuration, but it's common in many React projects. If your project doesn't have a `components` directory, you might need to adjust the file path based on your project's structure.
> 
> Just remember that wherever you create this file, you'll need to adjust the import paths when you want to use this component in another file. For instance, if you're importing this component into a file in the same directory, you'd use `import DropdownSelect from './DropdownSelect';`, but if you're importing into a file one directory up, you'd use `import DropdownSelect from '../components/DropdownSelect';`, and so on.

Ok now we know where to put the code and are done with our dropdown menu. Let's move on to the next step.

### 3.5 Implementing the index page
In this step, we are going to implement the index page as outlined in the code planning step. Once this step is complete, we'll be in a position to test the basic functionality of our web application.

**Prompt**:
> I want you to modify the code to create our new web app, as we previously outlined.
> 
> Remember that we are modifying the boilerplate code I initially provided and what we already have done in our previous conversation. Use its components and state management where possible. Remember to keep the code of the boilerplate that you didn’t change when you are responding. Only add what is necessary.
> 
> Tell me, in the end, the result I should see or how to test it.
> 
> If you pass data in the generated code, console.log it for easier debugging.
> Create comments in the generated code.
> Make sure that the code functions as you describe before responding.
> 
> Create code and instructions to implement this step from the following instructions: "Modification of pages/index.js: This file will require quite a few changes. First, we need to import and utilize the new DropdownSelect.js components. We need three instances of the component, each with different options corresponding to protein, vegetable, and carbohydrate. Next, we will need to change the handleSubmit function to take the values from these dropdown menus and pass them to the getUserPrompt function from promptUtils.js."
> 
> This is the current file content: "FILECONTENT"

We'll insert the instructions from our earlier code planning phase into the prompt. We'll also need to copy and paste the content of our current index.js file into the prompt, replacing "FILECONTENT".

**ChatGPT response**:
> Here's how you could modify `/pages/index.js` to integrate the new DropdownSelect.js component and change the way `handleSubmit` function works:
> 
> ```Jsx
> // file: /pages/index.js
> import Head from 'next/head';
> import { Inter } from 'next/font/google';
> import { useState } from 'react';
> import DropdownSelect from '@/components/DropdownSelect'; // Import the new DropdownSelect component
> import SubmitButton from '@/components/SubmitButton';
> import ResponseDisplay from '@/components/ResponseDisplay';
> import useApi from '@/hooks/useApi';
> import { getUserPrompt } from "../prompts/promptUtils";
> 
> const inter = Inter({ subsets: ['latin'] });
> 
> // Options for DropdownSelect components
> const proteinOptions = ["Chicken", "Beef", "Fish", "Tofu"];
> const vegetableOptions = ["Broccoli", "Carrots", "Peas", "Spinach"];
> const carbOptions = ["Rice", "Pasta", "Potato", "Bread"];
> 
> export default function Home() {
>   const [selectedProtein, setSelectedProtein] = useState(''); // state to hold protein selection
>   const [selectedVegetable, setSelectedVegetable] = useState(''); // state to hold vegetable selection
>   const [selectedCarb, setSelectedCarb] = useState(''); // state to hold carb selection
>   const [submitValue, setSubmitValue] = useState('');
>   const { data, error, loading } = useApi('/api/openai', 'POST', submitValue);
> 
>   const handleSubmit = (event) => {
>     event.preventDefault();
>     // Update to include selections from dropdowns in getUserPrompt call
>     setSubmitValue(getUserPrompt(selectedProtein, selectedVegetable, selectedCarb));
>   };
> 
>   return (
>     <>
>       <Head>
>         <title>NextJS OpenAI Boilerplate</title>
>         <meta name="description" content="Generated by create next app" />
>         <meta name="viewport" content="width=device-width, initial-scale=1" />
>         <link rel="icon" href="/favicon.ico" />
>       </Head>
>       <main className="container">
>         <h1 className={inter.className}>Recipe Generator</h1>
>         <p className={inter.className}> Select a protein, vegetable, and carbohydrate to generate a recipe.
>         </p>
>         <form>
>           <ResponseDisplay data={data} error={error} loading={loading} />
>           <DropdownSelect options={proteinOptions} onChange={setSelectedProtein} placeholder={'Select a protein'}/>
>           <DropdownSelect options={vegetableOptions} onChange={setSelectedVegetable} placeholder={'Select a vegetable'}/>
>           <DropdownSelect options={carbOptions} onChange={setSelectedCarb} placeholder={'Select a carbohydrate'}/>
>           <SubmitButton onClick={handleSubmit} disabled={loading} />
>         </form>
>       </main>
>     </>
>   );
> }
> ```

Let's test this by running the application and selecting some options from the dropdown menus. When we do this, we get the following error:

![](https://hackmd.io/_uploads/BJzoLNJF2.png)
![](https://hackmd.io/_uploads/S10t8VJY2.png)

Let's ask ChatGPT to help us with this error.

**Prompt**:
> I get the following error: "1 of 1 unhandled error
> 
> Unhandled Runtime Error
> TypeError: handleChange is not a function
> 
> Source
> components\DropdownSelect.js (13:31) @ handleChange
> 
>   11 | <div className="dropdown-select">
>   12 |   <label>{label}</label>
> > 13 |   <select onChange={(e) => handleChange(e.target.value)}>
>      |                           ^
>   14 |     {options.map((option, index) => 
>   15 |       <option key={index} value={option}>{option}</option>
>   16 |     )}"
> 
> File: "FILECONTENT"

We copy and paste the error message into the prompt and replace "FILECONTENT" with the code of the file mentioned in the error message.

**ChatGPT response**:
> It seems like there's a problem with the way you're passing the onChange handler to the DropdownSelect component. The error message is indicating that `handleChange` is not a function. This might be because you are not passing the `onChange` prop correctly in the parent component.
> 
> In the DropdownSelect component in `pages/index.js`, it's required to pass the `onChange` prop as a function that changes the state of the parent component.
> 
> Here is how you should update the `DropdownSelect` components in `pages/index.js`:
> 
>  ```Jsx
>  //...
>   <DropdownSelect options={proteinOptions} onChange={(value) => setSelectedProtein(value)} placeholder={'Select a protein'}/>
>   <DropdownSelect options={vegetableOptions} onChange={(value) => setSelectedVegetable(value)} placeholder={'Select a vegetable'}/>
>   <DropdownSelect options={carbOptions} onChange={(value) => setSelectedCarb(value)} placeholder={'Select a carbohydrate'}/>
>   //...
>   ```
> 
> In the above code, we are passing a function that sets the corresponding state as the `onChange` prop to each `DropdownSelect` component.
> 
> Try to make this change and run your application again.

We'll make the suggested change and run the application again. We still get the same error. Let's ask ChatGPT for help again.

**Prompt**:
> Still the same problem

This is not very sophisticated, but let's see if it is enough to get a good response.

**ChatGPT response**:
> I'm sorry for the confusion. It seems I missed something.
> 
> You're trying to use the `DropdownSelect` component, but it doesn't have an associated `onChange` event handler. We need to change `handleChange` to `onChange` in the `DropdownSelect` component and add the `value` prop to keep track of the selected option.
> 
> Let's make these changes to the `DropdownSelect` component:
> 
> ```Jsx
> import React from 'react';
> 
> // The DropdownSelect component takes three props:
> // - label: A string that will be displayed as the label for the dropdown
> // - onChange: A function that will handle changes to the dropdown's selected value
> // - options: An array of strings that will be the options in the dropdown
> // - value: A string representing the currently selected option
> const DropdownSelect = ({ label, onChange, options, value }) => {
>   return (
>     <div className="dropdown-select">
>       <label>{label}</label>
>       <select value={value} onChange={(e) => onChange(e.target.value)}>
>         {options.map((option, index) =>
>           <option key={index} value={option}>{option}</option>
>         )}
>       </select>
>     </div>
>   );
> };
> 
> export default DropdownSelect;
> ```
> 
> Now, back to the `pages/index.js`, remember to update each `DropdownSelect` with the new `value` prop:
> 
>   ```Jsx
>   //...
>   <DropdownSelect options={proteinOptions} value={selectedProtein} onChange={(value) => setSelectedProtein(value)} placeholder={'Select a protein'}/>
>   <DropdownSelect options={vegetableOptions} value={selectedVegetable} onChange={(value) => setSelectedVegetable(value)} placeholder={'Select a vegetable'}/>
>   <DropdownSelect options={carbOptions} value={selectedCarb} onChange={(value) => setSelectedCarb(value)} placeholder={'Select a carbohydrate'}/>
>   //...
>   ```

Ok, we make the suggested changes and run the application again. This time, we don't get any errors. We can now select some options from the dropdown menus and click the submit button. We should see a loading indicator and then a response in our terminal that looks something like this:
![](https://hackmd.io/_uploads/H1OJPEJK2.png)
    
We don't see anything on the screen yet, but we will fix that in the next step.

### 3.6 Implementing the response display
As the final step in creating our basic MVP, we're going to adapt the response display. We'll modify the ResponseDisplay.js file to showcase the recipe name, ingredients, and steps instead of the pet name and description.

**Prompt**:
> I want you to modify the code to create our new web app, as we previously outlined.
> 
> Remember that we are modifying the boilerplate code I initially provided and what we already have done in our previous conversation. Use its components and state management where possible. Remember to keep the code of the boilerplate that you didn’t change when you are responding. Only add what is necessary.
> 
> Tell me, in the end, the result I should see or how to test it.
> 
> If you pass data in the generated code, console.log it for easier debugging.
> Create comments in the generated code.
> Make sure that the code functions as you describe before responding.
> 
> Create code and instructions to implement this step from the following instructions: “Modification of components/ResponseDisplay.js: We need to update this component to show the generated recipe. It should display the name of the dish, the list of ingredients, and the cooking instructions.”
> 
> This is the current file content: "FILECONTENT"

As before, we pasted the instructions from the previous code planning step into the prompt. And we will also need to paste the code of our current `ResponseDisplay.js` file into the prompt.

**ChatGPT response**:
> Sure, let's adjust the `ResponseDisplay.js` component to reflect the new data structure we expect.
> 
> In your case, the expected response from the API call should have a structure like this:
> 
> ```Json
> {
>   "result": {
>     "dishName": "...",
>     "ingredients": ["...", "..."],
>     "instructions": "..."
>   }
> }
> ```
> 
> We will make sure that each part of the result (dish name, ingredients, instructions) is displayed in the component. If the response structure from the API call is different, please adjust the code accordingly.
> 
> Please replace the contents of your `ResponseDisplay.js` with the following:
> 
> ```Jsx
> // file: /components/ResponseDisplay.js
> const ResponseDisplay = ({ data, error, loading }) => {
>   let content;
> 
>   if (loading) {
>     content = "Loading...";
>   } else if (error) {
>     content = `Error: ${error.message}`;
>   } else if (data) {
>     console.log("Data from OpenAI API in display: ", data.result);
> 
>     content = (
>       <>
>         <p>Dish Name: {data.result.dishName}</p>
>         <p>Ingredients:</p>
>         <ul>
>           {data.result.ingredients.map((ingredient, index) => (
>             <li key={index}>{ingredient}</li>
>           ))}
>         </ul>
>         <p>Instructions: {data.result.instructions}</p>
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
> To test if the component displays the expected data, you should start the app, select a protein, vegetable, and carbohydrate from the dropdown menus and click the Submit button. After the API call finishes, the generated dish name, ingredients, and instructions should be displayed in the `ResponseDisplay` component.

You should see something like this:
![](https://hackmd.io/_uploads/S1B7D41Y2.png)

Ok, this looks good, but the instruction steps are not very readable. Let's ask ChatGPT to help us with that.

### 3.7 Improving the readability of the instructions
In this step, we're going to improve the readability of the instructions by displaying them as a list.

Let's do our code planning first.

#### 3.7.1 Code planning

**Prompt**:
> I want to adapt the web app so that the instructions are also showing in a list not just the ingredients.
> 
> We work in an iterative approach, where we try to make small changes at a time.
> Suggest on a high level, without any code, how we can achieve the suggested changes. Mention the files you want to create or change in the next step. Make a section for each file that we need to change in the next step. Make the description short and high-level. make sure to have a logical order where each step is testable and builds on the one before.
> 
> Here are some rules:
> 
> - Adjust the prompts and functions if necessary in the promptsUtils.js, and the data returned needs to be in JSON format.
> - Remember, when creating the prompt, that we are using a JSON and that we need to be able to use the same structure to read it.
> - Don’t change the openai.js and useApi.js files.
> - Do the API calls via the useApi.js hook.
> - Create new components if needed but try to reuse them.

My instruction at the top is a little bit sloppy, but I think it is enough to get a good response.

**ChatGPT response**:
> To display the cooking instructions in a list, we need to modify how the instructions data is structured. Right now, we're assuming the `instructions` data to be a string. We should adjust this to be an array of strings, where each string is a step in the cooking process.
> 
> Here's the high-level overview of the changes we need to make:
> 
> 1.  Change in API's response structure: If the API is within your control, modify it to return the instructions as an array of strings, with each string being a step in the cooking process. If it's not within your control, we will need to adapt the data once we receive it in our application.
> 
> 2.  Modification of prompts/promptUtils.js: If the API is within your control, you will also need to adjust the getFunctions function in the promptUtils.js file to reflect this new structure for the instructions. The description of the instructions property should change to indicate that it's an array of strings, and each string is a step in the cooking process.
> 
> 3.  Modification of components/ResponseDisplay.js: The rendering logic for the instructions will need to change to accommodate an array of strings instead of a single string. The instructions will be rendered as a list, similar to the ingredients.
> 
> Please note that the testing of each step depends on the previous steps being implemented correctly. Test each step as you go by checking the console logs and the display of data in the browser.

Ok, the first point is not relevant for us, because we don't have control over the API. But we can still implement the other two points. Let's implement them in the next steps.

#### 3.7.2 Implementing the changes

**Prompt**:
> I want you to modify the code to create our new web app, as we previously outlined.
> 
> Remember that we are modifying the boilerplate code I initially provided and what we already have done in our previous conversation. Use its components and state management where possible. Remember to keep the code of the boilerplate that you didn't change when you are responding. Only add what is necessary.
> 
> Tell me, in the end, the result I should see or how to test it.
> 
> If you pass data in the generated code, console.log it for easier debugging. Create comments in the generated code. Make sure that the code functions as you describe before responding.
> 
> Create code and instructions to implement this step from the following instructions: "Modification of prompts/promptUtils.js: If the API is within your control, you will also need to adjust the getFunctions function in the promptUtils.js file to reflect this new structure for the instructions. The description of the instructions property should change to indicate that it's an array of strings, and each string is a step in the cooking process."
> 
> This is the current file content: "FILECONTENT"

We'll insert the instructions from our earlier code planning phase into the prompt. We'll also need to copy and paste the content of our current `promptUtils.js` file into the prompt, replacing "FILECONTENT".

**ChatGPT response**:
> Based on the instructions provided, it seems you want to change the "instructions" property to be an array of strings, rather than a single string. Let's do that:
> 
> Here is your updated `promptUtils.js`:
> 
> ```javascript
> // file: /prompts/promptUtils.js
> 
> // Modified the system prompt to reflect the assistant's new role
> export function getSystemPrompt() {
>   return {
>     role: "system",
>     content: "You are a helpful assistant that specializes in generating recipes based on a given protein, vegetable, and carbohydrate.",
>   };
> }
> 
> // Modified the user prompt to request a recipe based on user's choice of protein, vegetable, and carb
> export function getUserPrompt(protein, vegetable, carb) {
>   console.log(`Selected Protein: ${protein}, Vegetable: ${vegetable}, Carb: ${carb}`);  // Log the user's selections for debugging
>   return {
>     role: "user",
>     content: `Generate a recipe using ${protein} as protein, ${vegetable} as vegetable, and ${carb} as carbohydrate.`,
>   };
> }
> 
> // Modified the function structure to be suitable for a recipe generator
> export function getFunctions() {
>   return [
>     {
>       name: "generate_recipe",
>       description: "Generate a recipe based on a given protein, vegetable, and carbohydrate.",
>       parameters: {
>         type: "object",
>         properties: {
>           dishName: {
>             type: "string",
>             description: "The generated name for the dish",
>           },
>           ingredients: {
>             type: "array",
>             description: "The generated list of ingredients needed for the recipe",
>             items: {
>               type: "string",
>             },
>           },
>           instructions: {
>             type: "array",
>             description: "The generated list of cooking instructions for the dish, each instruction is a separate step",
>             items: {
>               type: "string",
>             },
>           },
>         },
>         "required": ["dishName", "ingredients", "instructions"]
>       },
>     },
>   ];
> }
> ```
> 
> You should see no change in your web app visually from these changes. This is primarily a data structure change which prepares us for the next steps of modifying the `ResponseDisplay` component to show instructions as a list.
> 
> In the console, however, when the `getUserPrompt` function is called, you should see the input values logged for the selected protein, vegetable, and carb.

#### 3.7.3 Modification of components/ResponseDisplay.js

Ok, now we need to modify the `ResponseDisplay.js` component to display the instructions as a list.

**Prompt**:
> I want you to modify the code to create our new web app, as we previously outlined.
> 
> Remember that we are modifying the boilerplate code I initially provided and what we already have done in our previous conversation. Use its components and state management where possible. Remember to keep the code of the boilerplate that you didn't change when you are responding. Only add what is necessary.
> 
> Tell me, in the end, the result I should see or how to test it.
> 
> If you pass data in the generated code, console.log it for easier debugging. Create comments in the generated code. Make sure that the code functions as you describe before responding.
> 
> Create code and instructions to implement this step from the following instructions: "Modification of components/ResponseDisplay.js: The rendering logic for the instructions will need to change to accommodate an array of strings instead of a single string. The instructions will be rendered as a list, similar to the ingredients."
> 
> This is the current file content: "FILECONTENT"

We'll insert the instructions from our earlier code planning phase into the prompt. We'll also need to copy and paste the content of our current `ResponseDisplay.js` file into the prompt, replacing "FILECONTENT".

**ChatGPT response**:
> According to the instructions, we need to change the rendering logic of the instructions field to accommodate an array of strings instead of a single string. The instructions should be rendered as a list, similar to the ingredients.
> 
> Here is your updated `ResponseDisplay.js`:
> 
> ```javascript
> // file: /components/ResponseDisplay.js
> 
> const ResponseDisplay = ({ data, error, loading }) => {
>   let content;
> 
>   if (loading) {
>     content = "Loading...";
>   } else if (error) {
>     content = `Error: ${error.message}`;
>   } else if (data) {
>     console.log("Data from OpenAI API in display: ", data.result);
> 
>     content = (
>       <>
>         <p>Dish Name: {data.result.dishName}</p>
>         <p>Ingredients:</p>
>         <ul>
>           {data.result.ingredients.map((ingredient, index) => (
>             <li key={index}>{ingredient}</li>
>           ))}
>         </ul>
>         <p>Instructions:</p>
>         <ol>
>           {data.result.instructions.map((instruction, index) => (
>             <li key={index}>{instruction}</li>
>           ))}
>         </ol>
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
> To test this, you should select protein, vegetable, and carbohydrate options from the dropdowns and then submit the form. The resulting recipe should be displayed with the dish name, a list of ingredients, and a list of cooking instructions. The cooking instructions should now be displayed as a list, not a single string.
> 
You should see something like this:
![](https://hackmd.io/_uploads/HJu8PEkF3.png)

Ok, this looks good. We can now move on to the next step.

### 3.8 Adding more options to the dropdown menus
In this step, we're going to add more options to the dropdown menus.

#### 3.8.1 Code planning
Let's do our code planning again.

**Prompt**:
> Give me more options of protein, vegetable and carbohydrate to choose from, give me 20 each.
> 
> We work in an iterative approach, where we try to make small changes at a time.
> Suggest on a high level, without any code, how we can achieve the suggested changes. Mention the files you want to create or change in the next step. Make a section for each file that we need to change in the next step. Make the description short and high-level. make sure to have a logical order where each step is testable and builds on the one before.
> 
> Here are some rules:
> 
> - Adjust the prompts and functions if necessary in the promptsUtils.js, and the data returned needs to be in JSON format.
> - Remember, when creating the prompt, that we are using a JSON and that we need to be able to use the same structure to read it.
> - Don’t change the openai.js and useApi.js files.
> - Do the API calls via the useApi.js hook.
> - Create new components if needed but try to reuse them.

This is pretty straightforward, but it is still often helpful to do the code planning, to avoid a lot of debugging later.

**ChatGPT response**:
> To extend the options for proteins, vegetables, and carbohydrates to 20 each, we only need to adjust the code within one file:
> 
> 1.  `/pages/index.js`:
> 
>     This is where the options for the dropdowns are defined. For each of the three arrays, we need to add more items until there are 20 options each for proteins, vegetables, and carbohydrates.
> 
> This change is straightforward and doesn't involve any new components, files, or major changes in structure. After the change, you should be able to see 20 options in each dropdown menu on the page. The rest of the application should continue to work as before, creating a recipe based on the chosen protein, vegetable, and carbohydrate.

Ok, let's implement this in the next step.

#### 3.8.2 Implementing the changes
**Prompt**:
> I want you to modify the code to create our new web app, as we previously outlined.
> 
> Remember that we are modifying the boilerplate code I initially provided and what we already have done in our previous conversation. Use its components and state management where possible. Remember to keep the code of the boilerplate that you didn't change when you are responding. Only add what is necessary.
> 
> Tell me, in the end, the result I should see or how to test it.
> 
> If you pass data in the generated code, console.log it for easier debugging. Create comments in the generated code. Make sure that the code functions as you describe before responding.
> 
> Create code and instructions to implement this step from the following instructions: "Modification of /pages/index.js: This is where the options for the dropdowns are defined. For each of the three arrays, we need to add more items until there are 20 options each for proteins, vegetables, and carbohydrates."
> 
> This is the current file content: "FILECONTENT"

We'll insert the instructions from our earlier code planning phase into the prompt. We'll also need to copy and paste the content of our current `index.js` file into the prompt, replacing "FILECONTENT".

**ChatGPT response**:
> You can extend the options for the dropdowns by adding more items to the `proteinOptions`, `vegetableOptions`, and `carbOptions` arrays. The new options should just be added as strings in these arrays. I'll add 16 more options for each category to get a total of 20.
> 
> ```jsx
> // file: /pages/index.js
> import Head from "next/head";
> import { Inter } from "next/font/google";
> import { useState } from "react";
> import DropdownSelect from "@/components/DropdownSelect"; // Import the new DropdownSelect component
> import SubmitButton from "@/components/SubmitButton";
> import ResponseDisplay from "@/components/ResponseDisplay";
> import useApi from "@/hooks/useApi";
> import { getUserPrompt } from "../prompts/promptUtils";
> 
> const inter = Inter({ subsets: ["latin"] });
> 
> // Updated options for DropdownSelect components with 20 options each
> const proteinOptions = [
>   "Chicken", "Beef", "Fish", "Tofu", "Pork", "Turkey", "Lamb", "Venison",
>   "Duck", "Goose", "Rabbit", "Veal", "Bison", "Ostrich", "Ham", "Salmon",
>   "Shrimp", "Crab", "Lobster", "Tuna"
> ];
> const vegetableOptions = [
>   "Broccoli", "Carrots", "Peas", "Spinach", "Cabbage", "Tomatoes", "Cucumber",
>   "Lettuce", "Kale", "Pumpkin", "Squash", "Zucchini", "Brussels sprouts",
>   "Cauliflower", "Celery", "Corn", "Eggplant", "Green beans", "Leek", "Onion"
> ];
> const carbOptions = [
>   "Rice", "Pasta", "Potato", "Bread", "Quinoa", "Oats", "Buckwheat", "Bulgur",
>   "Barley", "Rye", "Couscous", "Cornmeal", "Spelt", "Sorghum", "Teff", "Millet",
>   "Yam", "Sweet Potato", "Polenta", "Risotto"
> ];
> 
> // rest of your code follows
> ```
> 
> To test, just run your application and check each of the dropdown menus. You should now see 20 options in each dropdown. Select an item from each dropdown and click submit. The API should return a recipe that includes the selected protein, vegetable, and carbohydrate.

Ok, this should work. But it was also pretty straightforward. Let's move on to the next and final step.

### 3.9 Design adjustments
In this final step, we're going to enhance the design of our web application.

**Prompt**:
> I want you to make the heading of the dish bigger, I want to make the button fullscreen and black. I want to make the dropdowns look nicer, I want to create a nice background for the application.
> 
> I want you to design in the style of Jonathan Ive's Apple software design, simple, elegant, and functional. Use the global.css file for styling.
> 
> This is the global.css: "FILECONTENT"

We give ChatGPT some instructions on how to improve the design of our web application, define the style we want, confirm that we want to use the global.css file for styling, and provide the content of the global.css file.

**ChatGPT response**:
> We can definitely achieve this by modifying the `styles/globals.css` file. To stay aligned with the style of Jonathan Ive's Apple software design, we will ensure that the design changes are simple, elegant, and functional.
> 
> Here are the changes:
> 
> 1.  To make the heading of the dish bigger, we will increase the font-size of `<p>` tags inside `.response-display` class.
> 2.  To make the button fullscreen and black, we'll modify the `.submit-button` class. We'll make it black, ensure it covers the full screen width and adjust the hover color.
> 3.  To improve the look of the dropdowns, we'll create a new class `.dropdown-select` with some styling.
> 4.  To create a nice background for the application, we'll add a subtle background color to the `body`.
> 
> Here is the updated `styles/globals.css`:
> 
> ```css
> /* // file: styles/globals.css */
> body {
>   font-family: 'Inter', sans-serif;
>   margin: 0;
>   padding: 0;
>   box-sizing: border-box;
>   background-color: #F6F6F6; /* subtle background color */
> }
> 
> .container {
>   max-width: 800px;
>   margin: 0 auto;
>   padding: 2rem;
> }
> 
> .text-input {
>   width: 100%;
>   padding: 0.5rem;
>   font-size: 1rem;
>   border: 1px solid #ccc;
>   border-radius: 4px;
> }
> 
> .submit-button {
>   display: block; /* full width */
>   margin: 1rem 0;
>   padding: 0.5rem;
>   font-size: 1rem;
>   color: white;
>   background-color: black;
>   border: none;
>   border-radius: 4px;
>   cursor: pointer;
>   transition: background-color 0.3s;
> }
> 
> .submit-button:hover {
>   background-color: #333; /* Darker shade of black on hover */
> }
> 
> .response-display {
>   margin-top: 1rem;
>   padding: 0.5rem;
> }
> 
> .response-display p:first-child {
>   font-size: 2rem; /* Make the heading of the dish bigger */
> }
> 
> .dropdown-select {
>   width: 100%;
>   padding: 0.5rem;
>   font-size: 1rem;
>   border: 1px solid #ccc;
>   border-radius: 4px;
>   margin-bottom: 1rem;
>   background-color: white; /* A clean white background */
> }
> ```
> 
> To test, run your application. You should see a bigger heading for the dish name, a fullscreen black submit button, nicer-looking dropdowns, and a subtle background color for the application. Make sure that the application still remains functional with these design changes.

Now it looks like this:
![](https://hackmd.io/_uploads/BJCcD4kF2.png)


That is ok, but the double border of the dropdowns is not very nice. Let's ask ChatGPT to help us with that.

**Prompt**:
> The dropdown seems not to be styled right. It has two borders.

This is a very simple prompt, but we try and see if it is enough to get a good response.

**ChatGPT response**:
> The two borders you're seeing are likely because the dropdown is rendered using the native browser select element, which applies its own styles. The external border is from our CSS styling, and the internal border is from the browser's default styling.
> 
> We can try to override the browser's default select styling with CSS, but note that the select dropdown's appearance is not fully customizable across all browsers due to the nature of the select HTML element. However, we can attempt to minimize this effect by applying a style reset to the select elements within the `.dropdown-select` class.
> 
> Please add the following code to your `styles/globals.css`:
> 
> ```css
> .dropdown-select select {
>   border: none; /* Remove border */
>   outline: none; /* Remove outline */
>   appearance: none; /* Remove default appearance */
>   -webkit-appearance: none; /* For Safari and Chrome */
>   -moz-appearance: none; /* For Firefox */
>   background: transparent; /* Make the background transparent */
> }
> ```
> 
> Now, the dropdown should have only one border as defined by the `.dropdown-select` class. However, please note that full control over the appearance of select dropdowns is notoriously difficult to achieve across all browsers and platforms due to browser-specific implementations. If you find that the appearance of the dropdowns is still not to your liking, you might want to consider using a custom dropdown component (there are many available in libraries such as React-Select, Ant Design, etc.).
> 
> Again, I want to note that even though our goal is to mimic the style of Jonathan Ive's Apple software design, due to the limitations of web technologies, we may not be able to perfectly recreate the native OS styles and animations that are present in Apple's software.

Now it looks like this:
![](https://hackmd.io/_uploads/Hy12P41th.png)

This looks good for a rough prototype! We've implemented our basic functionalities. We could now enhance our design further, add more features, or refactor our code for efficiency, but for the purpose of this tutorial, we'll stop here.

## 4. Prompts
In this section, we will go over the prompts we used in this tutorial. You can use these prompts as a template for your own projects.

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
> -   Adjust the prompts and functions if necessary in the promptsUtils.js, and the data returned needs to be in JSON format.
> -   Remember, when creating the prompt, that we are using a JSON and that we need to be able to use the same structure to read it.
> -   Don't change the openai.js and useApi.js files.
> -   Do the API calls via the useApi.js hook.
> -   Create new components if needed but try to reuse them.

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

## 5. FAQ

**Q: I don't have ChatGPT Plus, can I still do the tutorial?**
A: Yes, you can do the tutorial with the free version of ChatGPT. You will not have access to the GPT-4 model in the ChatGPT free version, your responses and the code might not be working as well as with the GPT-4 model. Alternatively, you can also use GPT-4 in the Playground to do the tutorial.

**Q: I have problems with the returned data from the API, what can I do?**
A: You can use the `console.log` statement to debug the data. Try to match the JSON response that you get from the API with the JSON response that your ResponseDisplay component expects.

**Q: Do I need to pay for Codespaces?**
A: No, you can use the free version of Codespaces. You will have 60 hours each month for free after that you will need to pay 0.18$ per hour. Once your project progresses you might want to switch to a local development environment, where you can also use VSCode.

## 6. Conclusion
We've explored how we can utilize ChatGPT to generate code for our web applications. This involves leveraging ChatGPT to generate prompts for ideation, user flows, code planning, code implementation, debugging, and design adjustments.

With this knowledge and these tools at your disposal, you're now equipped to create your own web app using ChatGPT. Remember, practice and experimentation are key to mastering these skills. Happy coding!