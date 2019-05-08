<template>
    <div class="d-inline float-right">
        <b-button v-b-modal.modal-1 variant="transparent" class="btn-outline-secondary">직원 등록</b-button>
        <b-modal id="modal-1" size="xl" title="직원 등록" hide-footer="" ref="modal-1"
        centered footer-class="m-auto" >
            <div style="width:90%;margin:1% auto;">
                <h2>직원 정보</h2>
                <hr />
                <table class="table">
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            직원 이름
                        </th>
                        <td>
                            <!-- <b-form-select v-model="item.tbCustomer_ID" :options="$store.state.clientName"></b-form-select> -->
                            <b-form-input v-model="item.name" placeholder="직원이름"></b-form-input>
                        </td>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            구분
                        </th>
                        <td>
                            <b-form-select v-model="item.role" :options="roleList"></b-form-select>
                            <!-- <b-form-select v-model="item.bName" :options="purchase"></b-form-select> -->
                            <!-- <b-form-input v-model="item.role" placeholder="구분"></b-form-input> -->
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            아이디(연락처)
                        </th>
                        <td>
                            <b-form-input v-model="item.userID" type="number" placeholder="아이디(연락처)"></b-form-input>
                        </td>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            패스워드
                        </th>
                        <td>
                            <b-form-input v-model="item.userPW" type="password" placeholder="패스워드"></b-form-input>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            상품 관리 권한
                        </th>
                        <td>
                            <b-form-select v-model="item.itemAccess" :options="permitList"></b-form-select>
                        </td>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            거래처 관리 권한
                        </th>
                        <td>
                            <b-form-select v-model="item.customerAccess" :options="permitList"></b-form-select>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            공급자 관리 권한
                        </th>
                        <td>
                            <b-form-select v-model="item.providerAccess" :options="permitList"></b-form-select>
                        </td>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            배송자 관리 권한
                        </th>
                        <td>
                            <b-form-select v-model="item.delivererAcces" :options="permitList"></b-form-select>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            주문 관리 권한
                        </th>
                        <td>
                            <b-form-select v-model="item.orderAccess" :options="permitList"></b-form-select>
                        </td>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            발주 관리 권한
                        </th>
                        <td>
                            <b-form-select v-model="item.purchaseAccess" :options="permitList"></b-form-select>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            공지 관리 권한
                        </th>
                        <td>
                            <b-form-select v-model="item.noticeAccess" :options="permitList"></b-form-select>
                        </td>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            정산 관리 권한
                        </th>
                        <td>
                            <b-form-select v-model="item.paymentAccess" :options="permitList"></b-form-select>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            비고
                        </th>
                        <td colspan="3">
                            <b-form-textarea
                                v-model="item.remark1"
                                placeholder="비고란1"
                                rows="1" />
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            메모
                        </th>
                        <td colspan="3">
                            <b-form-textarea
                                v-model="item.memo"
                                placeholder="메모"
                                rows="1" />
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
        name: "Client",
        props: ["info"],
        computed: {
            item(){
                var data = Object.assign({}, this.$store.state.employeeItem);
                return data;
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
                roleList: [
                    {
                        text: "관리자",
                        value: "admin"
                    },
                    {
                        text: "영업",
                        value: "sales"
                    }
                ],
                permitList: [
                    {
                        text: "권한 없음",
                        value: "n"
                    },
                    {
                        text: "읽기만",
                        value: "r"
                    },
                    {
                        text: "읽기/쓰기",
                        value: "w"
                    }
                ]
            }
        },
        methods: {
            reqRegister(){
                console.log(this.item);
                this.$store.dispatch(Constant.INSERT_EMPLOYEE, this.item);
                this.$refs['modal-1'].hide();
            },
            cancel() {
                this.$refs['modal-1'].hide()
                Object.assign(this.item, this.$store.state.clientItem);
            }
        },
    }
</script>
