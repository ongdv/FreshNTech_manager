<template>
    <div style="overflow-y:scroll">
        <div style="width:90%;margin:1% auto;">
            <div><span class="h2">주문 목록</span>
            <!-- <OrderModal /> -->
            <b-button variant="transparent" class="btn-outline-secondary" @click="order">주문 등록</b-button>
            </div>
            <hr />
            <OrderSearchTask
                :datePicker="datePicker"
                @searchOrder="searchOrder"
            />
            <hr>
            
            <OrderTable 
                :list="orderList"
                :rows="rows"
                :fields="fields"
                @rowSelected="rowSelected"
            />
        </div>
    </div>
</template>

<script>
    import Constant from '../../Constant.js';
    import OrderTable from '../Component/Order/OrderTable.vue';
    import OrderSearchTask from '../Component/Order/OrderSearchTask.vue';
    import OrderModal from '../Component/Order/OrderModal.vue';
    export default {
        name: "Order",
        components: {
            OrderTable,
            OrderSearchTask,
            OrderModal
        },
        computed: {
            orderList() {
                return this.$store.state.orderList;
            },
            rows() {
                return this.$store.state.orderList.length;
            },
            fields() {
                return this.$store.state.orderFields;
            }
        },
        data() {
            return {
                datePicker: {
                    start: new Date().toISOString().substr(0, 10),
                    end: new Date().toISOString().substr(0, 10),
                },
                
                currentPage: 1,
                perPage: 10,
            }
        },
        methods: {
            getOrder(){
                this.$store.dispatch(Constant.FETCH_ORDER);
            },
            rowSelected(item) {
                console.log(item[0].id);
                this.$store.dispatch(Constant.FETCH_ORDER_DETAIL, item[0].id);
            },
            searchOrder() {

            },
            order() {
                this.$store.commit(Constant.CHANGE_PAGE, {component: "OrderTask"});
            }
        },
        created() {
            this.getOrder();
        },
        mounted() {
            this.$store.dispatch(Constant.FETCH_ORDER);
        }
    }
</script>

<style scoped>

</style>