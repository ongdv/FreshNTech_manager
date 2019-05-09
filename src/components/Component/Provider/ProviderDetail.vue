<template>
    <div style="width:90%;margin:1% auto;">
        <div><span class="h2">매입처 정보</span> <button class="d-inline btn btn-outline-danger float-right" @click="deleteProvider">삭제</button></div>
        <hr />
        <table class="table">
            <tr>
                <th class="text-center align-middle" style="background: rgba(241,241,241);">
                    매입처 이름
                </th>
                <td>
                    <!-- <b-form-select v-model="item.tbCustomer_ID" :options="$store.state.clientName"></b-form-select> -->
                    <b-form-input v-model="item.bname" placeholder="매입처 이름"></b-form-input>
                </td>
                <th class="text-center align-middle" style="background: rgba(241,241,241);">
                    사업자 등록번호
                </th>
                <td>
                    <!-- <b-form-select v-model="item.role" :options="roleList"></b-form-select> -->
                    <!-- <b-form-select v-model="item.bName" :options="purchase"></b-form-select> -->
                    <b-form-input v-model="item.bnumber" placeholder="사업자 등록번호"></b-form-input>
                </td>
            </tr>
            <tr>
                <th class="text-center align-middle" style="background: rgba(241,241,241);">
                    대표자 명
                </th>
                <td>
                    <b-form-input v-model="item.manager" placeholder="대표자 명"></b-form-input>
                </td>
                <th class="text-center align-middle" style="background: rgba(241,241,241);">
                    대표자 전화번호
                </th>
                <td>
                    <b-form-input v-model="item.tel" placeholder="대표자 전화번호"></b-form-input>
                </td>
            </tr>
            <tr>
                <th class="text-center align-middle" style="background: rgba(241,241,241);">
                    업종/업태
                </th>
                <td>
                    <b-form-input v-model="item.bsector" placeholder="업종/업태"></b-form-input>
                </td>
                <th class="text-center align-middle" style="background: rgba(241,241,241);">
                    FAX 번호
                </th>
                <td>
                    <b-form-input v-model="item.fax" placeholder="FAX 번호"></b-form-input>
                </td>
            </tr>
            <tr>
                <th class="text-center align-middle" style="background: rgba(241,241,241);">
                    주소
                </th>
                <td colspan="3">
                    <b-form-input v-model="item.postno" placeholder="우편번호"></b-form-input>
                    <b-form-input v-model="item.address1" placeholder="광역시/도"></b-form-input>
                    <b-form-input v-model="item.address2" placeholder="도로명"></b-form-input>
                    <b-form-input v-model="item.address3" placeholder="상세주소"></b-form-input>
                </td>
            </tr>
        </table>
        <hr>
        
        <div class="text-center">
            <b-button class="btn btn-success w-25" @click="reqRegister">수정</b-button>
            <b-button class="btn btn-warning w-25" @click="cancel">목록으로</b-button>
        </div>
    </div>
</template>

<script>
    import Constant from '../../../Constant.js';
    export default {
        name: "ProviderDetail",
        computed: {
            item() {
                return this.$store.state.provider;
            }
        },
        methods: {
            reqRegister() {
                this.$store.dispatch(Constant.UPDATE_PROVIDER, this.item);
            },
            cancel() {
                this.$store.commit(Constant.CHANGE_PAGE, {component:"Provider"});
            },
            deleteProvider() {
                this.$store.dispatch(Constant.DELETE_PROVIDER, this.item.id);
            }
        },
    }
</script>

<style scoped>

</style>