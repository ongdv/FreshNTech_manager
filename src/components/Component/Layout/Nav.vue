<template>
    <div>
        <b-navbar type="dark" variant="dark" border="dark">
            <b-navbar-brand href="#" class="col-2">
                <img src="@/assets/logo2.png" width="75" alt="logo">
            </b-navbar-brand>
            <b-collapse is-nav id="nav_collapse">
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="#" active><strong>관리자</strong> 님</b-nav-item>
                    <b-nav-item to="#">로그아웃</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style scoped>

</style>