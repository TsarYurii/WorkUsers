<template>
    <!-- <div class="container">
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
    </div> -->
    <div class="simple-modal">
    <div class="simple-modal-backdrop" @click="showModal">
      <div class="simple-modal-container">
        <div class="simple-modal-content" @click.stop>
          <header class="simple-modal-header">
            New User
          </header>
          <section class="simple-modal-body">
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
        </form>
          </section>
          <footer class="simple-modal-footer">
            <button type="buttom" class="btn btn-primary">Add User</button>
            <button type="button" class="btn btn-danger mt-3" @click="showModal">Close</button>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
    name: "NewUser",
    methods: mapActions(["showModal"])
}
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