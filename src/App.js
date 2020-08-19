import React,{Component} from 'react';
import './App.css';
import Menu from './Layout/Menu' 
import Home from './Pages/Home'
import Login from './Pages/Login'
import Registro from './Pages/Registro'
import ProductoDetalle from './Pages/ProductoDetalle'
import {BrowserRouter, Route} from "react-router-dom";


class App extends Component {
  
  render(){
    return (
        <>
        <BrowserRouter>
        <Menu/>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/registro" exact component={Registro} />
        <Route path="/producto/:id" exact component={ProductoDetalle} />
        </BrowserRouter>
        </>
      );
  }
}

export default App;

// this.state es una variable de clase que heredamos de component y le asignamos un objeto json.
//El estado es algo que tiene intrínseco el componente, que nosotros podemos declarar y que al modificarse se vuelve a renderizar.
//Se utiliza para todo aquello que pueda cambiar
