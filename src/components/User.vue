<template>
  <tr>
    <td>{{ fake.name }}</td>
    <td>{{ fake.email }}</td>
    <td>{{ fake.street }}</td>
    <td>{{ fake.city }}</td>
    <td>{{ fake.zip }}</td>
  </tr>
</template>

<script>
export default {
  name: "User",
  props: {
    fake: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
</style>