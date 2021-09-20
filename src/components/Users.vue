<template>
<div class="container">
    <div class="d-flex justify-content-between">
        <div>
            <input class="p-1 me-1" type="text" placeholder="Search" @input="filterSearch">
            <button class="btn btn-warning" @click="changeSearchBy">{{searchBy}}</button>
        </div>
        <button class="btn btn-warning" @click="showModal">New user</button>
    </div>    
    <table class="table table-striped mt-5">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Street</th>
                <th>City</th>
                <th>Zip</th>
            </tr>
        </thead>
        <tbody>
            <User 
            v-for="fake in getPaginatedUsers"
            :key="fake.id"
            :fake="fake"
            />
        </tbody>
    </table>
    <NewUser
        v-if="changedShowModal === true"
    />
    <Pagination/>
</div>    
</template>

<script>
import User from './User.vue'
import NewUser from "./NewUser.vue"
import Pagination from "./Pagination.vue"
import {mapGetters, mapActions} from "vuex"
export default {
    // data(){
    //     return {
    //         usersPerPage: 10,
    //         pageNumber: 1
    //     }
        
    // },
    components: {
    User,
    NewUser,
    Pagination
  },
    computed: {...mapGetters(["allFakeData", "changedShowModal", "allFilteredData", "searchBy", "getPaginatedUsers"]),
        // pages(){
        //     return Math.ceil(this.allFilteredData.length / 10)
        // },
        // paginatedUsers(){
        //     let from = (this.pageNumber - 1) * this.usersPerPage
        //     let to = from + this.usersPerPage
        //     return this.allFilteredData.slice(from, to)
        // }
    },
    methods: {...mapActions(["fetchFakeData", "filterSearch", "showModal", "changeSearchBy", "actPages"])
        // onClickPage(page){
        //     this.pageNumber = page
        // }
    },
    async mounted() {
        this.fetchFakeData()
    }
}
</script>

<style>

</style>