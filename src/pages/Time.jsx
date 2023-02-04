import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Time() {
  const [time, setTime] = useState(new Date());
  const tick = () => {
    setTime(new Date());
  };
  useEffect(() => {
    const timerId = setInterval(() => {
      tick();
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  return (
    <div className="app">
      <div style={{ textAlign: 'center', padding: '25px 0' }}>
        <Link to={`/`}>Вернуться назад</Link>
      </div>
      <div className="container">
        <div className="top">
          <h1>Сейчас:</h1>
          <p>{time.toLocaleTimeString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Time;
