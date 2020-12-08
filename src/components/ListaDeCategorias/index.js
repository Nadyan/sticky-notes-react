import React, { Component } from 'react';

import './style.css';

export default class ListaDeCategorias extends Component {

    constructor(props) {
        super(props);

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
                        this.state.categorias.map((categoria, index) => {
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