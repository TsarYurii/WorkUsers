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
            v-for="fake in allFilteredData"
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
    components: {
    User,
    NewUser,
    Pagination
  },
    computed: mapGetters(["allFakeData", "changedShowModal", "allFilteredData", "searchBy"]),
    methods: mapActions(["fetchFakeData", "filterSearch", "changeSearch", "showModal", "changeSearchBy"]),
    async mounted() {
        this.fetchFakeData()
    }
}
</script>

<style>

</style>