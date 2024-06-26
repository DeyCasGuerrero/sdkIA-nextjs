import { useEffect, useState } from "react";
import { User } from "../types/RegisterTypes";
import { useRouter } from "next/navigation";

export function usePostRegister() {

    const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
    const router = useRouter();

    const signUp = async (data: User) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_APIRES_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log('Usuario registrado exitosamente');
                setIsSignedIn(true);
            } else {
                console.error('Error al registrar usuario por correo o contraseña:', response.status);
                setIsSignedIn(false);
            }

        } catch (error) {
            console.error('Error al conectar con el servidor:', error);
            setIsSignedIn(false);
        }

    }

    useEffect(() => {
        if (isSignedIn) {
            alert("You have successfully registered");
            router.push("/login");
        }
    }, [isSignedIn, router]);

    return {
        isSignedIn,
        signUp,
    }
}