import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from './views/Home.vue'
import Feed from './views/Feed.vue'
import Notifications from './views/Notifications.vue'

export default new Router({
    mode: "history",
    base: "perfil",
    routes:[
        { 
            path: '/',
            component: Home       
        },
        {
            path: '/notifications',
            component: Notifications
        },
        {
            path: '/feed',
            component: Feed
        }
    ]
})