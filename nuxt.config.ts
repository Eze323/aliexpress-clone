// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  pages:true,
  modules:[
    '@nuxt/icon',
    'nuxt-lodash',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia-plugin-persistedstate/nuxt',
   // '@nuxtjs/supabase',
  ],
  runtimeConfig:{
    public: {
      stripePK:process.env.STRIPE_PK_KEY
    }
  },
  app:{
    head:{
      script:[
        {src:'https://js.stripe.com/v3/', defer:true}
      ]
    }
  }
})