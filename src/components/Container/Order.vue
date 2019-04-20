<template>
    <div style="overflow-y:scroll">
        <div style="width:90%;margin:1% auto;">
            <h2>주문목록</h2>
            <hr />
            <table class="table border ">
                <tr>
                    <th class="w-25 text-center align-middle" style="background: rgba(241,241,241);">기간</th>
                    <td class="w-75 align-middle">
                        <b-form-group style="padding:0;margin:0;">
                            <b-form-radio-group
                                id="btn-radios-2"
                                v-model="date.selected"
                                :options="date.options"
                                buttons
                                button-variant="outline-secondary"
                                size="ms"
                                name="radio-btn-outline"
                            >
                            </b-form-radio-group>
                            &nbsp;
                            <input type="date" v-model="datePicker.start">
                            <input type="date" v-model="datePicker.end">
                            
                        </b-form-group>
                    </td>
                </tr>
                
                <tr>
                    <th class="w-25 text-center align-middle" style="background: rgba(241,241,241);">
                        검색
                    </th>
                    <td>
                        <b-input-group>
                            <b-input-group-prepend>
                                <b-form-select v-model="keyword.selected" :options="keyword.options"></b-form-select>
                            </b-input-group-prepend>
                            <b-form-input type="text" placeholder="검색어를 입력해주세요."></b-form-input>
                            <b-input-group-append>
                                <b-button variant="outline-secondary">검색</b-button>
                            </b-input-group-append>
                        </b-input-group>
                        <br />
                        <b-button v-b-toggle.collapse-1 variant="secondary">상세 검색</b-button>
                            <b-collapse id="collapse-1" class="mt-2">
                                <b-card>
                                    <p class="card-text">상세 옵션</p>
                                </b-card>
                        </b-collapse>
                    </td>
                </tr>
            </table>
            <hr>
            {{rows+' 개의 검색결과'}}
            <b-table
                id="order-table"
                hover
                fixed
                stripped
                :items="orderList"
                :fields="fields"
                :per-page="perPage"
                :current-page="currentPage"
                primary-key="No"
                class="text-center"
            />
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
        name: "Order",
        computed: {
            orderList() {
                return this.$store.state.orderList;
            },
            rows() {
                return this.$store.state.orderList.length
            }
        },
        data() {
            return {
                datePicker: {
                    start: new Date().toISOString().substr(0, 10),
                    end: new Date().toISOString().substr(0, 10),
                },
                date: {
                    selected: 'radio1',
                    options: [
                        { text: '전체', value: 'radio1' },
                        { text: '전일', value: 'radio2' },
                        { text: '당일', value: 'radio3' },
                        { text: '전월', value: 'radio4' }
                    ],
                },
                keyword: {
                    selected: 'select1',
                    options: [
                        { text: '전체', value: 'select1' },
                        { text: '거래처명', value: 'select2' },
                        { text: '주문번호', value: 'select3' },
                    ],
                },
                
                currentPage: 1,
                perPage: 10,
                fields: [
                    {
                        key: 'orderDate',
                        label: "주문일자",
                        sortable:true
                    },
                    {
                        key: 'id',
                        label: '주문코드',
                        sortable:true
                    },
                    {
                        key: 'cBName',
                        label: '거래처',
                        sortable:true
                    },
                    {
                        key: 'dManager',
                        label: '배송팀',
                        sortable:true
                    },
                    {
                        key: 'sName',
                        label: '영업팀',
                        sortable:true
                    },
                    // {
                    //     key: 'totalQty',
                    //     label: '총 주문수량',
                    //     sortable:true
                    // },
                    {
                        key: 'payMethod',
                        label: '결제수단',
                        sortable:true
                    },
                    {
                        key: 'amount',
                        label: '주문금액',
                        sortable:true
                    },
                    {
                        key: 'orderState',
                        label: '주문상태',
                        sortable:true
                    }
                ],
            }
        },
        methods: {
            getOrder(){
                this.$store.dispatch(Constant.FETCH_ORDER);
            }
        },
        created() {
            this.getOrder();
        }
    }
</script>

<style scoped>

</style>