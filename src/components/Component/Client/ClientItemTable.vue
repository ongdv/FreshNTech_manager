<template>
    <div>
        <b-table
                hover
                fixed
                stripped
                selectable
                selectedVariant=""
                selected
                :items="list"
                :fields="fields"
                :per-page="perPage"
                :current-page="currentPage"
                @row-selected="rowSelected"
                select-mode="single"
                primary-key="No"
                class="text-center"
        >
        </b-table>
        <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            align="center"
        />
    </div>
</template>

<script>
    export default {
       name: "ClientItemTable",
       props: ["list", "rows", "fields"],
       data() {
           return {
                currentPage: 1,
                perPage: 10,
                isBusy: false,
           }
       },
       methods: {
           rowSelected(items){
               this.$emit("rowSelected", items[0]);
           }
       },
    }
</script>

<style scoped>

</style>