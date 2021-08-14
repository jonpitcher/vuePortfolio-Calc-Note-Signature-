<template>
  <div class="hello">

<h1> Jonathan Pitcher </h1>

<p> Desarrollador web y viajero del mundo. </p>


<img height="300px" width="250px" src="@/assets/globe.png">
  
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Tu calculadora',
      num1: 0,
      num2: 0,
      operand:"",
      result: "",
    }
  },

  methods: {

    addNumbers : function(){

     this.result= this.num1 + this.num2; 
  
    },

    minusNumbers : function(){

     this.result= this.num1 - this.num2; 
    },

    multiplyNumbers: function(){

      this.result= this.num1 * this.num2; 
    },

      divideNumbers: function(){

      this.result= this.num1 / this.num2; 
    }


  },
    computed: {

      result() {

        
  }
  }
}


</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

button{

  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
