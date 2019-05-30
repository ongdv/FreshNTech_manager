<template>
    <div id="app" class="bg-dark">
        <div class="w-25 text-center m-auto">
            <img src="@/assets/logo2.png" alt="logo" style="margin-top: 50%;margin-bottom:10%">
            <div class="bg-white w-100" style="padding:5%;">
                <p >Error Code: {{error}}</p>
                <p>
                    <Button class="btn btn-danger" @click="returnPage">
                        return
                    </Button>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import Constant from '../../Constant';
    export default {
        name: "Error",
        computed: {
            error() {
                return this.$store.state.err;
            }
        },
        methods: {
            returnPage() {
                this.$store.commit(Constant.LOGOUT);
            }
        },
    }
</script>

<style scoped>
    
</style>