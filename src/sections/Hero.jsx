
import { Astronaut } from "../components/Astronaut";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackgroud";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMediaQuery } from 'react-responsive';
import { useFrame } from '@react-three/fiber';
import * as easing from 'maath/easing';
import { Suspense } from "react";
import Loader from "../components/Loader";


const Hero = () => {
    const isMobile = useMediaQuery({maxWidth: 767});
    return (
        <section id="home" className="flex items-start justify-center
        md:items-start md:justify-start min-h-screen overflow-hidden
        c-space">
            <HeroText />
            <ParallaxBackground />
            <figure className="absolute inset-0 w-full h-full z-10">
                <Canvas camera={{ position: [0, 1, 3] }}>
                    <Suspense fallback={<Loader />}> 
                        <Float>
                            <Astronaut scale={isMobile && 0.23} position={isMobile && [0, -1.5, 0]}/>
                        </Float>
                        <Rig />
                    </Suspense>
                </Canvas>
            </figure>
        </section>
    )
}

function Rig() {
    return useFrame((state, delta) => {
        easing.damp3(state.camera.position, [state.mouse.x / 10, 
            1+state.mouse.y / 10, 
            3,
        ], 0.5, 
    delta);
    });
}

export default Hero;