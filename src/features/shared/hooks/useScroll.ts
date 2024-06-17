// components/SmoothScroll.tsx
import { useEffect, useState } from 'react';

export function ScrollFuntion (){
    
    const [scroll, setScroll] = useState<boolean>();

    const handleScroll=()=>{
        const scrolling= window.scrollY;
        
        if(scrolling <100){
            setScroll(false);
        }else{
            setScroll(true)
        }
    }

    useEffect(()=>{
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }

    },[])

    return {scroll};
};

