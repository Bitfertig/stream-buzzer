console.log('It`s working.');

//require('./src/myfile.js'); // Require will also automatically scan node_modules to find modules

import './style.scss';

import Vue from 'vue'
import App from './app.vue';

import _ from 'lodash';
Vue.set(Vue.prototype, '_', _);

window.vm = new Vue({
    render: h => h(App),
}).$mount('#app');

