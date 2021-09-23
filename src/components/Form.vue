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
    <input class="btn btn-primary" type="submit" value="Submit" />
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
        name: this.name,
        email: this.email,
        street: this.street,
        city: this.city,
        zip: this.zip,
      });
    },
  },
};
</script>

<style>
</style>