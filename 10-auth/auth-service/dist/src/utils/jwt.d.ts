export type AccessTokenPayload = {
    userId: string;
    roles: string[];
};
export declare function createAccessToken(payload: AccessTokenPayload): string;
export declare function verifyAccessToken(token: string): AccessTokenPayload;
//# sourceMappingURL=jwt.d.ts.map