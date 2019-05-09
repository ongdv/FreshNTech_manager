<template>
    <div class="d-inline float-right">
        <b-button v-b-modal.modal-1 variant="transparent" class="btn-outline-secondary">거래처 상품 등록</b-button>

        <b-modal id="modal-1" size="xl" title="거래처 상품 등록" hide-footer="" ref="modal-1"
        centered footer-class="m-auto" >
            <div style="width:90%;margin:1% auto;">
                <h2>상품 목록</h2>
                <hr />
                <GoodsTable
                    :fields="fields"
                    :rows="itemList.length"
                    :list="itemList"
                    @rowSelected="rowSelected"
                />
                <div class="text-center">
                    <b-button class="btn btn-success w-25" @click="reqOrder">등록하기</b-button>
                    <b-button class="btn btn-warning w-25" @click="cancel">닫기</b-button>
                </div>
            </div>
            
        </b-modal>
    </div>
</template>

<script>
    import Constant from '../../../Constant';
    import GoodsTable from '../Goods/GoodsTable.vue';
    export default {
        name: "ClientItemModal",
        props: ["info"],
        components: {
            GoodsTable
        },
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
            },
            itemList() {
                return this.$store.state.goodsList;
            },
            fields() {
                return this.$store.state.goodsFields;
            }
        },
        data() {
            return {
            
            }
        },
        methods: {
            reqOrder(){
                console.log(this.item);
                this.$store.dispatch(Constant.FETCH_CLIENT);
                this.$storre.commit(Constant.CHANGE_PAGE, {component: "Client"});
                
                this.$refs['modal-1'].hide();
            },
            cancel() {
                this.$refs['modal-1'].hide()
                Object.assign(this.item, this.$store.state.clientItem);
            },
            rowSelected(item) {
                console.log(item[0].id);
                var postData = {
                    tbCustomer_ID: this.$store.state.client.id,
                    tbItem_ID: item[0].id
                }
                this.$store.dispatch(Constant.INSERT_CLIENT_ITEM, postData);
                alert("추가되었습니다.");
            }
        },
    }
</script>
