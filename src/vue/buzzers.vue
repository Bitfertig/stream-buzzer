<template>
    <div class="buzzers_window" @click="resetActiveRound()">

        <!-- <input type="number" min="1" v-model="amount"> -->

        <div class="buzzers">
            <div class="buzzer" v-for="(buzzer, index) in buzzers" :key="index">
                <div :class="{'select-button':1, 'active':buzzer.active}">
                    {{ buzzer.label }}
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    props: ['activeBuzzers'],
    components: {
        
    },
    data: function() {
        return {
            activeRound: true,
        }
    },
    mounted () {
        console.log('buzzers.vue mounted.');
        
        /* document.addEventListener('hashchange', function(){ }); */
        var that = this;

        document.addEventListener('keypress', function(e) {
            if ( that.activeBuzzers && that.activeRound ) {
                for (let i in that.buzzers) {
                    let buzzer = that.buzzers[i];
                    if ( e.key == buzzer.key ) {
                        console.log('"'+e.key+'" bzzzt!');
                        //alert( buzzer.label+' "'+e.key+'" bzzzt!' );
                        that.activeRound = false;
                        that.buzzers[i].active = true;
                    }
                }
            }
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
        resetActiveRound: function() {
            for (let i in this.buzzers) {
                this.buzzers[i].active = false;
            }
            this.activeRound = true;
        }
    },
}
</script>

<style>

</style>