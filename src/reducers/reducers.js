const initialState = {
  city: '',
};

function addCityReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE CITY':
      return Object.assign({}, state, { city: action.payload });
    default:
      return state;
  }
}

export default addCityReducer;
