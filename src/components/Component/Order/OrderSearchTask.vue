<template>
    <div>
        <table class="table border ">
                <!-- <tr>
                    <th class="w-25 text-center align-middle" style="background: rgba(241,241,241);">기간</th>
                    <td class="w-75 align-middle">
                        <b-form-group style="padding:0;margin:0;">
                            <b-form-radio-group
                                id="btn-radios-2"
                                v-model="date.selected"
                                :options="date.options"
                                buttons
                                button-variant="outline-secondary"
                                size="ms"
                                name="radio-btn-outline"
                            >
                            </b-form-radio-group>
                            &nbsp;
                            <input type="date" v-model="datePicker.start">
                            <input type="date" v-model="datePicker.end">
                            
                        </b-form-group>
                    </td>
                </tr> -->
                
                <tr>
                    <th class="w-25 text-center align-middle" style="background: rgba(241,241,241);">
                        검색
                    </th>
                    <td>
                        <b-input-group>
                            <!-- <b-input-group-prepend>
                                <b-form-select v-model="keyword.selected" :options="keyword.options"></b-form-select>
                            </b-input-group-prepend> -->
                            <b-form-input type="text" placeholder="검색어를 입력해주세요." @keydown.enter="searchOrder"></b-form-input>
                            <b-input-group-append>
                                <b-button variant="outline-secondary" @click="searchOrder">검색</b-button>
                            </b-input-group-append>
                        </b-input-group>
                        <!-- <br />
                        <b-button v-b-toggle.collapse-1 variant="secondary">상세 검색</b-button>
                            <b-collapse id="collapse-1" class="mt-2">
                                <b-card>
                                    <p class="card-text">상세 옵션</p>
                                </b-card>
                        </b-collapse> -->
                    </td>
                </tr>
            </table>        
    </div>
</template>

<script>
    export default {
        name: "OrderSearchTask",
        data() {
            return {
                search:""
            }
        },
        methods: {
            searchOrder(){
                this.$emit("searchOrder", this.search);
            }
        },
    }
</script>

<style scoped>

</style>