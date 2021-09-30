<template>
  <div class="simple-modal">
    <div class="simple-modal-backdrop" @click="close">
      <div class="simple-modal-container">
        <div class="simple-modal-content" @click.stop>
          <header
            class="
              simple-modal-header
              d-flex
              justify-content-center
              align-items-center
            "
          >
            <span>Create or edit user</span>
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
                  type="email"
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
              <input class="btn btn-primary" type="submit" value="Submit" />
              <button
                class="btn btn-danger ms-3 pe-3 ps-3"
                type="button"
                @click="close"
              >
                Close
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormModal",
  data() {
    return {
      name: "",
      email: "",
      street: "",
      city: "",
      zip: "",
    };
  },
  methods: {
    onSubmitForm() {
      this.$emit("onSubmitForm", {
        name: this.name,
        email: this.email,
        street: this.street,
        city: this.city,
        zip: this.zip,
      });
    },
    close() {
      this.$emit("close");
    },
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