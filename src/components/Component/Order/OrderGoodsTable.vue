<template>
    <div>
        <b-table
                id="order-table"
                hover
                fixed
                stripped
                selectable
                selectedVariant="warning"
                :items="list"
                :fields="fields"
                :per-page="perPage"
                :current-page="currentPage"
                :busy="isBusy"
                select-mode="multi"
                @row-selected="rowSelected"
                primary-key="No"
                class="text-center"
            >
                <div slot="table-busy" class="text-center text-secondary my-2">
                    <b-spinner class="align-middle"></b-spinner>
                    <strong>Loading...</strong>
                </div>
            </b-table>
            <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                align="center"
            />
            <hr>
    </div>
</template>

<script>
    
    export default {
        name: "OrderGoodsTable",
        props: ['fields', 'list', 'rows', 'isBusy'],
        data() {
            return {
                currentPage: 1,
                perPage: 10,
            }
        },
        methods: {
            rowSelected(items){
                console.log(items);
                this.$emit('rowSelected', items);
            }
        },
        mounted() {
            console.log(this.rows);
        },
        watch: {
            list(){
                this.isBusy = true;
               setTimeout(() => {
                   this.isBusy = false;
               }, 1000);
            }
        },
    }
</script>