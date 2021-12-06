<template>
  <div class="container">
    <h3>Mis Paneles</h3>
    <hr>
    <div class="row"></div>
     <input
        
        type="text"
        class="col m4 s12"
        placeholder="Añade un nuevo panel"
        v-model="boardName"
        @keyup.enter="add()"
      />
      
    <div class="row boards-collection">
      <span v-if="fetchingData">Cargando...</span>
      <BoardCard
          class="col m3 s12"
          v-for="(board, index) in boards"
          :key="index"
          :name="board.name"
          :id="board.id"></Boardcard>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BoardCard from '../components/BoardCard.vue'
import {mapState, mapActions } from 'vuex'
export default {
  name: "Home",
  components:{
    BoardCard
  },
  data: () => ({
    boardName: "",
  }),
  computed:{
    ...mapState([
      'boards',
      'fetchingData',
      'user'
    ])
  },
  methods:{
    ...mapActions([
      'fetchBoards',
      'addBoard'
    ]),
    add(){
      this.addBoard({name: this.boardName, owner: this.user.uid})
      this.boardName = ""
    }
  },
  mounted(){
    this.fetchBoards({user: this.user.uid})
  }
};
</script>
<style lang="scss" scoped>
  h3 {
    text-align: left;
    margin: 1.5rem;
  }
  .boards-collection {
    padding-top: 1rem;
  }
  
  input[type=text]:not(.browser-default){
    box-sizing: border-box;
    background-color: #546E7A;
    border: 2px solid #546E7A;
    border-radius: 3px;
    font-size: 1.1rem;
    outline: 0;
    padding: 0.5rem;
    transition: all 600ms ease;

    &:focus,
    &:active {
      background-color: white;
      color: #546E7A;
      border: 2px solid #546E7A;
    }
    &::placeholder {
      color: white;
    }

  }
</style>