import nextAuth from "next-auth";

declare module "next-auth" {

    interface Session{
        user:{
            id?: number | null | undefined;
            username: string | null | undefined;
            firstname?: string | null | undefined;
            lastname?: string | null | undefined;
            country?: string | null | undefined;
            token?: string | null | undefined;
            name?: string | null | undefined;
            email?: string | null | undefined;
            image?: string | null | undefined;
        }
    }
}

