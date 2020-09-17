
const initialState = {
    amount: 1,
    buzzers: [{title:'Testtitel'}],
    config_button_invisibility: false,
    show_buzzers_permanently: true
};

export const buzzers = {
    namespaced: true,
    state: initialState,
    actions: {
        setAmount({dispatch, commit}, amount) {
            commit('amount', amount);
        },
        setConfigButtonInvisibility({dispatch, commit}, config_button_invisibility) {
            commit('config_button_invisibility', config_button_invisibility);
        },
        setShowBuzzersPermanently({dispatch, commit}, show_buzzers_permanently) {
            commit('show_buzzers_permanently', show_buzzers_permanently);
        },
    },
    mutations: {
        amount(state, amount) {
            state.amount = amount;
        },
        config_button_invisibility(state, config_button_invisibility) {
            state.config_button_invisibility = config_button_invisibility;
        },
        show_buzzers_permanently(state, show_buzzers_permanently) {
            state.show_buzzers_permanently = show_buzzers_permanently;
        },
    }
}
