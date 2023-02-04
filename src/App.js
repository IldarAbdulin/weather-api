import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Time from './pages/Time';
import WeatherApp from './pages/Weather';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/weather' element={<WeatherApp />}/>
      <Route path='/time' element={<Time />}/>
    </Routes>
  );
}

export default App;
