import axios from "axios";
import Vuex from "vuex"

export default new Vuex.Store({
    state: {
        fakeData: [],
        filteredData: [],
        search: "",
        isShowModal: false,
        newUser: {
            name: "",
            email: "",
            street: "",
            city: "",
            zip: "",
            id: ""
        },
        searchBy : "by Name",




        currentPage: 1,
        totalPages: 0,
        maxVisibleButtons: 3,
        total: 0,
        perPage: 0,

    },
    mutations: {
        updateFakeData(state, data) {
            state.fakeData = data;
            state.filteredData = state.fakeData
        },
        usersFilter(state, newSearchValue){
            state.search = newSearchValue
            if(state.searchBy === "by Name"){
                state.filteredData = state.fakeData.filter(data => {
                    return data.name.toLowerCase().includes(state.search.toLowerCase())
                })
            }else if(state.searchBy === "by Email"){
                state.filteredData = state.fakeData.filter(data => {
                    return data.email.toLowerCase().includes(state.search.toLowerCase())
                })
            }            
        },
        changeShowModal(state){
            state.isShowModal = !state.isShowModal
        },
        updateNewUserName(state, newUserName){
            state.newUser.name = newUserName
        },
        updateNewUserEmail(state, newUserEmail){
            state.newUser.email = newUserEmail
        },
        updateNewUserStreet(state, newUserStreet){
            state.newUser.street = newUserStreet
        },
        updateNewUserCity(state, newUserCity){
            state.newUser.city = newUserCity
        },
        updateNewUserZip(state, newUserZip){
            state.newUser.zip = newUserZip
        },
        updateNewUserId(state, NewUser){
            state.newUser.id = state.filteredData.length
            NewUser.id = state.newUser.id
        },
        pushNewUser(state, NewUser){
            state.fakeData.push(NewUser)
            state.filteredData = state.fakeData
        },
        resetNewUser(state){
            state.newUser.name = ""
            state.newUser.email = ""
            state.newUser.street = ""
            state.newUser.city = ""
            state.newUser.zip = ""
            state.newUser.id = ""
        },
        updateSearchBy(state){
            if(state.searchBy === "by Name"){
                state.searchBy = "by Email"
            }
            else if(state.searchBy === "by Email"){
                state.searchBy = "by Name"
            }
        },
        




        mutPaginatedData(state, start, end){
            return state.currentPage.slice(start, end)
        },
        mutStartPage(state){
            if(state.currentPage === 1){
                return 1
            }
        }
    },
    getters: {
        allFakeData(state){
            return state.fakeData
        },
        allFilteredData(state){
            return state.filteredData
        },
        changedShowModal(state){
            return state.isShowModal
        },
        searchBy(state){
            return state.searchBy
        }
    },

    

    actions: {
       async fetchFakeData(context) {
            // const res = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
            // const data = await res.json();
            axios.get("https://my-json-server.typicode.com/TsarYurii/JsonServer/db").then((response) => {
                const data = response.data.users
                context.commit("updateFakeData", data)
            })
            
        },
        filterSearch(context, event){
                const newSearchValue = event.target.value
                context.commit("usersFilter", newSearchValue)
        },
        showModal(context){
            context.commit("changeShowModal")
            context.commit("resetNewUser")            
        },
        changeNewUserName(context, event){
            const newUserName = event.target.value
            context.commit("updateNewUserName", newUserName)
        },
        changeNewUserEmail(context, event){
            const newUserEmail = event.target.value
            context.commit("updateNewUserEmail", newUserEmail)
        },
        changeNewUserStreet(context, event){
            const newUserStreet = event.target.value
            context.commit("updateNewUserStreet", newUserStreet)
        },
        changeNewUserCity(context, event){
            const newUserCity = event.target.value
            context.commit("updateNewUserCity", newUserCity)
        },
        changeNewUserZip(context, event){
            const newUserZip = event.target.value
            context.commit("updateNewUserZip", newUserZip)
        },
        addNewUser(context){
            const NewUser = {
                name: this.state.newUser.name,
                email: this.state.newUser.email,
                street: this.state.newUser.street,
                city: this.state.newUser.city,
                zip: this.state.newUser.zip,
                id: this.state.newUser.id
            }
            if(this.state.newUser.name !== ""){
                context.commit("pushNewUser", NewUser)
                context.commit("changeShowModal")
                context.commit("resetNewUser")
                context.commit("updateNewUserId",  NewUser)
            }
        },
        changeSearchBy(context){
            context.commit("updateSearchBy")
        },





        actPaginatedData(context){
            let start = (this.state.currentPage - 1) * this.state.perPage
            let end = start + this.state.perPage
            context.commit("mutPaginatedData", start, end)
        },
        actStartPage(context){
            context.commit()
        }
    }
})