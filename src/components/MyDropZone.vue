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
            <span>{{$t('topPanel.dropZoneTitle')}}</span>
          </header>
          <section class="simple-modal-body center">
            <div
              @dragenter.prevent="toggleActive"
              @dragleave.prevent="toggleActive"
              @dragover.prevent
              @drop.prevent="toggleActive"
              :class="{ 'active-dropzone': active === true }"
              class="dropzone"
            >
              <label for="dropzoneFile">{{$t('topPanel.btnSelectFile')}}</label>
              <input
                type="file"
                id="dropzoneFile"
                class="dropzoneFile dropzoneInput"
                accept="image/jpeg, image/png,"
              />
              <div class="previewImage">
                <img
                  src=""
                  alt=""
                  class="icon"
                  id="imgFromComputator"
                  ref="previewIcon"
                />
              </div>
            </div>
            <button
              class="btn btn-danger me-3 mt-3 pe-3 ps-3"
              type="button"
              @click="close"
            >
              {{$t('topPanel.btnClose')}}
            </button>
            <button class="btn btn-primary mt-3" @click="changeUserIcon">
              {{$t('topPanel.btnSbm')}}
            </button>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyDropZone",
  data() {
    return {
      active: false,
    };
  },
  methods: {
    close() {
      this.$emit("changeIcon");
    },
    changeUserIcon() {
      this.$emit("changeUserIcon");
    },
    toggleActive() {
      this.active = !this.active;
    },
  }
};
</script>

<style>
.icon {
  max-width: 200px;
  max-height: 200px;
}
.dropzone {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
  border: 2px dashed #41b883;
  background-color: #fff;
  transition: 0.3s ease all;
}
.dropzone label {
  padding: 8px 12px;
  color: #fff;
  background-color: #41b883;
  transition: 0.3s ease all;
}
.dropzone input {
  display: none;
}
.active-dropzone {
  color: #fff;
  border-color: #fff;
  background-color: #41b883;
}
.active-dropzone label {
  background-color: #fff;
  color: #41b883;
}

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
.center{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>