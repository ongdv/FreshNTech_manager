<template>
    <div>
        <b-row v-bind:style="{height: thisHeight + 'px'}">
            <b-col cols="2" >
                <b-list-group class="bg-dark text-white text-center h-100">
                    <b-list-group-item class="bg-dark">
                        기업정보보기
                    </b-list-group-item>
                    <b-card no-body class="mb-1 bg-dark border-dark">
                        <b-card-header header-tag="header" class="p-1 border-0" role="tab">
                            <b-button block href="#" v-b-toggle.accordion-1 class="border-0" variant="dark">상품관리</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>상품 목록</b-card-text>
                            </b-card-body>
                            <b-card-body>
                                <b-card-text>카테고리 관리</b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <b-list-group-item class="bg-dark">거래처 관리</b-list-group-item>
                    <b-list-group-item class="bg-dark">배송자 관리</b-list-group-item>
                    <b-list-group-item class="bg-dark">매입처 관리</b-list-group-item>
                    <b-list-group-item class="bg-dark">통계</b-list-group-item>
                    <b-list-group-item class="bg-dark">공지사항</b-list-group-item>
                </b-list-group>
            </b-col>
            <b-col cols="10">
                <router-view></router-view>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: "Sidebar",
        data() {
            return {
                thisHeight: window.innerHeight,
            }
        },
    }
</script>

<style scoped>

</style>