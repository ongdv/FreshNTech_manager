<template>
    <div class="app">
        <Nav />
        <Sidebar />
    </div>
</template>

<script>
    import { Nav, Sidebar } from '../Component/'
    
    export default {
        name: "Layout",
        components: {
            Sidebar,Nav, // Grid
        },
    }
</script>

<style scoped>

</style>