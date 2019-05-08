<template>
    <div style="overflow-y:scroll">
        <div style="width:90%;margin:1% auto;">
            <div><span class="h2">거래처 목록</span> <client-modal :info="info"/> </div>
            <hr />
            <ClientSearchTask
                :search="search"
                v-on:searchClient="searchClient"/>
            <ClientTable 
                :clientList="clientList"
                :rows="rows"
                :fields="fields"
                :isBusy="isBusy"
                @rowSelected="rowSelected"/>
            <hr>
        </div>
    </div>
</template>

<script>
    import Constant from '../../Constant.js';
    import ClientModal from '../Component/Client/ClientModal.vue';
    import ClientTable from '../Component/Client/ClientTable.vue';
    import ClientSearchTask from '../Component/Client/ClientSearchTask.vue';
    export default {
        name: "Client",
        components: {
            ClientModal,
            ClientTable,
            ClientSearchTask
        },
        computed: {
            clientList() {
                return this.$store.state.clientList;
            },
            rows() {
                return this.$store.state.clientList.length;
            },
            fields() {
                return this.$store.state.clientFields;
            }
        },
        data() {
            return {
                info: {
                    title: "거래처 등록",
                },
                search: "",
                isBusy: false,
            }
        },
        methods: {
            searchClient(key){
                if(key.length === 0){
                    this.$store.dispatch(Constant.FETCH_CLIENT);
                    return;
                }
                this.$store.commit(Constant.FETCH_CLIENT_SEARCH, key);
            },
            rowSelected(items){
                this.$store.dispatch(Constant.FETCH_CLIENT_DETAIL, items[0].id);
            }
        },
        mounted() {
            this.$store.dispatch(Constant.FETCH_CLIENT);
        },
    }
</script>

<style scoped>

</style>