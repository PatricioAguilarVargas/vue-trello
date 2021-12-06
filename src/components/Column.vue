<template lang="">
  <section class="container">
    <header class="row" >
      <h3>{{ name }}</h3>
      <TaskList 
        class="col s12 m12"
        :listId="listId" 
        :tasks="tasksList"></TaskList>
    </header>
  </section>
</template>
<script>
import TaskList from './TaskList.vue'
import {mapGetters, mapActions } from 'vuex'
export default {
  name: "Column",
  props: {
    listId: String,
    name: String,
  },
  components:{
      TaskList
  },
  computed:{
    ...mapGetters(['getTasksFromList']),
    tasksList(){
      return this.getTasksFromList(this.listId)
    }
  },
  methods: {
    ...mapActions(['fetchTasks'])
  },
  created(){
    this.fetchTasks({tasks: this.listId})
  }
};
</script>
<style lang="scss" scoped>
section {
  box-sizing: border-box;
  background-color: #eceff1;
  border-radius: 3px;
  box-shadow: 0 0 0 0.5px rgba(49, 49, 93, 0.03),
    0 2px 5px 0 rgba(49, 49, 93, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.08);
  margin: 1rem;
  padding: 1rem;

}
header {
  color: #37474f;
  margin: 0;
  padding-bottom: 1rem;
}
h3 {
  margin: 0;
  text-align: center;
}


</style>
