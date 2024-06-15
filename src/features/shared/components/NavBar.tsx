"use client";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { motion,AnimatePresence  } from "framer-motion";
export default function NavBar() {

    const [isClick, setIsClick] = useState<boolean>(false);

    const handleClick = () => {
        setIsClick(!isClick);
    }

    return (

        <nav className="shadow-2xl w-full p-2 flex items-center justify-between fixed sm:w-9/12 z-10 sm:inset-x-0 sm:mx-auto sm:top-10 sm:rounded-full overflow-hidden">
            <div className="flex items-center gap-5">
                <Image src="/IA.jpg" width={60} height={60} alt="logo" className="rounded-full border-white border-2" />
                <div className="bg-white p-2 rounded-lg">
                    <img src="/next.svg" alt="" className="h-6" />
                </div>
            </div>

            <div className="flex justify-end sm:hidden bg-gray-200 p-2 rounded-2xl">
                <button onClick={handleClick}>
                    <AiOutlineMenu color="black" size={25} />
                </button>
            </div>

            <AnimatePresence>
                {isClick && (
                    <motion.div
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        exit={{ opacity: 0, x: -300}}
                        transition={{
                            delay: 0.2,
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                        className="fixed inset-0 bg-black z-50 flex flex-col items-start gap-4 p-2 sm:hidden"
                    >
                        <button onClick={handleClick}>
                            <AiOutlineClose className="text-white" size={30} />
                        </button>
                        <ul className="flex flex-col text-xl justify-center items-center w-full h-full gap-10 p-2">
                            <li><a href="#" className="text-white">About</a></li>
                            <li><a href="#" className="text-white">Contact</a></li>
                            <li><a href="#" className="text-white">Model</a></li>
                            <li><a href="#" className="text-white">Introduction</a></li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="hidden text-black sm:flex w-1/2 items-center justify-around h-10 gap-4 tracking-wider">
                <Link href="#" className=" hover:text-blue-300 hover:scale-110">About</Link>
                <Link href="#" className=" hover:text-blue-300">Contact</Link>
                <Link href="#" className=" hover:text-blue-300">Model</Link>
                <Link href="#" className=" hover:text-blue-300">Introduction</Link>
            </div>
        </nav>
    )
}