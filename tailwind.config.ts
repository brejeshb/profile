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
        // Your updated custom colors
        main: "#a388ee", // Purple color
        overlay: "rgba(0,0,0,0.8)", // background color overlay for alert dialogs, modals, etc.

        // Light mode
        bg: "#e3dff2", // Light purple background
        text: "#000", // Text color
        border: "#000", // Border color

        // Dark mode
        darkBg: "#272733", // Dark background
        darkText: "#eeefe9", // Light text for dark mode
        darkBorder: "#000", // Dark mode border color
        secondaryBlack: "#212121", // Darker alternative to pure black

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
        light: "4px 4px 0px 0px #000", // Your custom boxShadow
        dark: "4px 4px 0px 0px #000",
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
		// Adding grid pattern with lighter purple lines for neobrutalism effect
		'grid-pattern': 'linear-gradient(90deg, #a388ee 1px, transparent 1px), linear-gradient(180deg, #a388ee 1px, transparent 1px)',
	  },
	  backgroundSize: {
		'grid-pattern': '20px 20px', // Grid spacing
	  },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
