const UPDATE_CITY = 'UPDATE CITY';

function submitCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city,
  };
}

export default submitCity;
