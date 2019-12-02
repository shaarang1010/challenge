import React from "react";
import "./App.css";
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';

import ResultBody from './components/result/ResultBody';


/* 
The design was left to barebone with some bootstrapping.
Wanted to focus more on the showcasing my react knowledge.

*/
function App() {
  const number = 100;
  return (
    <div className="App">
    <Header className="App-Header" title="FizzBuzz React App">
    <img src={logo} className="App-logo" alt="logo"/>
    </Header>
    <ResultBody number={number}/>
    </div>
  );
}

export default App;
