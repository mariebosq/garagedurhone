const Encore = require('@symfony/webpack-encore');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry('app', './assets/app.js')
    .addEntry('jquery', './assets/js/jquery.min.js')
    .addEntry('popper', './assets/plugins/bootstrap/js/popper.min.js')
    .addEntry('bootstrap', './assets/plugins/bootstrap/js/bootstrap.min.js')
    .addEntry('select', './assets/plugins/bootstrap-select/bootstrap-select.min.js')
    .addEntry('touch', './assets/plugins/bootstrap-touchspin/jquery.bootstrap-touchspin.js')
    .addEntry('popup', './assets/plugins/magnific-popup/magnific-popup.js')
    .addEntry('waypoints', "./assets/plugins/counter/waypoints-min.js")
    .addEntry('counterup', './assets/plugins/counter/counterup.min.js')
    .addEntry('imagesloaded', './assets/plugins/imagesloaded/imagesloaded.js')
    .addEntry('masonry', './assets/plugins/masonry/masonry-3.1.4.js')
    .addEntry('filter', "./assets/plugins/masonry/masonry.filter.js")
    .addEntry('carousel', './assets/plugins/owl-carousel/owl.carousel.js')
    .addEntry('custom', './assets/js/custom.min.js')
    .addEntry('dz', './assets/js/dz.carousel.min.js')

    .addEntry('lightall', './assets/plugins/lightgallery/js/lightgallery-all.js')
    .addEntry('ajax', './assets/js/dz.ajax.js')
    .addEntry('tools', './assets/plugins/revolution/js/jquery.themepunch.tools.min.js')
    .addEntry('revolution', './assets/plugins/revolution/js/jquery.themepunch.revolution.min.js')
    .addEntry('action', './assets/plugins/revolution/js/extensions/revolution.extension.actions.min.js')
    .addEntry('extension', './assets/plugins/revolution/js/extensions/revolution.extension.carousel.min.js')
    .addEntry('kenburn', './assets/plugins/revolution/js/extensions/revolution.extension.kenburn.min.js')
    //.addEntry('layer', './asset/plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js')
    .addEntry('migration', './assets/plugins/revolution/js/extensions/revolution.extension.migration.min.js')
    .addEntry('navigation', './assets/plugins/revolution/js/extensions/revolution.extension.navigation.min.js')
    .addEntry('parallax', './assets/plugins/revolution/js/extensions/revolution.extension.parallax.min.js')
    .addEntry('slideanim', './assets/plugins/revolution/js/extensions/revolution.extension.slideanims.min.js')
    .addEntry('video', './assets/plugins/revolution/js/extensions/revolution.extension.video.min.js')
    .addEntry('slider', './assets/js/rev.slider.js')
    
    // enables the Symfony UX Stimulus bridge (used in assets/bootstrap.js)
    .enableStimulusBridge('./assets/controllers.json')

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    .configureBabel((config) => {
        config.plugins.push('@babel/plugin-proposal-class-properties');
    })

    // enables @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })

    // enables Sass/SCSS support
    //.enableSassLoader()

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment if you use React
    //.enableReactPreset()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    //.enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
