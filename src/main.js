import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import A from './components/A.vue';
import D from './components/D.vue';
import C from './components/C.vue';
import E  from './components/E.vue';
import G   from './page/G.vue';



Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Router);


var routes =[
 
  {path:'/',component:A},
  {path:'/d',component:D},
  {path:'/c',component:C},
  {path:'/e',component:E},
  {path:'/g',component:G},
 
  
]
new Vue({
  render: h => h(App),
  router:new Router({
    mode:'history',
    routes
  })
}).$mount('#app')
