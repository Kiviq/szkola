import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header.js';
import styles from './App.css';
import Home from './components/Home/Home.js';
// import About from'./components/About/About.js';
import Products from './components/Products/Products.js';
import Course_page from './components/Course_page/Course_page.js';
import Static from './components/Static/Static.js';
import Faq from './components/Faq/Faq.js';
import Pricing from './components/Pricing/Pricing.js';
import Footer from './components/Footer/Footer.js';
function App() {
  return (
   <BrowserRouter>
        <div className="App">
          <Header/>
          <div className="page-content">
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/kursy' exact component={Products}/>
              <Route path='/kursy/jezyk_polski' exact component={Course_page}/>
              <Route path='/kursy/matematyka' exact component={Course_page}/>
              <Route path='/kursy/jezyk_angielski' exact component={Course_page}/>
              <Route path='/kontakt'  component={Static}/>
              <Route path='/o_nas'  component={Static}/>
              <Route path='/faq'  component={Faq}/>
              <Route path='/cennik'  component={Pricing}/>
            </Switch>
          </div>
          <Footer/>
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