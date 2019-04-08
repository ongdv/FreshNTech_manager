<template>
    <div class="h-100">
        <b-list-group class="bg-dark text-white text-center h-100">
            <b-card no-body class="mb-1 bg-dark border-dark" v-for="(item, idx) in items">
                <b-card-header header-tag="header" class="p-1 border-0" role="tab" v-bind:key="idx">
                    <b-button block href="#" v-b-toggle.accordion-0 class="border-0" variant="dark">{{item.name}}</b-button>
                </b-card-header>
                <b-collapse :id="'accordion-' + idx" accordion="my-accordion" role="tabpanel">
                    <b-card-body v-for="(menu, sIdx) in item.menus" >
                        <b-button block href="#" class="border-0" variant="dark" :to="'/vendor/' + menu.path">{{menu.name}}</b-button>
                    </b-card-body>
                </b-collapse>
            </b-card>
        </b-list-group>
    </div>
</template>

<script>
    export default {
        name: "SidebarTest",
        props: ["items"],
    }
</script>
