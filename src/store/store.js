import axios from "axios";
import Vuex from "vuex"

export default new Vuex.Store({
    state: {
        fakeData: [],
        filteredData: [],
        // search: "",
        isShowModal: false,
        searchBy: "by Name",
        usersPerPage: 10,
        paginatedUsers: [],
        pageNumber: 1
    },
    mutations: {
        updateFakeData(state, data) {
            state.fakeData = data;
            state.filteredData = state.fakeData
        },
        usersFilter(state, newSearchValue) {
            state.search = newSearchValue
            if (state.searchBy === "by Name") {
                state.filteredData = state.fakeData.filter(data => {
                    return data.name.toLowerCase().includes(state.search.toLowerCase())
                })
            } else if (state.searchBy === "by Email") {
                state.filteredData = state.fakeData.filter(data => {
                    return data.email.toLowerCase().includes(state.search.toLowerCase())
                })
            }
        },
        changeShowModal(state) {
            state.isShowModal = !state.isShowModal
        },
        pushNewUser(state, newUser) {
            state.fakeData.push(newUser)
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
        getUsersFilter(state, search) {
            if (state.searchBy === "by Name") {
                state.filteredData = state.fakeData.filter(data => {
                    return data.name.toLowerCase().includes(search.toLowerCase())
                })
            } else if (state.searchBy === "by Email") {
                state.filteredData = state.fakeData.filter(data => {
                    return data.email.toLowerCase().includes(search.toLowerCase())
                })
            }
        }
    },



    actions: {
        async fetchFakeData(context) {
            axios.get("https://my-json-server.typicode.com/TsarYurii/JsonServer/db").then((response) => {
                const data = response.data.users
                context.commit("updateFakeData", data)
            })
        },
        filterSearch(context, event) {
            const newSearchValue = event.target.value
            context.commit("usersFilter", newSearchValue)
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
        }
    }
})