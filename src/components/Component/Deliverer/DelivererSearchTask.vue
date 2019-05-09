<template>
    <div>
        <table class="table border">
            <tr>
                <th class="w-25 text-center align-middle" style="background: rgba(241,241,241);">
                    검색
                </th>
                <td>
                    <b-input-group>
                        <b-form-input type="text" v-model="search" placeholder="배송자명을 입력해주세요." @keydown.enter="searchDeliverer"></b-form-input>
                        <b-input-group-append>
                            <b-button variant="outline-secondary" @click="searchDeliverer">검색</b-button>
                        </b-input-group-append>
                    </b-input-group>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "DelivererSearchTask",
        data() {
            return {
                search:""
            }
        },
        methods: {
            searchDeliverer(){
                this.$emit("searchDeliverer", this.search);
            }
        },
    }
</script>

<style scoped>

</style>