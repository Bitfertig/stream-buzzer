import Vue from "vue";
import Vuex from "vuex";

import { buzzers } from './store.buzzers';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        buzzers,
    },
});
