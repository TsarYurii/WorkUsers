import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import store from './store/store'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(store, axios, VueAxios).mount('#app')
