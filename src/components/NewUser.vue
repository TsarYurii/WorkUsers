<template>
  <div class="simple-modal">
    <div class="simple-modal-backdrop" @click="showModal">
      <div class="simple-modal-container">
        <div class="simple-modal-content" @click.stop>
          <header
            class="
              simple-modal-header
              d-flex
              justify-content-between
              align-items-center
            "
          >
            <span>New User</span>
            <button
              type="button"
              class="btn btn-danger mt-3"
              @click="showModal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path
                  d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"
                />
              </svg>
            </button>
          </header>
          <section class="simple-modal-body">
            <form @submit.prevent="onSubmitForm">
              <div class="mb-3">
                <input
                  required
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  v-model="name"
                />
              </div>
              <div class="mb-3">
                <input
                  required
                  type="text"
                  class="form-control"
                  placeholder="Email"
                  v-model="email"
                />
              </div>
              <div class="mb-3">
                <input
                  required
                  type="text"
                  class="form-control"
                  placeholder="Street"
                  v-model="street"
                />
              </div>
              <div class="mb-3">
                <input
                  required
                  type="text"
                  class="form-control"
                  placeholder="City"
                  v-model="city"
                />
              </div>
              <div class="mb-3">
                <input
                  required
                  type="text"
                  class="form-control"
                  placeholder="Zip"
                  v-model="zip"
                />
              </div>
              <input class="btn btn-primary" type="submit" value="Add User" />
            </form>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      name: "",
      email: "",
      street: "",
      city: "",
      zip: "",
    };
  },
  name: "NewUser",
  methods: {
    ...mapActions(["showModal", "addNewUser"]),
    onSubmitForm() {
      let newUser = {
        name: this.name,
        email: this.email,
        street: this.street,
        city: this.city,
        zip: this.zip,
        id: this.allFilteredData.length + 1,
      };
      this.addNewUser(newUser);
    },
  },
  computed: {
    ...mapGetters(["allFilteredData"]),
  },
};
</script>

<style>
.simple-modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  transition: opacity 0.3s ease;
  z-index: 9999;
}
.simple-modal-container {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: auto;
  margin: 16px;
}
.simple-modal-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  margin: 1.75rem auto;
  padding: 20px 30px;
  border-radius: 5px;
  color: #000;
  background-color: #fff;
  transform: translate(0, 0);
  transition: all 0.3s ease;
  box-sizing: border-box;
}
.simple-modal-header {
  padding-bottom: 16px;
  font-size: 25px;
  text-align: center;
}
.simple-modal-footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80px;
  text-align: center;
}
</style>