import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import owl from './media/sowa.png';
import styles from './App.css';
import Home from './components/Home';
function App() {
  return (
   <BrowserRouter>
        <div className="App">
        <div className="lines"></div>
        <img className="owl" src={owl}/>
          <Header/>
          <div className="page-content">
            <Switch>
              <Route path='/' exact component={Home}/>
              
            </Switch>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;



// {window.location.pathname !== '/onepage' && <Header />}
          // {window.location.pathname === '/onepage' && <HeaderAll />}
          // <div className="page-content">
          //   <Switch>
          //     // <Route path='/onepage' exact component={HomeAll}/>
          //     <Route path='/' exact component={HomeAll}/>
          //     <Route path='/skills' exact component={Skills}/>
          //     <Route path='/contact' exact component={Contact}/>
          //   </Switch>
          // </div>
          // < Footer />