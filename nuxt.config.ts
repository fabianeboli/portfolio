import { theme } from './.nuxt/types/tailwind.config.d';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'slide-right', mode: 'out-in' }
  },
  devtools: { enabled: true },
  modules: ['nuxt-icon', "@nuxt/ui", "@nuxtjs/i18n"],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    config: {
      theme: {
        fontFamily: {
          'sans': ['Lato', 'sans-serif'],
          'serif': ['Montserrat', 'serif'],
        },
        extend: {
          colors: {
            'main': '#212121',
            'secondary': '#424242',
            'tertiary': '#616161',
            'quaternary': '#757575',
          }
        }
      },
    },
  },
  colorMode: {
    preference: "system",
  },
})