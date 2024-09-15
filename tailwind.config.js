/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                "inner-bold": "0 0 0 3px red",
            },
        },
    },
    plugins: [],
};
