<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <input v-model="filterText">
                <ul>
                  <li v-for="fruit in filteredFruits">{{fruit}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    import { fruitMixin } from './fruitMixin';
    //a filter is a syntax / feature u can use to transform some output in the template
    export default {
        mixins: [fruitMixin],
        created(){
            console.log('inside list created hook');
        }
    }
</script>

<style>

</style>
