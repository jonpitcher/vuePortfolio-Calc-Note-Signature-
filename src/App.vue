<template>
  <div id="app">

  <app-header> </app-header>

    <router-view/>
    <app-footer> </app-footer> 
  </div>

</template>

<script>


import calculator from '@/components/calculator'
import AppFooter from '@/components/AppFooter' 
import AppHeader from '@/components/AppHeader' 

export default {
  name: 'App',
  components: {AppFooter, AppHeader},
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#image{

  height: 30px;
  width: 30px; 
}
</style>
