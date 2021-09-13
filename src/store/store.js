import Vuex from "vuex"

export default new Vuex.Store({
    state: {
        fakeData: []
    },
    mutations: {
        updateFakeData(state, data) {
            state.fakeData = data
        }
    },
    getters: {
        allFakeData(state){
            return state.fakeData
        }
    },
    actions: {
       async fetchFakeData(context) {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
            const data = await res.json();
            context.commit("updateFakeData", data)
        }
    }
})