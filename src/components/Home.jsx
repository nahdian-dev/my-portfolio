import Lottie, { useLottie } from "lottie-react";
import { motion } from 'framer-motion';

import welcomeAnimation from "../assets/welcome-animation.json";
import scrollDownAnimation from "../assets/scroll-down-animation.json";
import AnimatedTextCharacter from "./AnimatedTextCharacter";

function Home() {
    const lottieOptions = {
        animationData: welcomeAnimation,
        loop: false,
    };
    const { View } = useLottie(lottieOptions);

    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            {/* WELCOME */}
            <div className="h-1/2 w-1/2">
                <div className="absolute flex items-center z-1 h-[50%] w-[50%]">
                    {View}
                </div>
                <motion.div
                    className="absolute flex items-center justify-center z-10 bg-white"
                    initial={{
                        width: 0,
                        height: "50%"
                    }}
                    animate={{
                        width: "50%"
                    }}
                    transition={{
                        delay: 4,
                        duration: 1,
                    }}
                >
                    <div className="text-center">
                        <AnimatedTextCharacter text="Hi There! I'm Nahdian" />
                        <motion.div
                            className=""
                            initial={{
                                height: 0,
                                opacity: 0
                            }}
                            animate={{
                                height: 30,
                                opacity: 1,
                            }}
                            transition={{
                                delay: 7,
                                duration: 1,
                                ease: 'easeInOut'
                            }}
                        >
                            a Full Stack Developer
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="absolute z-20 bottom-3"
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    delay: 9,
                    duration: 1,
                    ease: 'easeInOut'
                }}
            >
                <Lottie animationData={scrollDownAnimation} />
            </motion.div>
        </div>
    )
}

export default Home