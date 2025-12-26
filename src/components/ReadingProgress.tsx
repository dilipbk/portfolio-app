"use client";

import { useEffect, useState, useCallback } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  const calculateProgress = useCallback(() => {
    const content = document.querySelector(".blog-content");
    if (!content) return 0;

    const contentBox = content.getBoundingClientRect();
    const contentTop = contentBox.top + window.scrollY;
    const contentHeight = contentBox.height;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    const readHeight = scrollPosition + windowHeight - contentTop;
    const readPercentage = (readHeight / contentHeight) * 100;
    return Math.min(100, Math.max(0, readPercentage));
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    let lastKnownProgress = 0;

    const updateProgress = () => {
      const currentProgress = calculateProgress();

      // Only update if the progress has changed
      if (currentProgress !== lastKnownProgress) {
        setProgress(currentProgress);
        lastKnownProgress = currentProgress;
      }

      animationFrameId = requestAnimationFrame(updateProgress);
    };

    // Start the animation frame loop
    updateProgress();

    // Clean up
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [calculateProgress]);

  // Calculate the circle's circumference and the progress offset
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="fixed bottom-8 left-8 z-50 group">
      {/* Progress Circle */}
      <div className="relative w-20 h-20 flex items-center justify-center bg-navy-darker rounded-full">
        {/* Background circle */}
        <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 70 70">
          <circle
            cx="35"
            cy="35"
            r={radius}
            fill="none"
            stroke="rgba(35, 53, 84, 0.5)"
            strokeWidth="3"
          />
          {/* Progress circle */}
          <circle
            cx="35"
            cy="35"
            r={radius}
            fill="none"
            stroke="#64ffda"
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{
              transition: "none", // Remove transition to allow for smooth animation
            }}
          />
        </svg>

        {/* Percentage text */}
        <span className="relative text-base font-mono text-green-tint">
          {Math.round(progress)}%
        </span>
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full left-0 mb-2 px-3 py-1.5 bg-navy-darker border border-green-tint/20 rounded text-xs whitespace-nowrap opacity-0 transform translate-y-1 pointer-events-none transition-all group-hover:opacity-100 group-hover:translate-y-0">
        Reading Progress
      </div>
    </div>
  );
}
