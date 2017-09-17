<template>
  <div>
    <h1>Filters & Mixins</h1>
    <p> {{ text | toUpperCase | to-lowercase }} </p>
    <hr>
    <button @click="fruits.push('Berries')"> Add New Item </button>
    <input v-model="filterText">
    <ul>
     <li v-for="fruit in filteredFruits">{{fruit}}</li>
    </ul>
    <hr>
    <app-list></app-list>
  </div>
</template>

<script>

  import List from './List.vue';
  import { fruitMixin } from './fruitMixin'
    //a filter is a syntax / feature u can use to transform some output in the template
    export default {
      mixins: [fruitMixin],
      data() {
        return  {
          text: 'Hello there',
        }
      },
      filters: {
        toUpperCase(value) {
          return value.toUpperCase();
        }
      },
      components:{
        appList: List
      }
    }
</script>

<style>

</style>
