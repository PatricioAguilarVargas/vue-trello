//TRAE TODO DE firebase Y LE ASIGNA ALIAS firebaseApp
import firebaseApp from 'firebase'
//SE IMPORTA SETTINGS 
import settings from './settings'

//SE INCIALIZA SEGUN LA CONFIGURACION PASADA
firebaseApp.initializeApp(settings);

//SE OBTIENE UNA INSTNCIA DE LA BASE DE DATOS
export const db = firebaseApp.database();
export const auth = firebaseApp.auth();
export default firebaseApp