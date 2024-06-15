'use client';

import { ScrollFuntion } from "../hooks/useScroll";
import { motion } from 'framer-motion';
export default function SloganComponent() {
    const { scroll } = ScrollFuntion();
    return (
        <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity:  1 , x:  0 }}
            transition={{
                duration: 0.7,
                ease: "linear",
                delay: 0.5
            }}
            className="text-black absolute bottom-20 left-10 p-4 flex flex-col">

            <h1 className="text-4xl lg:text-6xl"> SDK IA NEXTJS </h1>
            <p className="lg:text-4xl"> You can find anything in our page</p>
            <div className="mt-4 bg-black rounded-full p-2">
                <h2 className="font-sans font-black tracking-wider text-white ">Eugen</h2>
            </div>
        </motion.div>
    )
}