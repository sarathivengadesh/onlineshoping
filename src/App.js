import React from 'react';
import {Route} from 'react-router-dom';
import './App.scss';
import Homepage from './pages/Homepage/home.component';

const Car =()=>(
  <div>
    <h1>sarathi</h1>
  </div>
)

function App() {
  return (
    <div className="App">
     <Route exact path='/' component={Homepage}/>
     <Route exact path='/car' component={Car}/>
    </div>
  );
}

export default App;
     