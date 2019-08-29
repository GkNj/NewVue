<template>
    <div class="users">
        <h1>hello users</h1>
        <ul>
            <li v-for="user in users"  :key="user.index">
                <p>{{user.name}}</p>
                <p>{{user.email}}</p>
            </li>
        </ul>
        <button @click="deleteUsers">删除</button>
    </div>
</template>

<script>
    export default {
        name: 'users',
        // props:['users'],
        props: {
            users: {
                type: Array,
                required: true
            }
        },
        data() {
            return {}
        },
        methods:{
            deleteUsers :function () {
                this.users.pop()
            }
        }
    }
</script>


<style scoped>
    .users {
        width: 100%;
        max-width: 1200px;
        margin: 40px auto;
        padding: 0 20px;
        box-sizing: border-box;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
    }

    li {
        flex-grow: 1;
        flex-basis: 200px;
        text-align: center;
        padding: 30px auto;
        border: 1px solid #222;
        margin: 10px;
    }
</style>
