<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <button @click="selectedComponent = 'appQuote'">Quote</button>
              <button @click="selectedComponent = 'appAuthor'">Author</button>
              <button @click="selectedComponent = 'appNew'">New</button>
              <hr>
              <p> {{ selectedComponent }}</p>

              <!-- component-  is a reserved 
                            - it allows us to dynamically load component
                            - if you want to keep the component alive while you switch you need to wrap it into <keep-alive> </keep-alive>-->
              <keep-alive>
              <component :is="selectedComponent">
                <p>Default Content</p>
              </component>
              </keep-alive>
              <!-- <appQuote > 
                   if we style these 2, we will style them in the child component
                 <h2 slot="title">{{ quoteTitle }}</h2>
                  <p> A wonderful Quote</p>
               </appQuote> -->
               <hr>
               
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'
    import Author from './components/Author.vue'
    import New from './components/New.vue'


    export default {
      data: function() {
        return {
          quoteTitle: 'The Quote',
          selectedComponent: 'app-quote'
        }
      },
        components: {
          appQuote: Quote,
          appAuthor: Author,
          appNew: New
        }
    }
</script>

<style>

</style>
