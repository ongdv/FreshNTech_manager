<template>
    <div style="width:90%;margin:1% auto;">
        <div><span class="h2">발주 정보</span> <button class="d-inline btn btn-outline-danger float-right" @click="deletepurchase">삭제</button></div>
        <hr />
        <table class="table">
            <tr>
                <th class="text-center align-middle" style="background: rgba(241,241,241);">
                    매입처
                </th>
                <td>
                    <b-form-select v-model="item.tbProvider_ID" :options="providerList"></b-form-select>
                    <!-- <b-form-input v-model="item.bname" placeholder="매입처 이름"></b-form-input> -->
                </td>
                <th class="text-center align-middle" style="background: rgba(241,241,241);">
                    납기일자
                </th>
                <td>
                    <!-- <b-form-select v-model="item.role" :options="roleList"></b-form-select> -->
                    <!-- <b-form-select v-model="item.bName" :options="purchase"></b-form-select> -->
                    <b-form-input v-model="item.dday" type="date" placeholder="납기일자"></b-form-input>
                </td>
            </tr>
            <tr>
                <th class="text-center align-middle" style="background: rgba(241,241,241);">
                    비고
                </th>
                <td colspan="3">
                    <b-form-textarea
                        v-model="item.remark"
                        placeholder="메모"
                        rows="1" />
                </td>
            </tr>
        </table>
        <hr>
        <PurchaseItemTable 
            :list ="item.pmPurchaseItemJoinItemVOs"
            :fields="fields"
            :rows="item.pmPurchaseItemJoinItemVOs.length"
        />
        <div class="text-center">
            <b-button class="btn btn-success w-25" @click="reqRegister">수정</b-button>
            <b-button class="btn btn-warning w-25" @click="cancel">목록으로</b-button>
        </div>
    </div>
</template>

<script>
    import Constant from '../../../Constant.js';
    import PurchaseItemTable from './PurchaseItemTable.vue';
    export default {
        name: "purchaseDetail",
        components: {
            PurchaseItemTable
        },
        computed: {
            item() {
                return this.$store.state.purchase;
            },
            providerList() {
                var data =[];
                this.$store.state.providerList.forEach(element => {
                    data.push({text: element.bname, value: element.id});
                });
                return data;
            },
            fields() {
                return this.$store.state.purchaseItemFields;
            }
        },
        methods: {
            reqRegister() {
                this.$store.dispatch(Constant.UPDATE_PURCHASE, this.item);
            },
            cancel() {
                this.$store.commit(Constant.CHANGE_PAGE, {component:"purchase"});
            },
            deletepurchase() {
                this.$store.dispatch(Constant.DELETE_PURCHASE, this.item.id);
            }
        },
    }
</script>

<style scoped>

</style>