<template>
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
    <button class="btn btn-danger ms-3 pe-3 ps-3" type="button" @click="close">
      Close
    </button>
  </form>
</template>

<script>
export default {
  name: "Form",
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
        name: this.name.charAt(0).toUpperCase() + this.name.slice(1),
        email: this.email,
        street: this.street.charAt(0).toUpperCase() + this.street.slice(1),
        city: this.city.charAt(0).toUpperCase() + this.city.slice(1),
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
</style>