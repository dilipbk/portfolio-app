import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        // Core navy system (Brittany Chiang inspired)
        "navy-shadow": "rgb(var(--navy-shadow) / <alpha-value>)",
        "navy-darkest": "rgb(var(--navy-darkest) / <alpha-value>)",
        "navy-dark": "rgb(var(--navy-dark) / <alpha-value>)",
        "navy-medium": "rgb(var(--navy-medium) / <alpha-value>)",
        "navy-light": "rgb(var(--navy-light) / <alpha-value>)",
        "navy-lightest": "rgb(var(--navy-lightest) / <alpha-value>)",

        // Text hierarchy
        "text-slate": "rgb(var(--text-slate) / <alpha-value>)",
        "text-light-slate": "rgb(var(--text-light-slate) / <alpha-value>)",
        "text-lightest-slate":
          "rgb(var(--text-lightest-slate) / <alpha-value>)",
        "text-white": "rgb(var(--text-white) / <alpha-value>)",

        // Teal accent system
        "green-tint": "rgb(var(--green-tint) / <alpha-value>)",
        "green-bright": "rgb(var(--green-bright) / <alpha-value>)",

        // Background system
        "bg-navy-shadow": "rgb(var(--bg-navy-shadow) / <alpha-value>)",
        "bg-navy": "rgb(var(--bg-navy) / <alpha-value>)",
        "bg-light-navy": "rgb(var(--bg-light-navy) / <alpha-value>)",
        "bg-lightest-navy": "rgb(var(--bg-lightest-navy) / <alpha-value>)",

        // Legacy mappings for compatibility
        border: "rgb(var(--navy-medium) / <alpha-value>)",
        input: "rgb(var(--navy-medium) / <alpha-value>)",
        ring: "rgb(var(--navy-light) / <alpha-value>)",
        background: {
          DEFAULT: "rgb(var(--bg-navy) / <alpha-value>)",
          primary: "rgb(var(--bg-navy) / <alpha-value>)",
          secondary: "rgb(var(--bg-light-navy) / <alpha-value>)",
          tertiary: "rgb(var(--bg-lightest-navy) / <alpha-value>)",
        },
        foreground: "rgb(var(--text-lightest-slate) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--navy-light) / <alpha-value>)",
          50: "rgba(var(--navy-light), 0.05)",
          100: "rgba(var(--navy-light), 0.1)",
          200: "rgba(var(--navy-light), 0.2)",
          300: "rgba(var(--navy-light), 0.3)",
          400: "rgba(var(--navy-light), 0.4)",
          500: "rgb(var(--navy-light) / <alpha-value>)",
          600: "rgba(var(--navy-light), 0.8)",
          700: "rgba(var(--navy-light), 0.7)",
          800: "rgba(var(--navy-light), 0.6)",
          900: "rgba(var(--navy-light), 0.5)",
        },
      },

      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        display: ["var(--font-display)"],
      },

      fontSize: {
        giant: ["clamp(40px, 8vw, 80px)", { lineHeight: "1.1" }],
        big: ["clamp(26px, 5vw, 50px)", { lineHeight: "1.1" }],
        medium: ["clamp(22px, 4vw, 28px)", { lineHeight: "1.25" }],
        small: ["clamp(16px, 3vw, 20px)", { lineHeight: "1.1" }],
        "body-big": ["20px", { lineHeight: "1.4" }],
        "body-normal": ["18px", { lineHeight: "1.6" }],
        "body-small": ["16px", { lineHeight: "1.5" }],
        mono: ["14px", { lineHeight: "1" }],
      },

      spacing: {
        "nav-height": "var(--nav-height)",
        "nav-scroll-height": "var(--nav-scroll-height)",
        "tab-height": "var(--tab-height)",
        "tab-width": "var(--tab-width)",
      },

      borderRadius: {
        DEFAULT: "var(--border-radius)",
      },

      boxShadow: {
        "key-light": "var(--shadow-key-light)",
        ambient: "var(--shadow-ambient)",
        "glow-teal": "var(--shadow-glow-teal)",
        "glow-strong": "var(--shadow-glow-strong)",
        "outline-button": "4px 4px 0 0 rgb(var(--navy-light))",
      },

      animation: {
        fadeInUp: "fadeInUp 0.6s var(--easing-out-expo) both",
        fadeIn: "fadeIn 0.6s var(--easing-out-expo) both",
        slideInLeft: "slideInLeft 0.6s var(--easing-out-expo) both",
        slideInRight: "slideInRight 0.6s var(--easing-out-expo) both",
        slideInDown: "slideInDown 0.6s var(--easing-out-expo) both",
        "pulse-glow": "pulse-glow 2s infinite",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        fadeInDelay: "fadeInDelay 0.6s var(--easing-out-expo) both",
        "gradient-x": "gradient-x 3s ease infinite",
        particle: "particle 1.5s ease-in-out infinite",
        beam: "beam 2s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        ping: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
        energyBeam: "energyBeam 2s ease-in-out infinite",
      },

      keyframes: {
        fadeInUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideInLeft: {
          from: {
            transform: "translateX(-100px)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0px)",
            opacity: "1",
          },
        },
        slideInRight: {
          from: {
            transform: "translateX(100px)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0px)",
            opacity: "1",
          },
        },
        slideInDown: {
          from: {
            transform: "translateY(-100px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0px)",
            opacity: "1",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 5px rgba(var(--navy-light), 0.4)",
          },
          "50%": {
            boxShadow:
              "0 0 20px rgba(var(--navy-light), 0.6), 0 0 30px rgba(var(--navy-light), 0.4)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(-50%) translateX(0)",
            opacity: "0",
          },
          "50%": {
            transform: "translateY(-50%) translateX(10px)",
            opacity: "1",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-468px 0" },
          "100%": { backgroundPosition: "468px 0" },
        },
        fadeInDelay: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        particle: {
          "0%, 100%": {
            opacity: "0",
            transform: "scale(0.5)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        beam: {
          "0%": { transform: "translateX(-100%) skewX(-12deg)" },
          "100%": { transform: "translateX(100%) skewX(-12deg)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        ping: {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
        energyBeam: {
          "0%": {
            opacity: "0",
            transform: "scaleX(0.3) translateX(-10px)",
          },
          "50%": {
            opacity: "1",
            transform: "scaleX(1) translateX(0)",
          },
          "100%": {
            opacity: "0",
            transform: "scaleX(0.3) translateX(10px)",
          },
        },
      },

      transitionTimingFunction: {
        standard: "var(--easing-standard)",
        "in-out-quart": "var(--easing-in-out-quart)",
        "out-expo": "var(--easing-out-expo)",
        "bounce-custom": "var(--easing-bounce)",
      },

      transitionDuration: {
        "250": "250ms",
        "350": "350ms",
      },

      backdropBlur: {
        navy: "10px",
      },

      zIndex: {
        dropdown: "1000",
        sticky: "1020",
        fixed: "1030",
        "modal-backdrop": "1040",
        modal: "1050",
        popover: "1060",
        tooltip: "1070",
      },

      screens: {
        xs: "480px",
        tall: { raw: "(min-height: 800px)" },
      },

      gridTemplateColumns: {
        "12-auto": "repeat(12, 1fr)",
      },

      aspectRatio: {
        project: "16 / 10",
      },
    },
  },
  plugins: [typography],
};

export default config;
