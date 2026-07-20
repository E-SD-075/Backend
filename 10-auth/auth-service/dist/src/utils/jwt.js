import jwt from "jsonwebtoken";
import { ACCESS_JWT_SECRET } from "../config.js";
// define how long access token should live
const ACCESS_TOKEN_EXPIRES_IN = "15min";
export function createAccessToken(payload) {
    //1. takes the payload object
    //2. cryptographically sign the payload using the ACCESS_JWT_SECRET
    //3. embeds the expiration info (15 min)
    //4. return the JWT string
    return jwt.sign(payload, ACCESS_JWT_SECRET, {
        expiresIn: ACCESS_TOKEN_EXPIRES_IN,
    });
}
export function verifyAccessToken(token) {
    //1. check if the token signature matches with the ACCESS_JWT_SECRET
    //2. check if the token is expired
    return jwt.verify(token, ACCESS_JWT_SECRET);
}
//# sourceMappingURL=jwt.js.map