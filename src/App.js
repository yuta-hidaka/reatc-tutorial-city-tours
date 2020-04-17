import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navber';
import TourList from './components/TourList';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <TourList />
    </React.Fragment>
  );
}

export default App;
