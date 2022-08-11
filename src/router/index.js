import { createRouter, createWebHistory } from 'vue-router'
import SplashScreenView from '../views/SplashScreenView.vue';
import HomeScreenView from '../views/HomeScreenView.vue';
import ProductDetailView from '../views/ProductDetailView.vue';
import CheckoutView from '../views/CheckoutView.vue';
import OrderAcceptedView from '../views/OrderAcceptedView.vue';
import MyCartView from '../views/MyCartView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'splash',
      component: SplashScreenView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeScreenView
    },
    {
      path: '/product-detail',
      name: 'product-detail',
      component: ProductDetailView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView
    },
    {
      path: '/order-accepted',
      name: 'order-accepted',
      component: OrderAcceptedView
    },
    {
      path: '/my-cart',
      name: 'my-cart',
      component: MyCartView
    }
    ]
})

export default router
