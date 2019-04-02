<template>
    <div>
        <Nav />
        <Sidebar />
    </div>
</template>

<script>
    import { Nav, Sidebar } from '../Component/'
    export default {
        name: "Layout",
        components: {
            Sidebar,
            Nav
        },
        data() {
            return {
                page: "main"
            }
        },
    }
</script>

<style scoped>

</style>