import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
// import 'vue2-dropzone/dist/vue2Dropzone.css'
import store from './store/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import "dropzone/dist/dropzone.css"

createApp(App).use(store, axios, VueAxios).mount('#app')
