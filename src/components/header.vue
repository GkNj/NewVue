<template>
    <header @click="change">
        <h1>{{title1}}{{title}}</h1>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        props: {
            title: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                title1: 'header'
            }
        },
        methods: {
            change: function () {
                // this.title="哈哈哈"
                this.$emit("changeTile", '我在考虑子组件向父组件传值')
            },
        }
        // beforeCreate: function () {
        //     alert("组件实例化之前的函数")
        // },
        // created: function () {
        //     alert('组件实例化完毕，页面没有显示')
        // },
        // beforeMount: function () {
        //     alert('组件挂载前，页面仍未显示，但是虚拟Dom已经配置')
        // },
        // mounted: function () {
        //     alert('组件挂载，方法执行后，页面显示')
        // },
        // beforeUpdate: function () {
        //     alert('组件更新前，页面还没更新，但虚拟Dom已经配置')
        // },
        // updated: function () {
        //     alert('组件更新，方法执行后，页面显示')
        // },
        // beforeDestroy: function () {
        //     alert('组件销毁前')
        // },
        // destroyed: function () {
        //     alert('组件销毁')
        // }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    header {
        background: lightblue;
        padding: 10px;
    }

    h1 {
        color: #333;
        text-align: center;
    }
</style>
