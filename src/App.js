import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Index from './components/index/Index'

function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path='/' component={Index} />
          {/* <Route path='/vagas' component={App} />
          <Route path='/sobre' component={App} />*/}
          <Route path='/*' component={Index} /> 
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
