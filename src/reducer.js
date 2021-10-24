export const SET_EVENTS = "app/SET_EVENTS";
export const UPDATE_EVENT = "app/UPDATE_EVENT";
function reducerEvents(state = [], action) {
  switch (action.type) {
    case SET_EVENTS:
      return [...state, ...action.payload];
    case UPDATE_EVENT:
      let ind = state.findIndex((d) => d.id === action.payload.i);
      if (ind !== -1) state[ind].createdOn = action.payload.date;
      
      return [...state];
    default:
      return state;
  }
}

export default reducerEvents;
