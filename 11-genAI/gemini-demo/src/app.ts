import { input, select } from "@inquirer/prompts";
import { geminiRest } from "./gemini-rest.ts";
import { geminiSdkStructured } from "./gemini-sdk.ts";

async function main() {
  console.log("🌟 Welcome to the Gemini CLI 🌟\n");
  // 1. The infinite loop
  while (true) {
    try {
      // select the method
      const method = await select({
        message: "How would you like to connect to Gemini?",
        choices: [
          {
            name: "Google SDK",
            value: "sdk",
            description:
              "Use the official google gen AI package to guarantee a clean JSON object response",
          },
          {
            name: "REST API (Raw HTTP)",
            value: "rest",
            description:
              "Send a raw HTTP POST request using the native fetch API",
          },
          {
            name: "Exit CLI",
            value: "exit",
            description: "close the process",
          },
        ],
      });

      if (method === "exit") {
        console.log("\n Exiting the Gemini CLI. Bye");
        break;
      }

      // 2. At this point we give the prompt to the AI
      const prompt = await input({
        message: "What is your prompt for Gemini?",
        validate: (value) =>
          value.trim().length > 0 || "Please enter a valid prompt",
      });

      // let the user know something's happening
      console.log(`⏳ Generating response using [${method.toUpperCase()}]`);

      // 3. The execution logic
      if (method === "rest") {
        const result = await geminiRest(prompt);
        const text = result?.candidates[0]?.content?.parts?.[0]?.text;

        console.log("Gemini (REST API:)");
        console.log(text || "No text returned");
      } else if (method === "sdk") {
        const result = await geminiSdkStructured(prompt);
        console.log("Gemini (SDK structured:)");
        console.log(`original prompt: ${result.originalPrompt}`);
        console.log(result.generatedResponse);
      } else {
        console.log("unknown method, please use either 'sdk' or 'rest'");
      }
    } catch (error) {
      console.error("An error occurred");
      console.error(error instanceof Error ? error.message : error);
    }
  }
}
main();
