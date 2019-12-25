const state = () => ({
    selectedCatagory: 0,
});

const getters = {
    currentCatagory(state){
        return state.selectedCatagory;
    }
};

const mutations = {
    changeCatagory: function (state, catagoryId) {
        state.selectedCatagory = catagoryId;
    }
};

const actions = {
    changeCatagory: ({ commit }, catagoryId) => {
        commit('changeCatagory',catagoryId);
    }
};


export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}