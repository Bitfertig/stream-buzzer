<template>
    <div>

        <buzzers></buzzers>

        <buzzersconfig></buzzersconfig>

    </div>
</template>

<script>
/*
1. Anzeige der Buzzer (1 Standard) und ein Config-Button unten links.
2. Config-Button zeigt das Config-Overlay an.
    2.1. Auswahl der Anzahl
    2.2. Buzzer in einem Slider bearbeitbar. Name, Layout und Sound, Taste.
    2.3. Config-Button unsichtbar schalten für den Stream.
    2.4. Buzzers immer anzeigen oder nur bei Aktion.
3. Config in Storage ablegen
*/
import buzzersconfig from './buzzersconfig.vue';
import buzzers from './buzzers.vue';
export default {
    components: {
        buzzersconfig,
        buzzers,
    },
    data: function() {
        return {
            
        }
    },
    mounted () {

    },
    methods: {
    
    },
}
</script>

<style>

</style>