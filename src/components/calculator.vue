<template>
  <div class="hello">

<h1> Calculadora de Vue </h1>

    <img height="90px" width="70px" src="@/assets/logo.png">
    <img height="90px" width="70px" src="@/assets/calculatorImage.png">

   <section>

  <input placeholder="num1" type="number" v-model.number="num1">
  <input placeholder="num2" type="number" v-model.number="num2" >

  <br><br>

  <button @click="addNumbers"> + </button>
  <button @click="minusNumbers"> - </button>
  <button @click="multiplyNumbers"> * </button>
  <button @click="divideNumbers"> / </button>
 
  </section>

  <h2> Resultado = {{ result }}  </h2>

  </div>
</template>

<script>
export default {
  name: 'calculator',
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
