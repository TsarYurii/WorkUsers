<template>
<div class="container">
    <div class="d-flex justify-content-between">
        <input type="text" placeholder="Search" @input="filterSearch">
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
</div>    
</template>

<script>
import User from './User.vue'
import NewUser from "./NewUser.vue"
import {mapGetters, mapActions} from "vuex"
export default {
    components: {
    User,
    NewUser
  },
    computed: mapGetters(["allFakeData", "changedShowModal", "allFilteredData"]),
    methods: mapActions(["fetchFakeData", "filterSearch", "changeSearch", "showModal"]),
    async mounted() {
        this.fetchFakeData()
    }
}
</script>

<style>

</style>