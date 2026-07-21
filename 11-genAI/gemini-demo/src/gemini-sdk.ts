import { GoogleGenAI, Type } from "@google/genai";

export interface StructuredAIResponse {
  originalPrompt: string;
  generatedResponse: string;
}

export async function geminiSdkStructured(
  prompt: string,
): Promise<StructuredAIResponse> {
  // 1. grab API key, and make sure it actually exists
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY is missing in your env file");

  const model = "gemini-3.5-flash";

  // 2. Initialize the Google Gen AI client with our key
  const ai = new GoogleGenAI({ apiKey });

  const response = await ai.models.generateContent({
    model,
    contents: prompt,
    config: {
      //force Ai to respond in JSON instead of markdown
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT, // the main output is going to be an object
        properties: {
          originalPrompt: { type: Type.STRING },
          generatedResponse: { type: Type.STRING },
        },
        required: ["originalPrompt", "generatedResponse"],
      },
    },
  });

  // extract text from SDK response object
  if (response.text) {
    return JSON.parse(response.text) as StructuredAIResponse;
  }

  throw new Error("SDK did not return any text");
}
