const byId = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_TODOS': {
      const nextState = { ...state };
      action.response.forEach(t => {
        nextState[t.id] = t;
      });
      return nextState;
    }
    default:
      return state;
  }
};

export default byId;

export const getTodo = (state, id) => state[id];
