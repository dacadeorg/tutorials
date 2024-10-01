## Building an AI-Powered Recipe App in 30 min

This tutorial guides you through building an AI-powered recipe app using Next.js, Shadcn/ui, and the OpenAI API. We'll leverage the power of AI to generate creative recipes based on user-selected ingredients.

### Prerequisites

- Basic understanding of JavaScript and React.
- Familiarity with Next.js framework.
- An OpenAI API key.
- A code editor (VS Code recommended).
- Node.js and npm installed on your system.

### 1. Setting Up the Boilerplate

We'll use a pre-built boilerplate to streamline the development process.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/moritzfelipe/next-openai-shadcn-boilerplate.git
   cd next-openai-shadcn-boilerplate
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure OpenAI API Key:**
   - Create a `.env.local` file in the project root.
   - Add your OpenAI API key to the file:
     ```
     OPENAI_API_KEY=your_openai_api_key
     ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser to see the initial pet name generator app.

### 2. Designing the Recipe App UI

We'll use V0 by Vercel to quickly design the UI for our recipe app.

1. **Access V0 Chat:**
   - Go to `https://v0.dev/chat`.
   - Ensure you're in the "Chat" interface.

2. **Describe your UI:**
   - Use the dictation feature or type your prompt:
     ```
     I want to create a recipe app where I specify a protein, a vegetable, and a carbohydrate, and I want to get suggested the recipe with ingredients and instructions. I want to use the color scheme that I will attach in the picture and I want to have a kind of big font.
     ```

3. **Upload a reference image:**
   - Upload an image showcasing your desired color scheme and font style.

4. **Refine the UI:**
   - Interact with V0 to refine the UI based on the generated preview.
   - For example, request pill-style ingredient selectors instead of text inputs.

5. **Add to Codebase:**
   - Once satisfied with the UI, click "Add to Codebase".
   - Copy the provided terminal command.

### 3. Implementing the Recipe App Functionality

We'll use Cursor, an AI-powered code editor, to implement the recipe app logic.

1. **Install Cursor:**
   - Download and install Cursor from `https://cursor.sh/`.

2. **Open the project in Cursor:**
   - Open the `next-openai-shadcn-boilerplate` folder in Cursor.

3. **Instruct Cursor:**
   - In the Cursor chat, use the following prompt:
     ```
     I want to transform this petname generator boilerplate into a recipe app. You need to change and implement the recipe app file @recipe-app.tsx and create a new prompt file for it.
     ```
   - Select the `claude-3.5-sonnet` model.
   - Click the "ctrl+enter codebase" button to ensure Cursor analyzes the entire codebase.

4. **Review and Apply Changes:**
   - Cursor will generate code changes and a new prompt file.
   - Review the changes and click "Apply" to implement them.

5. **Create the Recipe Prompt:**
   - Navigate to the newly created prompt file (e.g., `recipePrompt.ts`).
   - Define the prompt structure for generating recipes based on selected ingredients.
   - Ensure you use the `gpt-4-2024-08-06` model or later for structured outputs.

6. **Test and Debug:**
   - Run the development server again (`npm run dev`).
   - Test the recipe app functionality and debug any errors using Cursor's chat.

### 4. Customization and Deployment

You can further customize your recipe app by:

- Adding more ingredient options.
- Implementing user authentication.
- Integrating with a recipe database API for more diverse results.

For deployment, consider using Vercel, the platform behind Next.js, for a seamless experience.

### Conclusion

This tutorial demonstrated how to build an AI-powered recipe app using Next.js, Shadcn/ui, OpenAI, V0, and Cursor. By leveraging these tools, you can quickly prototype and implement AI-driven applications, even with limited coding experience. Remember to explore the documentation of these technologies for more advanced features and customization options.
