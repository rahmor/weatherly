import reducers from '../reducers/reducers';

const {
  city: updateCityReducer,
  fetching: updateFetching,
  current: updateCurrentWeather,
  fetchError: fettchErrorReducer,
  daily: updateDailyWeather,
} = reducers;

describe('updateCity Reducer', () => {
  const UPDATE_CITY = 'UPDATE CITY';

  const initialCity = 'Atlanta';
  const expectedCity = 'Tampa';
  const newCity = 'Tampa';

  it('reducer should update city', () => {
    const action = { type: UPDATE_CITY, payload: newCity };

    const state = updateCityReducer(initialCity, action);
    expect(expectedCity).toEqual(state);
  });

  it('should return initialCity', () => {
    const state = updateCityReducer(initialCity, {});
    expect(state).toEqual(initialCity);
  });
});

describe('updateFetching reducer', () => {
  const UPDATE_FETCHING = 'UPDATE FETCHING';

  it('should reverse boolean', () => {
    const action = { type: UPDATE_FETCHING };

    const state = updateFetching(false, action);
    expect(state).toBe(true);
  });

  it('should return false with no action', () => {
    const state = updateFetching(false, {});
    expect(state).toBe(false);
  });
});

describe('updateCurrentWeather reducer', () => {
  const UPDATE_CURRENT = 'UPDATE CURRENT';
  const NOT_A_CASE = 'NOT A CASE';

  const coords = {
    lat: 40.71,
    lon: -74.01,
  };

  const action = { type: UPDATE_CURRENT, payload: coords };
  const badAction = { type: NOT_A_CASE, payload: coords };

  it('should update current weather', () => {
    const state = updateCurrentWeather({}, action);
    expect(coords).toEqual(state);
  });

  it('should return object with no payload', () => {
    const state = updateCurrentWeather(coords, badAction);
    expect(typeof state).toBe('object');
  });
});

describe('updateDailyWeather reducer', () => {
  const UPDATE_DAILY = 'UPDATE DAILY';
  const NOT_A_CASE = 'NOT A CASE';

  const daily = [
    {
      dt: 1597251600,
      sunrise: 1597226638,
      sunset: 1597276691,
      temp: {
        day: 82.04,
        min: 81.95,
        max: 82.9,
        night: 81.95,
        eve: 82.04,
        morn: 82.04,
      },
      feels_like: {
        day: 87.37,
        night: 86.92,
        eve: 87.37,
        morn: 87.37,
      },
      pressure: 1017,
      humidity: 74,
      dew_point: 72.93,
      wind_speed: 6.82,
      wind_deg: 179,
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d',
        },
      ],
      clouds: 20,
      pop: 0.92,
      rain: 3.76,
      uvi: 8.49,
    },
    {
      dt: 1597338000,
      sunrise: 1597313098,
      sunset: 1597363011,
      temp: {
        day: 77.14,
        min: 76.75,
        max: 78.73,
        night: 76.75,
        eve: 78.73,
        morn: 77.79,
      },
      feels_like: {
        day: 82.71,
        night: 82.8,
        eve: 83.48,
        morn: 78.21,
      },
      pressure: 1018,
      humidity: 76,
      dew_point: 69.22,
      wind_speed: 2.77,
      wind_deg: 72,
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d',
        },
      ],
      clouds: 100,
      pop: 0.88,
      rain: 11.22,
      uvi: 8.16,
    },
  ];

  const action = { type: UPDATE_DAILY, payload: daily };
  const badAction = { type: NOT_A_CASE, payload: daily };

  it('should update daily weather', () => {
    const state = updateDailyWeather({}, action);
    expect(daily).toEqual(state);
  });

  it('should return object with no payload', () => {
    const state = updateDailyWeather(daily, badAction);
    expect(typeof state).toBe('object');
  });
});

describe('fetchError reducer', () => {
  const FETCH_ERROR = 'FETCH ERROR';

  it('should reverse boolean', () => {
    const action = { type: FETCH_ERROR };

    const state = fettchErrorReducer(false, action);
    expect(state).toBe(true);
  });

  it('should return false with no action', () => {
    const state = fettchErrorReducer(false, {});
    expect(state).toBe(false);
  });
});
