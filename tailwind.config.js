/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,ts,tsx}'],
    theme: {
        extend: {},
        colors: {
            'headerTertiary': '#165081',
            'eventDescription': '#5e5e5e',
            'orange': '#e03400',
            'custom-white': '#FFF',
            'light-blue': '#E0FFFF',
            'blue': '#87CEEB',
            'custom-grey': '#696969',
            'orange-light': '#FFEBCD',
            'orange-md': '#FFDEAD',
            'dark-blue': '#191970',
            'blue-md': '#6495ED',
            'black': '#000',
            'red': '#FF0000'
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
