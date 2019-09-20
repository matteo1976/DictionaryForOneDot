import React from 'react';
import MyDictionary from './MyDictionary'
import {LOCAL_DATA} from "./costants"
import './App.css';

function App() {

  if (!localStorage.getItem(LOCAL_DATA)) {
    localStorage.setItem(LOCAL_DATA,"")
  }
  return (
    <div className="App">
      <h1>Dictionary Management Application</h1>
      <div className="colorDictionary">
      <MyDictionary />
      {/* <ColorDictionary domain="domain1" range="range1"/> */}
      </div>  
    </div>
  );
}

export default App;
