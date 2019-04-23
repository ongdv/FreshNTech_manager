<template>
    <div class="d-inline float-right">
        <b-button v-b-modal.modal-1 variant="transparent" class="btn-outline-secondary">상품 등록</b-button>

        <b-modal id="modal-1" size="xl" :title="info.title" hide-footer="" ref="modal-1"
        centered footer-class="m-auto" >
            <div style="width:90%;margin:1% auto;">
                <h2>상품정보</h2>
                <hr />            
                <table class="table">
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            거래처
                        </th>
                        <td>
                            <b-form-select v-model="item.tbCustomer_ID" :options="$store.state.clientName"></b-form-select>
                            <!-- <b-form-input v-model="item.itemName" placeholder="상품명"></b-form-input> -->
                        </td>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            공급사
                        </th>
                        <td>
                            <b-form-select v-model="item.bName" :options="purchase"></b-form-select>
                            <!-- <b-form-input v-model="item.itemName" placeholder="상품명"></b-form-input> -->
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            상품명
                        </th>
                        <td>
                            <b-form-input v-model="item.itemName" placeholder="상품명"></b-form-input>
                        </td>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            재고수량
                        </th>
                        <td>
                            <b-form-input v-model="item.itemQTY" placeholder="재고수량"></b-form-input>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            제조사
                        </th>
                        <td>
                            <b-form-input v-model="item.manufacturer" placeholder="제조사"></b-form-input>
                        </td>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            원산지
                        </th>
                        <td>
                            <b-form-input v-model="item.origin" placeholder="원산지"></b-form-input>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            판매 규격
                        </th>
                        <td>
                            <b-form-input v-model="item.spec" placeholder="판매 규격"></b-form-input>
                        </td>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            판매 단위
                        </th>
                        <td>
                            <b-form-input v-model="item.unit" placeholder="판매 단위"></b-form-input>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            배송 단가
                        </th>
                        <td>
                            <b-form-input v-model="item.price1" placeholder="배송 단가"></b-form-input>
                        </td>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            소비자 가격
                        </th>
                        <td>
                            <b-form-input v-model="item.price2" placeholder="소비자 규격"></b-form-input>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            예비 단가
                        </th>
                        <td>
                            <b-form-input v-model="item.price3" placeholder="얘바 단가"></b-form-input>
                        </td>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            매입 단가
                        </th>
                        <td>
                            <b-form-input v-model="item.purchasePrice" placeholder="매입 단가"></b-form-input>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            메모
                        </th>
                        <td colspan="3">
                            <b-form-textarea
                                v-model="item.memo"
                                placeholder="상품에 대한 메모"
                                rows="3" />
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">카테고리</th>
                        <td colspan="3">
                            <b-row>
                                <b-col lg="3">
                                    <b-form-select v-model="item.first" :options="select.fCategory.options"></b-form-select>
                                </b-col>
                                <b-col lg="3">
                                    <b-form-select v-model="item.second" :options="select.sCategory.options"></b-form-select>
                                </b-col>
                            </b-row>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">이미지</th>
                        <td colspan="3">
                            <input type="file" ref="photofile" name="photo">
                        </td>
                    </tr>
                </table>
                <div class="text-center">
                    <b-button class="btn btn-success w-25" @click="reqOrder">등록</b-button>
                    <b-button class="btn btn-warning w-25" @click="$refs['modal-1'].hide()">취소</b-button>
                </div>
            </div>
            
        </b-modal>
    </div>
</template>

<script>
    import Constant from '../../../Constant';
    export default {
        name: "GoodsModal",
        props: ["info"],
        computed: {
            item(){
                return this.$store.state.item;
            },
            purchase() {
                var data = [];
                for (const object of this.$store.state.purchase) {
                    data.push({text: object.bName+"("+object.id+")", value: object.bName});
                }
                return data;
            }
        },
        data() {
            return {
                file: "",
                select: {
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
                    }
                }
            }
        },
        methods: {
            reqOrder(){
                var formData = new FormData();
                for (const key in this.item) {
                    const element = this.item[key];
                    console.log(key+", "+element);
                    formData.append(key.toString(), element);
                }
                if(this.item !== "undefined"){
                    var file = this.$refs.photofile.files[0];
                    this.item.multipartFile = file;
                }
                console.log(this.item);
                this.$store.dispatch(Constant.INSERT_GOODS, formData);
                this.$refs['modal-1'].hide();
            }
        },
    }
</script>
