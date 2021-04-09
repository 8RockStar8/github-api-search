const initialState = {
  userItem: null
};

const user = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case 'SET_USER':
      return {
        ...state,
        userItem: payload
      };
    case 'EMPTY_USER':
      return {
        ...state,
        userItem: null
      };
    default:
      return state;
  }
};

export default user;
