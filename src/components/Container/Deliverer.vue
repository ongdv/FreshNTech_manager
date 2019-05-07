<template>
    <div style="overflow-y:scroll">
        <div style="width:90%;margin:1% auto;">
            <div><span class="h2">배송팀 목록</span> </div>
            <hr />
            <table class="table border">
                <tr>
                    <th class="w-25 text-center align-middle" style="background: rgba(241,241,241);">
                        검색
                    </th>
                    <td>
                        <b-input-group>
                            <b-form-input type="text" v-model="search" placeholder="배송팀명을 입력해주세요." @keydown.enter="searchDeliverer"></b-form-input>
                            <b-input-group-append>
                                <b-button variant="outline-secondary" @click="searchDeliverer">검색</b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </td>
                </tr>
            </table>
            <hr>
            <b-table
                hover
                fixed
                stripped
                selectable
                selectedVariant=""
                :items="delivererList"
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
    export default {
        name: "Deliverer",
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
            rowSelected() {

            }
        },
        mounted() {
            this.$store.dispatch(Constant.FETCH_DELIVERER);
        },
    }
</script>

<style scoped>

</style>