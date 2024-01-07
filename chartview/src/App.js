import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import DetailComponent from './components/DetailComponent';
import ListComponent from './components/ListComponent';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/list/:id" element={<DetailComponent />} />
        <Route path="/list" element={<ListComponent />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;