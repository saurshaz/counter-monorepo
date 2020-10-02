const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC_COUNTER':
      console.log('INCREMENTING');
      
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DEC_COUNTER':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
