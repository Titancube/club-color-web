export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Club Color",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
      },
      {
        hid: "description",
        name: "description",
        content: "Club Color"
      },
      {
        hid: "og:description",
        name: "og:description",
        content: "Club Color"
      },
      { hid: "og:title", name: "og:title", content: "Club Color" },
      { hid: "og:type", name: "og:type", content: "website" },
      { hid: "og:url", name: "og:url", content: "https://clubcolor.live" },
      { hid: "og:image", name: "og:image", content: "/banner.jpg" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~plugins/aos", ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "nuxt-typed-vuex"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en"
    }
  },

  tailwindcss: {
    jit: true
  },

  router: {
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 };
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
