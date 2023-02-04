import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="app">
      <div className="links">
        <Link to={`/weather`}>Weather</Link>
        <Link to={`/time`}>Time</Link>
      </div>
    </div>
  );
}
