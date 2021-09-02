import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Logo from './BRI_2020.svg.png';
import Bgillus from './illbg.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";

function App() {
  return (<Router>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}><img className="Logo" src={Logo} alt={Logo}/></Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <div className="button-kanan">
              <li><Link className="button login" to={"/sign-in"}>Login</Link></li>
              <li><Link className="button signup" to={"/sign-up"}>Sign up</Link></li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      
      <div className="hero">
         <div className="text-hero">
            <h1>KPR BRI : Punya Rumah Auto Keren</h1>
            <h2>Jadi Keren Dengan Punya Rumah Sendiri</h2>
            <p>Cepat, Mudah, Transparan</p>
         </div>
        <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
      </div>


    </Router>
  );
}

export default App;