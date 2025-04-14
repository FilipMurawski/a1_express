"use client";

import { useState, useEffect } from "react";

const BackToTop = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScroll(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="fixed bottom-8 right-8 transition-opacity duration-300 z-[30] "
            style={{ opacity: scroll > 20 ? 1 : 0, pointerEvents: scroll > 20 ? "auto" : "none" }}
        >
            <button
                type="button"
                aria-label="Back to top"
                title="Back to top"
                className="font-medium text-center text-[var(--primary-text-color)] hover:text-[var(--buton-hover-color)] transition-colors duration-300 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                style={{
                    background: "linear-gradient(to bottom, var(--primary-color), var(--primary-color-dark))",
                }            
                }
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                    ></path>
                </svg>
            </button>
        </div>
    );
};

export { BackToTop };
