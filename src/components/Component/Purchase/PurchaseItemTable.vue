<template>
    <div>
        <b-table
                hover
                fixed
                stripped
                selectable
                selectedVariant=""
                :items="list"
                :fields="fields"
                :per-page="perPage"
                :current-page="currentPage"
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
       name: "PurchaseItemTable",
       props: ["list", "rows", "fields", ],
       data() {
           return {
                currentPage: 1,
                perPage: 10,
                isBusy: false,
           }
       },
    }
</script>

<style scoped>

</style>