// https://blog.pusher.com/web-application-laravel-vue-part-4/

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './views/App'
import welcome from './views/welcome'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: welcome
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});