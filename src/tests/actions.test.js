import subCity from '../actions/actions';
import submitCity from '../actions/actions';

describe('actions', () => {
  it('should return an action given a city', () => {
    expect(submitCity('Tampa')).toEqual({
      type: 'UPDATE CITY',
      payload: 'Tampa',
    });
  });
});
