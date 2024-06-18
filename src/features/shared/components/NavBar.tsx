"use client";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RiLoginBoxFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useSession, signOut } from "next-auth/react";
export default function NavBar() {

    const { data: session, status } = useSession()

    const [isClick, setIsClick] = useState<boolean>(false);

    const handleClick = () => {
        setIsClick(!isClick);
    }

    return (

        <nav className="sm:shadow-2xl w-full p-2 flex items-center justify-between absolute sm:w-11/12 z-40 sm:inset-x-0 sm:mx-auto sm:top-10 sm:rounded-full overflow-hidden">
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
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, x: -300 }}
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
                        <ul className="flex flex-col text-3xl justify-center items-center w-full h-full gap-20 p-2 tracking-wider font-mono">
                            <li><a href="#main" className="text-white">Inicio</a></li>
                            <li><a href="#" className="text-white">Contact</a></li>
                            <li><a href="#model" className="text-white">Model</a></li>
                            <li><a href="#intro" className="text-white">Introduction</a></li>
                            <div className="flex items-center bg-yellow-100 text-black p-2 rounded-lg">
                                {session?.user ? (
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center bg-black text-white p-2 rounded-lg">
                                            <h1 className="">{session.user.name}</h1>
                                        </div>
                                        <div>
                                            <button onClick={()=>signOut()} className="hover:text-white bg-red-500 p-2 font-semibold rounded-xl
                                                transition duration-300 ease-in-out transform hover:scale-105">
                                                LogOut
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex items-center bg-black text-white p-2 rounded-lg">
                                        <Link href="/login" className="hover:text-blue-300 transition duration-300 ease-in-out transform hover:scale-105">Iniciar sesión</Link>
                                        <RiLoginBoxFill color="white" size={30} className="ml-2" />
                                    </div>
                                )}
                            </div>
                        </ul>

                    </motion.div>
                )}
            </AnimatePresence>

            <div className="hidden text-black sm:flex items-center justify-around h-10 gap-4 tracking-wider mr-10">
                <div className="flex justify-between w-96 font-semibold">
                    <Link href="#main" className="hover:text-blue-300 transition duration-300 ease-in-out transform hover:scale-105">Inicio</Link>
                    <Link href="#" className="hover:text-blue-300 transition duration-300 ease-in-out transform hover:scale-105">Contacto</Link>
                    <Link href="#model" className="hover:text-blue-300 transition duration-300 ease-in-out transform hover:scale-105">Modelo</Link>
                    <Link href="#intro" className="hover:text-blue-300 transition duration-300 ease-in-out transform hover:scale-105">Introducción</Link>
                </div>
                
                {session?.user ? (
                    <>
                        <div className="flex items-center bg-black text-white p-2 rounded-lg">
                            <h1 className="">{session.user.name}</h1>
                        </div>
                        <div>
                            <button className="hover:text-white bg-red-500 p-2 font-semibold rounded-xl transition duration-300 ease-in-out transform hover:scale-105">LogOut</button>
                        </div>
                    </>

                ) : (
                    <div className="flex items-center bg-black text-white p-2 rounded-lg">
                        <Link href="/login" className="hover:text-blue-300 transition duration-300 ease-in-out transform hover:scale-105">Iniciar sesión</Link>
                        <RiLoginBoxFill color="white" size={30} className="ml-2" />
                    </div>
                )}



            </div>

        </nav>
    )
}