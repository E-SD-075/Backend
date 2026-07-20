import { Schema, Types } from "mongoose";
declare const RefreshToken: import("mongoose").Model<{
    tokenHash: string;
    userId: Types.ObjectId;
    revokedAt: NativeDate;
    createdAt: NativeDate;
}, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    tokenHash: string;
    userId: Types.ObjectId;
    revokedAt: NativeDate;
    createdAt: NativeDate;
}, {
    id: string;
}, {
    timestamps: {
        createdAt: true;
        updatedAt: false;
    };
    versionKey: false;
}> & Omit<{
    tokenHash: string;
    userId: Types.ObjectId;
    revokedAt: NativeDate;
    createdAt: NativeDate;
} & {
    _id: Types.ObjectId;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: {
        createdAt: true;
        updatedAt: false;
    };
    versionKey: false;
}, {
    tokenHash: string;
    userId: Types.ObjectId;
    revokedAt: NativeDate;
    createdAt: NativeDate;
}, import("mongoose").Document<unknown, {}, {
    tokenHash: string;
    userId: Types.ObjectId;
    revokedAt: NativeDate;
    createdAt: NativeDate;
}, {
    id: string;
}, Omit<import("mongoose").DefaultSchemaOptions, "timestamps" | "versionKey"> & {
    timestamps: {
        createdAt: true;
        updatedAt: false;
    };
    versionKey: false;
}> & Omit<{
    tokenHash: string;
    userId: Types.ObjectId;
    revokedAt: NativeDate;
    createdAt: NativeDate;
} & {
    _id: Types.ObjectId;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    tokenHash: string;
    userId: Types.ObjectId;
    revokedAt: NativeDate;
    createdAt: NativeDate;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    tokenHash: string;
    userId: Types.ObjectId;
    revokedAt: NativeDate;
    createdAt: NativeDate;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export default RefreshToken;
//# sourceMappingURL=RefreshToken.d.ts.map