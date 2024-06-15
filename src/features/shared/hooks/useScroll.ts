// components/SmoothScroll.tsx
import { useEffect, useState } from 'react';

export function ScrollFuntion (){
    
    const [scroll, setScroll] = useState<boolean>();

    const handleScroll=()=>{
        const scrolling= window.scrollY;
        if(scrolling < 100){
            setScroll(true);
        }else{
            setScroll(false)
        }
    }

    useEffect(()=>{
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }

    },[])

    // useEffect(() => {
    //     const handleScroll = () => {
          
    //     };

    //     const smoothScroll = () => {
           
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     // Cleanup function to remove the event listener when the component unmounts
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return {scroll};
};

