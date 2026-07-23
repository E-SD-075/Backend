import type { RequestHandler } from "express";
import { z, type ZodType } from "zod";

export const validateBody =
  <T extends ZodType>(schema: T): RequestHandler<any, any, z.infer<T>> =>
  (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid request body",
        errors: z.flattenError(result.error).fieldErrors,
      });
    }

    req.body = result.data;
    next();
  };
