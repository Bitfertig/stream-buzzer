
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
            commit('amount', amount)
        },
        /* settings({ dispatch, commit }, { buzzers }) {
            commit('loginRequest', { username });

            userService.login(username, password)
                .then(
                    user => {
                        commit('loginSuccess', user);
                        router.push('/');
                    },
                    error => {
                        commit('loginFailure', error);
                        //dispatch('alert/error', error, { root: true });
                    }
                );
        },
        logout({ commit }) {
            userService.logout();
            commit('logout');
        } */
    },
    mutations: {
        amount(state, amount) {
            state.amount = amount;
        },
        /* loginRequest(state, user) {
            state.status = { loggingIn: true };
            state.user = user;
        },
        loginSuccess(state, user) {
            state.status = { loggedIn: true };
            state.user = user;
        },
        loginFailure(state) {
            state.status = {};
            state.user = null;
        },
        logout(state) {
            state.status = {};
            state.user = null;
        } */
    }
}
