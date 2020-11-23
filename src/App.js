import ListaDeNotas from './components/ListaDeNotas';
import { Component } from 'react';
import Formulario from './components/Formulario';

import './App.css';

export default class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Formulario />
        <ListaDeNotas />
      </div>
    );
  }
  
}
