import Vue from 'vue'
import VueRouter from 'vue-router'

// https://blog.pusher.com/web-application-laravel-vue-part-4/
// https://medium.com/@andylauszp/how-to-setup-laravel-with-vuetify-using-laravel-mix-90414f462efa

Vue.use(VueRouter)

import App from './views/App'
import vuetify from './plugins/vuetify' // path to vuetify export

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
    vuetify
}).$mount('#app');