import Link from "next/link";
import { AiFillOpenAI } from "react-icons/ai";
import styles from '../styles/home.module.css'
export default function ModelPage() {
    return (
        <>
            <section className={`min-h-screen p-8 md:p-20 relative ${styles.backGround}`}>
                <div className="text-white text-center flex justify-center absolute inset-0 flex-col items-center">
                    <h1 className="text-6xl md:text-6xl font-semibold uppercase mb-8 md:mb-12 text-yellow-400">MIAya</h1>
                    <p className="text-2xl font-mono md:text-xl mb-12 md:mb-16">An AI model using the Next.js SDK</p>
                    <div className="text-center">
                        <h2 className="text-5xl md:text-8xl font-semibold mb-6 md:mb-10 text-green-600">SDK Open IA</h2>
                        <p className="text-sm p-2 text-gray-600 md:text-xl">We aim to seamlessly integrate our AI model using the Next.js SDK to enhance the quality of daily experiences</p>
                    </div>
                    <div className="bg-green-600 w-32 p-2 rounded-full mt-10 text-black font-bold">
                        <Link href="/miaya">Go to chatting</Link>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 p-4">
                    <div className="flex items-center gap-4 mb-4">
                        <h1 className="font-semibold text-lg text-white font-mono">
                            Model Category
                        </h1>
                        <AiFillOpenAI size={30} color="green" />
                    </div>
                    <div className="font-serif flex justify-around text-white">
                        <h1 className="px-4 bg-gray-600 rounded-3xl">AI</h1>
                        <h1 className="px-4 bg-slate-500 rounded-3xl">Assitent</h1>
                    </div>
                </div>
            </section>

            <section className="bg-[#161719] relative min-h-screen lg:p-20">
                <div className="flex flex-col w-full lg:flex-row items-center justify-center gap-10 lg:justify-around p-4">
                    <div className="text-2xl font-semibold uppercase text-white">
                        Recent MIAya News
                    </div>
                    <div className="relative w-full lg:w-auto p-4">
                        <div className="p-4 w-full lg:w-[20rem] border-t-2 border-gray-300 text-white">
                            <div className="flex items-center space-x-10">
                                <h2 className="bg-gray-600 px-4 rounded-2xl">Ai</h2>
                                <h2 className="bg-gray-600 px-4 rounded-2xl">Model</h2>
                            </div>
                            wa
                        </div>
                        <div className="p-4 w-full lg:w-[20rem] border-t-2 border-gray-300 text-white">
                            <div className="flex items-center space-x-10">
                                <h2 className="bg-gray-600 px-4 rounded-2xl">Ai</h2>
                                <h2 className="bg-gray-600 px-4 rounded-2xl">Model</h2>
                            </div>
                            wa
                        </div>
                    </div>
                </div>
            </section>


        </>

    )
}