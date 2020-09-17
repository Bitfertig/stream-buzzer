<template>
    <div>

        <input type="number" min="1" v-model="amount">

        <div class="buzzers">
            <div class="buzzer" v-for="(buzzer, index) in buzzers" :key="index">{{index}}
                <div class="select-button"></div>
            </div>
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