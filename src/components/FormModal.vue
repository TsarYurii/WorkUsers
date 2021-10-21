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
            <span>{{ $t("topPanel.modalTitle") }}</span>
          </header>
          <section class="simple-modal-body">
            <Form :validation-schema="formSchema" @submit="onSubmitForm">
              <div class="mb-3">
                <span>{{ $t("topPanel.userListName") }}</span>
                <Field
                  name="name"
                  type="text"
                  class="form-control"
                  :placeholder="$t('topPanel.userListName')"
                  v-model="name"
                />
                <ErrorMessage name="name" />
              </div>
              <div class="mb-3">
                <span>{{ $t("topPanel.userListEmail") }}</span>
                <Field
                  name="email"
                  type="email"
                  class="form-control"
                  :placeholder="$t('topPanel.userListEmail')"
                  v-model="email"
                />
                <ErrorMessage name="email" />
              </div>
              <div class="mb-3">
                <span>{{ $t("topPanel.userListStreet") }}</span>
                <Field
                  name="street"
                  type="text"
                  class="form-control"
                  :placeholder="$t('topPanel.userListStreet')"
                  v-model="street"
                />
                <ErrorMessage name="street" />
              </div>
              <div class="mb-3">
                <span>{{ $t("topPanel.userListCity") }}</span>
                <Field
                  name="city"
                  type="text"
                  class="form-control"
                  :placeholder="$t('topPanel.userListCity')"
                  v-model="city"
                />
                <ErrorMessage name="city" />
              </div>
              <div class="mb-3">
                <span>Zip</span>
                <Field
                  name="zip"
                  type="text"
                  class="form-control"
                  placeholder="Zip"
                  v-model="zip"
                />
                <ErrorMessage name="zip" />
              </div>
              <input class="btn btn-primary" type="submit" :value="$t('topPanel.btnSbm')" />
              <button
                class="btn btn-danger ms-3 pe-3 ps-3"
                type="button"
                @click="close"
              >
                {{$t('topPanel.btnClose')}}
              </button>
            </Form>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
export default {
  name: "FormModal",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  props: {
    fake: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    // const formValidationSchema = {
    //   name(value) {
    //     if (typeof value === "string" && value !== "") {
    //       return true;
    //     }
    //   },
    //   email(value) {
    //     let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     if (typeof value === "string" && re.test(value)) {
    //       return true;
    //     }
    //     return "YOU MUST WRITE YOUR EMAIL, BOY!!!";
    //   },
    //   street(value) {
    //     if (value !== "") {
    //       return true;
    //     }
    //     return "YOU MUST WRITE YOUR STREET, BOY!!!";
    //   },
    //   city(value) {
    //     if (typeof value === "string" && value !== "") {
    //       return true;
    //     }
    //     return "YOU MUST WRITE YOUR CITY, BOY!!!";
    //   },
    //   zip(value) {
    //     if (typeof value === "string" && value !== "") {
    //       return true;
    //     }
    //     return "YOU MUST WRITE YOUR ZIP, BOY!!!";
    //   },
    // };
    const formSchema = {
      name: "name",
      email: "email",
      street: "street",
      city: "city",
      zip: "zip",
    };
    return {
      name: this.fake.name ? this.fake.name : "",
      email: this.fake.email ? this.fake.email : "",
      street: this.fake.street ? this.fake.street : "",
      city: this.fake.city ? this.fake.city : "",
      zip: this.fake.zip ? this.fake.zip : "",
      formSchema,
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
</style>