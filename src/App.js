import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AgregarDeportes from "./Components/AgregarDeportes";
import EditarDeportes from "./Components/EditarDeportes";
import Deportes from "./Components/Deportes";
import Deporte from "./Components/Deporte";
import Header from "./Components/Header";

import 'bootstrap/dist/css/bootstrap.css';


function App() {


  return (
    <Router>
     
       <Header/>
      <Switch>
     
     <Route exact path="/deportes" component={Deportes} />
     
      <Route exact path="/nuevo-deporte" component={AgregarDeportes} />
      
     
      <Route exact path="/deportes:id" component={Deporte} />
      <Route exact path="/deportes/editar:id" component={EditarDeportes} />
      
      </Switch>

      </Router>
  );
}

export default App;
