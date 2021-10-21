<template>
  <tr
    class="user"
    :class="{ user_selected: showModal === true }"
    @dblclick="onEditUser(), getUserIndex(fake)"
  >
    <td class="align-middle">
      <div class="me-3" @click="changeIcon(), getUserIndex(fake)">
        <img
          class="avatarIcon"
          :src="fake.icon"
          alt="SomePicture"
          :key="fake.id"
        />
      </div>
    </td>
    <td class="align-middle">{{ fake.name }}</td>
    <td class="align-middle">{{ fake.email }}</td>
    <td class="align-middle">{{ fake.street }}</td>
    <td class="align-middle">{{ fake.city }}</td>
    <td class="align-middle">{{ fake.zip }}</td>
    <transition name="fade">
      <div v-if="showModal === true">
        <FormModal @onSubmitForm="onSubmitForm" @close="close" :fake="fake" />
      </div>
    </transition>
    <transition name="fade">
      <div v-if="showModalIcon === true">
        <MyDropZone
          @drop.prevent="drop"
          @change="selectedFile"
          @changeIcon="changeIcon"
          @changeUserIcon="changeUserIcon"
        />
      </div>
    </transition>
  </tr>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import FormModal from "./FormModal.vue";
import MyDropZone from "./MyDropZone.vue";

export default {
  name: "User",
  components: {
    FormModal,
    MyDropZone,
  },
  data() {
    return {
      showModal: false,
      showModalIcon: false,
      userIconSrc: "",
      dropzoneFile: "",
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
    ...mapActions(["letEditUser", "letEditIcon"]),
    onEditUser() {
      this.showModal = !this.showModal;
    },
    close() {
      this.showModal = !this.showModal;
    },
    changeIcon() {
      this.showModalIcon = !this.showModalIcon;
      this.dropzoneFile = "";
    },
    onSubmitForm(data) {
      const editedUser = {
        name: data.name !== "" ? data.name : this.fake.name,
        email: data.email !== "" ? data.email : this.fake.email,
        street: data.street !== "" ? data.street : this.fake.street,
        city: data.city !== "" ? data.city : this.fake.city,
        zip: data.zip !== "" ? data.zip : this.fake.zip,
        id: this.fake.id,
        icon: this.fake.icon,
      };

      this.letEditUser(editedUser);
      this.showModal = !this.showModal;
    },
    changeUserIcon() {
      this.userIconSrc = document.querySelector("#imgFromComputator").src;
      const editedUserIcon = {
        name: this.fake.name,
        email: this.fake.email,
        street: this.fake.street,
        city: this.fake.city,
        zip: this.fake.zip,
        id: this.fake.id,
        icon: this.userIconSrc,
      };
      if (this.dropzoneFile != "") {
        this.letEditIcon(editedUserIcon);
        this.showModalIcon = !this.showModalIcon;
      }
    },

    drop(event) {
      this.dropzoneFile = event.dataTransfer.files[0];
      let reader = new FileReader();
      console.log(this.userIconSrc);
      reader.readAsDataURL(this.dropzoneFile);
      reader.onload = function () {
        document.querySelector("#imgFromComputator").src = reader.result;
      };
    },
    selectedFile() {
      this.dropzoneFile = document.querySelector(".dropzoneFile").files[0];
      let reader = new FileReader();
      reader.readAsDataURL(this.dropzoneFile);
      reader.onload = function () {
        document.querySelector("#imgFromComputator").src = reader.result;
      };
    },
  },
  computed: {
    ...mapGetters(["getUserIndex"]),
  }
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


</style>