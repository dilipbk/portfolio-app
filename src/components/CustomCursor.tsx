"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Fast responsive spring animation for dot
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Slightly delayed ring - less delay for better UX
  const ringSpringConfig = { damping: 30, stiffness: 250 };
  const ringXSpring = useSpring(cursorX, ringSpringConfig);
  const ringYSpring = useSpring(cursorY, ringSpringConfig);

  const rafRef = useRef<number | undefined>(undefined);

  const moveCursor = useCallback(
    (e: MouseEvent) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      });
    },
    [cursorX, cursorY]
  );

  const handleMouseEnter = useCallback(() => setIsVisible(true), []);
  const handleMouseLeave = useCallback(() => setIsVisible(false), []);

  const handleMouseDown = useCallback(() => setIsClicking(true), []);
  const handleMouseUp = useCallback(() => setIsClicking(false), []);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isClickable =
      target.matches('a, button, [role="button"], input, textarea, select') ||
      target.closest('a, button, [role="button"], input, textarea, select');

    // Add a small delay to match the visual cursor position better
    if (isClickable) {
      setTimeout(() => setIsPointer(true), 30);
    } else {
      setIsPointer(false);
    }
  }, []);

  const handleMouseOut = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isClickable =
      target.matches('a, button, [role="button"], input, textarea, select') ||
      target.closest('a, button, [role="button"], input, textarea, select');

    // Immediately reset when leaving clickable elements
    if (isClickable) {
      setIsPointer(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [
    moveCursor,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseDown,
    handleMouseUp,
    handleMouseOver,
    handleMouseOut,
  ]);

  // Initialize cursor after component mounts (fixes hydration and refresh issues)
  useEffect(() => {
    setIsMounted(true);

    // Check if it's a mobile device
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
      document.body.classList.add("custom-cursor-enabled");
      // Set cursor as visible immediately on desktop
      setIsVisible(true);

      // Initialize cursor position to current mouse position if available
      const initializeCursor = (e: MouseEvent) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        document.removeEventListener("mousemove", initializeCursor);
      };

      // Get initial position
      document.addEventListener("mousemove", initializeCursor);

      // Fallback: if no mouse movement, set to center
      setTimeout(() => {
        document.removeEventListener("mousemove", initializeCursor);
      }, 100);
    }

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
    };
  }, [cursorX, cursorY]);

  // Handle responsive behavior and maintain cursor state
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        setIsVisible(false);
        document.body.classList.remove("custom-cursor-enabled");
      } else if (isMounted) {
        document.body.classList.add("custom-cursor-enabled");
        setIsVisible(true);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMounted]);

  // Don't render during SSR or if not mounted
  if (!isMounted || !isVisible) return null;

  return (
    <>
      {/* Main cursor dot - Visible and responsive */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          mixBlendMode: "difference",
        }}
        animate={{
          scale: isClicking ? 0.8 : isPointer ? 1.2 : 1,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
        }}
      >
        <div
          className={`w-2 h-2 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ${
            isPointer ? "bg-green-tint" : "bg-white"
          }`}
        />
      </motion.div>

      {/* Outer ring - Clear visual feedback */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: ringXSpring,
          y: ringYSpring,
        }}
        animate={{
          scale: isClicking ? 1.4 : isPointer ? 1.6 : 1,
          opacity: isPointer ? 0.9 : 0.5,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 30,
        }}
      >
        <div
          className={`w-7 h-7 rounded-full border transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ${
            isPointer
              ? "border-green-tint border-2"
              : "border-white/70 border-1"
          }`}
        />
      </motion.div>

      {/* Click ripple effect */}
      {isClicking && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9997]"
          style={{
            x: ringXSpring,
            y: ringYSpring,
          }}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-8 h-8 rounded-full border-2 border-green-tint transform -translate-x-1/2 -translate-y-1/2" />
        </motion.div>
      )}
    </>
  );
}
