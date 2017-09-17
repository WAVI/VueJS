<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <button @click="navigateToHome" class="btn btn-primary"> Go to home </button>
        <hr>
        <router-view></router-view>
        
    </div>
</template>

<script>
    export default {
        methods: {
            navigateToHome() {

                //if i set the name home
                this.$router.push({name: 'home'});


                //if i dont set the name home
                //this.$router.push('/');
            }
        }
    }
</script>