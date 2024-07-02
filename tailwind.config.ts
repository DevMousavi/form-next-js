import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    screens: {
        af: "0px",
        as: "300px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1240px",
        "2xl": "1440px",
    },
    theme: {
        container: { center: true },
        extend: {
            colors: {
                primaryColor: "rgb(124, 58, 237)",
            },
        },
    },
    plugins: [],
};
export default config;
