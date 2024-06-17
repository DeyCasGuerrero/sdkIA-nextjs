'use client';
import Image from "next/image"
import SloganComponent from "./Slogan"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollFuntion } from "../hooks/useScroll";
import { AiFillCaretUp } from "react-icons/ai";
import Link from "next/link";


function MainSections() {
    const { scroll } = ScrollFuntion();

    console.log(scroll)
    return (
        <section className="text-2xl w-full h-screen relative overflow-hidden" id="main">
            <div className="h-full relative">
                <motion.div
                    initial={{ opacity: 0, scale: 1.3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: 0.2,
                        duration: 0.7,
                        ease: [0.25, 0.1, 0.25, 1],

                    }}
                    className="absolute w-full h-full ">
                    <Image
                        src="https://a.storyblok.com/f/274239/1456x816/aba6425720/homepage-hero.png/m/900x504/filters:format(webp):quality(70)"
                        alt="img"
                        width={500}
                        height={300}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            filter: 'blur(1px)',
                            mixBlendMode: 'multiply',
                            zIndex: -1,
                            opacity: 0.5,
                            backgroundSize: 'cover',

                        }}
                    ></Image>
                </motion.div>
                <SloganComponent />
            </div>
            {scroll && (
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{
                            opacity: 0,
                            x: 300
                        }}
                        transition={{
                            duration: 0.5,
                            ease: [
                                0.25,
                                0.1,
                                0.25,
                                1
                            ],
                            delay: 0.4,
                        }}

                        className="p-1 bottom-0 fixed bg-black z-30"
                    >
                        <Link href={"/"}>
                            <AiFillCaretUp color="white" size={40}></AiFillCaretUp>
                        </Link>
                    </motion.div>
                </AnimatePresence>
            )}
        </section>
    )
}

export default MainSections;