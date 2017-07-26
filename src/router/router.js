import Vue from 'vue'
import VueRouter from 'vue-router'
import about from '../components/about.vue'
import home from '../components/home.vue'
import news from '../components/news.vue'
import message from '../components/message.vue'
import msg from '../components/msg.vue'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/about',
      component: about
    },
    {
      path: '/',
      redirect: '/about'
    },
    {
      path: '/home',
      component: home,
      children: [
        {
          path: 'news',
          component: news
        },
        {
          path: 'message',
          component: message,
          children: [
            {
              path: '/home/message/msg/:id',
              component: msg
            }
          ]
        }
      ]
    }
  ]
})
