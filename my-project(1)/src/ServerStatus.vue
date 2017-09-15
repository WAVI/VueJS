<template>
    <div>
    <p>Server status: {{ status }}</p>
    <p>Server status: {{ iustin }}</p>
    <hr>
    <button @click="changeStatus">Change status</button>
    </div>
</template>

<script>
    export default {
        data: () => {
            return {
                status: 'Critical',
                iustin: 's'
            }
        },
        methods:{
            changeStatus() {
                this.status = 'Normal'
            }
        }
    }
</script>