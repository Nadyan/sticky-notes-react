import { Component } from 'react';
import Formulario from './components/Formulario/';
import ListaDeNotas from './components/ListaDeNotas/';

import './assets/App.css';
import './assets/index.css';

export default class App extends Component {
  
  render() {
    return (
      <div className="conteudo">
        <Formulario />
        <ListaDeNotas />
      </div>
    );
  }
  
}
