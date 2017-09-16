<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="sldie">Slide</option>
                </select>
                <br>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br>
                <!-- You can only animate one element -->
                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-show="show">This is some info</div>
                </transition>

                 <transition name="slide" type="animation">
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>

                <!-- to animate the initial attaching  -->
                <transition name="fade" >
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>

                <!-- Using animate CSS -->
                <transition 
                    appear
                    enter-class=""
                    enter-active-class="animated bounce"
                    leave-class=""
                    leave-active-class="animated shake"    
                >
                    <div class="alert alert-info" v-if="show">This is some xxx</div>
                </transition>


                <transition :name="alertAnimation" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info">This is some info</div>
                    <div class="alert alert-warning" v-else key="warning">This is some Warning</div>
                </transition>






                <hr>
                <button class="btn btn-primary" @click="selectedComponent == 'app-success-alert' ? selectedComponent= 'app-danger-alert' : selectedComponent= 'app-success-alert'">Toggle Components</button>
                <br>
                <transition name="fade"mode="out-in">
                <component :is="selectedComponent"></component>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="addItem">Add Item</button>
                <br><br>
                <ul class="list-group">
                    <transition-group name="slide">
                        <li 
                            class="list-group-item" 
                            v-for="(number,index) in numbers" 
                            @click="removeItem(index)"
                            style="cursor: pointer"
                            :key="number">{{ number }}</li>
                    </transition-group>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    import DangerAlert from './DangerAlert.vue';
    import SuccessAlert from './SuccessAlert.vue';
    export default {
        data() {
            return {
                show: true,
                alertAnimation: 'fade',
                selectedComponent: 'app-success-alert',
                numbers: [1,2,3,4,5]
            }
        },
        components: {
            appDangerAlert: DangerAlert,
            appSuccessAlert: SuccessAlert
        },
        methods: {
            addItem() {
                const pos = Math.floor(Math.random() * this.numbers.length);
                this.numbers.splice(pos,0,this.numbers.length + 1 );
            },
            removeItem(index){
                this.numbers.splice(index, 1);
            }
        }
    }



    
</script>


<style>
    /*
    .fade-enter will be removed after one frame so we can basically initialize our variables.
    */
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active{
        transition: opacity 1s;
    }

    .fade-leave {
        /*opacity: 1 */
    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter {
        opacity: 0
       /* transform: translateY(20px);*/

    }
    
    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }

    .slide-leave {

    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
        position: absolute;
    }

    .slide-move {
        transition: transform 5s;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }

        to{
            transform: translateY(0);
        }
    }

    @keyframes slide-out {

        from{
            transform: translateY(0);
        }

        to {
            transform: translateY(20px);
        }

    }
</style>
