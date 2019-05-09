<template>
    <div class="d-inline float-right">
        <b-button v-b-modal.modal-1 variant="transparent" class="btn-outline-secondary">발주 등록</b-button>
        <b-modal id="modal-1" size="xl" title="발주 등록" hide-footer="" ref="modal-1"
        centered footer-class="m-auto" >
            <div style="width:90%;margin:1% auto;">
                <h2>발주 정보</h2>
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
                <div><span class="h2">발주 상품</span> <PurchaseItemModal /></div>
                <PurchaseItemTable
                    :list ="item.pmPurchaseItemJoinItemVOs"
                    :fields="fields"
                    :rows="0"
                />
                <div class="text-center">
                    <b-button class="btn btn-success w-25" @click="reqRegister">등록</b-button>
                    <b-button class="btn btn-warning w-25" @click="cancel">취소</b-button>
                </div>
            </div>
            
        </b-modal>
    </div>
</template>

<script>
    import Constant from '../../../Constant';
    import PurchaseItemTable from './PurchaseItemTable.vue';
    import PurchaseItemModal from './PurchaseItemModal.vue';
    export default {
        name: "ProviderModal",
        components: {
            PurchaseItemTable,
            PurchaseItemModal
        },
        computed: {
            item(){
                var data = Object.assign({}, this.$store.state.purchaseItem);
                return data;
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
        data() {
            return {
                
            }
        },
        methods: {
            reqRegister(){
                console.log(this.item);
                this.$store.dispatch(Constant.INSERT_PURCHASE, this.item);
                this.$refs['modal-1'].hide();
            },
            cancel() {
                this.$refs['modal-1'].hide()
                Object.assign(this.item, this.$store.state.purchaseItem);
            }
        },
    }
</script>
