import { CHANGE_SERACH_FIELD } from "./types";

const initialState = {
  searchField: ''
};

export const searchRobots = (state = initialState, action={}) => {
  switch(action.type) {
    case CHANGE_SERACH_FIELD:
      return {
        ...state,
        searchField: action.payload
      }; 
    default:
      return state;
  }
}; 