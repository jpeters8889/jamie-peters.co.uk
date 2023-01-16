const defaultTheme = require('tailwindcss/defaultTheme');
const theme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './storage/framework/views/*.php',
        './resources/js/**/*.vue',
    ],

    safelist: ['float-right', 'float-left'],

    theme: {
        screens: {
            xs: '450px',
            sm: '600px',
            lg: '900px',
            xl: '1030px',
        },

        extend: {
            colors: {
                primary: '#1f4e79',
            },

            maxWidth: {
                wrapper: '1200px'
            },

            fontFamily: {
                sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
                serif: ['Rock Salt', ...defaultTheme.fontFamily.serif],
            },

            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        a: {
                            color: theme('colors.primary'),
                            textDecoration: 'none',
                            '&:hover': {
                                color: theme('colors.black'),
                            }
                        }
                    }
                }
            }),
        }
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
