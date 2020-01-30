import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactForm from './Pages/Register';
import { connect } from 'react-redux'
//import { Values } from "redux-form-website-template";
import './App.scss';

function App() {
  const submit = values => {
    // print the form values to the console
    console.log(values)
  }
  return (
    <div className="App">
     <ContactForm onSubmit={submit} />
      
    </div>
  );
}

export default App;
