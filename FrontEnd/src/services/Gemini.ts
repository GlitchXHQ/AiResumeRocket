import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY as string;

if (!API_KEY) {
  throw new Error("VITE_GEMINI_API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

async function generateText(prompt: string): Promise<string> {
  try {
    const result: GenerateContentResponse = await ai.models.generateContent({
      model: "gemini-1.5-flash", // ✅ use gemini-1.5-flash or gemini-1.5-pro
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    return result.text;
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
}

export { generateText };
