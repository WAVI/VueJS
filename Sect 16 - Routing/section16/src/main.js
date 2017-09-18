import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes';

Vue.use(VueRouter);

//we want to register the routes here eventho we declare them from another file
const router = new VueRouter({
  routes: routes,
  mode: 'history', //for the #
  scrollBehavior(to,from,savedPosition) {

    if(savedPosition) {
      return savedPosition;
    }

    if(to.hash){ 
      return { selector: to.hash };
    }
    return {x: 0, y: 700};
  }
});


//!!!!!!!!!!!!!!!!!

//3 places you can implement beforeEach
//GLOBALLY / in the router object from routes.js / directly in the component
//execute before every router action occur
router.beforeEach( (to, from, next) => {
  console.log('global beforeEach');

  //u have to execute next() to allow the routing action to continue, if you dont do this, it will assume u dont allow 
  //3 options: next() = continue, next(false) = abort, next(path) to continue to a path
  next();
});


new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
