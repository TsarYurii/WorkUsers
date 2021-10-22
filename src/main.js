import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import store from './store/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import "animate.css"
import i18n from './i18n'


import { defineRule, configure } from 'vee-validate'
import { localize } from '@vee-validate/i18n'


import config from './config.yml' 
// import config from './config'       // extension can be omitted
console.log(config)                 // { "apiKey": "abcd" }
 
import { apiKey } from '@/config'   // Using @ alias for src
console.log(apiKey)                 // "abcd"


configure({
    generateMessage: localize({
        en: {
            messages: {
                name: "Please enter name",
                email: "Please enter email",
                street: "Please enter the street",
                city: "Please enter the city",
                zip: "Please enter Zip"
            },
        },
        ru: {
            messages: {
                name: "Пожалуйста, введите имя",
                email: "Пожалуйста, введите эл. почту",
                street: "Пожалуйста, введите улицу",
                city: "Пожалуйста, введите город",
                zip: "Пожалуйста, введите Zip"
            },
        },
        pl: {
            messages: {
                name: "Proszę podać imię",
                email: "Proszę podać poczta",
                street: "Proszę podać ulicę",
                city: "Proszę podać miasto",
                zip: "Proszę podać Zip"
            }
        }
    }),
});


defineRule('name', value => {
    if (typeof value === "string" && value !== "") {
        return true;
    }
})
defineRule('email', value => {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (typeof value === "string" && re.test(value)) {
        return true;
    }
})
defineRule('street', value => {
    if (value !== "") {
        return true;
    }
})
defineRule('city', value => {
    if (typeof value === "string" && value !== "") {
        return true;
    }
})
defineRule('zip', value => {
    if (typeof value === "string" && value !== "") {
        return true;
    }
})



createApp(App).use(i18n).use(store, axios, VueAxios).mount('#app')
