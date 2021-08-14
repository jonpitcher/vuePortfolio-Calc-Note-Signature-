<template>
  <div style="margin:0px auto">
    <!-- Heading -->
    <h2>Mi agenda</h2>

    <!-- Input -->
    <div class="d-flex mt-5">
    <br>
      <input
        type="text"
        v-model="task"
        placeholder="Tarea"
        class="w-100 form-control"
      />
      <button class="btn btn-warning rounded-0" @click="submitTask">
        SUBMIT
      </button>
      
    </div>

    <!-- Task table -->
    <table style="margin:0px auto"class="table table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col" style="width: 120px">Status</th>
          <th scope="col" class="text-center">#</th>
          <th scope="col" class="text-center">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td>
            <span :class="{ 'line-through': task.status === 'completado' }">
              {{ task.name }}
            </span>
          </td>
          <td>
            <span
              class="pointer noselect"
              @click="changeStatus(index)"
              :class="{
                'text-danger': task.status === 'Iniciado',
                'text-success': task.status === 'Completado',
                'text-warning': task.status === 'En curso',
              }"
            >
              {{ capitalizeFirstChar(task.status) }}
            </span>
          </td>
          <td class="text-center">
            <div @click="deleteTask(index)">
              <span class="fa fa-trash pointer"></span>
            </div>
          </td>
          <td class="text-center">
            <div @click="editTask(index)">
              <p class="fa fa-pen pointer"></p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "todoapp",
  props: {
    msg: String,
  },
  data() {
    return {
      task: "",
      editedTask: null,
      statuses: ["Iniciado", "En curso", "Completado"],
      /* Status could be: 'to-do' / 'in-progress' / 'finished' */
      tasks: [
        {
          name: "Tarea Ejemplo = Ir al supermercado",
          status: "En progreso",
        },
      ],
    };
  },
  methods: {
    /**
     * Capitalize first character
     */
    capitalizeFirstChar(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    /**
     * Change status of task by index
     */
    changeStatus(index) {
      let newIndex = this.statuses.indexOf(this.tasks[index].status);
      if (++newIndex > 2) newIndex = 0;
      this.tasks[index].status = this.statuses[newIndex];
    },
    /**
     * Deletes task by index
     */
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    /**
     * Edit task
     */
    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },
    /**
     * Add / Update task
     */
    submitTask() {
      if (this.task.length === 0) return;
      /* We need to update the task */
      if (this.editedTask != null) {
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      } else {
        /* We need to add new task */
        this.tasks.push({
          name: this.task,
          status: "Iniciado",
        });
      }
      this.task = "";
    },
  },
};
</script>

<style scoped>

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

div{
  
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

.pointer {
  cursor: pointer;
}

.line-through {
  text-decoration: line-through;
}

</style>

