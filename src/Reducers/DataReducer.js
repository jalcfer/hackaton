import { FETCH_TODOS, SET_DEMANDANTE, SET_OFERTANTE } from "../Actions/Types";

const initialstate={
  retos:null,
  userType:null,
  userId:null,
}

export default (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state
      }
    case SET_DEMANDANTE:
      console.log('demandante::action::',action)
      return{
        ...state,
        userType:action.userType,
        userId:action.id
      }
    case SET_OFERTANTE:
      console.log('ofertante::action::',action)
      return{
        ...state,
        userType:action.userType,
        userId:action.id
      }
    default:
      return state;
  }
};