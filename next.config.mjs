/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',      // Utiliza el protocolo HTTPS.
                hostname: 'a.storyblok.com', // Permite el dominio 'a.storyblok.com'.
                port: '',               // El puerto se deja vacío para usar el puerto por defecto (443 para HTTPS).
                pathname: '/f/274239/**', // Permite cualquier subruta dentro de '/f/274239/'.
            },
            

        ],
    },
};

export default nextConfig;
