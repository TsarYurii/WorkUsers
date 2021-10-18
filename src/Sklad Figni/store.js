import axios from "axios";
import Vuex from "vuex"

export default new Vuex.Store({
    state: {
        fakeData: [],
        filteredData: [],
        isShowModal: false,
        searchBy: "by Name",
        usersPerPage: 10,
        paginatedUsers: [],
        pageNumber: 1,
        fakeIndex: ''
    },
    mutations: {
        updateFakeData(state, data) {
            state.fakeData = data;
            state.filteredData = state.fakeData
        },
        changeShowModal(state) {
            state.isShowModal = !state.isShowModal
        },
        pushNewUser(state, newUser) {
            state.fakeData.unshift(newUser)
            state.filteredData = state.fakeData
        },
        updateSearchBy(state) {
            if (state.searchBy === "by Name") {
                state.searchBy = "by Email"
            }
            else if (state.searchBy === "by Email") {
                state.searchBy = "by Name"
            }
        },
        mutPageNumber(state, page) {
            state.pageNumber = page
        },
        mutEditUser(state, editedUser) {
            state.filteredData.splice(state.fakeIndex, 1, editedUser)
            state.fakeIndex = null

            // console.log(state.filteredData.indexOf(fake))
            // console.log("Mut editedUser: " + JSON.stringify(editedUser))
            // console.log("Mut fake: " + JSON.stringify(fake))
        },
        mutEditUserIcon(state, editedUserIcon) {
            state.filteredData.splice(state.fakeIndex, 1, editedUserIcon)
            state.fakeIndex = null
        }
    },
    getters: {
        allFilteredData(state) {
            return state.filteredData
        },
        changedShowModal(state) {
            return state.isShowModal
        },
        searchBy(state) {
            return state.searchBy
        },
        getPages(state) {
            return Math.ceil(state.filteredData.length / state.usersPerPage)
        },
        getPaginatedUsers(state) {
            let from = (state.pageNumber - 1) * state.usersPerPage
            let to = from + state.usersPerPage
            return state.paginatedUsers = state.filteredData.slice(from, to)
        },
        getPageNumber(state) {
            return state.pageNumber
        },
        getSortByName(state) {
            state.filteredData.sort((a, b) => a.name.localeCompare(b.name))
        },
        getSortByNameReverse(state) {
            state.filteredData.sort((a, b) => a.name.localeCompare(b.name)).reverse()
        },
        getSortByCity(state) {
            state.filteredData.sort((a, b) => a.city.localeCompare(b.city))
        },
        getSortByCityReverse(state) {
            state.filteredData.sort((a, b) => a.city.localeCompare(b.city)).reverse()
        },
        getUsersFilter: (state) => (search) => {
            state.pageNumber = 1
            if (state.searchBy === "by Name") {
                state.filteredData = state.fakeData.filter(data => {
                    return data.name.toLowerCase().includes(search.toLowerCase())
                })
            } else if (state.searchBy === "by Email") {
                state.filteredData = state.fakeData.filter(data => {
                    return data.email.toLowerCase().includes(search.toLowerCase())
                })
            }
        },
        getUserIndex: (state) => (fake) => {
            state.fakeIndex = state.filteredData.indexOf(fake)
            console.log(state.fakeIndex)
        }
    },


    actions: {
        async fetchFakeData(context) {
            axios.get("https://my-json-server.typicode.com/TsarYurii/JsonServer/db").then((response) => {
                const data = response.data.users                
                context.commit("updateFakeData", data)
            })
        },
        showModal(context) {
            context.commit("changeShowModal")
        },
        addNewUser(context, newUser) {
            context.commit("pushNewUser", newUser)
            context.commit("changeShowModal")
        },
        changeSearchBy(context) {
            context.commit("updateSearchBy")
        },
        onClickPage(context, page) {
            context.commit("mutPageNumber", page)
        },
        letEditUser(context, editedUser) {
            // console.log("Action fake: " + fake)
            context.commit("mutEditUser", editedUser)
        },
        letEditIcon(context, editedUserIcon) {
            context.commit("mutEditUserIcon", editedUserIcon)
        }
    }
})