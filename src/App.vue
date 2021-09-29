<template>
  <div>
    <!-- <users /> -->
    <MyDropZone @drop.prevent="drop" @change="selectedFile"/>
  </div>
</template>

<script>
import { ref } from "vue";
import MyDropZone from "./components/MyDropZone.vue";
export default {
  name: "App",
  components: {
    // Users,
    MyDropZone,
  },
  data() {
    return {
      dataImgSrc: "",
    };
  },
  setup() {
    let dropzoneFile = ref("");
    const drop = (event) => {
      dropzoneFile.value = event.dataTransfer.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(dropzoneFile.value);
      reader.onload = function () {
        document.querySelector("#imgFromComputator").src = reader.result;
      };
    };
    const selectedFile = () => {
      dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
      let reader = new FileReader();
      reader.readAsDataURL(dropzoneFile.value);
      reader.onload = function () {
        document.querySelector("#imgFromComputator").src = reader.result;
      };
    };

    return { dropzoneFile, drop, selectedFile };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
