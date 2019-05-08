<template>
    <div>
        {{employee}}
    </div>
</template>

<script>
    export default {
        name: "EmployeeDetail",
        computed: {
            employee() {
                return this.$store.state.employee;
            }
        },
    }
</script>

<style scoped>

</style>