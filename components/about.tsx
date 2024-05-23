"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                <span className="font-bold">Hello, I'm Vinit Kantrod</span> I'm a {" "}
                <span className="font-bold">backend engineer</span> with{" "}
                <span className="font-bold">9 years</span> of experience. I enjoy building <span className="italic">distributed systems</span>. My focus is{" "}
                <span className="underline">Java, Python, and Golang</span>.
            </p>
            <p>
                <span className="font-bold">9 years</span> of experience. I enjoy building <span className="italic">distributed systems</span>. My focus is{" "}
                <span className="underline">Java, Python, and Golang</span>.
            </p>

        </motion.section>
    )
}
