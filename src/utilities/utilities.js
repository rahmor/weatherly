let parseWeatherJSON = (JSON) => {
  const ICON_ADDRESS = ` http://openweathermap.org/img/wn/${JSON.current.weather[0].icon}.png`;
  let CURRENT = {
    temp: Math.floor(JSON.current.temp),
    time: parseUnixTime(JSON.current.dt),
    hi: Math.floor(JSON.daily[0].temp.max),
    lo: Math.floor(JSON.daily[0].temp.min),
    icon: ICON_ADDRESS,
    condition: JSON.current.weather[0].description,
  };
  const DAILY = JSON.daily;
  return { CURRENT, DAILY };
};

function parseUnixTime(unix) {
  return new Date(unix * 1000).toLocaleTimeString('en-us');
}
export default parseWeatherJSON;
