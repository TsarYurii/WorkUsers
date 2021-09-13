<template>
    <div class="container">
        <h1>User</h1>
        <form>
            <div class="mb-3">
                <input type="text" class="form-control" placeholder="Name">
            </div>
            <div class="mb-3">
                <input type="text" class="form-control" placeholder="Email">
            </div>
            <div class="mb-3">
                <input type="text" class="form-control" placeholder="Street">
            </div>
            <div class="mb-3">
                <input type="text" class="form-control" placeholder="City">
            </div>
            <div class="mb-3">
                <input type="text" class="form-control" placeholder="Zip">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .box{
        display: flex;
        flex-wrap: wrap;
    }
    
</style>