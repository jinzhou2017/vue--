import Vue from 'vue'
import VueRouter from 'vue-router'
import container from '../components/container.vue'
import home from '../components/home.vue'
import detail from '../components/detail.vue'
Vue.use(VueRouter)
export default new VueRouter({
  linkActiveClass: 'active', // 指定选中的路由链接的class
  mode: 'history',  // 路由路径不带#
  routes: [
    {
      path: '/container',
      component: container,
      children: [
        {
          path: '/container/home',
          component: home
        },
        {
          path: '/container/detail',
          component: detail
        }
      ]
    }

  ]
})
