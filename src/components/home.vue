<template>
    <div id="home">
        <app-header :title="title" v-on:changeTile="updateTitle($event)"></app-header>
        <users :users="users"></users>
<!--        <users :users="users"></users>-->
        <app-footer :title="title"></app-footer>
    </div>
</template>

<script>

    import users from './users'
    import header from './header'
    import foot from './foot'


    export default {
        name: 'home',
        data() {
            {
                return {
                    users: [
                        // {name:"高凯",position:"软件开发工程师",show:false},
                        // {name:"高凯",position:"软件开发工程师",show:false},
                        // {name:"高凯",position:"软件开发工程师",show:false},
                        // {name:"高凯",position:"软件开发工程师",show:false},
                        // {name:"高凯",position:"软件开发工程师",show:false},
                        // {name:"高凯",position:"软件开发工程师",show:false}
                    ],
                    //传值改变父组件或者子组件，父组件和子组件的值互不影响，引用的话，都会改变
                    title: '这是一个title,(String number,boolean)'
                }
            }
        },
        methods: {
            updateTitle(title) {
                this.title = title
            }
        },
        components: {
            users,
            'app-header': header,
            'app-footer': foot
        },
        created() {
            this.$http.get("http://jsonplaceholder.typicode.com/users")
                .then((data) => {
                    this.users=data.body
                    // console.log(data);
                })
        }

    }
</script>

<style>

</style>
