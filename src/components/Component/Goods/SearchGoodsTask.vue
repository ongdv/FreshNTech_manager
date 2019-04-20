<template>
    <div>
        <table class="table border">
                <tr>
                    <td class="text-center" colspan="2">
                        <b-button v-b-toggle="'collapse-2'" variant="transparent" class="btn-lg btn-outline-secondary w-100 m-1">상세검색</b-button>
                        <!-- Element to collapse -->
                        <b-collapse id="collapse-2">
                            <b-card class="border-0">
                                <table class="table border">
                                    <tr>
                                        <th class="text-center align-middle" style="background: rgba(241,241,241);">상품 상태</th>
                                        <td>
                                            <b-form-select v-model="select.state.selected" :options="select.state.options"></b-form-select>
                                        </td>
                                        
                                        <th class="text-center align-middle" style="background: rgba(241,241,241);">1차 카테고리</th>
                                        <td>
                                            <b-form-select v-model="select.fCategory.selected" :options="select.fCategory.options"></b-form-select>
                                        </td>

                                        <th class="text-center align-middle" style="background: rgba(241,241,241);">2차 카테고리</th>
                                        <td>
                                            <b-form-select v-model="select.sCategory.selected" :options="select.sCategory.options"></b-form-select>
                                        </td>
                                    </tr>
                                </table>
                            </b-card>
                        </b-collapse>
                    </td>
                </tr>
                <tr>
                    <th class="w-25 text-center align-middle" style="background: rgba(241,241,241);">
                        검색
                    </th>
                    <td>
                        <b-input-group>
                            <b-form-input type="text" placeholder="검색어를 입력해주세요." @keydown.enter="searchGoods"></b-form-input>
                            <b-input-group-append>
                                <b-button variant="outline-secondary" @click="searchGoods">검색</b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </td>
                </tr>
            </table>
    </div>
</template>

<script>
    export default {
        name: "SearchGoodsTask",
        props: ['select'],
        methods: {
            searchGoods(e){
                e.preventDefault();
                this.$emit('searchGoods');
            }
        }
    }
</script>

<style scoped>

</style>