// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true
  },
  app: {
    pageTransition: { name: 'slide-right', mode: 'out-in' }
  },
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },
  devtools: { enabled: true },
  modules: ['nuxt-icon', "@nuxt/ui", "@nuxtjs/i18n", "nuxt-swiper", 'nuxt-lazy-load', ['nuxt-mail', {
    message: {
      to: process.env.EMAIL_TO,
    },
    smtp: {
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: process.env.SMTP_AUTH_USER,
        pass: process.env.SMTP_AUTH_PASS,
      },
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