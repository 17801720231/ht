import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect:{ name:'logion'},
    children:[
      {
        path:"",
        component: () => import('../views/home/Home1.vue')
      },
      {
        path:"2-2",
        meta:['导航一','home2'],
        component: () => import('../views/home/Home2.vue')
      },
      {
        path:"2-3",
        meta:['导航一','home3'],
        component: () => import('../views/home/Home3.vue')
      },
      {
        path:"2-4",
        meta:['导航一','home4'],
        component: () => import('../views/home/Home4.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:"/logion",
    name:'logion',
    component: () => import(/* webpackChunkName: "about" */ '../views/Logion.vue')
  },
  {
    path:"/houtai",
    // name:'houtai',
    component: () => import(/* webpackChunkName: "about" */ '../views/HoutAi.vue'),
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach(function(to,from,next){
  console.log(to,from)
  if(to.name == 'logion'){
    next()
  }else{
    let token = localStorage.getItem('token')
    if(!token){
      next({path:'/'})
    }
    if(token){
      next()
    }
  }
  
})

export default router
