<template>
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
                <b-list-group>
                    <b-list-group-item>주문 상품 목록<order-modal @rowSelected="rowSelected"/>
                    </b-list-group-item>
                    <template v-for="(item, index) in orderList"> 
                        <b-list-group-item>
                            <b-media tag="li">
                                <table class="table w-100 border-0 text-center">
                                    <!-- {{item}} -->
                                    <tr class="w-100">
                                        <td class="w-25">
                                            <b-img slot="aside" blank blank-color="#abc" width="64" alt="placeholder"></b-img>
                                        </td>
                                        <td class="w-50">
                                            {{item.itemName}}
                                        </td>
                                        <td class="w-50">
                                                <b-button-group>
                                                <b-button @click="decrement(item.id)">-</b-button>
                                                <b-button>{{item.tbOrderItemQTY}}</b-button>
                                                <b-button @click="increment(item.id)">+</b-button>
                                                </b-button-group>
                                        </td>
                                        <td class="w-25">
                                            {{item.price1 * item.tbOrderItemQTY}}
                                        </td>
                                    </tr>
                                </table>
                            </b-media>
                        </b-list-group-item>      
                    </template>
                </b-list-group>
                <table class="table">
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            총 갯수
                        </th>
                        <td colspan="3">
                            <!-- <b-form-select v-model="item.tbCustomer_ID" :options="clientList"></b-form-select> -->
                            <b-form-input v-model="qty"></b-form-input>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            총액
                        </th>
                        <td colspan="3">
                            <!-- <b-form-select v-model="item.tbCustomer_ID" :options="clientList"></b-form-select> -->
                            <b-form-input v-model="total"></b-form-input>
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
    import Constant from '../../../Constant';
    import GoodsTable from './OrderGoodsTable.vue';
    import OrderModal from './OrderModal.vue';
    export default {
        name: "OrderTask",
        props: ["info"],
        components: {
            GoodsTable,
            OrderModal
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
                return this.$store.state.goodsList;
            },
            rows(){
                return this.$store.state.goodsList.length;
            },
            fields() {
                return this.$store.state.goodsFields;
            },
            total() {
                if(this.orderList.length === 0){
                    return 0;
                }
                var total =0
                this.orderList.forEach(item => {
                    total += parseInt(item.price1);
                })
                return total;
            },
            qty() {
                var total =0
                this.orderList.forEach(item => {
                    total += parseInt(item.tbOrderItemQTY);
                })
                return this.orderList.length;
            },
            orderList(){
                return this.order;
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
                order: [],
                cnt:0
            }
        },
        methods: {
            reqRegister(){
                console.log(this.item);
                var postData = this.item;
                postData.pmOrderItamVOs = this.orderList;
                console.log(this.orderList);
                postData.amount = this.total;
                postData.itemCount = this.qty;
                this.$store.dispatch(Constant.INSERT_ORDER, postData);
                this.$refs['modal-1'].hide();
            },
            cancel() {
                this.$refs['modal-1'].hide()
                Object.assign(this.item, this.$store.state.providerItem);
            },
            rowSelected(item) {
                item[this.cnt].tbItem_ID = item[this.cnt].id;
                item[this.cnt].tbOrderItemQTY = 1;
                this.orderList.push(item[this.cnt]);
                this.cnt++;
                console.log(this.orderList);
            },
            increment(item) {
                this.orderList.forEach(element => {
                    if(item === element.id){
                        element.tbOrderItemQTY++;
                        return;
                    }
                });
                this.$forceUpdate();
            },
            decrement(item) {
                this.orderList.forEach(element => {
                    if(item === element.id){
                        element.tbOrderItemQTY--;
                        return;
                    }
                    
                });
                this.$forceUpdate();
            }
        },
    }
</script>
