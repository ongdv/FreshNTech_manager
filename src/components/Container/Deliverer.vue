<template>
    <div style="overflow-y:scroll">
        <div style="width:90%;margin:1% auto;">
            <div><span class="h2">배송자 목록</span> <DelivererModal/></div>
            <hr />
            <DelivererSearchTask
                @searchDeliverer="searchDeliverer"
            />
            <hr>
            <DelivererTable
                :list="delivererList"
                :fields="fields"
                :rows="rows"
                @rowSelected="rowSelected"
            />
        </div>
    </div>
</template>

<script>
    import Constant from '../../Constant.js';
    import DelivererModal from '../Component/Deliverer/DelivererModal.vue';
    import DelivererSearchTask from '../Component/Deliverer/DelivererSearchTask.vue';
    import DelivererTable from '../Component/Deliverer/DelivererTable.vue';
    export default {
        name: "Deliverer",
        components: {
            DelivererModal,
            DelivererSearchTask,
            DelivererTable
        },
        computed: {
            rows(){
                return this.$store.state.delivererList.length;
            },
            delivererList(){
                return this.$store.state.delivererList;
            },
            fields(){
                return this.$store.state.delivererFileds;
            },
        },
        data() {
            return {
                search: "",
                currentPage: 1,
                perPage: 10,
                isBusy: false
            }
        },
        methods: {
            searchDeliverer(){
                if(this.search.length === 0){
                    this.$store.dispatch(Constant.FETCH_DELIVERER);
                    return;
                }
                this.$store.commit(Constant.FETCH_DELIVERER_SEARCH, this.search);
            },
            rowSelected(item) {
                console.log(item);
                this.$store.dispatch(Constant.FETCH_DELIVERER_DETAIL, item[0].id);
            }
        },
        mounted() {
            this.$store.dispatch(Constant.FETCH_DELIVERER);
        },
    }
</script>

<style scoped>

</style>