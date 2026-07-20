import { Router } from "express";
import { login, register, logout, refresh, me, } from "../controllers/auth.controller.js";
import { authenticate } from "../middleware/authenticate.js";
import { authLimiter } from "../middleware/rateLimiter.js";
import { validateBodyZod } from "../middleware/validateBodyZod.js";
import { loginSchema, registerSchema } from "../schemas/auth.schemas.js";
const authRouter = Router();
authRouter.post("/register", authLimiter, validateBodyZod(registerSchema), register);
authRouter.post("/login", authLimiter, validateBodyZod(loginSchema), login);
authRouter.post("/refresh", refresh);
authRouter.delete("/logout", logout);
authRouter.get("/me", authenticate, me);
export default authRouter;
//# sourceMappingURL=auth.route.js.map