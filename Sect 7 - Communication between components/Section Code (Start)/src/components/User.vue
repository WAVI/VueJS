<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my name</button>
        <p>Name is {{ name }} </p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
            <!--  <app-user-detail :name="name"></app-user-detail> -->
                <app-user-detail
                 v-bind:name="name"
                  v-bind:resetFunction="onNameReset"
                  :resetDef="resetDefault"
                   @nameWasReset="name = $event"
                   :userAge="age">
                </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                :userAge="age"
                @ageWasEdited="age = $event"
                ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    //for transferring data from parent to child, we use props
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
            return {
                name: 'Iustin',
                age:27
            }
        },
        methods: {
            changeName() {
                this.name = 'Anna'
            },

            onNameReset(newName) {
                this.name = newName
            },
            resetDefault(){
                this.name="Iustin"
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
        
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
