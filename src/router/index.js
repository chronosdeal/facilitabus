import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/Index.vue'
import Bus_Details from '@/components/bus_details/Bus_Details.vue'
import About from '@/components/about/About.vue'
import Contact from '@/components/contact/Contact.vue'
import Bus from '@/components/bus/Bus.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Index
    },
    {
      path: '/bus',
      name: '',
      component: Bus
    },
    {
      path: '/bus/:name',
      name: 'bus_search',
      component: Bus
    },
    {
      path:'/bus_details/:id',
      name:'bus_single',
      component: Bus_Details
    },
    {
      path:'/about',
      name:'',
      component: About
    },
    {
      path:'/contact',
      name:'',
      component: Contact
    }
  ]
})