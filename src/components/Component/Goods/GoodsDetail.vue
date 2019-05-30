<template>
    <div style="overflow-y:scroll">
        <div style="width:90%;margin:1% auto;">
            <div><span class="h2">상품 수정</span> <button class="d-inline btn btn-outline-danger float-right" @click="deleteGoods">삭제</button></div>
                <hr />            
                <table class="table">
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            거래처
                        </th>
                        <td>
                            <b-form-select v-model="item.id" :options="clientName"></b-form-select>
                        </td>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            공급사
                        </th>
                        <td>
                            <b-form-select v-model="item.mainProvier" :options="purchase"></b-form-select>
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
                            <img :src="file" alt="thumbnail" width="100">
                            <br>
                            <input type="file" ref="photofile" name="photo" @change="changeItem">
                        </td>
                    </tr>
                </table>
                <div class="text-center">
                    <b-button class="btn btn-success w-25" @click="reqUpdate">수정</b-button>
                    <b-button class="btn btn-warning w-25" @click="cancel">목록으로</b-button>
                </div>
            </div>
    </div>
</template>

<script>
    import Constant from '../../../Constant';
    export default {
        name: "GoodsDetail",
        props: ["info"],
        computed: {
            item(){
                return this.$store.state.goods;
            },
            purchase() {
                var data = [];
                this.$store.state.providerList.forEach(element => {
                    data.push({text: element.bname, value: element.bname});
                });
                console.log(data);
                return data;
            },
            clientName() {
                var data = [];
                this.$store.state.clientList.forEach(element => {
                    data.push({text: element.bname, value: element.id});
                });
                console.log(data);
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
            reqUpdate(){
                var formData = new FormData();
                for (const key in this.item) {
                    const element = this.item[key];
                    // console.log(key+", "+element);
                    formData.append(key.toString(), element);
                }
            
                if(this.item !== "undefined"){
                    var file = this.$refs.photofile.files[0];
                    formData.append("itemImage", file);
                    this.item.itemImage = file;
                }else{
                    formData.append("itemImage", null);
                    this.item.itemImage = null;
                }
                
                console.log(this.item);
                this.$store.dispatch(Constant.UPDATE_GOODS, {id: this.item.id, item: formData});
            },
            cancel() {
                this.$store.commit(Constant.CHANGE_PAGE, {component: "goods"})
            },
            deleteGoods() {
                this.$store.dispatch(Constant.DELETE_GOODS, this.item);
            },
            changeItem(e){
                
                // var file = this.$refs.photofile.files[0];
                var file = e.target.files || e.dataTransfer.files;
                this.createImage(file[0]);
            },
            createImage(file){
                var image = new Image();
                var reader = new FileReader();
                var vm = this;
                reader.onload = (e) => {
                    this.file = e.target.result;
                }
                reader.readAsDataURL(file);
            }
        },
        mounted() {
            console.log(this.item.id);
        },
    }
</script>
