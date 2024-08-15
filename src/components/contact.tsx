"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { Reveal } from "./custom/reveal";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
    <LampContainer>
    <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl" id="contact">
                Get In Touch
            </h2>
            <Reveal
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
            >
                <p className="leading-7">
                    If you'd like to get in touch with me, feel free to reach out on LinkedIn or my email and I'll get back to you whenever I can.
                </p>
            </Reveal>
            <div className="flex gap-4">
                <Reveal
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 } }}
                >
                    <Link href="mailto:nikhil.453.123@gmail.com" target="_blank">
                        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            Say Hi!
                        </button>
                    </Link>
                </Reveal>
            </div>
    </LampContainer>
  
    </div>
  );
}
