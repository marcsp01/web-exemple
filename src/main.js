import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import Home from "./views/home.vue"
import Cuina from "./views/cuina.vue"
import Menu from "./views/menu.vue"
import Empreses from "./views/empreses.vue"
import Cookies from "./views/cookies.vue"



import CA from './locale/ca.json'
import ES from './locale/es.json'
import EN from './locale/en.json'
import FR from './locale/fr.json'




const routes =[
  {path: '/', component: Home},
  {path: '/cuina', component: Cuina},
  {path: '/menu', component: Menu},
  {path: '/empreses', component: Empreses},
  {path: '/cookies', component: Cookies},



  

];
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
let language = document.cookie.split('=')[1];
if (!language) {
  language = 'CA'
  document.cookie='lan=CA'
}
const i18n = createI18n({
    locale: language,
    messages: {
        CA: CA,
        ES: ES,
        EN: EN,
        FR: FR,

    }
  })



  const app = createApp(App)
  app.use(router)
  app.use(i18n)
  app.mount('#app')
