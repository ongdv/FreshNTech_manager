<template>
    <div id="app" class="bg-dark">
        <div class="w-25 text-center m-auto">
            <img src="@/assets/logo2.png" alt="logo" style="margin-top: 50%;margin-bottom:10%">
            <Login />
        </div>
    </div>
</template>

<script>
    import {Login} from '../Component'
    export default {
        name: "Auth",
        components: {
            Login
        },
        data() {
            return {
                thisHeight: window.innerHeight,
            }
        }
    }
</script>

<style scoped>
    
</style>