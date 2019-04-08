<template>
    <div>
        <b-row v-bind:style="{height: thisHeight + 'px'}">
            <b-col cols="2">
                <SidebarTest v-bind:items="list"/>
            </b-col>
            <b-col cols="10">
                <router-view></router-view>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import SidebarTest from './SidebarTest.vue'
    export default {
        name: "Sidebar",
        components: {
            SidebarTest
        },
        data() {
            return {
                thisHeight: window.innerHeight,
                list: [
                    {
                        name: "주문 관리",
                        menus: [
                            {
                                name: "주문 목록",
                                path: "order"
                            }
                        ]
                    },
                    {
                        name: "상품 관리",
                        menus: [
                            {
                                name: "상품 목록",
                                path: "goods"
                            },
                            {
                                name: "카테고리 관리",
                                path: "goods/category"
                            }
                        ]
                    },
                    {
                        name: "거래처 관리",
                        menus: [
                            {
                                name: "주문 목록",
                                path: "order"
                            },
                            {
                                name: "주문 예제",
                                path: "order/test"
                            }
                        ]
                    },
                    {
                        name: "배송자 관리",
                        menus: [
                            {
                                name: "주문 목록",
                                path: "order"
                            },
                            {
                                name: "주문 예제",
                                path: "order/test"
                            }
                        ]
                    },
                    {
                        name: "매입처 관리",
                        menus: [
                            {
                                name: "주문 목록",
                                path: "order"
                            },
                            {
                                name: "주문 예제",
                                path: "order/test"
                            }
                        ]
                    },
                    {
                        name: "통계",
                        menus: [
                            {
                                name: "주문 목록",
                                path: "order"
                            },
                            {
                                name: "주문 예제",
                                path: "order/test"
                            }
                        ]
                    },
                    {
                        name: "공지사항 관리",
                        menus: [
                            {
                                name: "주문 목록",
                                path: "order"
                            },
                            {
                                name: "주문 예제",
                                path: "order/test"
                            }
                        ]
                    }
                ]
            }
        },
    }
</script>

<style scoped>

</style>