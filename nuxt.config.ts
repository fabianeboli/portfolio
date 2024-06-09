// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true
  },

  app: {
    pageTransition: { name: 'slide-right', mode: 'out-in' }
  },
  devtools: { enabled: true },
  modules: ['nuxt-icon', "@nuxt/ui", "@nuxtjs/i18n", "nuxt-swiper", ['nuxt-mail', {
    message: {
      to: process.env.EMAIL_TO,
    },
    smtp: {
      host: 'mail.protonmail.ch',
      port: 587,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    },
  }],],
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