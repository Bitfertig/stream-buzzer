<template>
    <div>

        <p>Lodash is available: {{!!_}}</p>

        <input type="number" min="1" v-model="amount">

        <div class="buzzers">
            <div class="buzzer" v-for="(buzzer, index) in buzzers" :key="index">{{index}}
                <div class="select-button"></div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    components: {
        
    },
    data: function() {
        return {
            amount: 2,
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
        buzzers: function() {
            return _.range(0, this.amount);
        }
    },
    methods: {
    
    },
}
</script>

<style>

</style>