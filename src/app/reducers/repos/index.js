const initialState = {
  repoItems: null
};

const repos = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case 'SET_REPOS':
      return {
        ...state,
        repoItems: payload
      };
    case 'EMPTY_REPOS':
      return {
        ...state,
        repoItems: null
      };
    default:
      return state;
  }
};

export default repos;
