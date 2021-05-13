import React from 'react';
import {Route} from 'react-router-dom';
import './App.scss';
import Homepage from './pages/Homepage/home.component';
import Shoppage from './pages/shop/shop.component';


function App() {
  return (
    <div className="App">
     <Route exact path='/' component={Homepage}/>
     <Route exact path='/shop' component={Shoppage}/>
    </div>
  );
}

export default App;
     