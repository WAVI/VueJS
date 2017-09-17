<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset name</button>
        <button @click="resetFunc">Reset func</button>
        <button @click="resetDef()">Reset default</button>


    </div>
</template>

<script>

import { EventBus } from '../main';


    export default {
        // props: ['name'],
        // props: {
        //     name: String
        // },
        props: {
            name: {
                type: String,
                // required: true,
                default: 'Max'
            },

            resetFunction: {
                type: Function
            },

            resetDef: {
                type: Function
            },
            userAge: Number
        },
        methods: {
            switchName() {
                //this.name is the property above
                return this.name.split("").reverse().join("");
            },
            resetName() {
                //object and array are only once in the memory so if u change the object/array , it will change in the parent also\


                //so in this case we need to emit a custom event
                //  this.name = 'reseted';

                //in the emit we need to pass the name of the event(choose whatever u like), and the object
                this.$emit('nameWasReset', "reseted");
            },
            resetFunc() {
                this.resetFunction("xx");
            },
        },
        created() {
                //this will listen to events emitted on the eventBus instance
                //arguments: name of the event and callback (which will receive the data we passed to the event)
                EventBus.$on('ageWasEdited', (data) => {
                     this.userAge = data;
                });
            }
    }

</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
