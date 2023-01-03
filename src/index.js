import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const COUNTRIES = [
  { id:"0", name: "India", code: "IND" },
  { id:"1", name: "China", code : "CN" },
  { id:"2", name: "Belgium", code: "BEL"},
  { id:"3", name: "United States of America", code:"USA"},
  { id:"4", name: "Germany", code:"GER"},
  { id:"5", name: "Italy", code:"ITA"},
  { id:"6", name: "Portugal", code: "POR"},
  { id:"7", name: "Australia", code: "AUS"},
  { id:"8", name: "England", code: "ENG"},
  { id:"9", name: "Afghanistan", code: "AFG"}
]



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App countries ={COUNTRIES}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
