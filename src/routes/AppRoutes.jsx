import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';
import Principal from '../pages/Principal';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cadastro />} /> {/* Página de Cadastro será a primeira */}
        <Route path="/login" element={<Login />} />
        <Route path="/principal" element={<Principal />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
