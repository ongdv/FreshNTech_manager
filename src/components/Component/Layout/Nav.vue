<template>
    <div>
        <div class="bg-dark w-100">
            <div class="d-inline-block text-center" style="width:15%;">
                <router-link to="/vendor">
                    <img src="@/assets/logo2.png" width="100" class="m-auto" alt="logo">
                </router-link>
            </div>
            <div class="d-inline-block text-right" style="width:80%;">
                <b-button class="bg-transparent border-0"><strong>{{this.$store.state.user.username}}</strong> 님</b-button>
                <b-button class="bg-transparent border-0" to="#" @click="logout">로그아웃</b-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Nav",
        methods: {
            logout(){
                this.$store.state.user = {};
                this.$router.push('/');
            }
        },
    }
</script>

<style scoped>

</style>