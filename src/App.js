import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Clock from './Pages/Clock';
import Nasa from './Pages/Nasa';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/nasa" element={<Nasa />} />
      </Routes>
    </Router>
  );
};

export default App;
