import { geminiRest } from "./gemini-rest.ts";
import { geminiSdkStructured } from "./gemini-sdk.ts";

async function main() {
  // 1. Parse the command line arguments
  const args = process.argv.slice(2);

  // 2. the first argument should be the methodology (rest or sdk)
  const method = args[0]?.toLowerCase();

  const prompt = args.slice(1).join(" ");

  if (!method || !prompt) {
    console.log("⚠️ Usage: npm run dev -- <rest|sdk> <your prompt over here>");
    console.log("💡 Example: npm run dev --sdk Tell me a joke about Node.js");
    return;
  }

  // let the user know something's happening
  console.log(`⏳ Generating response using [${method.toUpperCase()}]`);

  try {
    // route A: the user chose the REST method
    if (method === "rest") {
      const result = await geminiRest(prompt);
      const text = result?.candidates[0]?.content?.parts?.[0]?.text;

      console.log("Gemini (REST API:)");
      console.log(text || "No text returned");
    } else if (method === "sdk") {
      // Route B: the user chose sdk
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

main();
