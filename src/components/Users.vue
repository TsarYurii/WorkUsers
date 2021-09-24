<template>
  <div class="container">
    <div class="d-flex justify-content-between">
      <div>
        <input
          class="p-1 me-1"
          type="text"
          placeholder="Search"
          @input="getUsersFilter($event.target.value)"
        />
        <button class="btn btn-warning" @click="changeSearchBy">
          {{ searchBy }}
        </button>
      </div>
      <button class="btn btn-warning" @click="showModal">New user</button>
    </div>
    <table class="table table-striped mt-5">
      <!-- TODO: Возможность добавить аватар для пользователя -->
      <thead>
        <tr>
          <th>
            <button class="btn fw-bold" @click="onSortByName">
              Name
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-down-up"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                />
              </svg>
            </button>
          </th>
          <th>Email</th>
          <th>Street</th>
          <th>
            <button class="btn fw-bold" @click="onSortByCity">
              City
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-down-up"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                />
              </svg>
            </button>
          </th>
          <th>Zip</th>
        </tr>
      </thead>
      <tbody>
        <User v-for="fake in getPaginatedUsers" :key="fake.id" :fake="fake" />
      </tbody>
    </table>
    <NewUser v-if="changedShowModal === true" />
    <Pagination />
  </div>
</template>

<script>
import User from "./User.vue";
import NewUser from "./NewUser.vue";
import Pagination from "./Pagination.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    User,
    NewUser,
    Pagination,
  },
  data() {
    return {
      sortName: "a-z",
      sortCity: "a-z",
    };
  },
  computed: {
    ...mapGetters([
      "changedShowModal",
      "searchBy",
      "getPaginatedUsers",
      "getUsersFilter",
      "getSortByName",
      "getSortByNameReverse",
      "getSortByCity",
      "getSortByCityReverse",
    ]),
  },
  methods: {
    ...mapActions([
      "fetchFakeData",
      "showModal",
      "changeSearchBy",
      "sortByName",
      "sortByCity",
    ]),
    onSortByName() {
      if (this.sortName === "a-z") {
        this.sortName = "z-a";
        return this.getSortByName;
      } else if (this.sortName === "z-a") {
        this.sortName = "a-z";
        return this.getSortByNameReverse;
      }
    },
    onSortByCity() {
      if (this.sortCity === "a-z") {
        this.sortCity = "z-a";
        return this.getSortByCity;
      } else if (this.sortCity === "z-a") {
        this.sortCity = "a-z";
        return this.getSortByCityReverse;
      }
    },
  },
  async mounted() {
    this.fetchFakeData();
  },
};
</script>

<style>
</style>