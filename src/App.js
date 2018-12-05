import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home"
import Login from "./Components/Login"
import Registro from "./Components/Registro"
import Oferente from "./Components/Oferente"
import Demandante from "./Components/Demandante"

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registro" component={Registro} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
