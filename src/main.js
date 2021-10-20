import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import store from './store/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import "animate.css"
import i18n from './i18n'


createApp(App).use(i18n).use(store, axios, VueAxios).mount('#app')
