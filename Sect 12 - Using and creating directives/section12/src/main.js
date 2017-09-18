import Vue from 'vue'
import App from './App.vue'


//REGISTER GLOBAL DIRECTIVES
//a directive has 5 hooks(5 methods)
//bind(el, binding, vnode) = once directive is attached
//inserted(el, binding, vnode) = inserted in parent node
//update(el, binding, vnode, oldVnode) = once component is updated(without children)
//componentUpdated(el, binding, vnode, oldVnode) = once component is updated (with children)
//unbind(el, binding, vnode) = once directive is removed
Vue.directive('highlight',{
  bind(el, binding, vnode) {
    //el.style.backgroundColor = 'green';

    // or another example

    //el.style.backgroundColor = binding.value;

     // or another example

    var delay = 0;
    if(binding.modifiers['delayed']){
      delay = 3000;
    }
    setTimeout( () => {
      if(binding.arg == 'background'){
        el.style.backgroundColor = binding.value;
      }
      else {
        el.style.color = binding.value;
      }
    }, delay)
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
