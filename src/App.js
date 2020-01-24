import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './Pages/Register';
import { Values } from "redux-form-website-template";

function App() {
  const handleSubmit = values => {
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  }
  return (
    <div className="App">
      <Register />
      <Values form="contact" onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
