<template>

  <div class="container">
    <div v-if="(msg || error)" class="row">
      <div class="col s12">
        <div class="card red lighten-2">
          <div class="card-content white-text">
            <p>
             {{ msg }}  {{ error }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <h1>Inicio de Sesión</h1>
    <hr />
    <div class="row">
      <form @submit.prevent="validateUser" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input v-model="email" id="email"  type="email" class="validate" />
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              v-model="password"
              id="password"
              type="password"
              class="validate"
            />
            <label for="password">Password</label>
          </div>
        </div>

        <button
          class="btn waves-effect waves-light col s12"
          type="submit"
          name="action"
        >
          Iniciar Sesión
        </button>
        
      
      </form>
       <p>Email: aa@aa.cl</p>
        <p>pass: 123456</p>
    </div>
  </div>
</template>

<script>
import router from "../router/index";
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    email: "",
    password: "",
    msg:""
  }),
  computed: {
    ...mapState(["fetchingData", "error"]),
  },
  methods: {
    ...mapActions(["fecthLogin"]),
    validateUser() {
      this.msg = ""
       if(this.email === ""){
           this.msg = "Debe ingresar un Email válido"
      }else if(this.password < 6){
           this.msg = "La contraseña sebe ser mayor a 6 caracteres"
      }
      else{
        this.fecthLogin({ email: this.email, password: this.password })
        setTimeout(() => this.$router.push("/home"),500)
        
      }
    },
  },
};
</script>

<style scoped>
h1{
  text-align: center;
}
p{
  text-align: center;
}
</style>
