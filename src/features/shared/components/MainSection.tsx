'use client';
import Image from "next/image"
import SloganComponent from "./Slogan"
import { motion } from "framer-motion"
function MainSections() {
    return (
        <section className="text-2xl w-full h-screen relative overflow-hidden ">
            <div className="h-full relative">
                <motion.div 
                initial={{ opacity: 0 , scale: 2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                    delay: 0.2, 
                    duration: 0.3,
                    ease: "easeOut",
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
        </section>
    )
}

export default MainSections;