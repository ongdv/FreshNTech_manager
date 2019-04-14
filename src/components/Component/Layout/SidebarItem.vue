<template>
    <div class="h-100 w-100">
        <div class="w-100 h-100 bg-dark">
            <b-card no-body class="bg-dark border-0 m-auto" v-for="(item, idx) in items">
                <b-card-header class="border-0 p-0" v-bind:key="idx">
                    <b-button block href="#" v-b-toggle="`accordion-${idx}`" class="border-dark bg-dark" >{{item.name}}</b-button>
                </b-card-header>
                <b-collapse :id="`accordion-${idx}`" class="p-0" style="background:rgba(76,158,134);tet-align:center;">
                    <template v-for="(menu, index) in item.menus">
                        <b-button pressed block href="#" class="border-0 w-75 bg-transparent m-auto" :to="`/vendor/${menu.path}`" v-bind:key="index">{{menu.name}}</b-button>
                    </template>
                </b-collapse>
            </b-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SidebarItem",
        props: ["items"],
    }
</script>
