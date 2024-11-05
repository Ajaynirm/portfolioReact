
// src/App.js
import React from 'react';
import './App.css';
import NavBar from './assets/components/NavBar';
import ProfileSection from './assets/components/ProfileSection';
import Main from './assets/components/main/Main';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;

