'use client';
import { motion } from "framer-motion"
export default function IntroductionSection() {
    return (
        <section className="bg-gray-100 p-4 lg:p-20 text-2xl w-full">
            <h1 className="uppercase max-lg:text-center lg:text-6xl underline"> Introduction </h1>
            <div className="flex items-center justify-center">
                <div className=" mt-4 gap-4 p-2 flex flex-col lg:flex-row items-center justify-around w-full ">
                    <div className="lg:w-96">
                        <p>This page was created for you can talk with a IA called MIAya, it will be you parther in this moment</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <motion.div
                            animate={{
                                rotate: [0, 0, 270, 270, 0],
                                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.5, 0.8, 1],
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                            className="bg-blue-300 w-32 h-32 ">

                        </motion.div>

                        <motion.div
                            animate={{

                                rotate: [0, 0, 270, 270, 0],
                                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.5, 0.8, 1],
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                            className="bg-blue-500 w-32 h-32 "
                        >

                        </motion.div>
                        <motion.div
                            animate={{

                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.5, 0.8, 1],
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                            className="bg-blue-500 h-32 col-span-2 ">

                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}