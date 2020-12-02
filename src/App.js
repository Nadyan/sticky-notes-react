import { Component } from 'react';
import Formulario from './components/Formulario/';
import ListaDeNotas from './components/ListaDeNotas/';
import ListaDeCategorias from './components/ListaDeCategorias/';

import './assets/App.css';
import './assets/index.css';

export default class App extends Component {
  
  constructor() {
    super();

    this.state = {
      notas: [],
      categorias: [],
    };
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = {
      titulo: titulo, 
      texto: texto,
      categoria: categoria
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

  criarCategoria(novaCategoria) {
    const novoArrayCategorias = [...this.state.categorias, novaCategoria];

    this.setState({
      categorias: novoArrayCategorias
    });
  }

  render() {
    return (
      <div className="conteudo">
        <Formulario 
          criarNota={this.criarNota.bind(this)}
          categorias={this.state.categorias}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias 
            categorias={this.state.categorias}
            criarCategoria={this.criarCategoria.bind(this)}
          />
          <ListaDeNotas 
            notas={this.state.notas} 
            deletaNota={this.deletaNota.bind(this)}
          />
        </main>
      </div>
    );
  }
  
}
