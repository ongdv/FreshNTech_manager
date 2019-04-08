<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Layout from './components/Container/Layout';
import Auth from './components/Container/Auth'
export default {
  name: 'App',
  components: {
    Layout,
    Auth
  },
  computed: {
    component() {
      if(this.$store.state.user.isAuth){
        return Layout
      }else{
        return Auth
      }
    }
  },
}
</script>

<style>
  html, body, #app{
        width:100%;
        height:100%;
        min-height: 100%;
    }  
</style>
