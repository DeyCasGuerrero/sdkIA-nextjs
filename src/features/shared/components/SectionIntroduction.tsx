'use client';
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react";
export default function IntroductionSection() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const texts = [
        "MIAya is an artificial intelligence created specifically to engage in conversations as though she were your close friend, providing companionship and interaction",
        "She's designed to be interactive and engaging, capable of understanding and responding to a wide range of topics.",
        "Feel free to ask her questions, share your thoughts, or simply enjoy her company!"
    ];

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [animationComplete, setAnimationComplete] = useState(false);


    useEffect(() => {
        let timeout: any;
        if (animationComplete) {
            timeout = setTimeout(() => {
                setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
                setAnimationComplete(false);
            }, 5000); // Tiempo para mostrar el siguiente texto después de que termine la animación
        }

        return () => clearTimeout(timeout);
    }, [animationComplete]);

    const container = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.04,
            },
        },
    };

    const child = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };




    return (
        <section className="bg-gray-100 font-mono p-4 lg:p-20 w-full h-[30rem] flex lg:flex-row lg:justify-between lg:items-center" id="intro">
            {isInView &&
                <motion.div
                    initial={{ opacity: 0, x: -300 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        delay: 0.2,
                        duration: 0.7,
                        ease: [0.25, 0.1, 0.25, 1],
                    }}

                    className="bg-gradient-to-l from-gray-400 to-zinc-900 bg-clip-text text-transparent"
                >
                    <h1

                        className="text max-lg:text-center lg:text-2xl underline"
                    >
                        Introduction
                    </h1>
                    <div>
                        <h1 className="p-4 text-xl text-nowrap">
                            Who's MIAya?
                        </h1>
                    </div>
                </motion.div>
            }

            <div className="flex items-center justify-center">
                <div className=" mt-4 gap-4 p-2 flex flex-col lg:flex-row items-center justify-around w-full ">
                    <div ref={ref} className="lg:w-96 lg:text-xl">
                        {isInView && (
                            <AnimatePresence>
                                <motion.div
                                    key={currentTextIndex}// Añadir key para forzar la remontaje de los elementos
                                    variants={container}
                                    initial="hidden"
                                    animate="visible"
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "linear",
                                        delay: 0.3,
                                    }}
                                    onAnimationComplete={() => setAnimationComplete(true)}

                                >
                                    {texts[currentTextIndex].split("").map((char, index) => (
                                        <motion.span
                                            key={index}
                                            className="tracking-widest"
                                            variants={child}>
                                            {char}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        )
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}