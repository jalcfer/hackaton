import { 
  auth,
  todosRef, 
  db,
  demandantesRef,
  ofertantesRef,
} from "../Config/firebase";

import { FETCH_TODOS, SET_DEMANDANTE, SET_OFERTANTE } from "./Types";

export const addToDo = newToDo => async dispatch => {
  todosRef.push().set(newToDo);
};

export const completeToDo = completeToDoId => async dispatch => {
  todosRef.child(completeToDoId).remove();
};

export const fetchToDos = () => async dispatch => {
  todosRef.on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    });
  });
};

export const createDemandante = ()=>async (dispatch,email,identificacion,nombre,nombreContacto,password,telefonoContacto,foto,tipoDeIdentificacion,tipoDeUsuario)=>{
  console.log(email,identificacion,nombre,nombreContacto,password,telefonoContacto,foto,tipoDeIdentificacion,tipoDeUsuario,dispatch)
  demandantesRef.add({
    email:email,
    identificacion:identificacion,
    nombre:nombre,
    nombreContacto:nombreContacto,
    password:password,
    telefonoContacto:telefonoContacto,
    foto:foto,
    tipoDeIdentificacion:tipoDeIdentificacion,
    tipoDeUsuario:tipoDeUsuario
  })
  .then((docRef)=>{
    dispatch({
      type:SET_DEMANDANTE,
      payload:{
        id:docRef.id,
        userType:'Demandante'
      }
    })
  })
}

export const createOfertante = ()=>async (dispatch,email,identificacion,nombre,nombreContacto,password,telefonoContacto,foto,tipoDeIdentificacion,tipoDeUsuario)=>{
  console.log(email,identificacion,nombre,nombreContacto,password,telefonoContacto,foto,tipoDeIdentificacion,tipoDeUsuario,dispatch)
  ofertantesRef.add({
    email:email,
    identificacion:identificacion,
    nombre:nombre,
    nombreContacto:nombreContacto,
    password:password,
    telefonoContacto:telefonoContacto,
    foto:foto,
    tipoDeIdentificacion:tipoDeIdentificacion,
    tipoDeUsuario:tipoDeUsuario
  })
  .then((docRef)=>{
    dispatch({
      type:SET_OFERTANTE,
      payload:{
        id:docRef.id,
        userType:'Ofertante'
      }
    })
    return{
      email,
      password,
    }
  })
  .finally((obj)=>{
    console.log('obj::',obj)
    auth.createUserWithEmailAndPassword(obj.mail, obj.pass).catch(function(error) {
      console.log('createofertante::action:error::',error)
    });
  })
}

