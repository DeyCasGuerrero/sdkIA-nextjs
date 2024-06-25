"use client";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RiLoginBoxFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useSession, signOut } from "next-auth/react";
import { ScrollFuntion } from "../hooks/useScroll";
export default function NavBar() {

    const { data: session, status } = useSession()

    const [isClick, setIsClick] = useState<boolean>(false);

    const {scroll} = ScrollFuntion();

    const handleClick = () => {
        setIsClick(!isClick);
    }

    return (

        <nav className={`sm:shadow-2xl bg-white w-full p-2 flex items-center justify-between absolute sm:w-11/12 z-40 sm:inset-x-0 sm:mx-auto sm:top-10 sm:rounded-full overflow-hidden `}>
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

            {/*Mobiles*/}

            <AnimatePresence>
                {isClick && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ x: -300 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.3,
                            ease: "easeIn",
                        }}
                        className="fixed inset-0 bg-black z-50 flex flex-col items-start gap-4 p-2 sm:hidden overflow-y-auto"
                    >
                        <button onClick={handleClick}>
                            <AiOutlineClose className="text-white" size={30} />
                        </button>
                        <ul className="flex flex-col text-3xl justify-center items-center w-full h-full gap-20 p-2 tracking-wider font-mono">
                            <li><Link href="/" className="text-white">Inicio</Link></li>
                            <li><Link href="#model" className="text-white">Model</Link></li>
                            <li><Link href="#intro" className="text-white">Introduction</Link></li>
                            <div className="flex items-center bg-yellow-100 text-black p-2 rounded-lg">
                                {session?.user ? (
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center bg-black text-white p-2 rounded-lg">
                                            {session?.user.name ? (
                                                <h1>
                                                    {session.user.name}
                                                </h1>

                                            ) : (
                                                <h1>{session.user?.firstname}</h1>
                                            )}
                                        </div>
                                        <div>
                                            <img
                                                src={session.user.image !== null ? session.user.image : undefined}
                                                alt="perfile"
                                                className="w-20 h-20 rounded-full cursor-pointer  hover:shadow-md hover:scale-110 transition duration-300 focus:outline-none"
                                            />
                                        </div>
                                        <div>
                                            <button onClick={() => signOut()} className="hover:text-white bg-red-500 p-2 font-semibold rounded-xl
                                                transition duration-300 ease-in-out transform hover:scale-105">
                                                LogOut
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex items-center bg-black text-white p-2 rounded-lg">
                                        <Link href="/login" className="transition duration-300 ease-in-out transform hover:scale-105">Iniciar sesión</Link>
                                        <RiLoginBoxFill color="white" size={30} className="ml-2" />
                                    </div>
                                )}
                            </div>
                        </ul>

                    </motion.div>
                )}
            </AnimatePresence>

            {/*Pc, laptops or more*/}

            <div className="hidden text-black sm:flex items-center justify-around h-10 gap-4 tracking-wider mr-10">
                <div className="flex justify-between w-96 font-semibold">
                    <Link href="/" className="transition duration-300 ease-in-out transform hover:scale-105">Inicio</Link>
                    <Link href="#model" className="transition duration-300 ease-in-out transform hover:scale-105">Modelo</Link>
                    <Link href="#intro" className="transition duration-300 ease-in-out transform hover:scale-105">Introducción</Link>
                </div>

                <>
                    {status === 'loading' ? (
                        <p className="text-xl rounded-xl font-semibold bg-black p-2 text-white">Loading...</p>
                    ) : (
                        <>
                            {session?.user ? (
                                <>
                                    <div className="flex items-center bg-black text-white p-2 rounded-lg">
                                        {session?.user.name ? (
                                            <h1>
                                                {session.user.name}
                                            </h1>

                                        ) : (
                                            <h1>{session.user?.firstname}</h1>
                                        )}
                                    </div>
                                    <>
                                        {session?.user.image?(
                                            <Link href={"/profile"}>
                                                <img
                                                    src={session.user.image}
                                                    alt="perfile"
                                                    className="w-16 h-16 rounded-full cursor-pointer  hover:shadow-md hover:scale-110 transition duration-300 focus:outline-none"
                                                />
                                            </Link>

                                        ):(
                                            <p></p>
                                        )}
                                    </>
                                    <div>
                                        <button onClick={() => signOut()} className="hover:text-white bg-red-500 p-2 font-semibold rounded-xl 
                                            transition duration-300 ease-in-out transform hover:scale-105">
                                            LogOut
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <div className="flex items-center bg-black text-white p-2 rounded-lg">
                                    <Link href="/login" className="transition duration-300 ease-in-out transform hover:scale-105">Iniciar sesión</Link>
                                    <RiLoginBoxFill color="white" size={30} className="ml-2" />
                                </div>
                            )}

                        </>
                    )}
                </>
            </div>

        </nav>
    )
}