/****************************************
corresponde al tipo de mutaciones que tendran
los datos para vuex
*****************************************/

//async
export const FETCH_BOARDS_REQUEST = 'FETCH_BOARDS_REQUEST'
export const FETCH_BOARDS_SUCCESS = 'FETCH_BOARDS_SUCCESS'
export const FETCH_BOARDS_FAILURE = 'FETCH_BOARDS_FAILURE'

export const FETCH_LISTS_REQUEST = 'FETCH_LISTS_REQUEST'
export const FETCH_LISTS_SUCCESS = 'FETCH_LISTS_SUCCESS'
export const FETCH_LISTS_FAILURE = 'FETCH_LISTS_FAILURE'

export const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST'
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS'
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE'

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

//sync
export const ADD_BOARD = 'ADD_BOARD'
export const ADD_COLUMN= 'ADD_COLUMN'
export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const MARK_AS_COMPLETED = 'MARK_AS_COMPLETED'

export const LOGOUT = 'LOGOUT'