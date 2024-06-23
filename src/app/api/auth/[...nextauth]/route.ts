import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
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

                    const res = await fetch(`${process.env.APIRES_URL}/login`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            username: credentials?.username,
                            password: credentials?.password
                        }),
                    })

                    const user = await res.json();

                    console.log(user);

                    if (res.ok && user) {
                        return user
                    }
                    return null

                } catch (error) {
                    console.error('Authorize error:', error);
                    throw new Error('Fetch failed');
                }
            }
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                return { ...token, ...user };
            }
            return token;
        },
        async session({ session, token}) {
            session.user = token as any;
            return session;
        },
    },
    pages: {
        signIn: '/login',  // Página de inicio de sesión personalizada
    }
})

export { handler as GET, handler as POST }