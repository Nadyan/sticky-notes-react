import React, { Component } from 'react';

import './style.css';

export default class Formulario extends Component {

    constructor(props) {
        super(props);

        this.titulo = "";
        this.nota = "";
    }

    _handleTitulo(event) {
        event.stopPropagation();
        this.titulo = event.target.value;
    }

    _handleNota(event) {
        event.stopPropagation();
        this.nota = event.target.value;
    }

    _criarNota(event) {
        event.preventDefault();
        event.stopPropagation();
        
        this.props.criarNota(this.titulo, this.nota);
    }

    render() {
        return (
            <form 
                className="form-cadastro"
                onSubmit={this._criarNota.bind(this)}
            >
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
