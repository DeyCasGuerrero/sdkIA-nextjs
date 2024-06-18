"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { ScrollFuntion } from "../hooks/useScroll";
function SectionModel() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section
            id="model"
            className="relative w-full p-20 h-screen flex flex-col gap-20 items-center justify-center text-white overflow-hidden bg-black">
            {isInView &&
                <motion.div
                    initial={{ backgroundColor: 'white', x: '100%' }}
                    animate={{ backgroundColor: 'blue' , x: 0 }}
                    transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
                    className="bg-black absolute w-full  te h-screen flex flex-col gap-20 items-center justify-center">

                </motion.div>
            }

            <div ref={ref} className="text-center z-10">
                <AnimatePresence>
                    {isInView && (
                        <motion.div
                            initial={{ opacity: 0, scale: 2 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 2 }}
                            transition={{
                                duration: 1,
                                ease: "easeOut",
                                delay: 0.2,
                            }}
                        >
                            <h1 className="text-6xl tracking-widest uppercase lg:text-[12rem] lg:tracking-wider">
                                M o d e l
                            </h1>
                            <h1 className="text-5xl tracking-widest lg:text-[9rem] lg:tracking-wider">
                                MIAya
                            </h1>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <AnimatePresence>
                {isInView &&
                    <motion.button
                        initial={{ opacity: 0, scale: 2 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 1, scale: 0 }}
                        transition={{
                            delay: 1,
                            duration: 0.8,
                            ease: "easeIn",
                        }}
                        className="bg-green-500 p-2 underline font-mono text-xl uppercase hover:animate-pulse z-10">
                        entry the model
                    </motion.button>
                }
            </AnimatePresence>

        </section>
    );
}

export default SectionModel;
