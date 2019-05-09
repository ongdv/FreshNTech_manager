<template>
    <div class="d-inline float-right">
        <b-button v-b-modal.modal-2 variant="transparent" class="btn-outline-secondary">상품 등록</b-button>
        <b-modal id="modal-2" size="xl" title="상품 등록" hide-footer="" ref="modal-2"
        centered footer-class="m-auto" >
            <div style="width:90%;margin:1% auto;">
                <h2>상품 추가</h2>
                <hr />
                
                <div class="text-center">
                    <b-button class="btn btn-warning w-25" @click="cancel">닫기</b-button>
                </div>
            </div>
            
        </b-modal>
    </div>
</template>

<script>
    import Constant from '../../../Constant';
    export default {
        name: "ProviderItemModal",
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
                this.$refs['modal-2'].hide();
            },
            cancel() {
                this.$refs['modal-2'].hide()
                Object.assign(this.item, this.$store.state.purchaseItem);
            }
        },
    }
</script>
