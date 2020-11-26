import React, { Component } from 'react';
import { Delete } from '@material-ui/icons';

import './style.css';

export default class CardNota extends Component {

    constructor(props) {
        // Construtor assim não é necessário.,
        // pois o react ja faz por default.
        super(props);
    }

    deletar() {
        const index = this.props.index;
        this.props.deletaNota(index);
    }

    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.titulo}</h3>
                    <Delete onClick={this.deletar.bind(this)}/>
                </header>    
                <p className="card-nota_texto">{this.props.texto}</p>
            </section>    
        );
    }
}