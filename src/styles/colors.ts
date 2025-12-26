export const colors = {
  light: {
    // Primary colors - Vibrant yet sophisticated teal
    primary: {
      50: "#E6FFFA",
      100: "#B2F5EA",
      200: "#81E6D9",
      300: "#4FD1C5",
      400: "#38B2AC",
      500: "#319795",
      600: "#2C7A7B",
      700: "#285E61",
      800: "#234E52",
      900: "#1D4044",
    },
    // Accent - Warm coral that complements teal
    accent: {
      50: "#FFF5F5",
      100: "#FED7D7",
      200: "#FEB2B2",
      300: "#FC8181",
      400: "#F56565",
      500: "#E53E3E",
      600: "#C53030",
      700: "#9B2C2C",
      800: "#822727",
      900: "#63171B",
    },
    // Background colors
    background: {
      primary: "#FFFFFF",
      secondary: "#F7FAFC",
      tertiary: "#EDF2F7",
    },
    // Text colors
    text: {
      primary: "#1A202C",
      secondary: "#4A5568",
      tertiary: "#718096",
    },
    // Border colors
    border: {
      light: "#E2E8F0",
      medium: "#CBD5E0",
      heavy: "#A0AEC0",
    },
  },
  dark: {
    // Primary colors - Deep space teal
    primary: {
      50: "#1A2C35",
      100: "#203744",
      200: "#254254",
      300: "#2B4D64",
      400: "#315873",
      500: "#366382",
      600: "#3C6E92",
      700: "#4179A1",
      800: "#4684B0",
      900: "#4B8FBF",
    },
    // Accent - Aurora pink
    accent: {
      50: "#2D1B2D",
      100: "#3D2438",
      200: "#4D2D44",
      300: "#5D364F",
      400: "#6D3F5A",
      500: "#7D4866",
      600: "#8D5171",
      700: "#9D5A7C",
      800: "#AD6387",
      900: "#BD6C92",
    },
    // Background colors
    background: {
      primary: "#0A0F16",
      secondary: "#111827",
      tertiary: "#1F2937",
    },
    // Text colors
    text: {
      primary: "#F7FAFC",
      secondary: "#E2E8F0",
      tertiary: "#CBD5E0",
    },
    // Border colors
    border: {
      light: "#374151",
      medium: "#4B5563",
      heavy: "#6B7280",
    },
  },
} as const;

// Semantic color tokens
export const tokens = {
  light: {
    background: "var(--background-primary)",
    foreground: "var(--text-primary)",
    card: "var(--background-secondary)",
    cardForeground: "var(--text-primary)",
    popover: "var(--background-primary)",
    popoverForeground: "var(--text-primary)",
    primary: "var(--primary-500)",
    primaryForeground: "var(--background-primary)",
    secondary: "var(--background-secondary)",
    secondaryForeground: "var(--text-primary)",
    muted: "var(--background-tertiary)",
    mutedForeground: "var(--text-tertiary)",
    accent: "var(--accent-500)",
    accentForeground: "var(--background-primary)",
    destructive: "var(--accent-600)",
    destructiveForeground: "var(--background-primary)",
    border: "var(--border-light)",
    input: "var(--border-medium)",
    ring: "var(--primary-500)",
  },
  dark: {
    background: "var(--background-primary)",
    foreground: "var(--text-primary)",
    card: "var(--background-secondary)",
    cardForeground: "var(--text-primary)",
    popover: "var(--background-primary)",
    popoverForeground: "var(--text-primary)",
    primary: "var(--primary-500)",
    primaryForeground: "var(--text-primary)",
    secondary: "var(--background-secondary)",
    secondaryForeground: "var(--text-primary)",
    muted: "var(--background-tertiary)",
    mutedForeground: "var(--text-tertiary)",
    accent: "var(--accent-500)",
    accentForeground: "var(--text-primary)",
    destructive: "var(--accent-600)",
    destructiveForeground: "var(--text-primary)",
    border: "var(--border-light)",
    input: "var(--border-medium)",
    ring: "var(--primary-500)",
  },
} as const;
