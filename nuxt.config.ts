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
    "nuxt-viewport",
    "nuxt-svgo",
    "nuxt-graphql-client",
    // "@nuxtjs/robots",
    // "nuxt-simple-sitemap",
  ],

  // robots: {
  //   /* module options */
  // },
  // sitemap: {
  //   /* module options */
  // },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://example.com",
    },
  },

  routeRules: {
    // Render these routes with SPA
    "/admin/**": { ssr: false },
    "/": { prerender: true },
    "/about": { prerender: true },
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
  imports: {
    dirs: ["composables/**"],
  },
});
