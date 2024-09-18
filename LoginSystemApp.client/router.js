import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: HomePage,
        meta: { requiresAuth: true } 
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    }
];

const router = createRouter({
    history: createWebHistory(), 
    routes,
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('token'); // Check if user is authenticated
    if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
        next('/login'); 
    } else {
        next(); 
    }
});

export default router;
