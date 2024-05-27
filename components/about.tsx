"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
        const { ref } = useSectionInView("About");

        return (
                <motion.section
                        ref={ref}
                        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.175 }}
                        id="about"
                >
                        <SectionHeading>About me</SectionHeading>
                        <p className="mb-3">
                                After graduating with a M.Tech degree in{" "}
                                <span className="font-medium">Computer Science, specialization in Cloud Computing</span>, I joined multiple startups like{" "}
                                <span className="font-medium">Rapido, Vogo, Bounce, and Ula</span> and helped them build their core product from scratch.
                                <span className="italic">My favorite part of programming</span> is the
                                problem-solving aspect. I <span className="underline">love</span> the
                                feeling of finally figuring out a solution to a problem. My core stack is{" "}
                                <span className="font-medium">Java, Spring-boot, Python, and mysql, nosql.</span>
                                . I am also familiar with Javascript, React, and golang. I am always looking to
                                learn new technologies. I am currently looking for a{" "}
                                <span className="font-medium">full-time position</span> as a staff software
                                engineer.</p><p>
                                <span className="italic">When I'm not coding</span>, I enjoy playing
                                playing sports like badminton, cricket, football, table tennis, reading books, and  watching movies. I also enjoy{" "}
                                <span className="font-medium">learning new things</span>. I have an interest to learn an instrument{" "}
                                and sing in an auditorium.</p>
                </motion.section>
        );
}