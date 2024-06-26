import { useEffect, useState } from "react";
import { NewType } from "../types/ApiTypes";
import { useSession } from "next-auth/react";

export function useGetDataNew(){

    const { data: session } = useSession();
    const [news, setNews] = useState<NewType[]>([]);

    const apiUrl = `${process.env.NEXT_PUBLIC_APIRES}/all`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${session?.user.token}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setNews(data);
            } catch (error) {
                console.error('Error al obtener proyectos:', error);
            }
        };

        if (session?.user.token) {
            fetchData();
        }
    }, [apiUrl, session?.user.token]);

    return news;
}
