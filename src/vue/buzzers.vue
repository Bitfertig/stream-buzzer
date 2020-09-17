<template>
    <div>

        <!-- <input type="number" min="1" v-model="amount"> -->

        <div class="buzzers">
            <div class="buzzer" v-for="(buzzer, index) in buzzers" :key="index">{{index}}
                <div class="select-button"></div>
            </div>
        </div>

        <div :style="{'visibility':config_button_invisibility?'hidden':'visible'}">Config {{ !!config_button_invisibility }}</div>

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    components: {
        
    },
    data: function() {
        return {
            //amount: 1,
        }
    },
    mounted () {
        console.log('mounted');
        
        document.addEventListener('hashchange', function(){
            
        });

        document.addEventListener('keypress', function(){
            alert(1);
        });

    },
    computed: {
        amount: {
            get: function() {
                return this.$store.state.buzzers.amount;
            },
            set: function(newValue) {
                this.setAmount(newValue);
                //this.$store.commit("buzzers/amount", newValue);
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
            setAmount: 'buzzers/setAmount'
        }),
    
    },
}
</script>

<style>

</style>