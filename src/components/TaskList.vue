<template lang="">
  <ul >
    <li
      v-for="(task, index) in tasks"
      :key="index"
      :class="{ completed: task.completed }"
      @click="detectClick(task)"
    >{{ task.title }} ( {{ task.completed ? "completa" : "incompleta" }} ) </li>
    <input
      type="text"
      placeholder="Añade una nueva tarea"
      v-model="title"
      @keyup.enter="add()"
    />
  </ul>
</template>
<script>
import{mapActions} from 'vuex'
export default {
  props: {
      listId: String,
      tasks: Array
   },
   data: () => ({
       title :"",
       numClicks:0
   }),
   methods: {
     ...mapActions(['addTask','deleteTask','markAsCompleted']),
       add(){
          this.addTask({tasks:this.listId, title: this.title})
          this.title = "";
       },
       detectClick(tasks){
          this.numClicks++;
          const taskId = tasks.id;
          if (this.numClicks === 1) {          // the first click in .2s
            var self = this;
            setTimeout(function() {
                switch(self.numClicks) {     // check the event type
                      case 1:
                        self.markAsCompleted( { tasks })
                        break;
                      default:
                        self.deleteTask( { taskId })
                }
                self.numClicks = 0;               // reset the first click
            }, 200);                              // wait 0.2s
          } // if
       },
     
   },
};
</script>
<style lang="scss" scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    background-color: #fafafa;
    border-radius: 3px;
    border-bottom: 1px solid #ccc;
    margin: 0.25rem 0;
    padding: 1rem;
    &.completed {
      background-color: #cfd8dc;
      color: #90a4ae;
    }
  }
input[type=text]:not(.browser-default){

    background-color: #eceff1;
    border: 2px solid #eceff1;
    border-radius: 3px;
    font-size: 1.1rem;
    outline: 0;
    transition: all 600ms ease;
    
    &:focus,
    &:active {
      color: #546E7A;
      
    }
    &::placeholder {
      color: #546E7A;
    }

  }
</style>
