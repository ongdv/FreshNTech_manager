<template>
    <div style="overflow-y:scroll">
        <div style="width:90%;margin:1% auto;">
            <div><span class="h2">매입처 목록</span> <ProviderModal /></div>
            <hr />
            <ProviderSearchTask 
                @searchProvider="searchProvider"/>
            <hr>
            <ProviderTable 
                :list ="providerList"
                :fields="fields"
                :rows="rows"
                @rowSelected="rowSelected"
            />
        </div>
    </div>
</template>

<script>
    import Constant from '../../Constant.js';
    import ProviderModal from '../Component/Provider/ProviderModal.vue';
    import ProviderSearchTask from '../Component/Provider/ProviderSearchTask.vue';
    import ProviderTable from '../Component/Provider/ProviderTable.vue';
    export default {
        name: "Provider",
        components: {
            ProviderModal,
            ProviderSearchTask,
            ProviderTable
        },
        computed: {
            providerList() {
                return this.$store.state.providerList;
            },
            fields() {
                return this.$store.state.providerField;
            },
            rows() {
                return this.$store.state.providerList.length;
            }
        },
        data() {
            return {
                perPage: 10,
                currentPage: 1,
            }
        },
        methods: {
            searchProvider(search) {
                this.isBusy = true;
                setTimeout(() => {
                    this.isBusy = false;    
                }, 2000);
                if(search === ""){
                    this.$store.dispatch(Constant.FETCH_PROVIDER);        
                }
                this.$store.commit(Constant.FETCH_PROVIDER_SEARCH, search);
            },
            rowSelected(items) {
                this.$store.dispatch(Constant.FETCH_PROVIDER_DETAIL, items[0].id);
            }
        },
        mounted() {
            this.$store.dispatch(Constant.FETCH_PROVIDER);
        }
    }
</script>

<style scoped>

</style>