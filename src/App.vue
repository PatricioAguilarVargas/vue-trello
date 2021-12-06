<template>
  <div>
    <AppHeader></AppHeader>
    <div class="fluid-container">
      <router-view />
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script lang="">
import AppHeader from "./components/common/AppHeader.vue";
import AppFooter from "./components/common/AppFooter.vue";
export default {
  components: {
    AppHeader,
    AppFooter,
  },
  mounted() {
    M.AutoInit();
  },
};
</script>
<style scoped>
 #app {
    color: #37474f;
    font-family: 'Lato', Helvetica, Arial, sans-serif;
    margin: 0 auto;
    padding: 0;
    text-align: center;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

</style>
