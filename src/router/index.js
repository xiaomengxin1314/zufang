import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
import Login from '@/views/Login'
const Home = () => import('@/views/Home')
const LookRoom = () => import('@/views/LookRoom')
const InforMation = () => import('@/views/InforMation')
const My = () => import('@/views/My')
const City = () => import('@/views/City')
const Map = () => import('@/views/Map')
const Rental = () => import('@/views/Rental')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: Home

      },
      { path: 'lookroom', component: LookRoom },
      { path: 'information', component: InforMation },
      { path: 'my', component: My, name: 'my' }
    ]
  },
  { path: '/login', component: Login },
  { path: '/city', component: City },
  { path: '/map', component: Map },
  { path: '/rental', component: Rental }
]

const router = new VueRouter({
  routes
})

export default router
