/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,ts,tsx}'],
    theme: {
        extend: {},
        colors: {
            'headerTertiary': '#165081',
            'eventDescription': '#5e5e5e',
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.no-scrollbar': {
                    '-ms-overflow-style': 'none',
                    'scrollbar-width': 'none',
                },
                '.no-scrollbar::-webkit-scrollbar': {
                    display: 'none',
                },
            });
        },
    ],
};
