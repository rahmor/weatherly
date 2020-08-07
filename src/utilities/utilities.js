let parseWeatherJSON = (JSON) => {
  let CURRENT = {
    temp: JSON.current.temp,
    time: parseUnixTime(JSON.current.dt),
    hi: JSON.daily[0].temp.max,
    lo: JSON.daily[0].temp.min,
    icon: JSON.current.weather[0].icon,
    condition: JSON.current.weather[0].description,
  };
  const DAILY = JSON.daily;
  return { CURRENT, DAILY };
};

function parseUnixTime(unix) {
  return new Date(unix * 1000).toLocaleTimeString('en-us');
}
export default parseWeatherJSON;
