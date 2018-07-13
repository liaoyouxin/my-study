import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index'
import Details from '../page/details'
import car from '../page/detail/car'
import loud from '../page/detail/loud'
import earth from '../page/detail/earth'
import mounter from '../page/detail/mounter'
import orderlist from '../page/order'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
        path:'/orderlist',
        component:orderlist
    },
    {
    	path:'/details',
    	name:'details',
    	component:Details,
    	redirect:'/details/car',
    	children:[
    	  {
    	  	path:'car',
    	  	component:car
    	  },
    	  {
    	  	path:'loud',
    	  	component:loud
    	  },
    	  {
    	  	path:'earth',
    	  	component:earth
    	  },
    	  {
    	  	path:'mounter',
    	  	component:mounter
    	  }
    	]
    }
  ]
})
