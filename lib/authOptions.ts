import { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from 'jsonwebtoken';

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {

                try {

                    const response = await fetch(`${process.env.APIRES_URL}/login`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            username: credentials?.username,
                            password: credentials?.password
                        }),
                    })

                    if (!response.ok) {
                        throw new Error('Fetch failed');
                    }

                    //Token returned
                    const data = await response.json();

                    console.log("esto es lo que me trae de backend cuand hago login", data)

                    // Verificar si hay un error en la respuesta
                    if (data.error) {
                        throw new Error(data.error);
                    }
                    
                    // Extraer el token JWT
                    const accessToken = data.token;

                    // Decodificar el token JWT para acceder a la carga útil (payload)
                    const decodedToken = jwt.decode(accessToken);

                    // Aquí puedes acceder a los datos del usuario
                    console.log("Datos del usuario:", decodedToken);

                    return data;

                } catch (error) {
                    console.error('Authorize error:', error);
                    throw new Error('Fetch failed');
                }
            }
        }),

    ],

}