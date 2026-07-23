import { z } from "zod";

export const chatSchema = z.object({
  prompt: z.string().min(1, "Prompt cannot be empty"),
  stream: z.boolean().optional().default(false),
});

export type ChatBody = z.infer<typeof chatSchema>;
