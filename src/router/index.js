import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import UserPage from '../pages/UserPage.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/user/:id', name: 'UserPage', component: UserPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
