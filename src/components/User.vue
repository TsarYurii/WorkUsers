<template>
    <tr>
        <td>{{fake.name}}</td>
        <td>{{fake.email}}</td>
        <td>Street</td>
        <td>City</td>
        <td>zip</td>
    </tr>
</template>

<script>
export default {
    name: "User",
    props: {
        fake: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style>

</style>