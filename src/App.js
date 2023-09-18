import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Times from './pages/Times';
import Jogador from './pages/Jogador';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/times" element={ <Times /> } />
      <Route path="/jogador" element={ <Jogador /> } />
      <Route exact path="/" element={ <Navigate to="/jogador" /> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
