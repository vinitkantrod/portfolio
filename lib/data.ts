import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "M.Tech in Computer Science",
        location: "Vellore Insititute of Technology",
        description:
            "IBM India Hackathon Winner - 2015. Build local Inventory app for users to check what items are available in their surroundings. GSOC'15 - worked on libvert virtulazation API.",
        icon: React.createElement(LuGraduationCap),
        date: "June, 2013 - June, 2015",
    },
    {
        title: "Internship",
        location: "Nextwave Datascience",
        description:
            "Build datascience dashboard using python and mysql. Worked with Andhra Pradesh Govt to find the suspected list of terorrist involved in the bomb blast.",
        icon: React.createElement(LuGraduationCap),
        date: "Nov, 2014 - Nov, 2015",
    },
    {
        title: "Software Engineer",
        location: "Rapido",
        description:
            "Founding Engineer. Build multiple micro-services like Coupons, Referrals, Payments, Redeem, pricing and scaled to millions of users. Improved riders retaintion rate from 15% to 70% and improved ops efficiency. Helped in architecting the system and leading a team.",
        icon: React.createElement(LuGraduationCap),
        date: "Nov, 2015 - July, 2018",
    },
    {
        title: "Senior Software Engineer",
        location: "VOGO",
        description:
            "Helped break down monolithic architecture into microservice architecture. Architected Data pipleine system to handle, process, and analyze 300k/sec IoT data events.",
        icon: React.createElement(LuGraduationCap),
        date: "July, 2018 - Sep, 2019",
    },
    {
        title: "Co-founder and CTO (accquired)",
        location: "Stringz pvt ltd",
        description:
            "A Dating platform which help like minded people to connect and socialise.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Team Lead",
        location: "Bounce",
        description:
            "Launched Truck management system to improve revenue by 100%. Improved engineers productivity by building central caching system.",
        icon: React.createElement(FaReact),
        date: "Oct, 2019 - Feb, 2021",
    },
    {
        title: "Tech Lead",
        location: "Ula",
        description:
            "Mentored and managed multiple pods of 15+ Engineers. Improved cutomer experience by reducing Order API latency by 250%. Re-achitect the core supply chain system. Build In house Warehouse Management System and improved operational efficiency by 50%.",
        icon: React.createElement(FaReact),
        date: "Mar, 2021 - Jan, 2023",
    },
    {
        title: "SDE-3",
        location: "Cashfree Payments",
        description:
            "Improved developer productivity by breaking monolithic service into microservice for global collect domain. Automated manual processes and improved Authentication and logging for the global collect system.",
        icon: React.createElement(FaReact),
        date: "Aug, 2023 - Jan, 2024",
    },
    {
        title: "Freelance",
        location: "NGO",
        description:
            "Build student councelling platform for the underpreviledge students from tier-2 and tier-3 government schools for an non profit organization. Worked as a full stack developer with react for frontend and java for backend.",
        icon: React.createElement(FaReact),
        date: "Jan, 2024 - Present",
    },
] as const;

export const projectsData = [
    {
        title: "CorpComment",
        description:
            "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
        imageUrl: corpcommentImg,
    },
    {
        title: "rmtDev",
        description:
            "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: rmtdevImg,
    },
    {
        title: "Word Analytics",
        description:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: wordanalyticsImg,
    },
] as const;

export const skillsData = [
    "Java",
    "Spring-boot",
    "Python",
    "Golang",
    "MySQL",
    "PostgreSql",
    "MongoDB",
    "Github",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind",
    "FLask",
] as const;