<template>
  <FormModal @onSubmitForm="onSubmitForm" @close="close" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import FormModal from "./FormModal.vue";
export default {
  components: {
    FormModal,
  },
  name: "NewUser",
  methods: {
    ...mapActions(["showModal", "addNewUser"]),
    onSubmitForm(data) {
        const newUser = {
          name: data.name,
          email: data.email,
          street: data.street,
          city: data.city,
          zip: data.zip,
          id: this.allFilteredData.length + 1,
          icon: this.allFilteredData[0].icon,
        };
        this.addNewUser(newUser);
      
    },
    close() {
      this.showModal();
    },
  },
  computed: {
    ...mapGetters(["allFilteredData"]),
  },
};
</script>

<style>
</style>