export const state = () => ({
    flgLogo: false,
});

export const mutations = {
    flgLogo(state, payload) {
        state.flgLogo = payload.flgLogo;
    },
};

export const actions = {
    flgLogo({ commit }, payload) {
        commit('flgLogo', {
            flgLogo: payload.flgLogo,
        });
    },
};

export const getters = {
    flgLogo: (state) => {
        return state.flgLogo;
    },
};
