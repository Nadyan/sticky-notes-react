import React, { Component } from 'react';

import './style.css';

export default class ListaDeCategorias extends Component {

    constructor(props) {
        // Construtor assim não é necessário.,
        // pois o react ja faz por default.
        super(props);
    }

    _handleEventoInput(evento) {
        if (evento.key === 'Enter') {
            let novaCategoria = evento.target.value;
            this.props.criarCategoria(novaCategoria);
        }
    }

    render() {
        return(
            <div className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {
                        this.props.categorias.map((categoria, index) => {
                            return (
                                <li className="lista-categorias_item" key={index}>{categoria}</li>
                            );
                        })
                    }
                </ul>
                <input 
                    type="text" 
                    className="lista-categorias_input" 
                    placeholder="Adicionar categoria" 
                    onKeyUp={this._handleEventoInput.bind(this)}
                />
            </div>
        );
    }
}