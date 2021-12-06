import Vue from "vue";
import * as types from "./mutations-types";

export default {
  // fetch de los paneles creados por el usuario
  [types.FETCH_BOARDS_REQUEST](state) {
    state.fetchingData = true;
    state.error = null;
  },

  [types.FETCH_BOARDS_SUCCESS](state, { boards }) {
    state.fetchingData = false;
    state.error = null;
    state.boards = { ...boards };
  },

  [types.FETCH_BOARDS_FAILURE](state, { error }) {
    state.fetchingData = false;
    state.error = error;
  },

  // fetch de las listas creadas por el usuario
  [types.FETCH_LISTS_REQUEST](state) {
    state.fetchingData = true;
    state.error = null;
  },

  [types.FETCH_LISTS_SUCCESS](state, { lists }) {
    state.fetchingData = false;
    state.error = null;
    state.lists = { ...lists };
  },

  [types.FETCH_LISTS_FAILURE](state, { error }) {
    state.fetchingData = false;
    state.error = error;
  },

  // fetch de las tareas creadas por el usuario
  [types.FETCH_TASKS_REQUEST](state) {
    state.fetchingData = true;
    state.error = null;
  },

  [types.FETCH_TASKS_SUCCESS](state, { tasks }) {
    state.fetchingData = false;
    state.error = null;
    //state.tasks = {... tasks}
    state.tasks = Object.assign({}, state.tasks, tasks);
  },

  [types.FETCH_TASKS_FAILURE](state, { error }) {
    state.fetchingData = false;
    state.error = error;
  },

  // fetch de usuario
  [types.FETCH_USER_REQUEST](state) {
    state.fetchingData = true;
    state.error = null;
  },

  [types.FETCH_USER_SUCCESS](state, { user }) {
    state.fetchingData = false;
    state.error = null;
    //state.tasks = {... tasks}
    window.localStorage.setItem("user", JSON.stringify(user));
    //console.log(window.localStorage.getItem("user"))
    state.user = Object.assign({}, state.user, user);
  },

  [types.FETCH_USER_FAILURE](state, { error }) {
    state.fetchingData = false;
    state.error = error;
  },
  //crear un nuevo panel
  [types.ADD_BOARD](state, { board }) {
    /**
         *Vue no permite añadir dinámicamente en el nivel raiz nuevas propiedades reactivas a una instancia ya creada. 
         Sin embargo, se pueden añadir propiedades reactivas a un objeto anidado usando el método Vue.set(object, key, value):
         */
    //Vue.set(state.boards, board.id, board)
    //state.boards.push(board)
    state.boards = Object.assign({}, state.boards, board);
    //state.boards = {... board}
  },

  //crear una lista de tareas
  [types.ADD_COLUMN](state, { lists }) {
    /**
         *Vue no permite añadir dinámicamente en el nivel raiz nuevas propiedades reactivas a una instancia ya creada. 
         Sin embargo, se pueden añadir propiedades reactivas a un objeto anidado usando el método Vue.set(object, key, value):
         */
    ///Vue.set(state.lists, lists.id, lists)
    //state.lists.push(lists)
    state.lists = Object.assign({}, state.lists, lists);
  },

  //crear una tarea
  [types.ADD_TASK](state, { tasks }) {
    /**
     * Vue no permite añadir dinámicamente en el nivel raiz nuevas propiedades reactivas a una instancia ya creada.
     * Sin embargo, se pueden añadir propiedades reactivas a un objeto anidado usando el método Vue.set(object, key, value):
     */
    //.set(state.tasks, tasks.id, tasks)
    //state.tasks.push(tasks)
    state.tasks = Object.assign({}, state.tasks, tasks);
  },

  //borrar una tarea
  [types.DELETE_TASK](state, { taskId }) {
    /*
     * El método Object.values() devuelve un array cuyos elementos son valores de propiedades enumarables que se encuentran en el objeto.
     * El orden de las propiedades es el mismo que el dado cuando se recorre el objeto de forma manual.
     */
    state.tasks = Object.values(state.tasks).filter(
      (task) => task.id !== taskId
    );
  },

  [types.MARK_AS_COMPLETED](state, { tasks }) {
    tasks.completed = !tasks.completed;
  },

  [types.LOGOUT](state) {
      localStorage.removeItem("user");
      state.user = null
      
  },
};
