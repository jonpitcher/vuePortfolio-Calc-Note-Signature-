<template>

<div>

<section> 
 <router-link to="/">Inicio -</router-link>
 <router-link to="/calculator">Calculadora -</router-link>
 <router-link to="/firma">Firma Electronica -</router-link>
  <router-link to="/todo">Agenda</router-link>

</section> 
 </br> 

</div>

</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style scoped>

  section{

  background-color: #333;
  overflow: hidden;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  
  }
  footer {
    box-sizing: border-box;
    background-color: #cfd8dc;
    bottom: 0;
    left: 0;
    padding: 1rem;
    position: absolute;
    width: 100%;

  }

  
    a {
      text-decoration: none;
      color: white;
    }
</style>
