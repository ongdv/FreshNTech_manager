<template>
    <div>
        <b-form @submit="onSubmit" align="center">
            <b-form-input id="userid"
                        type="text"
                        v-model="form.userid"
                        class="w-80 mx-auto"
                        required
                        placeholder="사용자코드">
            </b-form-input>
            <b-form-input id="userpw"
                        type="password"
                        v-model="form.userpw"
                        class="w-80 mx-auto mt-3"
                        required
                        placeholder="비밀번호">
            </b-form-input>
            
            <b-button type="submit" size="lg"
            style="background: #00b09b; background: linear-gradient(to left, #96c93d, #00b09b); boder:none;"
            class="w-25 mt-4 border-0" >
            로그인</b-button>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                form: {
                    userid: '',
                    userpw: ''
                },
            }
        },
        methods: {
            onSubmit () {
                console.log(this.form);
                if(this.form.userid === "admin" && this.form.userpw === "admin"){
                    var auth = {
                        isAuth: true,
                        username: "관리자",
                        user_id: "pm000001"
                    }
                    this.$store.state.user = auth;
                    alert(this.$store.state.user.username + "님 환영합니다.");
                    this.$router.push('vendor')
                }else{
                    alert("사용자코드 혹은 비밀번호를 확인해주세요.");
                    this.form.userid = "";
                    this.form.userpw = "";
                }
                
            },
        },
    }
</script>

<style scoped>

</style>