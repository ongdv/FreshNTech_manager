<template>
    <div class="d-inline float-right">
        <b-button v-b-modal.modal-1 variant="transparent" class="btn-outline-secondary">거래처 등록</b-button>

        <b-modal id="modal-1" size="xl" :title="info.title" hide-footer="" ref="modal-1"
        centered footer-class="m-auto" >
            <div style="width:90%;margin:1% auto;">
                <h2>거래처 정보</h2>
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
                    <b-button class="btn btn-success w-25" @click="reqOrder">등록</b-button>
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
                var data = Object.assign({}, this.$store.state.clientItem);
                return data;
            },
            delivererList(){
                var data = [];
                this.$store.state.delivererList.forEach(element => {
                    data.push({text: element.bname, value: element.id})
                });
                return data;
            },
            salesmanList() {
                var data = [];
                this.$store.state.employeeList.forEach(element => {
                    data.push({text: element.name, value: element.id})
                });
                return data;
            }
        },
        data() {
            return {
            
            }
        },
        methods: {
            reqOrder(){
                console.log(this.item);
                this.$store.dispatch(Constant.INSERT_CLIENT, this.item);
                
                this.$refs['modal-1'].hide();
            },
            cancel() {
                this.$refs['modal-1'].hide()
                Object.assign(this.item, this.$store.state.clientItem);
            }
        },
    }
</script>
