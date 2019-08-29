<template>
    <div id="app">

        <li><router-link to="/">home</router-link></li>
        <li><router-link to="/helloWord">helloWord</router-link></li>
        <router-view></router-view>
    </div>
</template>

<script>




    export default {
        name: 'app',
        data() {

        },
        methods: {},


    }
</script>

<style>

</style>
