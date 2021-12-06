<template>
  <header>
    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#!" class="brand-logo">Vue Trello</a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"
          ><i class="material-icons">menu</i></a
        >
        <ul class="right hide-on-med-and-down">
          <li>
            <router-link v-if="!user" class="nav-link active" aria-current="page" to="/register"
              >Registrarse</router-link
            >
          </li>
          <li>
            <router-link v-if="!user"  class="nav-link active" aria-current="page" to="/login"
              >Iniciar Sesión</router-link
            >
          </li>
          <li>
            <router-link v-if="user"  class="nav-link active" aria-current="page" to="/home"
              >Mis Paneles</router-link
            >
          </li>
          <li>
            <router-link v-if="user" @click="cerrarSesion()" class="nav-link active" aria-current="page" to="/login"
              >Cerrar Sesión</router-link
            >
          </li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <li>
        <router-link v-if="!user" class="nav-link active" aria-current="page" to="/register"
          >Registrase</router-link
        >
      </li>
      <li>
        <router-link v-if="!user" class="nav-link active" aria-current="page" to="/login"
          >Iniciar Sesión</router-link
        >
      </li>
      <li>
        <router-link v-if="user" class="nav-link active" aria-current="page" to="/home"
          >Mis Paneles</router-link
        >
      </li>
      <li>
        <router-link v-if="user" @click="cerrarSesion()" class="nav-link active" aria-current="page" to="/login" 
          >Cerrar Sesión</router-link
        >
      </li>
    </ul>
  </header>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  
  mounted() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});

  },
  methods:{
    ...mapActions(['logout']),
    cerrarSesion(){
      this.logout()
    }
  },
  computed: {
    ...mapState(["user"])

  } 
};
</script>
<style scoped>
header {
  background-color: #79b4b7;
  color: #f8f0df;
}
.brand-logo{
  padding-left: 15px;
}
</style>
