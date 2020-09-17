<template>
    <div class="lightbox container">

        
        <p>Lodash is available: {{!!_}}</p>

        <div class="close">
            &times;
        </div>

        <h1>Configuration</h1>


        <form>
-{{ amount }}-
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
                    <input type="checkbox"><i class="helper"></i>Make configuration button invisible.
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
            //amount: this.$store.state.buzzers.amount,
        }
    },
    mounted () {
        console.log('mounted');
        
        //console.log( this.$store.getters['buzzers/amount'] );
        console.log( this.$store.state.buzzers.amount );
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