// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true
  },
  app: {
    pageTransition: { name: 'slide-right', mode: 'out-in' }
  },
  colorMode: {
    classSuffix: '',
    preference: 'system'
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
            'main': {
              light: '#212121',
              DEFAULT: '#212121',
              dark: '#FEFEFE',
            }, 
            'secondary': {
              light: '#424242',
              DEFAULT: '#424242',
              dark: '#ff0',
            },
            'tertiary': {
              light: '#616161',
              DEFAULT: '#616161',
              dark: '#f00',
            },
            'quaternary': {
              light: '#757575',
              DEFAULT: '#757575',
              dark: '#f0f',
            },
          }
        }
      },
    },
  },
})