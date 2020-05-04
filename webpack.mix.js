const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.js('resources/js/app.js', 'public/assets/js')
    .extract()
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('tailwind.config.js')],
    })
    .sass('resources/scss/app.scss', 'public/assets/css')
    .version()
    .webpackConfig({devtool: "inline-source-map"});
