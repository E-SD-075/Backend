import type { GenerateContentResponse } from "@google/genai";

/**
 * Sends a raw HTTP POST request to the Gemini API
 *
 * @param prompt - The text string that you want to send to the Gemini API
 * @returns A promise that resolves to the API's JSON response
 */

export async function geminiRest(prompt: string) {
  // 1. grab API key, and make sure it actually exists
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY is missing in your env file");

  // 2. define the model we're gonna use
  const model = "gemini-3.5-flash";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey,
    },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`REST API Error (${res.status}: ${errorText})`);
  }
  return (await res.json()) as GenerateContentResponse;
}
