<template>
    <div class="w-100" v-bind:style="{height: thisHeight + 'px'}">
        <div style="width:15%;height:100%;float:left;">
            <SidebarItem v-bind:items="list"/>
        </div>
        <div style="width:85%;overflow:scroll;height:100%;">
            <component :is="layoutView" />
        </div>
    </div>
</template>

<script>
    import SidebarItem from './SidebarItem.vue'
    import Order from '../../Container/Order.vue';
    import Main from '../../Container/Main.vue';
    import Category from '../../Container/Category.vue';
    import Goods from '../../Container/Goods.vue';
    import GoodsDetail from '../Goods/GoodsDetail.vue';
    import Client from '../../Container/Client.vue';
    import ClientDetail from '../Client/ClientDetail.vue';
    import Deliverer from '../../Container/Deliverer.vue';
    import DelivererDetail from '../Deliverer/DelivererDetail.vue';
    import Provider from '../../Container/Provider.vue';
    import ProviderDetail from '../Provider/ProviderDetail.vue';
    import Purchase from '../../Container/Purchase.vue';
    import PurchaseDetail from '../Purchase/PurchaseDetail.vue';
    import Employee from '../../Container/Employee.vue';
    import EmployeeDetail from '../Employee/EmployeeDetail.vue';
    
    import Test from '../../Container/Test.vue';
    export default {
        name: "Sidebar",
        components: {
            SidebarItem,
            Order,
            Main,
            Category,
            Goods, GoodsDetail,
            Client, ClientDetail,
            Provider, ProviderDetail,
            Purchase, PurchaseDetail,
            Employee, EmployeeDetail,
            Deliverer, DelivererDetail, //Component
        },
        computed: {
            list() {
                return this.$store.state.list;
            },
            layoutView () {
                return this.$store.state.layoutView;
            }
        },
        data() {
            return {
                thisHeight: window.innerHeight,
            }
        },
    }
</script>

<style scoped>

</style>