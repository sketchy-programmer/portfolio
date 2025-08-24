import Card from "../components/Card";
import { useRef } from "react";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { FrameWork } from "../components/FrameWork";

const About = () => {
    const grid2Container = useRef();
    return (
        <section id="about" className="c-space section-spacing">
            <h2 className="text-heading">About Me</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 
            md:auto-rows-[18rem] mt-12">
                {/* Grid 1 */}
                <div className="flex items-end grid-default-color 
                grid-1">
                    <img src="assets/coding-pov.png" className="absolute 
                    scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3]
                     md:left-50 md:inset-y-10 lg:scale-[2.5]"></img>
                     <div className="z-10">
                        <p className="headtext">Hi, I'm Paramvir Singh</p>
                        <p className="subtext">Over the last 4 years, I developed my frontend and backend
                            development skills to deliver dynamic, user-friendly, responsive 
                            websites and applications. I am passionate about creating efficient 
                            and scalable solutions that meet client needs and exceed expectations.
                        </p>
                     </div>
                     <div className="absolute inset-x-0 pointer-evets-none 
                     -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"/>
                </div>
                {/* Grid 2 */}
                <div className="grid-default-color grid-2">
                    <div ref={grid2Container} className="flex items-center justify-center w-full
                    h-full">
                        <p className="flex items-end text-5xl text-gray-500">
                            CODE IS CRAFT
                        </p>
                        <Card style={{rotate:"75deg", top:"30%", left:"20%"}} text="GRASP" containerRef={grid2Container}/>
                        <Card style={{rotate:"-3075deg", top:"60%", left:"45%"}} text="SOLID" containerRef={grid2Container}/>
                        <Card style={{rotate:"90deg", bottom:"30%", left:"70%"}} text="Design Patterns" containerRef={grid2Container}/>
                        <Card style={{rotate:"-45deg", top:"55%", left:"0%"}} text="Design Principle" containerRef={grid2Container}/>
                        <Card style={{rotate:"20deg", top:"10%", left:"38%"}} text="SRP" containerRef={grid2Container}/>
                        <Card style={{rotate:"30deg", top:"70%", left:"70%"}} image="assets/logos/csharp-pink.png" containerRef={grid2Container}/>
                        <Card style={{rotate:"-45deg", top:"70%", left:"25%"}} image="assets/logos/dotnet-pink.png" containerRef={grid2Container}/>
                        <Card style={{rotate:"-45deg", top:"5%", left:"10%"}} image="assets/logos/blazor-pink.png" containerRef={grid2Container}/>
                    </div>
                </div>
                {/* Grid 3 */}
                <div className="grid-black-color grid-3">
                    <div className="z-10 w-[50%]">
                        <p className="headtext">Time Zone</p>
                        <p className="subtext">I'm based in Mississauga, and open to remote work worldwide</p>
                    </div>
                    <figure className="absolute left-[30%] top-[10%]">
                        <Globe />
                    </figure>
                </div>
                {/* Grid 4 */}
                <div className="grid-special-color grid-4">
                    <div className="flex flex-col items-center 
                    justify-center gap-4 size-full">
                        <p className="text-center headtext">
                            Do you want to start a project together?
                        </p>
                        <CopyEmailButton />
                    </div>
                </div>
                {/* Grid 5 */}
                <div className="grid-default-color grid-5">
                    <div className="z-10 w-[50%]">
                        <p className="headtext">Tech Stack</p>
                        <p className="subtext">I am specialize in a variety of 
                            languages and frameworks, and tools that allows me 
                            to build robust and scalable applications.
                        </p>
                    </div>
                    <div className="absolute flex-items inset-y-0 md:inset-y-9 w-full 
                    h-full start-[50%] md:scale-125">
                        <FrameWork />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;