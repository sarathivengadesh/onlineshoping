import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.scss';
import Homepage from './pages/Homepage/home.component';
import Shoppage from './pages/shop/shop.component';
import Header from './component/header/header.component';
import Signin from './component/sign-in/sign_in.component';
function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
       <Route exact path='/' component={Homepage}/>
       <Route exact path='/shop' component={Shoppage}/>
       <Route exact path='/signin' component={Signin}/>
      </Switch>
    </div>
  );
}

export default App;
     