<template>
  <div
    @dragenter.prevent="toggleActive"
    @dragleave.prevent="toggleActive"
    @dragover.prevent
    @drop.prevent="toggleActive"
    :class="{ 'active-dropzone': active }"
    class="dropzone"
  >
    <span>Drag or Drop File</span>
    <span>OR</span>
    <label for="dropzoneFile">Select File</label>
    <input type="file" id="dropzoneFile" class="dropzoneFile" />
    <div>
      <img src="" alt="" class="icon" id="imgFromComputator" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "MyDropZone",
  setup() {
    const active = ref(false);
    const toggleActive = () => {
      active.value = !active.value;
    };
    return { active, toggleActive };
  },
};
</script>

<style>
.icon {
  max-width: 200px;
  max-height: 200px;
}
</style>