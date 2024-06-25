import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
    const token = await getToken({ req });
    const { pathname } = req.nextUrl;

    // console.log("Token:", token);
    // console.log("Pathname:", pathname);

    //Si el usuario está autenticado y trata de acceder a /login o /register, redirigir a la página principal
    if (token && (pathname === '/login' || pathname === '/register')) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    // Si el usuario no está autenticado y trata de acceder a rutas protegidas, redirigir a la página de inicio de sesión
    if (!token && (pathname === '/model' || pathname === '/miaya' || pathname === '/profile')) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    // Permitir el acceso a todas las otras rutas
    return NextResponse.next();
}

//Rutas Protegidas
export const config = {
    matcher: [
        '/login',
        '/register',
        '/model',
        '/miaya',
        '/profile'
    ],
};

