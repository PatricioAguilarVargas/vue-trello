<template lang="">
  <router-link 
        class="col s12 m12 l3 board-card" 
        :to="{ name: 'Board', params: { name, id } }">
    <span class="board-card-title">{{ name }}</span>
  </router-link>
</template>
<script>
export default {
  name: "BoardCard",
  props: {
    id: String,
    name: String,
  },
};
</script>
<style lang="scss" scoped>
.board-card {
    background-color: #546E7A;
    box-shadow: 0 0 0 0.5px rgba(49,49,93,.03),
      0 2px 5px 0 rgba(49,49,93,.1),
      0 1px 2px 0 rgba(0,0,0,.08);
    color: #fafafa;
    border-radius: 15px;
    border: 1px solid white;
   
    padding: 2rem 2rem;
    text-align: center;
    text-decoration: none;
    transition: all 600ms ease;

    height: 100px;
    &-title {
      font-size: 1.2rem;
    }
    &:hover {
      background-color: #90a4ae;
      font-weight: bold;
    }
  
  }
</style>
