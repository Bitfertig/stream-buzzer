<template>
    <div class="lightbox container">

        
        <!-- <p>Lodash is available: {{!!_}}</p> -->

        <div class="close">
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
                        name,
                        layout,
                        sound
                    </div>
                </template>
            </div>


            <div class="checkbox">
                <label>
                    <input type="checkbox" v-model="config_button_invisibility" value="1"><i class="helper"></i>Make configuration button invisible.
                </label>
            </div>


            <div class="checkbox">
                <label>
                    <input type="checkbox" checked="checked"><i class="helper"></i>Show buzzers permanently.
                </label>
            </div>

        </form>
        
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
        console.log('mounted');
    },
    computed: {
        amount: {
            get: function() {
                return this.$store.state.buzzers.amount;
            },
            set: function(newValue) {
                this.setAmount(newValue);
            }
        },
        show_buzzers_permanently: {
            get: function() {
                return this.$store.state.buzzers.show_buzzers_permanently;
            },
            set: function(newValue) {
                this.setShowBuzzersPermanently(newValue);
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

        buzzers: function() {
            return _.range(0, this.amount);
        }
    },
    methods: {
        ...mapActions({
            setAmount: 'buzzers/setAmount',
            setConfigButtonInvisibility: 'buzzers/setConfigButtonInvisibility',
            setShowBuzzersPermanently: 'buzzers/setShowBuzzersPermanently',
        }),
    
    },
}
</script>

<style>

</style>