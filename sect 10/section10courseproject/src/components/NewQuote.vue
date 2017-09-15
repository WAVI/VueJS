<template>
    <div class="row">
        <form>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
                <label>Quote</label>
                <textarea class="form-control" rows=3 v-model="quote"></textarea>
            </div>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
            <!-- @click.prevent = prevent means that i dont want to submit the form to the server cus it will reload the page-->
               <button class="btn btn-primary" @click.prevent="createNew"> Add Quote </button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
       data: function() {
           return {
               quote: ''
           };
       },
       methods: {
           createNew() {
               this.$emit('quoteAdded', this.quote);
               this.quote='';
           }
       }
    }
</script>

<style>

</style>