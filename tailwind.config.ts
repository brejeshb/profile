import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // New white/beige color palette
        white: {
          50: "#f8f8f7",  // Lightest
          100: "#f2f0ef",
          200: "#ebe9e6",
          300: "#e5e2de", // Current bg color
          400: "#dfdbd6",
          500: "#d8d4ce",
          600: "#d2cdc6",
          700: "#ccc6bf",
          800: "#c5bfb7",
          900: "#bfb8af",  // Darkest
        },
        
        // Your main colors updated to use the new palette
        main: "#c5bfb7", // Changed from purple to a beige tone
        overlay: "rgba(0,0,0,0.6)", // Slightly lighter overlay for a softer feel
        
        // Light mode - using your new white palette
        bg: "#e5e2de", // Keeping your current off-white
        text: "#bfb8af", // Using the darkest tone for text
        border: "#ccc6bf", // Medium-dark tone for borders
        
        // Dark mode - using inverted tones from your palette
        darkBg: "#bfb8af", // Using darkest tone as dark mode background
        darkText: "#f8f8f7", // Using lightest tone for dark mode text
        darkBorder: "#c5bfb7", // Dark mode border color
        secondaryBlack: "#d2cdc6", // Replacing with a medium shade
        
        // Existing colors (from the original config)
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        base: "5px", // Your custom borderRadius
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        light: "4px 4px 0px 0px #484747", // Updated with medium-dark tone
        // dark: "4px 4px 0px 0px #bfb8af", // Updated with darkest tone
      },
      translate: {
        boxShadowX: "4px", // Your custom translate
        boxShadowY: "4px",
        reverseBoxShadowX: "-4px",
        reverseBoxShadowY: "-4px",
      },
      fontWeight: {
        base: "500", // Your custom fontWeight
        heading: "700",
      },
      backgroundImage: {
        // Updating grid pattern with new color
        'grid-pattern': 'linear-gradient(90deg, #d2cdc6 1px, transparent 1px), linear-gradient(180deg, #d2cdc6 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-pattern': '20px 20px', // Grid spacing
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;