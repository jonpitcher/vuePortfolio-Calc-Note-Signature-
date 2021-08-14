import Vue from 'vue'
import Router from 'vue-router'
import calculator from '@/components/calculator'
import home from '@/components/Home'
import firmaelectronica from '@/components/FirmaElectronica'
import todoapp from '@/components/TodoApp'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: home},
    { path: '/calculator', component: calculator },
    { path: '/firma', component: firmaelectronica },
    { path: '/todo', component: todoapp },
  ]
})
