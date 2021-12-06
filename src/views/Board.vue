<template>
  <section >
    <h3><span>Mis Paneles</span> &#8227; {{ name }}</h3>
    <div class="row">
      <input
            type="text"
            class="col m4 s12 "
            placeholder="Añade una lista"
            v-model="listName"
            @keyup.enter="add()"
          />
    </div>
   
    <div class="row">
      <Column
        class="col s12 m4 l4"
        v-for="(list, index) in boardList"
        :key="index"
        :listId="list.id"
        :name="list.name"
      ></Column>
    </div>
  </section>
</template>
<script>
import Column from "../components/Column.vue"
import {mapActions, mapState, mapGetters } from 'vuex'
export default {
  name: "BoardView",
  components: { Column },
  props: {
    name: String,
    id: String,
  },
  methods: {
    ...mapActions(['fetchList','addColumn']),
    add() {
      this.addColumn({board:this.id, name: this.listName})
      this.listName = ''
    },
  },
  data: () => ({
    listName:""
  }),
  computed:{
    ...mapState(['fetchingData']),
    ...mapGetters(['getListByBoard']),
    boardList(){
      return this.getListByBoard(this.id)
    }
  },
  created(){
    this.fetchList({ board: this.id})
  }
};
</script>

<style lang="scss" scoped>
section {
  text-align: left;
}

h3 {
  color: #37474f;
  text-align: left;
  margin: 1.5rem;
  span {
    color: #37474f;
  }
}
.margin{
    margin: 0 1.5rem;
    padding: 1rem;
    outline: 0;
    padding: 0.5rem;
}

input[type=text]:not(.browser-default){
    margin: 0 1.5rem;
    padding: 1rem;
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
    }
    &::placeholder {
      color: white;
    }

}
</style>
