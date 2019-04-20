<template>
    <div>
        <form class="form-group text-center">
            <input type="text" class="w-80 form-control mx-auto mt-3" placeholder="사용자코드" v-model="form.id">
            <input type="password" class="w-80 form-control mx-auto mt-3" placeholder="비밀번호" v-model="form.pw">
            <button 
                @click="onSubmit"
                class="w-25 mt-4 border-0 btn btn-lg text-white font-weight-bold"
                style="background: #00b09b; background: linear-gradient(to left, #96c93d, #00b09b); boder:none;"
            >로그인</button>
        </form>
    </div>
</template>

<script>
    import Constant from '../../../Constant.js';
    export default {
        name: "Login",
        data() {
            return {
                form: {
                    id: '',
                    pw: ''
                },
            }
        },
        methods: {
            onSubmit (e) {
                e.preventDefault();
                
                // console.log("activeLogin");
                this.$store.dispatch(Constant.LOGIN, {form: this.form});
            },
        },
    }
</script>

<style scoped>

</style>