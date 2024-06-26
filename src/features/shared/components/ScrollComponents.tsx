import { AnimatePresence, motion } from "framer-motion";
import { ScrollFuntion } from "../hooks/useScroll";
import Link from "next/link";
import { AiFillCaretUp } from "react-icons/ai";

interface CompScroll{
    url: string;
    bgcolor?: string;
}
export default function ScrollButton({url,bgcolor}:CompScroll) {

    const { scroll } = ScrollFuntion();

    return (
        <>

            <AnimatePresence>
                {scroll && (
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{
                            opacity: 0,
                            x: 100
                        }}
                        transition={{
                            duration: 0.3,
                            ease: [
                                0.25,
                                0.1,
                                0.25,
                                1
                            ],
                            delay: 0.4,
                        }}

                        className={`p-1 bottom-0 fixed ${bgcolor? bgcolor :'bg-black'} z-30`}
                    >
                        <Link href={url}>
                            <AiFillCaretUp color="white" size={40}></AiFillCaretUp>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>

        </>

    )
}