// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon', "@nuxt/ui"],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  colorMode: {
    preference: "system",
  },
})