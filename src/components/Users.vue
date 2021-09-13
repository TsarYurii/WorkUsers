<template>
<div class="container">
    <div class="d-flex justify-content-between">
        <input type="text" placeholder="Search">
        <button class="btn btn-warning">New user</button>
    </div>    
    <table class="table table-striped mt-5">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Street</th>
                <th>City</th>
                <th>Zip</th>
            </tr>
        </thead>
        <tbody>
            <user/>
            <user/>
            <user/>
            <user/>
            <user/>
        </tbody>
    </table>
</div>    
</template>

<script>
import User from './User.vue'
export default {
    components: {
    User
  }
}
</script>

<style>

</style>