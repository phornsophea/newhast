import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
// Add FontAwesomeIcon
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

library.add(fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('VueSlickCarousel', VueSlickCarousel)

Vue.config.productionTip = false
// Add bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import VueLazyImage from "vue-lazy-images";
Vue.use(VueLazyImage)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
