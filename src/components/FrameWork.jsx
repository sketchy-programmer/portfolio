import { OrbitingCircles } from "./OrbitingCircle";
import React from "react";

export function FrameWork() {
    const skills = [
        "auth0",
        "azure",
        "blazor",
        "cplusplus",
        "csharp",
        "css3",
        "dotnet",
        "dotnetcore",
        "git",
        "github",
        "html5",
        "javascript",
        "microsoft",
        "microsoftsqlserver",
        "react",
        "sqlite",
        "stripe",
        "tailwindcss",
        "threejs",
        "vitejs",
        "wordpress"
    ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
            <img key={index} src={`assets/logos/${skill}.svg`} className="rounded-sm hover:scale-110 duration-200"/>
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
            <img key={index} src={`assets/logos/${skill}.svg`} className="rounded-sm hover:scale-110 duration-200"/>
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({src}) => {
    <img src={src} className="duration-200 rounded-sm hover:scale-110">
        {/* <img src={src} className="rounded-sm hover:scale-110 duration-200"></img> */}
    </img>
}
