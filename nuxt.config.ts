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
    "nuxt-graphql-client",
    "nuxt-icons",
    "@nuxtjs/google-fonts",
    "nuxt-purgecss",
    "nuxt-security",
    "@nuxtjs/eslint-module",
    // "@nuxtjs/robots",
    // "nuxt-simple-sitemap",
  ],
  security: {
    headers: {
      crossOriginEmbedderPolicy:
        process.env.NODE_ENV === "development" ? "unsafe-none" : "require-corp",
    },
  },
  purgecss: {
    enabled: false, // Always enable purgecss
    safelist: [".nuxt-icon", ".weather-icon"], // Add my-class token to the safelist (e.g. .my-class)
  },
  googleFonts: {
    families: {
      // @ts-ignore
      Inter: { wght: [100 + ".." + 700] },
    },
    display: "swap",
    preload: true,
  },
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
          additionalData: "@use '@/assets/scss/config/_settings.scss' as *;",
        },
      },
    },
  },
  imports: {
    dirs: ["composables/**"],
  },
});
