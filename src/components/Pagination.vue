<template>
      <ul class="pagination" v-if="allFilteredData.length > 10">
        <li class="page-item" v-for="page in getPages" :page="page" :key="page">
          <button 
          type="button"
          class="btn me-1"
          :class="{'btn-warning' : page === getPageNumber, 'btn-outline-dark' : page !== getPageNumber}"
          @click="onClickPage(page)"
          >
            {{page}}
          </button>
        </li>
      </ul>
</template>

<script>
import {mapGetters, mapActions} from "vuex"
export default {
    name: "Pagination",
    computed: mapGetters(["allFilteredData", "getPages", "getPageNumber"]),
    methods: {...mapActions(["onClickPage"])
    }
}
</script>

<style>

</style>