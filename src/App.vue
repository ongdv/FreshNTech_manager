<template>
  <div id="app">
    <router-view></router-view>
  </div>  
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
}
</script>


<style>
  html, body, .app, #app{
    width:100%;
    height:100%;
    min-height: 100%;
    overflow: hidden;
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