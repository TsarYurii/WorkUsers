import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import store from './store/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import "dropzone/dist/dropzone.css"
// import 'dropzone-vue/dist/dropzone-vue.common.css'
// import DropZone from 'dropzone-vue'

createApp(App).use(store, axios, VueAxios).mount('#app')
