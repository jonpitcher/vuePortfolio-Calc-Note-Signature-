<template>
  <div class="hello">

<h1> Firma Electronica </h1>

    <img height="90px" width="70px" src="@/assets/logo.png">
    <img height="90px" width="70px" src="@/assets/pen.jpeg">

        <h2 class="title">{{ message }}</h2>

        <div class="container-buttons">
            <button @click="exportToPdf"> Crear PDF </button>
        </div>
        
        <canvas @mousedown="startPainting" @mouseup="finishedPainting" @mousemove="draw"  id="canvas"></canvas>
  </div>
</template>

<script>

import jsPDF from "jspdf";

export default {
  name: 'firmaelectronica',
  data () {
    return {
    vueCanvas:null,
    painting:false,
    canvas:null,
    ctx:null,
    }
  },

  methods: {

      startPainting(e) {
      this.painting = true;
      console.log(this.painting)
      this.draw(e)
    },
    finishedPainting() {
      this.painting = false;
      console.log(this.painting);
      this.ctx.beginPath()
      console.log(this.canvas); //para ver que lo que nos devuelve... hay que saber cual es la variable del canvas... utilizar la consola

    },
    draw(e) { //permite utilizar el mouse... 
      if(!this.painting) return

      this.ctx.lineWidth = 10;
      this.ctx.lineCap ="round"
      
     this.ctx.lineTo(e.clientX,e.clientY)
     this.ctx.stroke()

     this.ctx.beginPath()
     this.ctx.moveTo(e.clientX,e.clientY)

     
    },

    exportToPdf() {

      let vm = this; //este objeto == this 
      
      let img = this.canvas.toDataURL("image/png");

      let doc = new jsPDF("p","pt"); //p == de tipo portrait (vertical), pt=== pixeles

      //doc.text("Hello World", 40, 40); //this is the same as the let doc function...

      doc.addImage(img, "png", 15, 40, 180, 160); 

      doc.save("downloaded.pdf");

    },

  },
    computed: {

      result() {

        
  }
  }
  
}


</script>



<style scoped>

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body {
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
}

.app {
    width: 100%;
    height: 100vh;
    display: flex;
    padding: 40px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
}

.app .title {
    font-size: 30px;
    color: #2b2b2b;
    margin-bottom: 20px;
}

.app .container-buttons {
    display: flex;
    flex-direction: flex;
    justify-content: center;
    align-items: center;
}

button {
    border-radius: 7px 0 7px 0;
    padding: 5px 15px;
    font-size: 20px;
    color: #fff;
    background: rgba(0,0,0,0.8);
    cursor: pointer;
    transition: ease all 0.25s;
}

button:hover {
    background: transparent;
    color: #2b2b2b;
    border-radius: 0 7px 0 7px;
}    

#canvas {
    margin-top: 20px;
    width: 500px;
    height: 350px;
    border: 3px solid black;
}

</style>
