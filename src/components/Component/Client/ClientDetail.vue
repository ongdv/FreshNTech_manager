<template>
    <div style="overflow-y:scroll">
        <div style="width:90%;margin:1% auto;">
            <div><span class="h2">거래처 정보 수정</span> <button class="d-inline btn btn-outline-danger float-right" @click="deleteGoods">삭제</button></div>
                <hr />
                <table class="table">
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            거래처명
                        </th>
                        <td>
                            <!-- <b-form-select v-model="item.tbCustomer_ID" :options="$store.state.clientName"></b-form-select> -->
                            <b-form-input v-model="item.bName" placeholder="거래처명"></b-form-input>
                        </td>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            사업자 등록번호
                        </th>
                        <td>
                            <!-- <b-form-select v-model="item.bName" :options="purchase"></b-form-select> -->
                            <b-form-input v-model="item.bNumber" placeholder="상품명"></b-form-input>
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
                            할인/할증
                        </th>
                        <td>
                            <b-form-input v-model="item.priceRate" type="number" placeholder="할인율"></b-form-input>
                        </td>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            업종
                        </th>
                        <td>
                            <b-form-input v-model="item.bSector" placeholder="업종"></b-form-input>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            아이디(대표자 연락처)
                        </th>
                        <td>
                            <b-form-input v-model="item.userID"  placeholder="아이디(자동생성)"></b-form-input>
                        </td>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            패스워드
                        </th>
                        <td>
                            <b-form-input v-model="item.userPW" placeholder="패스워드"></b-form-input>
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
                <h2>배송/영업 담당자 정보</h2>
                <hr />
                <table class="table">
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            배송 담당자
                        </th>
                        <td>
                            <b-form-select v-model="item.tbDeliverer_ID" :options="delivererList"></b-form-select>
                        </td>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            영업 담당자
                        </th>
                        <td>
                            <b-form-select v-model="item.salesman_ID" :options="salesmanList"></b-form-select>
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
        name: "ClientDetail",
        computed: {
            item(){
                return this.$store.state.client;
            },
            delivererList(){
                return this.$store.state.delivererList;
            },
            salesmanList(){
                return this.$store.state.salesmanList;
            }
        },
        data() {
            return {
                
            }
        },
        methods: {
            reqUpdate(){
                this.$store.dispatch(Constant.UPDATE_CLIENT, this.item);
            },
            cancel() {
                this.$store.commit(Constant.CHANGE_PAGE, {component: "client"})
            },
            deleteGoods() {
                this.$store.dispatch(Constant.DELETE_CLIENT, this.client.id);
            }
        },
    }
</script>
