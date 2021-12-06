/*****************************************
 corresponde a los datos que son almacenados
 ademas de guardar el usuario (user), 
 mensajes de errores (error)
 y si una peticion se esta realizando (fetchingData)

 este se puede ver en

 //TODO completar la descripcion
******************************************/
export default {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    fetchingData: false,
    error: null,
    boards:{/*
        id: {
            id,
            aowner,
            name
        }
    */},
    lists:{
        /*
        id: {
            id,
            board,
            name
        }
    */
    },
    tasks:{
        /*
        id: {
            id,
            list,
            name
        }
    */
    }
}