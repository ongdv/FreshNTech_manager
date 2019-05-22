<template>
    <div class="d-inline float-right">
        <b-button v-b-modal.modal-1 variant="transparent" class="btn-outline-secondary">상품 추가</b-button>
        <b-modal id="modal-1" size="xl" title="상품 추가" hide-footer="" ref="modal-1"
        centered footer-class="m-auto" >
            <div style="width:90%;margin:1% auto;">
                <h2>상품 정보</h2>
                <hr />
                <GoodsTable 
                    :list="goodsList"
                    :fields="fields"
                    :rows="rows"
                    :selcet="'multi'"
                    @rowSelected="rowSelected"
                />
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
                return this.orderList.length;
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
                orderList: [],
                cnt:0
            }
        },
        methods: {
            reqRegister(){
                this.$refs['modal-1'].hide();
            },
            cancel() {
                this.$refs['modal-1'].hide()
                Object.assign(this.item, this.$store.state.providerItem);
            },
            rowSelected(item) {
                this.$emit('rowSelected', item);
            }
        },
    }
</script>
