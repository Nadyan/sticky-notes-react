import { Component } from 'react';
import Formulario from './components/Formulario/';
import ListaDeNotas from './components/ListaDeNotas/';
import ListaDeCategorias from './components/ListaDeCategorias/';

import './assets/App.css';
import './assets/index.css';

import Categorias from './dados/Categorias';
import ArrayNotas from './dados/Notas';

export default class App extends Component {
  
  constructor() {
    super();

    this.categorias = new Categorias();
    this.notas = new ArrayNotas();

    /* 
    // a variável state não é usada, pois os dados
    // estão sendo salvos nas classes ArrayNotas e Categorias
    // para não redesenhar toda a aplicação toda vez que o
    // state muda
    this.state = {
      //notas: [],
      //categorias: [],
    };
    */
  }

  /*
  // Método movido para a classe Notas, 
  // onde será feito o armazenamento
  // e manipulação das notas
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

  // Método movido para a classe Categorias, 
  // onde será feito o armazenamento
  // e manipulação das categorias
  criarCategoria(novaCategoria) {
    const novoArrayCategorias = [...this.state.categorias, novaCategoria];

    this.setState({
      categorias: novoArrayCategorias
    });
  }
  */

  render() {
    return (
      <div className="conteudo">
        <Formulario 
          criarNota={this.notas.criarNota}
          categorias={this.categorias.categorias}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias 
            categorias={this.categorias.categorias}
            criarCategoria={this.categorias.criarCategoria}
          />
          <ListaDeNotas 
            notas={this.notas.notas} 
            deletaNota={this.notas.deletaNota}
          />
        </main>
      </div>
    );
  }
  
}
