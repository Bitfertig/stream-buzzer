
const default_buzzer = {label:'', key:' ', active:false};

const initialState = {
    amount: 1,
    config_button_invisibility: false,
    buzzers: [ {label:'', key:' ', active:false} ],
};

export const buzzers = {
    namespaced: true,
    state: initialState,
    getters: {
        getBuzzers(state) {
            return state.buzzers;
        }
    },
    actions: {
        setAmount({dispatch, commit, getters}, amount) {
            commit('amount', amount);
            var buzzers = [];
            for (let i = 0; i < amount; i++) {
                if ( i in getters.getBuzzers ) { buzzers[i] = { ...getters.getBuzzers[i] }; }
                else buzzers[i] = { ...default_buzzer };
            }
            commit('buzzers', buzzers);
        },
        setConfigButtonInvisibility({dispatch, commit}, config_button_invisibility) {
            commit('config_button_invisibility', config_button_invisibility);
        },
        setBuzzers({dispatch, commit}, buzzers) {
            commit('buzzers', buzzers);
        },
    },
    mutations: {
        amount(state, amount) {
            state.amount = amount;
        },
        config_button_invisibility(state, config_button_invisibility) {
            state.config_button_invisibility = config_button_invisibility;
        },
        buzzers(state, buzzers) {
            state.buzzers = buzzers;
        },
    }
}
