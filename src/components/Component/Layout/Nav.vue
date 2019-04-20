<template>
    <div>
        <div class="bg-dark w-100 text-white">
            <div class="d-inline-block text-center" style="width:15%;cursor:pointer;" @click="changePage">
                <img src="@/assets/logo2.png" width="100" class="m-auto" alt="logo">
            </div>
            <div class="d-inline-block text-right" style="width:80%;">
                <button class="bg-transparent border-0"><strong>{{user.username}}</strong> 님</button>
                <button class="bg-transparent border-0" @click="logout">로그아웃</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Constant from '../../../Constant.js';
    export default {
        name: "Nav",
        computed: {
            user(){
                return this.$store.state.user;
            }
        },
        methods: {
            logout(){
                this.$store.commit(Constant.LOGOUT);
            },
            changePage(){
                this.$store.commit(Constant.CHANGE_PAGE, {component: "Main"})
            }
        },
    }
</script>

<style scoped>

</style>