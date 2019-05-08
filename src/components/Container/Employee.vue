<template>
    <div style="overflow-y:scroll">
        <div style="width:90%;margin:1% auto;">
            <div><span class="h2">직원 목록</span> <EmployeeModal /></div>
            <hr />
            <EmployeeSearchTask 
                @searchEmployee="searchEmployee"/>
            <hr>
            <EmployeeTable 
                :employeeList ="employeeList"
                :fields="fields"
                :rows="rows"
                @rowSelected="rowSelected"
            />
        </div>
    </div>
</template>

<script>
    import Constant from '../../Constant.js';
    import EmployeeSearchTask from '../Component/Employee/EmployeeSearchTask.vue';
    import EmployeeTable from '../Component/Employee/EmployeeTable.vue';
    import EmployeeModal from '../Component/Employee/EmployeeModal.vue';
    export default {
        name: "Employee",
        components: {
            EmployeeSearchTask,
            EmployeeTable,
            EmployeeModal
        },
        computed: {
            employeeList() {
                return this.$store.state.employeeList;
            },
            fields() {
                return this.$store.state.employeeFiled;
            },
            rows() {
                return this.$store.state.employeeList.length;
            }
        },
        data() {
            return {
                perPage: 10,
                currentPage: 1,
            }
        },
        methods: {
            searchEmployee(search) {
                this.isBusy = true;
                setTimeout(() => {
                    this.isBusy = false;    
                }, 2000);
                this.$store.dispatch(Constant.FETCH_EMPLOYEE, search);
            },
            rowSelected(items) {
                this.$store.dispatch(Constant.FETCH_EMPLOYEE_DETAIL, items[0].id);
            }
        },
        mounted() {
            this.$store.dispatch(Constant.FETCH_EMPLOYEE);
        }
    }
</script>

<style scoped>

</style>