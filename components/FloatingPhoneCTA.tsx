"use client";

import { useState, useEffect } from "react";

export default function FloatingPhoneCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        // Show after 1s delay
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`
        fixed bottom-6 left-6 z-50
        transition-all duration-300
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            {/* Tooltip */}
            {showTooltip && (
                <div className="absolute bottom-full left-0 mb-2 px-4 py-2 bg-[#151B2E] text-white text-sm rounded-md whitespace-nowrap shadow-lg">
                    התקשרו אלינו: 03-1234567
                </div>
            )}

            {/* Button - Enhanced Contrast */}
            <a
                href="tel:03-1234567"
                className="
          flex items-center justify-center
          w-14 h-14 bg-[#2E7CC4] text-white rounded-full
          border-2 border-white/20
          hover:bg-[#4A94D9] hover:border-white/30 hover:scale-110
          transition-all duration-200
          shadow-xl shadow-blue-500/20
        "
                aria-label="התקשר לחברה"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="#FFFFFF"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                </svg>
            </a>
        </div>
    );
}
