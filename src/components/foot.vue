<template>
    <footer>
        <p>{{copyright}}{{title}}</p>
    </footer>
</template>

<script>
    export default {
        name: 'foot',
        props:{
            title:{
                type:String,
                required:true
            }
        },
        data() {
            return {
                copyright: 'copyright 2019 VUE demo'
            }
        }
    }
</script>

<style scoped>
    footer {
        background: #222222;
        padding: 6px;
    }

    p {
        color: lightblue;
        text-align: center;
    }
</style>
