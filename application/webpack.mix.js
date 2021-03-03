const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

require("./mix-plugins/vuetify");

// require("vuetifyjs-mix-extension");

// https://blog.pusher.com/web-application-laravel-vue-part-4/
// https://medium.com/@andylauszp/how-to-setup-laravel-with-vuetify-using-laravel-mix-90414f462efa

mix
  .js("resources/js/app.js", "public/js")
  .thevuetifyplugin()
  .vue()
  .sass("resources/sass/app.scss", "public/css");
