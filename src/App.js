import React, { Component } from 'react';

import NavbarComponent from './components/NavbarComponent';
import Content from './components/ContentComponent';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Content />
    </div>
  );
}

export default App;
