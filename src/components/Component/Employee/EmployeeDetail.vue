<template>
    <div style="overflow-y:scroll">
        <div style="width:90%;margin:1% auto;">
                <div><span class="h2">직원 정보 수정</span> <button class="d-inline btn btn-outline-danger float-right" @click="deleteEmployee">삭제</button></div>
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
    </div>
</template>

<script>
    import Constant from '../../../Constant.js';
    export default {
        name: "EmployeeDetail",
        computed: {
            item() {
                return this.$store.state.employee;
            }
        },
        data() {
            return {
                roleList: [
                    {
                        text: "관리자",
                        value: "관리자"
                    },
                    {
                        text: "영업",
                        value: "영업"
                    }
                ],
                permitList: [
                    {
                        text: "권한 없음",
                        value: "N"
                    },
                    {
                        text: "읽기만",
                        value: "R"
                    },
                    {
                        text: "읽기/쓰기",
                        value: "W"
                    }
                ]
            }
        },
        methods: {
            reqRegister(){
                this.$store.dispatch(Constant.UPDATE_EMPLOYEE, this.item);
            },
            cancel(){
                this.$store.commit(Constant.CHANGE_PAGE, {component: "Employee"});
            },
            deleteEmployee(){
                this.$store.dispatch(Constant.DELETE_EMPLOYEE, this.item.id);
            }
        },
    }
</script>

<style scoped>

</style>