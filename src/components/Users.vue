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
                <th><button class="btn fw-bold" @click="sortByName">Name 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-expand" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"/>
                        </svg>
                    </button>
                </th>
                <th><button class="btn fw-bold" @click="sortByEmail">Email 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-expand" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"/>
                        </svg>
                    </button>
                </th>
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
    components: {
    User,
    NewUser,
    Pagination
  },
    computed: {...mapGetters(["allFakeData", "changedShowModal", "allFilteredData", "searchBy", "getPaginatedUsers"])
    },
    methods: {...mapActions(["fetchFakeData", "filterSearch", "showModal", "changeSearchBy", "actPages", "sortByName", "sortByEmail"])
    },
    async mounted() {
        this.fetchFakeData()
    }
}
</script>

<style>

</style>