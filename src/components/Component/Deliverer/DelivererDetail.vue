<template>
    <div style="overflow-y:scroll">
        <div style="width:90%;margin:1% auto;">
            <div><span class="h2">배송자 정보</span> <button class="d-inline btn btn-outline-danger float-right" @click="deleteDeliverer">삭제</button></div>
                <hr />
                <table class="table">
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            배송자명
                        </th>
                        <td>
                            <!-- <b-form-select v-model="item.tbCustomer_ID" :options="$store.state.clientName"></b-form-select> -->
                            <b-form-input v-model="item.bname" placeholder="배송자명"></b-form-input>
                        </td>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            사업자 등록번호
                        </th>
                        <td>
                            <!-- <b-form-select v-model="item.bName" :options="purchase"></b-form-select> -->
                            <b-form-input v-model="item.bnumber" placeholder="사업자 등록번호"></b-form-input>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            대표자명
                        </th>
                        <td>
                            <b-form-input v-model="item.chief" placeholder="대표자명"></b-form-input>
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
                            담당자명
                        </th>
                        <td>
                            <b-form-input v-model="item.manager" placeholder="담당자명"></b-form-input>
                        </td>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            담당자 전화번호
                        </th>
                        <td>
                            <b-form-input v-model="item.mobile" placeholder="담당자 전화번호"></b-form-input>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            FAX 번호
                        </th>
                        <td>
                            <b-form-input v-model="item.fax" type="number" placeholder="FAX번호"></b-form-input>
                        </td>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            업종
                        </th>
                        <td>
                            <b-form-input v-model="item.bsector" placeholder="업종"></b-form-input>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            아이디(대표자 연락처)
                        </th>
                        <td>
                            <b-form-input v-model="item.userID"  placeholder="아이디(자동생성)"></b-form-input>
                        </td>
                        <th class="text-center align-middle"  style="background: rgba(241,241,241);">
                            패스워드
                        </th>
                        <td>
                            <b-form-input v-model="item.userPW" type="password" placeholder="패스워드"></b-form-input>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            주소
                        </th>
                        <td colspan="3">
                            <b-form-input v-model="item.postNo" placeholder="우편번호"></b-form-input>
                            <br>
                            <b-form-input v-model="item.address1" placeholder="시/도"></b-form-input>
                            <br>
                            <b-form-input v-model="item.address2" placeholder="도로명 주소"></b-form-input>
                            <br>
                            <b-form-input v-model="item.address3" placeholder="상세 주소"></b-form-input>
                        </td>
                    </tr>
                </table>
                
                <div class="text-center">
                    <b-button class="btn btn-success w-25" @click="reqUpdate">수정</b-button>
                    <b-button class="btn btn-warning w-25" @click="cancel">목록으로</b-button>
                </div>
            </div>
    </div>
</template>

<script>
    import Constant from '../../../Constant';
    
    export default {
        name: "DelivererDetail",
        components: {

        },
        computed: {
            item(){
                return this.$store.state.deliverer;
            }
        },
        methods: {
            reqUpdate(){
                this.$store.dispatch(Constant.UPDATE_DELIVERER, this.item);
            },
            cancel() {
                this.$store.commit(Constant.CHANGE_PAGE, {component: "Deliverer"})
            },
            deleteDeliverer() {
                this.$store.dispatch(Constant.DELETE_DELIVERER, this.item.id);
            }
        },
        mounted() {
            console.log(this.item);
        },
    }
</script>
