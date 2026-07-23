import { Router } from "express";
import {
  chatWithModel,
  listLocalModels,
} from "../controllers/lmstudio.controller.ts";
import { validateBody } from "../middlewares/validateBodyZod.ts";
import { chatSchema } from "../schema/ChatSchema.ts";

const lmsRouter = Router();

lmsRouter
  .route("/")
  .get(listLocalModels)
  .post(validateBody(chatSchema), chatWithModel);

export default lmsRouter;
