import Card from "../components/Card";
import { useRef } from "react";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { FrameWork } from "../components/FrameWork";

const About = () => {
  const grid2Container = useRef();

  const forceDownload = async () => {
    const res = await fetch("/assets/resume.pdf");
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Paramvir_Singh_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="about" className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">

        {/* Grid 1 — Bio */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Paramvir Singh</p>
            <p className="subtext">
              QA engineer with 2+ years of hands-on experience in manual and automated testing,
              proficient in JavaScript and Python. Skilled at building Cypress, Selenium, and
              PyTest frameworks. Strong background in RESTful API validation, SQL and MongoDB
              data integrity, Docker, and Agile delivery. Seeking to leverage scripting expertise
              and backend understanding in a full-stack development role.
            </p>
            <button onClick={forceDownload} className="cursor-pointer underline mt-2">
              Download Resume
            </button>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 — Tech Buzz Words */}
        <div className="grid-default-color grid-2">
          <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
            <p className="flex items-end text-5xl text-gray-500">TEST. BUILD. SHIP.</p>
            <Card style={{ rotate: "12deg", top: "20%", left: "15%" }} text="Cypress" containerRef={grid2Container} />
            <Card style={{ rotate: "-8deg", top: "55%", left: "40%" }} text="Selenium" containerRef={grid2Container} />
            <Card style={{ rotate: "25deg", bottom: "20%", left: "65%" }} text="PyTest" containerRef={grid2Container} />
            <Card style={{ rotate: "-20deg", top: "60%", left: "5%" }} text="Page Object Model" containerRef={grid2Container} />
            <Card style={{ rotate: "10deg", top: "8%", left: "42%" }} text="BDD / Gherkin" containerRef={grid2Container} />
            <Card style={{ rotate: "30deg", top: "72%", left: "68%" }} image="assets/logos/python.svg" containerRef={grid2Container} />
            <Card style={{ rotate: "-35deg", top: "72%", left: "22%" }} image="assets/logos/javascript.svg" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "5%", left: "8%" }} image="assets/logos/react.svg" containerRef={grid2Container} />
          </div>
        </div>

        {/* Grid 3 — Location / Globe */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              Based in Mississauga, ON — open to remote work worldwide and on-site roles in the GTA.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 — CTA */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">Want to collaborate or hire?</p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 — Tech Stack */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              Specializing in test automation, full-stack web development, and cloud-native
              tooling — from Cypress and Selenium to React, Node.js, Python, Docker, and beyond.
            </p>
          </div>
          <div className="absolute flex-items inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <FrameWork />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
