import { createStore } from "redux";

export const initialState = {
  likes: 0
}

const reducer = (state = initialState , action) => {
  console.log("reducer >", action);

  switch(action.type){

    case 'INCREMENT':
      return {
        ...state, likes: state.likes + 1
      }
      default: return state;
 }
  return state;
}

const store = createStore(reducer)

export default store;

