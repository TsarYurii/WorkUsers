<template>
<div>
  <!-- <users /> -->
  <drop-zone-no-library @drop.prevent="drop" @change="selectedFile" />
  <span class="file-info">File: {{ dropzoneFile.name }}</span>
  <!-- <ModalDropZone/> -->
  <!-- <DropzoneJs/> -->
  </div>
</template>

<script>
// import Users from "./components/Users.vue";
import { ref } from "vue";
import DropZoneNoLibrary from "./components/DropZoneNoLibrary.vue";
// import DropZone from "dropzone-vue";
// import ModalDropZone from "./components/ModalDropZone.vue"
// import DropzoneJs from "./components/DropzoneJs.vue"
export default {
  name: "App",
  components: {
    // Users,
    DropZoneNoLibrary,
    // DropZone,
    // ModalDropZone
    // DropzoneJs
  },
  data() {
    return {
      
    };
  },
  setup() {
    let dropzoneFile = ref("");
    let imgSrc = ""
    const drop = (e) => {
      dropzoneFile.value = e.dataTransfer.files[0];
      
    };
    const selectedFile = () => {
      dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
    };

    return { dropzoneFile, drop, selectedFile, imgSrc };
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
