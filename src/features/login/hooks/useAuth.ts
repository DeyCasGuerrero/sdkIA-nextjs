import { signIn, useSession } from "next-auth/react";

export function useAuth(){
    const{data:session, status}=useSession();
}


export const handleGoogleSignIn = async () => {
    const result = await signIn('google', {
        redirect: true,
        callbackUrl: '/',
    });

    if (result?.error) {
        alert(result.error);
    }
};