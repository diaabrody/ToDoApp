<template>
<div class="users">
  <div class="row">
    <div class="col-md-6 centered text-center">
      <form v-on:submit="addTask">
        Taskname : <input class="form-control" type="text" v-model="newtask.name" placeholder="task name">
        Type :<input class="form-control" type="text" v-model="newtask.type" placeholder="type"><br>
        <button class="btn btn-primary">Add task</button>

      </form>
      <br>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 centered text-center">
      <table class="table table-dark">
        <thead>
          <tr>
            <th>TaskName</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="task in tasks">
            <template v-if="! task.updatestatus">
      <td>{{task.name}}</td>
      <td>{{task.type}}</td>
      <td  ><button  v-on:click="Edit(task)" class="btn btn-md btn-primary">Edit</button> </td>
    </template>
            <template v-else>
      <td><input type="text"  v-model="task.name"></td>
      <td><input  type="text" v-model="task.type" ></td>
      <td ><button  v-on:click="update(task)" class="btn btn-md btn-success">update</button> </td>
    </template>
            <td><button v-on:click="deleteTask(task)" class="btn btn-md btn-danger"> x </button></td>

          </tr>

        </tbody>

      </table>
    </div>
  </div>

</div>
</template>

<style>
.centered {
  margin: 0 auto;
}
</style>

<script>
export default {
  name: 'Tasks',
  data() {
    return {
      newtask: {},
      tasks: [


      ]

    }
  },
  methods: {
    addTask: function(e) {
      e.preventDefault();
      this.tasks.push({
        name: this.newtask.name,
        type: this.newtask.type,
        updatestatus: false
      });


    },
    deleteTask: function(task) {
      this.tasks.splice(this.tasks.indexOf(task), 1);

    },

    Edit: function(task) {
      var taskindex = this.tasks.indexOf(task);
      this.tasks[taskindex].updatestatus = true;


    },
    update: function(task) {
      task.updatestatus = false;
    }


  },
  created: function() {
  this.$http.get('https://jsonplaceholder.typicode.com/users').then(function(response){
    console.log(response);
  })
  },




}
</script>
