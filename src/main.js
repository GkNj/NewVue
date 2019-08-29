import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import HelloWord from './components/HelloWorld'
import home from './components/home'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

const router=new VueRouter({
  routes:[
    {path:'/',component:home},
    {path:'/helloWord',component:HelloWord}
  ],
  mode:'history'
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
