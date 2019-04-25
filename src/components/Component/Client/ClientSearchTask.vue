<template>
    <div>
        <table class="table border">
                <tr>
                    <th class="w-25 text-center align-middle" style="background: rgba(241,241,241);">
                        검색
                    </th>
                    <td>
                        <b-input-group>
                            <b-form-input type="text" v-model="search" placeholder="거래처명을 입력해주세요." @keydown.enter="searchClient"></b-form-input>
                            <b-input-group-append>
                                <b-button variant="outline-secondary" @click="searchClient">검색</b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </td>
                </tr>
            </table>
    </div>
</template>

<script>
    export default {
        name: "ClientSearchTask",
        data() {
            return {
                search:""
            }
        },
        methods: {
            searchClient(){
                this.$emit("searchClient", this.search);
            }
        },
    }
</script>

<style scoped>

</style>