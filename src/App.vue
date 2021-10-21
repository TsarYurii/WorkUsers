<template>
  <users />
</template>

<script>
import Users from "./components/Users.vue";
export default {
  name: "App",
  components: {
    Users,
  },
  data() {
    return {
      dataImgSrc: "",
    };
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
  margin-top: 30px;
}
</style>
