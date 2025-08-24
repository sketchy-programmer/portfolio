import { FlipWords } from "./flipWords";
import {motion} from "motion/react";


const HeroText = () => {
    const words = ["Secure", "Modern", "Scalable"];
    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
        transition: { delay: 1 }
    };
    return <div className="z-10 mt-20 text-center md-mt-40 md:text-left
    rounded-3xl bg-clip-text">
        {/* desktop View */}
        <div className="flex-col hidden md:flex c-space">
            <motion.h1 className="text-4xl font-medium"
            variants ={variants}
                 initial="hidden"
                 animate="visible"
            transition={{ delay: 1}}>Hi I'm Paramvir Singh</motion.h1>
            <div className="flex flex-col items-start">
                <motion.p className="text-5xl font-medium
                 text-neutral-300"
                 variants ={variants}
                 initial="hidden"
                 animate="visible"
                 transition={{ delay: 1.2}}>A Developer Dedicated to Crafting</motion.p>
                <div>
                    <FlipWords words={words}
                        className="font-black text-white text-8xl"/>
                </div>
                <motion.p className="text-4xl font-medium
                 text-neutral-300"
                 variants ={variants}
                 initial="hidden"
                 animate="visible"
                 transition={{ delay: 1.4}}>Web Solutions</motion.p>
            </div>
        </div>
        {/* mobile View */}
        <div className="flex flex-col space-6 md:hidden">
            <motion.p className='text-4xl font-medium'
             variants ={variants}
                 initial="hidden"
                 animate="visible"
             transition={{ delay: 1.6}}>Hi, I'm Paramvir Singh</motion.p>
            <div>
                <motion.p className='text-5xl font-black text-neutral-300'
                 variants ={variants}
                 initial="hidden"
                 animate="visible"
                 transition={{ delay: 1.8}}>Building</motion.p>
                <div>
                    < FlipWords words={words}
                        className="font-bold text-7xl text-white"/>
                </div>
                <motion.p className='text-4xl font-black text-neutral-300'
                 variants ={variants}
                 initial="hidden"
                 animate="visible"
                 transition={{ delay: 2}}>Web Applications</motion.p>
            </div>
        </div>
    </div>
};

export default HeroText;