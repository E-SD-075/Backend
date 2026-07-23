import type { RequestHandler } from "express";
import type { ChatBody } from "../schema/chatSchema.ts";

const baseUrl = process.env.LOCAL_LLM_URL;
const model = process.env.LOCAL_LLM_MODEL;

export const listLocalModels: RequestHandler = async (req, res) => {
  const listModelsUrl = `${baseUrl}/api/v1/models`;

  const lmsResponse = await fetch(listModelsUrl);
  const models = await lmsResponse.json();

  if (!models) {
    return res.status(500).json({
      success: false,
      message: "Couldn't get any models",
    });
  }

  res.json({
    success: true,
    data: models,
  });
};

export const chatWithModel: RequestHandler<any, any, ChatBody> = async (
  req,
  res,
) => {
  const { prompt, stream } = req.body;

  if (!prompt) {
    return res.json({
      success: false,
      message: "No prompt received",
    });
  }

  const promptUrl = `${baseUrl}/api/v1/chat`;

  const promptToSend = {
    model,
    input: prompt,
    stream,
  };

  const response = await fetch(promptUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(promptToSend),
  });

  if (!response.ok) {
    const text = await response.text();
    return res.status(502).json({ success: false, message: text });
  }

  const data = await response.json();
  res.json({
    success: true,
    reply: data,
  });
};
