<template lang="">
  <footer class="page-footer">
    <div class="footer-copyright">
      <div class="container center">
        &copy; {{ anio }} Patricio Aguilar 
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data: () => ({
    anio: new Date().getFullYear()
  })
};
</script>
<style scoped>

footer{
    bottom: 0;
    position: fixed;
    width: 100%;
    background-color: #9D9D9D;
    color: #FEFBF3;
    padding-top: 0;
}
</style>