import React, { Component } from 'react';

import './style.css';

export default class Formulario extends Component {

    constructor(props) {
        super(props);

        this.titulo = "";
        this.nota = "";
        this.categoria = "Sem Categoria";

        this.state = {
            categorias: []
        }
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias.bind(this));
    }

    _novasCategorias(categorias) {
        this.setState({...this.state, categorias});
    }

    _handleTitulo(event) {
        event.stopPropagation();
        this.titulo = event.target.value;
    }

    _handleNota(event) {
        event.stopPropagation();
        this.nota = event.target.value;
    }

    _handleCategoria(event) {
        event.stopPropagation();
        this.categoria = event.target.value;
    }

    _criarNota(event) {
        event.preventDefault();
        event.stopPropagation();
        
        this.props.criarNota(this.titulo, this.nota, this.categoria);
    }

    render() {
        return (
            <form 
                className="form-cadastro"
                onSubmit={this._criarNota.bind(this)}
            >
                <select 
                    className="form-cadastro_input" 
                    onChange={this._handleCategoria.bind(this)}
                >
                    <option defaultChecked={true}>Sem Categoria</option>
                    {
                        this.state.categorias.map((categoria, index) => {
                            return (
                                <option key={index}>{categoria}</option>
                            );
                        })
                    }
                </select>
                <input 
                    type="text"
                    placeholder="Título"
                    className="form-cadastro_input"
                    onChange={this._handleTitulo.bind(this)}
                />
                <textarea
                    rows={10}
                    placeholder="Escreva sua nota..."
                    className="form-cadastro_input"    
                    onChange={this._handleNota.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">
                    Criar nota
                </button>
            </form>
        );
    }
}
