"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${480 - i * 6 * position} -${240 + i * 8}C-${
            480 - i * 6 * position
        } -${240 + i * 8} -${320 - i * 6 * position} ${260 - i * 8} ${
            180 - i * 6 * position
        } ${420 - i * 8}C${720 - i * 6 * position} ${580 - i * 8} ${
            820 - i * 6 * position
        } ${920 - i * 8} ${820 - i * 6 * position} ${920 - i * 8}`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg
                className="w-full h-full text-primary/15 dark:text-primary/25"
                viewBox="0 0 1400 800"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.025}
                        initial={{ pathLength: 0.3, opacity: 0.5 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 15,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function AnimatedBlogTitle({
    title = "Blog & Conseils ClimGO",
    children,
}: {
    title?: string;
    children?: React.ReactNode;
}) {
    const words = title.split(" ");

    return (
        <div className="relative w-full">
            <div className="absolute inset-0 opacity-80 w-full h-full">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
                <FloatingPaths position={0.5} />
            </div>

            <div className="relative z-10 text-center w-full max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="mb-6"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-4">
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-3 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 50, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay:
                                                wordIndex * 0.08 +
                                                letterIndex * 0.02,
                                            type: "spring",
                                            stiffness: 120,
                                            damping: 20,
                                        }}
                                        className="inline-block text-transparent bg-clip-text 
                                        bg-gradient-to-r from-foreground to-foreground/80"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>
                    
                                                <motion.span 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2, duration: 0.8 }}
                                className="block text-primary font-medium text-4xl sm:text-5xl lg:text-6xl mb-4"
                            >
                        ClimGO
                    </motion.span>

                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.6, duration: 0.8 }}
                        className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6"
                    >
                        Découvrez nos conseils d'experts, actualités et guides complets sur le chauffage, 
                        la climatisation et la maintenance de vos systèmes énergétiques.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.8 }}
                >
                    {children}
                </motion.div>
            </div>
        </div>
    );
}
