<template>
<div class="container">
    <div class="d-flex justify-content-between">
        <input type="text" placeholder="Search" v-model="this.$store.search" @input="filterSearch">
        <button class="btn btn-warning">New user</button>
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
            v-for="fake in allFakeData"
            :key="fake.id"
            :fake="fake"
            />
        </tbody>
    </table>
</div>    
</template>

<script>
import User from './User.vue'
import {mapGetters, mapActions} from "vuex"
export default {
    components: {
    User
  },
    computed: mapGetters(["allFakeData"]),
    methods: mapActions(["fetchFakeData", "filterSearch", "changeSearch"]),
    async mounted() {
        this.fetchFakeData()
    }
}
</script>

<style>

</style>