import Vuex from "vuex"

export default new Vuex.Store({
    state: {
        fakeData: [],
        search: ""
    },
    mutations: {
        updateFakeData(state, data) {
            state.fakeData = data
        },
        usersFilter(state, filteredData){
            state.fakeData = filteredData
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
        },
        filterSearch(context){
            
                const filteredData = this.state.fakeData.filter(fake => {
                    return fake.name.toLowerCase().includes(this.search.toLowerCase())
                })
                context.commit("usersFilter", filteredData)
        }
    }
})