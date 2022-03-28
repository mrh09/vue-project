import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodView from '../views/FoodView.vue'
import FooddetailView from '../views/FooddetailView.vue'
import DrinkView from '../views/DrinkView.vue'
import DrinkdetailView from '../views/DrinkdetailView.vue'
import BasketView from '../views/BasketView.vue'
import EditView from '../views/EditView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/foods',
    name: 'FoodView',
    component: FoodView
  },
  {
    path: '/fooddetail/:id',
    name: 'FooddetailView',
    component: FooddetailView
  },
  {
    path: '/drinks',
    name: 'DrinkView',
    component: DrinkView
  },
  {
    path: '/drinkdetail/:id',
    name: 'DrinkdetailView',
    component: DrinkdetailView
  },
  {
    path: '/basket',
    name: 'BasketView',
    component: BasketView
  },
  {
    path: '/edit/:id',
    name: 'EditView',
    component: EditView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
