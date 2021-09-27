<template>
  <tr
    class="user"
    :class="{ user_selected: showModal === true }"
    @dblclick="onEditUser(), getUserIndex(fake)"
  >
    <td class="align-middle">
      <div class="me-3" @click="changeIcon"><img class="avatarIcon" src="./avatarIcon.png" alt="SomePicture"/></div>
      <!-- <DropZone/> -->
      <Dropzone2 v-if="showModalIcon === true"/>
    </td>
    <td class="align-middle">{{ fake.name }}</td>
    <td class="align-middle">{{ fake.email }}</td>
    <td class="align-middle">{{ fake.street }}</td>
    <td class="align-middle">{{ fake.city }}</td>
    <td class="align-middle">{{ fake.zip }}</td>
  </tr>
  <div v-if="showModal === true">
    <FormModal @onSubmitForm="onSubmitForm" @close="close" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import DropZone from './DropZone.vue'
import FormModal from "./FormModal.vue";
import Dropzone2 from "./Dropzone2.vue";

export default {
  name: "User",
  components: {
    FormModal,
    // DropZone,
    Dropzone2,
  },
  data() {
    return {
      showModal: false,
      showModalIcon: false
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
      this.showModal = !this.showModal;
    },
    close() {
      this.showModal = !this.showModal;
    },
    changeIcon(){
      this.showModalIcon = !this.showModalIcon
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
      this.showModal = !this.showModal;
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
.user_selected {
  background-color: #f9c009;
}
.avatarIcon {
  max-height: 50px;
  max-width: 50px;
}
</style>