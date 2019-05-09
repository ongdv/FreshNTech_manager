<template>
    <div class="d-inline float-right">
        <b-button v-b-modal.modal-1 variant="transparent" class="btn-outline-secondary">매입처 등록</b-button>
        <b-modal id="modal-1" size="xl" title="매입처 등록" hide-footer="" ref="modal-1"
        centered footer-class="m-auto" >
            <div style="width:90%;margin:1% auto;">
                <h2>매입처 정보</h2>
                <hr />
                <table class="table">
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            매입처 이름
                        </th>
                        <td>
                            <!-- <b-form-select v-model="item.tbCustomer_ID" :options="$store.state.clientName"></b-form-select> -->
                            <b-form-input v-model="item.bname" placeholder="매입처 이름"></b-form-input>
                        </td>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            사업자 등록번호
                        </th>
                        <td>
                            <!-- <b-form-select v-model="item.role" :options="roleList"></b-form-select> -->
                            <!-- <b-form-select v-model="item.bName" :options="purchase"></b-form-select> -->
                            <b-form-input v-model="item.bnumber" placeholder="사업자 등록번호"></b-form-input>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            대표자 명
                        </th>
                        <td>
                            <b-form-input v-model="item.manager" placeholder="대표자 명"></b-form-input>
                        </td>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            대표자 전화번호
                        </th>
                        <td>
                            <b-form-input v-model="item.tel" placeholder="대표자 전화번호"></b-form-input>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            업종/업태
                        </th>
                        <td>
                            <b-form-input v-model="item.bsector" placeholder="업종/업태"></b-form-input>
                        </td>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            FAX 번호
                        </th>
                        <td>
                            <b-form-input v-model="item.fax" placeholder="FAX 번호"></b-form-input>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-center align-middle" style="background: rgba(241,241,241);">
                            주소
                        </th>
                        <td colspan="3">
                            <b-form-input v-model="item.postno" placeholder="우편번호"></b-form-input>
                            <b-form-input v-model="item.address1" placeholder="광역시/도"></b-form-input>
                            <b-form-input v-model="item.address2" placeholder="도로명"></b-form-input>
                            <b-form-input v-model="item.address3" placeholder="상세주소"></b-form-input>
                        </td>
                    </tr>
                </table>
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
    export default {
        name: "ProviderModal",
        props: ["info"],
        computed: {
            item(){
                var data = Object.assign({}, this.$store.state.providerItem);
                return data;
            }
        },
        data() {
            return {
                roleList: [
                    {
                        text: "관리자",
                        value: "관리자"
                    },
                    {
                        text: "영업",
                        value: "영업"
                    }
                ],
                permitList: [
                    {
                        text: "권한 없음",
                        value: "N"
                    },
                    {
                        text: "읽기만",
                        value: "R"
                    },
                    {
                        text: "읽기/쓰기",
                        value: "W"
                    }
                ]
            }
        },
        methods: {
            reqRegister(){
                console.log(this.item);
                this.$store.dispatch(Constant.INSERT_PROVIDER, this.item);
                this.$refs['modal-1'].hide();
            },
            cancel() {
                this.$refs['modal-1'].hide()
                Object.assign(this.item, this.$store.state.providerItem);
            }
        },
    }
</script>
