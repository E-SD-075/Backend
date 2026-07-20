import type { RequestHandler } from "express";
import type { AccessTokenPayload } from "../utils/jwt.js";
declare global {
    namespace Express {
        interface Request {
            user?: AccessTokenPayload;
        }
    }
}
export declare const authenticate: RequestHandler;
//# sourceMappingURL=authenticate.d.ts.map