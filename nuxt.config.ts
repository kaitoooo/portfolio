import Sass from 'sass';

// env
const environment = process.env.NODE_ENV || 'development';
const envSetting = require(`./env/env.${environment}.ts`).env;

// meta
const title = 'Kaito Takase Portfolio';
const description = 'Portfolio of front-end engineer Kaito Takase.';

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: title,
        htmlAttrs: {
            lang: 'ja',
            prefix: 'og: http://ogp.me/ns#',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: description },
            { hid: 'X-UA-Compatible', 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
            { hid: 'og:url', property: 'og:url', content: envSetting.url },
            { hid: 'og:image', property: 'og:image', content: envSetting.url + '/ogp.png' },
            { hid: 'og:site_name', property: 'og:site_name', content: title },
            { hid: 'og:title', property: 'og:title', content: title },
            { hid: 'og:description', property: 'og:description', content: description },
            { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '' },
            { hid: 'google-site-verification', name: 'google-site-verification', content: '' },
            { property: 'apple-mobile-web-app-title', content: title },
            { property: 'application-name', content: title },
            { property: 'msapplication-TileColor', content: '#2a2a2a' },
            { property: 'theme-color', content: '#2a2a2a' },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { hid: 'canonical', rel: 'canonical', href: envSetting.url },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Suez+One&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+JP&display=swap' },
        ],
    },
    mode: 'universal',
    env: envSetting,
    generate: {
        fallback: true,
    },
    router: {
        base: envSetting.base,
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['ress', '@/assets/styles/style.scss'],
    styleResources: {
        scss: [
            '~/assets/styles/modules/_variables.scss',
            '~/assets/styles/modules/_mq.scss',
            '~/assets/styles/modules/_animation.scss',
            '~/assets/styles/modules/_variables.scss',
            '~/assets/styles/modules/_functions.scss',
            '~/assets/styles/modules/_transition.scss',
            '~/assets/styles/components/index/_swiper.scss',
        ],
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/swiper', mode: 'client' },
        { src: '~/plugins/vue-scrollto', mode: 'client' },
        { src: '~plugins/three.js', mode: 'client' },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: {
        dirs: ['~/components', '~/components/common'],
    },
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxtjs/style-resources'],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ['three'],

        loaders: {
            scss: {
                implementation: Sass,
                // sassOptions: {
                //     fiber: Fiber,
                // },
            },
        },
        babel: {
            presets({ environment }: { environment: any }) {
                return [
                    [
                        require.resolve('@nuxt/babel-preset-app'),
                        {
                            buildTarget: environment ? 'server' : 'client',
                            useBuiltIns: 'usage',
                            corejs: { version: 3.8 },
                        },
                    ],
                ];
            },
        },
        filenames: {
            app: () => (environment !== 'development' ? '[name].[chunkhash:7].js' : '[name].js'),
            chunk: () => (environment !== 'development' ? '[name].[chunkhash:7].js' : '[name].js'),
            css: () => (environment !== 'development' ? '[name].[chunkhash:7].js' : '[name].js'),
            img: () => (environment !== 'development' ? '[path][name].[contenthash:7].[ext]' : '[path][name].[ext]'),
            font: () => (environment !== 'development' ? '[path][name].[contenthash:7].[ext]' : '[path][name].[ext]'),
            video: () => (environment !== 'development' ? '[path][name].[contenthash:7].[ext]' : '[path][name].[ext]'),
        },
        html: {
            minify: {
                collapseBooleanAttributes: true,
                decodeEntities: true,
                minifyCSS: true,
                minifyJS: true,
                processConditionalComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                trimCustomFragments: true,
                useShortDoctype: true,
                removeComments: true,
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true,
            },
        },
    },
};
