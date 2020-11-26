import { Component } from 'react';
import Formulario from './components/Formulario/';
import ListaDeNotas from './components/ListaDeNotas/';

import './assets/App.css';
import './assets/index.css';

export default class App extends Component {
  
  constructor() {
    super();

    this.state = {
      notas: []
    };
  }

  criarNota(titulo, texto) {
    const novaNota = {
      titulo: titulo, 
      texto: texto
    }
    
    const novoArrayNotas = [...this.state.notas, novaNota];

    this.setState({
      notas: novoArrayNotas
    });
  }

  deletaNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);

    this.setState({
      notas: arrayNotas
    });
  }

  render() {
    return (
      <div className="conteudo">
        <Formulario criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas 
          notas={this.state.notas} 
          deletaNota={this.deletaNota.bind(this)} 
        />
      </div>
    );
  }
  
}
