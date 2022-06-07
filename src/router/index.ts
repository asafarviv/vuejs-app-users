import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/users/UsersListView.vue')
    },
    {
      path: '/userForm/:id',
      name: 'userForm',
      component: () => import('../views/users/UserForm.vue') 
    }
  ]
})

export default router
