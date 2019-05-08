<template>
    <div>
        <table class="table border">
            <tr>
                <th class="w-25 text-center align-middle" style="background: rgba(241,241,241);">
                    검색
                </th>
                <td>
                    <b-input-group>
                        <b-form-input type="text" v-model="search" placeholder="직원명을 입력해주세요." @keydown.enter="searchEmployee"></b-form-input>
                        <b-input-group-append>
                            <b-button variant="outline-secondary" @click="searchEmployee">검색</b-button>
                        </b-input-group-append>
                    </b-input-group>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "EmployeeSearchTask",
        data() {
            return {
                search:""
            }
        },
        methods: {
            searchEmployee(){
                this.$emit("searchEmployee", this.search);
            }
        },
    }
</script>

<style scoped>

</style>