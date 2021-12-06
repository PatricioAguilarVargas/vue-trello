import * as types from './mutations-types'
import API from '@/api'

export default {

    //auth
    fecthRegister({  commit }, { email, password }){
        commit(types.FETCH_USER_REQUEST)
        API.registerUser(email, password)
            .then(snap => {
                
                commit(types.FETCH_USER_SUCCESS, { user: snap.user })
            })
            .catch(error => {

                commit(types.FETCH_USER_FAILURE, { error })
            })
    },

    fecthLogin({  commit }, { email, password }){
        commit(types.FETCH_USER_REQUEST)
        API.validateUser(email, password)
            .then(snap => {
                commit(types.FETCH_USER_SUCCESS, { user: snap.user })
            })
            .catch(error => {
                commit(types.FETCH_USER_FAILURE, { error })
            })
    },

    logout({commit}){
        commit(types.LOGOUT)
        API.logoutUser()
    },

    // fetch via ajax de los paneles del usuario
    fetchBoards( {  commit }, { user }){
        commit(types.FETCH_BOARDS_REQUEST)
        API.getBoardByUser(user)
            .then(snap => commit(types.FETCH_BOARDS_SUCCESS, {boards: snap.val()}))
            .catch(error => commit(types.FETCH_BOARDS_FAILURE, {error}))
    },

    // fetch via ajax de las listas asociadas a un panel
    fetchList({commit}, {board}){
        commit(types.FETCH_LISTS_REQUEST)
        API.getListFromBoard(board)
            .then(snap => { 
               
                commit(types.FETCH_LISTS_SUCCESS, { lists: snap.val()}) 
            })
            .catch(error => commit(types.FETCH_LISTS_FAILURE, {  error }))
    },

    //fetch via ajax de las tareas de una lista
    fetchTasks({commit}, {tasks}){
        commit(types.FETCH_TASKS_REQUEST)
        API.getTaskFromList(tasks)
            .then(snap => commit(types.FETCH_TASKS_SUCCESS, {tasks: snap.val() }))
            .catch(error => commit(types.FETCH_TASKS_FAILURE, {error}))
    },

    //añadir un nuevo panel
    addBoard({commit}, { name, owner }){
        API.postBoard(name, owner )
            .then(snap => { 
                API.getBoardById(snap.id).then(snap => {
                    const board = snap.val()
                    commit(types.ADD_BOARD,  { board })
                }).catch(error => commit(types.FETCH_BOARDS_FAILURE, {error}))
            })
                
    },

    //añadir una nueva columna
    addColumn({commit}, { board,name }){
        API.postList(board,name)
            .then(column => { 
                API.getListById(column.id).then( snap => {
                    const lists = snap.val()
                    commit(types.ADD_COLUMN, {lists}) 
                }).catch(error => commit(types.FETCH_LISTS_FAILURE, {error}))
                
            })
    },

    //añadir una nueva tarea
    addTask({commit}, { tasks, title }){
        API.postTask(tasks,title)
            .then(tasks => { 
                API.getTaskById(tasks.id).then( snap => {
                    const tasks = snap.val()
                    commit(types.ADD_TASK, {tasks})
                }).catch(error => commit(types.FETCH_TASKS_FAILURE, {error}))
            })
    },

    //elimina una tarea
    deleteTask({commit}, { taskId }){
        API.deleteTask(taskId)
            .then(task => { 
                commit(types.DELETE_TASK, {taskId})
            }).catch(error => commit(types.FETCH_TASKS_FAILURE, {error}))
    },

    //marcar como completado
    markAsCompleted({commit}, { tasks }){
        API.completedTask(tasks.id)
            .then(snap => { 
                commit(types.MARK_AS_COMPLETED, {tasks})
            }).catch(error => commit(types.FETCH_TASKS_FAILURE, {error}))
    },

   
}