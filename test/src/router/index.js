import Vue from 'vue'
import Router from 'vue-router'
import header from '../components/header'
import footer from '../components/footer'
import main from '../components/main'
import newout from '../components/newout'
import test from '../components/test'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      components: {header}
    },{
    	path:'/about',
    	components:{header,footer}
    },{
    	path:'/share',
    	components:{header,main,footer}
    },{
      path:'/new',
      components:{header,newout}
    },{
      path:'/test',
      components:{header,test}
    }
  ]
})

