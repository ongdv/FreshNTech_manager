<template>
    <div style="overflow-y:scroll">
        <div style="width:90%;margin:1% auto;">
            <div><span class="h2">상품목록</span> <goods-modal :info="info"/></div>
            <hr />
            <SearchGoodsTask
                v-bind:select="select"
                v-on:searchGoods="searchGoods"/>
            <hr>
            <b-form-group>
                <span class="float-right">{{select.search ? "'" + select.search + "' 에 대한" : ""}} {{rows}} 개의 검색결과</span>
            </b-form-group>
            <hr>
            <b-table
                id="order-table"
                hover
                fixed
                stripped
                selectable
                selectedVariant=""
                :items="goodsList"
                :fields="fields"
                :per-page="perPage"
                :current-page="currentPage"
                :busy="isBusy"
                select-mode="single"
                @row-selected="rowSelected"
                primary-key="No"
                class="text-center"
            >
                <div slot="table-busy" class="text-center text-secondary my-2">
                    <b-spinner class="align-middle"></b-spinner>
                    <strong>Loading...</strong>
                </div>
            </b-table>
            <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                align="center"
            />
        </div>
    </div>
</template>

<script>
    import Constant from '../../Constant.js';
    import GoodsModal from '../Component/Common/GoodsModal.vue';
    import SearchGoodsTask from '../Component/Goods/SearchGoodsTask.vue';
    export default {
        name: "Goods",
        components: {
            GoodsModal,
            SearchGoodsTask
        },
        computed: {
            goodsList() {
                return this.$store.state.goodsList;
            },
            rows() {
                return this.$store.state.goodsList.length
            }
        },
        data(){
            return {
                info: {
                        title: "상품 등록",
                },
                isBusy: false,
                currentPage: 1,
                perPage: 10,
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
                fields: [
                    {
                        key: 'id',
                        label: "상품코드",
                        sortable:true
                    },
                    {
                        key: 'itemName',
                        label: '상품명',
                        sortable:true
                    },
                    {
                        key: 'unit',
                        label: '규격(단위)',
                        sortable:true
                    },
                    {
                        key: 'origin',
                        label: '제조사(원산지)',
                        sortable:true
                    },
                    {
                        key: 'price1',
                        label: '배송단가',
                        sortable:true
                    },
                    {
                        key: 'price2',
                        label: '소비자가격',
                        sortable:true
                    },
                    {
                        key: 'purchasePrice',
                        label: '예비가격',
                        sortable:true
                    },
                    {
                        key: 'itemQty',
                        label: '재고량',
                        sortable:true
                    },
                    {
                        key: 'state',
                        label: '판매상태',
                        sortable:true
                    }
                ],
            }
        },
        methods: {
            searchGoods(){
                this.isBusy = !this.isBusy
                this.$store.dispatch(Constant.FETCH_GOODS_SEARCH, this.select.search);
                setTimeout(()=>{
                    this.isBusy = !this.isBusy;
                }, 1000);
            },
            rowSelected(items){
                console.log(items[0].id);
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