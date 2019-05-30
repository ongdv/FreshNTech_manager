<template>
    <div style="width:90%;margin:1% auto;">
        <div><span class="h2">주문 정보</span> <button class="d-inline btn btn-outline-danger float-right" @click="deleteProvider">삭제</button></div>
        <hr />
        <!-- {{item}} -->
                <table class="table">
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            거래처 선택
                        </th>
                        <td>
                            <b-form-select v-model="item.tbCustomer_ID" :options="clientList"></b-form-select>
                            <!-- <b-form-input v-model="item.bname" placeholder="매입처 이름"></b-form-input> -->
                        </td>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            배송 상태
                        </th>
                        <td>
                            <b-form-select v-model="item.orderState" :options="orderState"></b-form-select>
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
                <!-- <OrderGoodsTable 
                    :list="goodsList"
                    :fields="fields"
                    :rows="rows"
                    :selcet="'multi'"
                    @rowSelected="rowSelected"
                /> -->
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
                                        <td class="w-25">
                                            {{item.itemName}}
                                        </td>
                                        <td class="w-25">
                                            {{nwc(item.price)}}
                                        </td>
                                        <td class="w-25">
                                                <b-button-group>
                                                <b-button @click="decrement(item.id)">-</b-button>
                                                <b-button>{{item.qty}}</b-button>
                                                <b-button @click="increment(item.id)">+</b-button>
                                                </b-button-group>
                                        </td>
                                        <td class="w-25">
                                            {{nwc(item.amount)}}
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
                    <b-button class="btn btn-success w-25" @click="reqRegister">수정</b-button>
                    <b-button class="btn btn-warning w-25" @click="cancel">목록으로</b-button>
                </div>
    </div>
</template>

<script>
    import Constant from '../../../Constant.js';
    import OrderGoodsTable from './OrderGoodsTable.vue';
    import OrderModal from './OrderModal';
    export default {
        name: "OrderDetail",
        components: {
            OrderGoodsTable,
            OrderModal
        },
        computed: {
            item() {
                console.log("id"+this.$store.state.order);
                return this.$store.state.order;
            },
            list() {
                var data = [];
                this.$store.state.order
            },
            clientList() {
                var data = [];
                this.$store.state.clientList.forEach(element => {
                    data.push({text: element.bname, value:element.id});
                });
                return data;
            },
            orderList() {
                console.log(this.$store.state.order.pmOrderItamVOs);
                return this.$store.state.order.pmOrderItamVOs;
            },
            rows(){
                return this.$store.state.order.pmOrderItamVOs.length;
            },
            fields() {
                return this.$store.state.orderItemFiled;
            },
            total() {
                if(this.orderList.length === 0){
                    return 0;
                }
                var total =0
                this.orderList.forEach(item => {
                    total += parseInt(item.amount);
                })
                return this.nwc(total);
            },
            qty() {
                var total =0
                if(this.orderList.length === 0){
                    return 0;
                }
                this.orderList.forEach(item => {
                    total += parseInt(item.qty);
                })
                return total;
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
                cnt: 0,
                orderState: [
                    {
                        text: "결제대기",
                        value: "결제대기"
                    },
                    {
                        text: "결제완료",
                        value: "결제완료"
                    },
                    {
                        text: "배송중",
                        value: "배송중"
                    },
                    {
                        text: "배송완료",
                        value: "배송완료"
                    },
                ]
            }
        },
        methods: {
            reqRegister() {
                var postData = this.item;
                postData.pmOrderItamVOs = this.orderList;
                console.log(this.orderList);
                postData.amount = this.total;
                postData.payment = this.total;
                postData.itemCount = this.qty;
                postData.pmOrderItemJoinItemVOs = null;
                this.$store.dispatch(Constant.UPDATE_ORDER, postData);
            },
            cancel() {
                this.$store.commit(Constant.CHANGE_PAGE, {component:"Order"});
            },
            nwc(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
            deleteProvider() {
                console.log(this.item.id);
                this.$store.dispatch(Constant.DELETE_ORDER, this.item.id);
            },
            rowSelected(item) {
                item[this.cnt].tbitem_ID = item[this.cnt].id;
                item[this.cnt].tbOrderItemQTY = 1;
                item[this.cnt].state = "결재대기";
                item[this.cnt].qty = 1;
                item[this.cnt].price = item[this.cnt].price3;
                item[this.cnt].amount = item[this.cnt].price * item[this.cnt].qty;
                
                this.orderList.push(item[this.cnt]);
                this.cnt++;
            },
	    increment(id) {
		console.log("increment active");
		this.$store.commit(Constant.UPDATE_ITEM_QTY, {id: id, val: "up"});
	    },
	    decrement(id){
		console.log("decrement active");
		this.$store.commit(Constant.UPDATE_ITEM_QTY, {id: id, val: "down"});
	    }
        },
    }
</script>

<style scoped>

</style>
