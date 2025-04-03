"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function ScrollLinked() {
    const containerRef = useRef<HTMLElement | null>(null);
    const { scrollYProgress } = useScroll({
        container: containerRef,
    });

    return (
        <>
            <motion.div
                id="scroll-indicator"
                className="fixed top-0 left-0 right-0 h-[4px] bg-pink-500 origin-left"
                style={{ scaleX: scrollYProgress, zIndex: 50 }}
            />
            <main ref={containerRef} className="min-h-screen">
            </main>
        </>
    );
}
