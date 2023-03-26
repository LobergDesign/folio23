// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: "da" },
      title: "Nuxt 3",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  // @ts-ignore
  modules: [
    "@nuxtjs/html-validator",
    "nuxt-viewport",
    "nuxt-svgo",
    "nuxt-bugsnag",
    "nuxt-graphql-client",
    "@nuxtjs/robots",
    "nuxt-simple-sitemap",
  ],
  robots: {
    /* module options */
  },
  bugsnag: {
    config: {
      apiKey: "e393f1f2c7de3393da3c6edc10a56ab4",
      enabledReleaseStages: ["production"],
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://example.com",
    },
  },
  "graphql-client": {
    clients: {
      default: {
        host: process.env.HYGRAPH_ENDPOINT as string,
        // Advanced
        token: {
          type: "Bearer",
          name: "Authorization",
          value: process.env.BEARER,
        },
      },
    },
  },
  css: ["~/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "@/assets/scss/config/_vars.scss" as *; @use "@/assets/scss/utils/_mixins.scss" as *;',
        },
      },
    },
  },
});
