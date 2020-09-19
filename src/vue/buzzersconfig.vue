<template>
    <div class="config">

        <div class="back" @click="close()"></div>

        <div class="container">
            
            <!-- <p>Lodash is available: {{!!_}}</p> -->

            <div class="close" @click="close()" title="Close">
                &times;
            </div>

            <h1>Configuration</h1>


            <form>

                <!-- Anzahl Buzzers -->
                <div class="form-group">
                    <input type="number" min="1" v-model="amount">
                    <label for="input" class="control-label">Amount of buzzers</label><i class="bar"></i>
                </div>
                
                <div class="horizontalslider-box hs-box">
                    <template v-for="(buzzer, index) in buzzers">
                        <div :key="index" class="hs-item">
                            <div class="title">Buzzer {{index + 1}}</div>

                            <div class="form-group">
                                <input type="text" v-model="buzzer.label" placeholder="Label">
                                <label for="input" class="control-label">Label</label><i class="bar"></i>
                            </div>
                            
                            <div class="form-group">
                                <input type="text" v-model="buzzer.key" placeholder="Key" maxlength="1" @focus="$event.target.select()" @input="$event.target.select()">
                                <label for="input" class="control-label">Key</label><i class="bar"></i>
                            </div>

                        </div>
                    </template>
                </div>


                <div class="checkbox">
                    <label>
                        <input type="checkbox" v-model="config_button_invisibility" value="1"><i class="helper"></i>Make configuration button invisible.
                    </label>
                </div>

            </form>
        
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    components: {
        
    },
    data: function() {
        return {
            
        }
    },
    mounted () {
        console.log('buzzersconfig.vue mounted.');
    },
    computed: {
        amount: {
            get: function() {
                return this.$store.state.buzzers.amount;
            },
            set: function(newValue) {console.log(123);
                this.setAmount(newValue);
            }
        },
        config_button_invisibility: {
            get: function() {
                return this.$store.state.buzzers.config_button_invisibility;
            },
            set: function(newValue) {
                this.setConfigButtonInvisibility(newValue);
            }
        },
        buzzers: {
            get: function() {
                return this.$store.state.buzzers.buzzers;
            },
            set: function(newValue) {
                this.setBuzzers(newValue);
            }
        },
    },
    methods: {
        ...mapActions({
            setAmount: 'buzzers/setAmount',
            setConfigButtonInvisibility: 'buzzers/setConfigButtonInvisibility',
            setBuzzers: 'buzzers/setBuzzers',
        }),
        close: function() {
            this.$emit('showConfig', false);
        }
    },
}
</script>

<style>

</style>