<template>
    <div style="overflow-y:scroll">
        <div style="width:90%;margin:1% auto;">
            <div><span class="h2">매입처 목록</span> </div>
            <hr />
            <table class="table border">
                <tr>
                    <th class="w-25 text-center align-middle" style="background: rgba(241,241,241);">
                        검색
                    </th>
                    <td>
                        <b-input-group>
                            <b-form-input type="text" v-model="search" placeholder="검색어를 입력해주세요." @keydown.enter="searchPurchase"></b-form-input>
                            <b-input-group-append>
                                <b-button variant="outline-secondary" @click="searchPurchase">검색</b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </td>
                </tr>
            </table>
            <hr>
            <b-form-group>
                <span class="float-right">{{search ? "'" + search + "' 에 대한" : ""}} {{rows}} 개의 검색결과</span>
            </b-form-group>
            <b-table
                id="order-table"
                hover
                fixed
                stripped
                selectable
                selectedVariant=""
                :items="purchaseList"
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
            <hr>
        </div>
    </div>
</template>

<script>
    import Constant from '../../Constant.js';
    export default {
        name: "Purchase",
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