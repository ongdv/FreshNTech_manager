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
    import Goods from '../../Container/Goods.vue';
    import Category from '../../Container/Category.vue';
    import GoodsDetail from '../Goods/GoodsDetail.vue';
    
    import Test from '../../Container/Test.vue';
    export default {
        name: "Sidebar",
        components: {
            SidebarItem,
            Order, Goods, Main, Category, GoodsDetail //Component
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