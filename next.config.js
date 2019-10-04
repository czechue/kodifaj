// next.config.js
const withCSS = require('@zeit/next-css');

// workaround for fixing bug https://github.com/zeit/next-plugins/issues/541

function HACK_removeMinimizeOptionFromCssLoaders(config) {
    console.warn(
        'HACK: Removing `minimize` option from `css-loader` entries in Webpack config',
    );
    config.module.rules.forEach(rule => {
        if (Array.isArray(rule.use)) {
            rule.use.forEach(u => {
                if (u.loader === 'css-loader' && u.options) {
                    delete u.options.minimize;
                }
            });
        }
    });
}

module.exports = withCSS({
    webpack(config) {
        HACK_removeMinimizeOptionFromCssLoaders(config);
        return config;
    },
});
