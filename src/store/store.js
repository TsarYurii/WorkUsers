import Vuex from "vuex"

export default new Vuex.Store({
    state: {
        fakeData: []
    },
    mutations: {

    },
    getters: {
        allFakeData(state){
            return state.fakeData
        }
    },
    actions: {
        fetchFakeData() {
            const res = await fetch()
        }
    }
})