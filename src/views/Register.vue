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
    <div class="row">
      <h1>Registrarse</h1>
      <hr />
      <form @submit.prevent="validateUser" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input v-model="email" id="email" type="email" class="validate" 
            :disabled="fetchingData"/>
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              v-model="password"
              id="pass1"
              type="password"
              class="validate"
              :disabled="fetchingData"
            />
            <label for="password">Password</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              v-model="passwordConfirm"
              id="pass2"
              type="password"
              class="validate"
              :disabled="fetchingData"
            />
            <label for="password">Confirm Password</label>
          </div>
        </div>
        <button
          class="btn waves-effect waves-light col s12"
          type="submit"
          name="action"
          :disabled="fetchingData"
        >
          Registrar
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import router from "../router/index";
import { mapActions, mapState } from 'vuex'
export default {
  data: () => ({
    email: "",
    password: "",
    passwordConfirm: "",
    msg: ""
  }),
  computed:{
    ...mapState(['fetchingData','error'])
  },
  methods: {
    ...mapActions(['fecthRegister']),
    validateUser() {
      this.msg = ""
       if(this.email === ""){
           this.msg = "Debe ingresar un Email válido"
      }else if(this.password < 6){
           this.msg = "La contraseña sebe ser mayor a 6 caracteres"
      }else if(this.password !== this.passwordConfirm){
         this.msg = "Las contraseñas no coinciden"
      }
      else{
        this.fecthRegister({ email: this.email, password: this.password })
        setTimeout(() => this.$router.push({ path: "/" }),500)
         ;
      }
      
    },
  },
};
</script>


<style scoped>
h1{
  text-align: center;
}
</style>
