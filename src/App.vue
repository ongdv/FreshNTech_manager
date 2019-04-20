<template>
  <div id="app">
    <component :is="currentView" />
  </div>  
</template>

<script>
import Auth from "./components/Container/Auth";
import Layout from './components/Container/Layout';
import Constant from './Constant';
export default {
  name: 'App',
  components: {
    Auth, Layout
  },
  computed:{
    currentView () {
      return this.$store.state.currentView;
    }
  },
  mounted() {
    this.$store.dispatch(Constant.FETCH_READY);
    this.$store.dispatch(Constant.FETCH_CATEGORY);
    this.$store.dispatch(Constant.FETCH_PURCHASE);
    // console.log(this.$store.state.clientName);
  },
}
</script>

<style>
  html, body, .app, #app{
    width:100%;
    height:100%;
    min-height: 100%;
    
  }
  body::-webkit-scrollbar { 
    display: none; 
  }
  html {
    overflow: scroll;
    overflow-x: hidden;
}
::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
    background: transparent;  /* optional: just make scrollbar invisible */
}
/* optional: show position indicator in red */
::-webkit-scrollbar-thumb {
    background: #FF0000;
}
</style>