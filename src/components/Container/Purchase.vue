<template>
    <div style="overflow-y:scroll">
        <div style="width:90%;margin:1% auto;">
            <div><span class="h2">발주 목록</span> <PurchaseModal /></div>
            <hr />
            <PurchaseSearchTask 
                @searchPurchase="searchPurchase"/>
            <hr>
            <PurchaseTable 
                :list ="purchaseList"
                :fields="fields"
                :rows="rows"
                @rowSelected="rowSelected"
            />
        </div>
    </div>
</template>

<script>
    import Constant from '../../Constant.js';
    import PurchaseModal from '../Component/Purchase/PurchaseModal.vue';
    import PurchaseSearchTask from '../Component/Purchase/PurchaseSearchTask';
    import PurchaseTable from '../Component/Purchase/PurchaseTable.vue';
    export default {
        name: "Purchase",
        components: {
            PurchaseModal,
            PurchaseSearchTask,
            PurchaseTable
        },
        computed: {
            purchaseList() {
                return this.$store.state.purchaseList;
            },
            fields() {
                return this.$store.state.purchaseField;
            },
            rows() {
                return this.$store.state.purchaseList.length;
            }
        },
        data() {
            return {
                perPage: 10,
                currentPage: 1,
                isBusy: false,
                search: ""
            }
        },
        methods: {
            rowSelected(items) {
                console.log(items[0].id);
                this.$store.dispatch(Constant.FETCH_PURCHASE_DETAIL, items[0].id);
            },
            searchPurchase() {

            }
        },
        mounted() {
            this.$store.dispatch(Constant.FETCH_PURCHASE);
        },
    }
</script>

<style scoped>

</style>