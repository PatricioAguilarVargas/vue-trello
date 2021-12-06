import { createStore, createLogger } from "vuex";
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
export default createStore({
  strict:  process.env.NODE_ENV === "production" ,
  plugins: process.env.NODE_ENV === "production" && [createLogger()] || [],
  state,
  mutations,
  actions,
  getters,
});
