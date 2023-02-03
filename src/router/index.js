import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import Voice from '@/views/Voice.vue'
import Instructor from '@/views/Instructor.vue'
import Price from '@/views/price.vue'
import Diet from '@/views/Diet.vue'
import Personal from '@/views/lesson-personal.vue'
import Group_Lesson from '@/views/group-lesson.vue'
import contact from '@/views/contact.vue'
import NotFound from '@/components/NotFound.vue'

Vue.use(VueRouter)
const router = new VueRouter({
mode: 'hash',
routes : [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      auth: false,
    }
  },{
    path: '/voice',
    name: 'Voice',
    component: Voice,
    meta: {
      auth: false,
    }
  },{
    path: '/instructor',
    name: 'Instructor',
    component: Instructor,
    meta: {
      auth: false,
    }
  },{
    path: '/price',
    name: 'Price',
    component: Price,
    meta: {
      auth: false,
    }
  },{
    path: '/lesson-diet',
    name: 'Diet',
    component: Diet,
    meta: {
      auth: false,
    }
  },{
    path: '/lesson-personal',
    name: 'Personal',
    component: Personal,
    meta: {
      auth: false,
    }
  },{
    path: '/group-lesson',
    name: 'Group_Lesson',
    component: Group_Lesson,
    meta: {
      auth: false,
    }
  },{
    path: '/contact',
    name: 'contact',
    component: contact,
    meta: {
      auth: false,
    }
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }

],
scrollBehavior() {
  return {x: 0, y: 0}
}
  // mode: 'hash',
  // mode: 'history',
  // routes
})

export default router
