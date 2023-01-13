import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login.vue'
const routes = [
    {
        name: 'Home-our',
        component: Home,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'Login-our',
        component: Login,
        path: '/login-our'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes

});

export default router;