import Vuex from "vuex"

export default new Vuex.Store({
    state: {
        fakeData: [],
        search: "",
        isShowModal: false,
        newUserName: "",
        newUserEmail: "",
        newUserStreet: "",
        newUserCity: "",
        newUserZip: ""
    },
    mutations: {
        updateFakeData(state, data) {
            state.fakeData = data
        },
        usersFilter(state, filteredData){
            state.fakeData = filteredData
        },
        changeShowModal(state){
            state.isShowModal = !state.isShowModal
        }
    },
    getters: {
        allFakeData(state){
            return state.fakeData
        },
        changedShowModal(state){
            return state.isShowModal
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
        },
        showModal(context){
            context.commit("changeShowModal")
        },
        // addNewUser(){
        //     const newUser = {
        //         name: "",

        //     }
        // }
    }
})