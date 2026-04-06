export const myProjects = [
  {
    id: 1,
    title: "AI Resume Tailoring Web App",
    description:
      "A full-stack AI-powered web application that transforms generic resumes into job-specific, optimized resumes instantly.",
    subDescription: [
      "Built a modern React 19 frontend using Vite for ultra-fast builds and a smooth user experience.",
      "Implemented resume upload support for PDF and DOCX files with real-time processing.",
      "Developed a Node.js + Express backend integrated with OpenAI for intelligent resume tailoring.",
      "Extracted and parsed resume content using Mammoth (DOCX) and PDFReader (PDF).",
      "Designed a clean, responsive UI using Tailwind CSS and Lucide icons.",
      "Deployed the frontend on Vercel with continuous GitHub integration.",
    ],
    href: "https://resume-tailor-frontend-dun.vercel.app",
    logo: "",
    image: "/assets/projects/resume-tailor.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Vite", path: "/assets/logos/vitejs.svg" },
      { id: 3, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 4, name: "Express", path: "/assets/logos/expressjs.svg" },
      { id: 5, name: "OpenAI", path: "/assets/logos/openai.svg" },
      { id: 6, name: "Tailwind CSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 7, name: "Vercel", path: "/assets/logos/vercel.svg" },
    ],
  },
  {
    id: 2,
    title: "E-Commerce Automation Framework",
    description:
      "A robust automated testing framework built with Selenium WebDriver and Python using the Page Object Model design pattern.",
    subDescription: [
      "Designed and documented automated test cases using a Page Object Model framework with Selenium WebDriver and Python to validate checkout flows, cart management, and user authentication across Chrome, Firefox, and Safari.",
      "Collaborated via Git for version control and maintained clean, modular test code structure.",
      "Configured a Jenkins pipeline to build the Dockerized test suite on every commit, enabling continuous integration.",
      "Integrated Allure and Extent reporting for detailed, human-readable test results with failure screenshots.",
      "Stored test artifacts in GitHub and AWS S3 for full traceability and audit history.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "Selenium", path: "/assets/logos/selenium.svg" },
      { id: 3, name: "Docker", path: "/assets/logos/docker.svg" },
      { id: 4, name: "Jenkins", path: "/assets/logos/jenkins.svg" },
      { id: 5, name: "AWS S3", path: "/assets/logos/aws.svg" },
      { id: 6, name: "Git", path: "/assets/logos/git.svg" },
    ],
  },
  {
    id: 3,
    title: "API Performance Benchmarking Suite",
    description:
      "An automated performance testing pipeline using JMeter integrated with Jenkins CI on Azure VMs to load-test REST APIs under simulated peak traffic.",
    subDescription: [
      "Integrated JMeter test plans into a Jenkins CI pipeline on Azure VMs using Docker containers to load-test the company's REST API under 1,000 concurrent users.",
      "Automatically archived performance artifacts in GitHub for historical tracking and regression comparison.",
      "Produced detailed performance reports with p95/p99 latency metrics and throughput analysis.",
      "Findings directly informed infrastructure scaling decisions and capacity planning.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/scheduleGenerator.png",
    tags: [
      { id: 1, name: "JMeter", path: "/assets/logos/jmeter.svg" },
      { id: 2, name: "Jenkins", path: "/assets/logos/jenkins.svg" },
      { id: 3, name: "Docker", path: "/assets/logos/docker.svg" },
      { id: 4, name: "Azure", path: "/assets/logos/azure.svg" },
      { id: 5, name: "Git", path: "/assets/logos/git.svg" },
    ],
  },
  {
    id: 4,
    title: "Summarizer Tool",
    description:
      "A cross-platform AI-powered desktop and web application that summarizes text and code in multiple writing styles.",
    subDescription: [
      "Developed a robust text and code summarization tool supporting multiple writing styles (academic, casual, business).",
      "Enabled desktop deployment with a floating UI component for real-time summarization triggered by hotkeys.",
      "Integrated Stripe payment system for one-time licensing and managed cross-platform (Windows, MacOS, Linux) compatibility.",
      "Built dynamic settings UI to manage writing style, word count, and theme preferences.",
    ],
    href: "https://summarizer-tool-8dd98b6dcbe8.herokuapp.com",
    logo: "",
    image: "/assets/projects/summarizer-tool.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "Flask", path: "/assets/logos/flask.svg" },
      { id: 3, name: "OpenAI", path: "/assets/logos/openai.svg" },
      { id: 4, name: "Stripe", path: "/assets/logos/stripe.svg" },
    ],
  },
  {
    id: 5,
    title: "AI Schedule Generator",
    description:
      "A web application that generates personalized project schedules using AI based on user-uploaded project overviews.",
    subDescription: [
      "Designed and developed a web application where users can create accounts and upload project overviews to generate automated schedules.",
      "The system analyzes project inputs and generates a detailed schedule with task breakdowns, durations, and resource allocation.",
      "Implemented project data storage and efficient schedule generation algorithms powered by OpenAI.",
    ],
    href: "https://ai-schedule-generator-2e0bff4ac042.herokuapp.com",
    logo: "",
    image: "/assets/projects/scheduleGenerator.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "Flask", path: "/assets/logos/flask.svg" },
      { id: 3, name: "OpenAI", path: "/assets/logos/openai.svg" },
      { id: 4, name: "Stripe", path: "/assets/logos/stripe.svg" },
    ],
  },
  {
    id: 6,
    title: "Online Restaurant App",
    description:
      "A full-stack online restaurant application with customer ordering and admin management built with React and MongoDB.",
    subDescription: [
      "Spearheaded the development of a dynamic full-stack restaurant application enabling users to browse menus, subscribe to newsletters, and place online orders.",
      "Orchestrated user-role differentiation with secure login functionality for both customers and admins.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience across all devices.",
      "Admin dashboard included full CRUD operations for supervising menu items and pricing.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/indian-delicacy.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 3, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/paramvir-singh-541959253/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/singh_paramvir03?igsh=MTRuc3NsMzc3NDl3dw==",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "QA Software Tester",
    job: "TechNova Solutions Inc. — Toronto, ON",
    date: "Apr 2025 – Jul 2025",
    contents: [
      "Designed and executed 600+ manual test cases for a SaaS project management platform with 50,000+ active users, ensuring comprehensive coverage of critical business workflows and core modules.",
      "Built and maintained automated regression suites using Cypress and Java with TestNG and listener classes in Docker containers on AWS, reducing regression cycle time by 40% and catching 3× more pre-release defects.",
      "Conducted API automation using Postman, REST Assured, and Karate on .NET/C# services; performed network traffic analysis with Wireshark to validate 120+ endpoints for correctness, authentication, error handling, and edge cases.",
      "Performed database validation using SQL queries on PostgreSQL and MongoDB in GCP environments to verify data integrity across complex transactional workflows and batch jobs.",
      "Collaborated with 4 cross-functional Scrum teams, participating in sprint planning, story refinement, and daily standups — integrating testing early and reducing sprint defects.",
      "Identified and tracked 280+ bugs in JIRA and Azure DevOps with detailed reproduction steps and severity classifications; supported developers during root-cause analysis to prevent critical issues from reaching production.",
      "Led smoke and sanity testing for 12 production deployments on AWS and GCP, maintaining a zero critical-defect escape rate for two consecutive quarters.",
      "Mentored 2 junior testers on test-case writing standards and effective JIRA usage, resulting in higher test-case quality and faster defect resolution.",
    ],
  },
  {
    title: "QA Analyst Intern",
    job: "Net Solutions — Mississauga, ON",
    date: "Apr 2023 – Jul 2023",
    contents: [
      "Executed manual test plans for 5 client websites and mobile apps built with React and the ArcGIS Platform, reporting 95+ defects with full documentation in Bugzilla and Trello.",
      "Wrote Python scripts using PyTest to automate repetitive form-validation and login-flow test scenarios, cutting manual effort by 30%.",
      "Performed cross-browser and cross-device compatibility testing on AWS staging environments using Chrome, Firefox, Safari, and Edge with TestNG scripts, identifying 12 UI inconsistencies resolved before release.",
      "Created and maintained comprehensive test documentation — test plans, test cases, and summary reports — using GitHub for version control and Azure Repos, reducing client handover review time by two days.",
      "Participated in UAT sessions with end clients, translating business requirements into structured test scenarios using BDD (Cucumber/Gherkin), achieving client sign-off on schedule and lowering post-release defects.",
    ],
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
