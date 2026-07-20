import { Schema } from "mongoose";
declare const User: import("mongoose").Model<{
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    password: string;
    roles: string[];
    createdAt: NativeDate;
}, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    password: string;
    roles: string[];
    createdAt: NativeDate;
}, {
    id: string;
}, {
    timestamps: {
        createdAt: true;
        updatedAt: false;
    };
    versionKey: false;
    toJSON: {
        transform(_doc: import("mongoose").Document<unknown, {}, {
            firstName?: string | null;
            lastName?: string | null;
            email: string;
            password: string;
            roles: string[];
        }, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<{
            firstName?: string | null;
            lastName?: string | null;
            email: string;
            password: string;
            roles: string[];
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & import("mongoose").HydratedDocumentOverrides<{
            id: string;
        }>, ret: any): any;
    };
}> & Omit<{
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    password: string;
    roles: string[];
    createdAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: {
        createdAt: true;
        updatedAt: false;
    };
    versionKey: false;
    toJSON: {
        transform(_doc: import("mongoose").Document<unknown, {}, {
            firstName?: string | null;
            lastName?: string | null;
            email: string;
            password: string;
            roles: string[];
        }, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<{
            firstName?: string | null;
            lastName?: string | null;
            email: string;
            password: string;
            roles: string[];
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & import("mongoose").HydratedDocumentOverrides<{
            id: string;
        }>, ret: any): any;
    };
}, {
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    password: string;
    roles: string[];
    createdAt: NativeDate;
}, import("mongoose").Document<unknown, {}, {
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    password: string;
    roles: string[];
}, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<{
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    password: string;
    roles: string[];
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    password: string;
    roles: string[];
    createdAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>, {
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    password: string;
    roles: string[];
    createdAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export default User;
//# sourceMappingURL=User.d.ts.map