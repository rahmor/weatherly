import addCityReducer from '../reducers/reducers';

describe('Add City Reducer', () => {
  const expectedState = {
    city: 'Tampa',
  };

  const initialState = {
    city: 'Atlanta',
  };
  const city = 'Tampa';
  const UPDATE_CITY = 'UPDATE CITY';

  it('state should be passed in city', () => {
    const action = { type: UPDATE_CITY, payload: city };

    const state = addCityReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it('should return initialState', () => {
    const state = addCityReducer(initialState, {});
    expect(state).toEqual(initialState);
  });
});
