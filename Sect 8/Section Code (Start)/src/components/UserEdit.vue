<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
         <p>User Age: {{userAge}}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>

import { EventBus } from '../main';
export default {
    props: ['userAge'],
    methods:{
        editAge(){

            this.userAge = 30;
            // this.$emit('ageWasEdited', this.userAge);

            //this is not emited on this vue instace, its emitted on this eventBus instance
            EventBus.$emit('ageWasEdited', this.userAge);
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
