<template>
    <ul class="list-group list-group-horizontal">
        <button class="list-group-item list-group-item-action" v-for="locale in locales" :key="locale" @click="switchLocale(locale)"
            :class="{
                'list-group-item-warning' : this.$i18n.locale === locale,
            }"
        >
            {{locale}}
        </button>
    </ul>
</template>

<script>
export default {
    name: "LocaleSwitcher",
    data(){
        return{
            locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
        }
    },
    methods: {
        switchLocale(locale){
            if (this.$i18n.locale !== locale){
                this.$i18n.locale = locale;
            }
            // console.log(locale)
            // console.log(this.locales)
        }
    }
}
</script>

<style>

</style>

