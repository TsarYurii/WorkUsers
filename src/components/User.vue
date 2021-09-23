<template>
  <tr
    class="user"
    @dblclick="onEditUser(), getUserIndex(fake)"
    v-if="edit === false"
  >
    <td>{{ fake.name }}</td>
    <td>{{ fake.email }}</td>
    <td>{{ fake.street }}</td>
    <td>{{ fake.city }}</td>
    <td>{{ fake.zip }}</td>
  </tr>
  <!-- <tr v-else-if="edit === true">
    <td><input class="form-control" type="text" :placeholder="fake.name" v-model="name" /></td>
    <td><input class="form-control" type="text" :placeholder="fake.email" v-model="email" /></td>
    <td><input class="form-control" type="text" :placeholder="fake.street" v-model="street" /></td>
    <td><input class="form-control" type="text" :placeholder="fake.city" v-model="city" /></td>
    <td><input class="form-control" type="text" :placeholder="fake.zip" v-model="zip" /></td>
    <button class="btn" @click="offEditUser">asdd</button>
  </tr> -->
  <div v-else-if="edit === true" class="container">
    <Form @onSubmitForm="onSubmitForm" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Form from "./Form.vue";
export default {
  components: { Form },
  name: "User",
  data() {
    return {
      edit: false,
      // name: "",
      // email: "",
      // street: "",
      // city: "",
      // zip: "",
    };
  },
  props: {
    fake: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    ...mapActions(["letEditUser"]),
    onEditUser() {
      console.log("Edit this!!!");
      console.log("onEditUser fake: " + JSON.stringify(this.fake));
      this.edit = !this.edit;
    },
    // offEditUser() {
    //   const editedUser = {
    //     name: this.name !== "" ? this.name : this.fake.name,
    //     email: this.email !== "" ? this.email : this.fake.email,
    //     street: this.street !== "" ? this.street : this.fake.street,
    //     city: this.city !== "" ? this.city : this.fake.city,
    //     zip: this.zip !== "" ? this.zip : this.fake.zip,
    //     id: this.fake.id,
    //   };
    onSubmitForm(data) {
      const editedUser = {
        name: data.name !== "" ? data.name : this.fake.name,
        email: data.email !== "" ? data.email : this.fake.email,
        street: data.street !== "" ? data.street : this.fake.street,
        city: data.city !== "" ? data.city : this.fake.city,
        zip: data.zip !== "" ? data.zip : this.fake.zip,
        id: this.fake.id,
      };

      this.letEditUser(editedUser);
      this.edit = !this.edit;
    },
  },
  computed: {
    ...mapGetters(["getUserIndex"]),
  },
};
</script>

<style>
.user:hover {
  background-color: #f9c009;
  cursor: pointer;
  transition-duration: 0.35s;
}
</style>