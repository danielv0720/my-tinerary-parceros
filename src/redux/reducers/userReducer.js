import { types } from "../types/types";

export const userReducer = (state = {}, action)=> {
  switch (action.type) {
    case types.login:
      return {
        name: action.payload.name,
        role: action.payload.role,
        photo: action.payload.photo
      }

      case types.logout:
        return {}
        
    default:
      return state;
  }
}