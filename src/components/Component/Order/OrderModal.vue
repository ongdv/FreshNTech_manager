<template>
    <div class="d-inline float-right">
        <b-button v-b-modal.modal-1 variant="transparent" class="btn-outline-secondary">주문 등록</b-button>
        <b-modal id="modal-1" size="xl" title="주문 등록" hide-footer="" ref="modal-1"
        centered footer-class="m-auto" >
            <div style="width:90%;margin:1% auto;">
                <h2>주문 정보</h2>
                <hr />
                <table class="table">
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            거래처 선택
                        </th>
                        <td colspan="3">
                            <b-form-select v-model="item.tbCustomer_ID" :options="clientList"></b-form-select>
                            <!-- <b-form-input v-model="item.bname" placeholder="매입처 이름"></b-form-input> -->
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            결제수단
                        </th>
                        <td>
                            <b-form-select v-model="item.payment" :options="payment"></b-form-select>
                            <!-- <b-form-input v-model="item.manager" placeholder="대표자 명"></b-form-input> -->
                        </td>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            배송 요청일
                        </th>
                        <td>
                            <b-form-input v-model="item.orderDate" type="date" placeholder="대표자 전화번호"></b-form-input>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            요청사항
                        </th>
                        <td colspan="3">
                            <b-form-textarea
                                v-model="item.requests"
                                placeholder="요청사항"
                                rows="2" />
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
                                rows="2" />
                        </td>
                    </tr>
                </table>
                <GoodsTable 
                    :list="goodsList"
                    :fields="fields"
                    :rows="rows"
                    :selcet="'multi'"
                    @rowSelected="rowSelected"
                />
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
    import GoodsTable from './OrderGoodsTable.vue';
    export default {
        name: "OrderModal",
        props: ["info"],
        components: {
            GoodsTable
        },
        computed: {
            item(){
                var data = Object.assign({}, this.$store.state.orderItem);
                return data;
            },
            clientList() {
                var data = [];
                this.$store.state.clientList.forEach(element => {
                    data.push({text: element.bname, value:element.id});
                });
                return data;
            },
            goodsList() {
                return this.$store.state.goodsList
            },
            rows(){
                return this.$store.state.goodsList.length;
            },
            fields() {
                return this.$store.state.goodsFields;
            }
        },
        data() {
            return {
                payment: [
                    {
                        text: "현금결제",
                        value: "현금결제",
                    },
                    {
                        text: "신용카드",
                        value: "신용카드",
                    },
                ],
                orderList: []
            }
        },
        methods: {
            reqRegister(){
                console.log(this.item);
                var postData = this.item;
                postData.pmOrderItamVOs = this.orderList;
                this.$store.dispatch(Constant.INSERT_ORDER, postData);
                this.$refs['modal-1'].hide();
            },
            cancel() {
                this.$refs['modal-1'].hide()
                Object.assign(this.item, this.$store.state.providerItem);
            },
            rowSelected(item) {
                console.log(item[0]);
                item[0].tbItem_ID = item[0].id
                item[0].state = "결제대기"
                this.orderList.push(item[0]);
            }
        },
    }
</script>
