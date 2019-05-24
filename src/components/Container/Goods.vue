<template>
    <div style="overflow-y:scroll">
        <div style="width:90%;margin:1% auto;">
            <div><span class="h2">상품목록</span> <goods-modal :info="info"/></div>
            <hr />
            <SearchGoodsTask
                :select="select"
                :rows="rows"
                v-on:searchGoods="searchGoods"
                />
            <GoodsTable 
                :fields="fields"
                :list="goodsList"
                :rows="rows"
                :select="select"
                v-on:rowSelected="rowSelected"
            />
        </div>
    </div>
</template>

<script>
    import Constant from '../../Constant.js';
    import GoodsModal from '../Component/Goods/GoodsModal.vue';
    import SearchGoodsTask from '../Component/Goods/SearchGoodsTask.vue';
    import GoodsTable from '../Component/Goods/GoodsTable.vue';
    export default {
        name: "Goods",
        components: {
            GoodsModal,
            SearchGoodsTask,
            GoodsTable
        },
        computed: {
            goodsList() {
                return this.$store.state.goodsList;
            },
            rows() {
                return this.$store.state.goodsList.length;
            },
            fields() {
                return this.$store.state.goodsFields;
            }
        },
        data(){
            return {
                info: {
                    title: "상품 등록",
                },
                isBusy: false,
                select: {
                    state: {
                        selected: 'all',
                        options: [
                            { text: '전체', value: 'all' },
                            { text: '판매중', value: '판매중' },
                            { text: '판매중지', value: '판매중지' },
                            { text: '재고부족', value: '재고부족' }
                        ],
                    },
                    fCategory: {
                        selected: 'all',
                        options: [
                            { text: '전체', value: 'all' },
                            { text: '1', value: '1' },
                            { text: '2', value: '2' },
                            { text: '3', value: '3' }
                        ],
                    },
                    sCategory: {
                        selected: 'all',
                        options: [
                            { text: '전체', value: 'all' },
                            { text: '1', value: '1' },
                            { text: '2', value: '2' },
                            { text: '3', value: '3' }
                        ],
                    },
                    search: ""
                },
                
            }
        },
        methods: {
            searchGoods(search){
                console.log(search);
                this.$store.dispatch(Constant.FETCH_GOODS_SEARCH, search);
            },
            rowSelected(items){
                console.log(items);
                this.$store.dispatch(Constant.FETCH_GOODS_DETAIL, items[0].id);
            }
        },
        mounted() {
            // this.$on('searchGoods', this.searchGoods);
            this.$store.dispatch(Constant.FETCH_GOODS)
        }
    }
</script>

<style scoped>

</style>