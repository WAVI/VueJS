import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

//use = tells vue to add a plugin to the core functionality
//firebase its a service you can use, it has auth/database functionality

Vue.use(VueResource);

//declare globally 'https://vuejs-http-6ee04.firebaseio.com/data.json'
Vue.http.options.root = 'https://vuejs-http-6ee04.firebaseio.com/'


//POST  = creates new resource and appends to the existing one
//PUT = overrides the old data
//array of functions we want to execute on each request
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method == 'POST') {
    request.method = 'PUT';
  }
  next(response => {
    response.json = () => { return {messages: response.body} }
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
