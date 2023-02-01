import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function WeatherApp() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=fd6fb8b36d4d0ef30309752ddfe29422&lang=ru`;

  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      axios.get(api).then((resp) => {
        setData(resp.data);
      });
      setLocation('');
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          onKeyPress={searchLocation}
          placeholder={`Введите название города`}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="container">

          <>
            <div className="top">
              <div className="location">
                <p>{data.name}</p>
              </div>
              <div className="temp">
                {data.main && <h1>{data.main.temp}</h1>}
              </div>
              <div className="description">
                {data.weather && <h1>{data.weather[0].description}</h1>}
              </div>
            </div>
            {data.name !== undefined && (
              <div className="bottom">
                <div className="feels">
                  {data.main && (
                    <p className="bold">
                      Чувствуется как: {data.main.feels_like}
                    </p>
                  )}
                </div>
                <div className="humidity">
                  {data.main && (
                    <p className="bold">Влажность: {data.main.humidity}%</p>
                  )}
                </div>
                <div className="wind">
                  {data.wind && (
                    <p className="bold">
                      Скорость ветра: {data.wind.speed} м/c
                    </p>
                  )}
                </div>
              </div>
            )}
          </>
      </div>
    </div>
  );
}

export default WeatherApp;
