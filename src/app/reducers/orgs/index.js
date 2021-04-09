const initialState = {
  orgItems: null
};

const orgs = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case 'SET_ORGS':
      return {
        ...state,
        orgItems: payload
      };
    case 'EMPTY_ORGS':
      return {
        ...state,
        orgItems: null
      };
    default:
      return state;
  }
};

export default orgs;
