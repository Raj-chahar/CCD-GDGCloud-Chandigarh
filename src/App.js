import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home/Home';
import Speaker from './components/speakers/Speakers.jsx';
import CodeofConduct from './components/codeOfConduct/CodeofConduct.jsx';
import Schedule from './components/schedule/Schedule.jsx';
import Team from './components/team/Team.jsx';

function App() {
    return (
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Speaker" element={<Speaker />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/CodeofConduct" element={<CodeofConduct />} />
      </Routes>
    </Router>
    );
}

export default App;
