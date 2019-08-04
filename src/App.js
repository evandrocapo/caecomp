import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Index from './components/index/Index'
import Sales from './components/sales/Sales';
import Members from './components/members/Members';


function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path='/' component={Index} />
          <Route path='/membros' component={Members} />
          <Route path='/vendas' component={Sales} />*/}
          <Route path='/*' component={Index} /> 
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
