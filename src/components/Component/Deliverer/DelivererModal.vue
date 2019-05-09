<template>
    <div class="d-inline float-right">
        <b-button v-b-modal.modal-2 variant="transparent" class="btn-outline-secondary">배송팀 등록</b-button>

        <b-modal id="modal-2" size="xl" hide-footer="" ref="modal-2"
        centered footer-class="m-auto" >
            <div style="width:90%;margin:1% auto;">
                <h2>배송팀 정보</h2>
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
                    <b-button class="btn btn-success w-25" @click="reqRegister">등록</b-button>
                    <b-button class="btn btn-warning w-25" @click="cancel">취소</b-button>
                </div>
            </div>
            
        </b-modal>
    </div>
</template>

<script>
import Constant from '../../../Constant';
    export default {
        name: "DeliverModal",
         computed: {
            item(){
                return this.$store.state.delivererItem;
            },
            delivererList(){
                return this.$store.state.delivererList;
            },
            salesmanList(){
                return this.$store.state.salesmanList;
            }
        },
        methods: {
            reqRegister(){
                console.log(this.item);
                this.$store.dispatch(Constant.INSERT_DELIVERER, this.item);
                this.$refs['modal-2'].hide();
            },
            cancel() {
                this.$refs['modal-2'].hide()
                Object.assign(this.item, this.$store.state.deliverer);
            },
            
        },

        
    }
</script>

<style>

</style>