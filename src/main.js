// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '@mdi/font/css/materialdesignicons.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { appOptions, router, head, isClient }) {
  // Set default layout as a global component
  const VuetifyOpts = { 
    icons: {
      iconfont: 'mdi', // default - only for display purposes
    },
    global: {
      ripples: false
    },
} //opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify)
  
  appOptions.vuetify = new Vuetify(VuetifyOpts)
  Vue.component('Layout', DefaultLayout)
}
