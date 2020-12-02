import React, { Component } from 'react';
import CardNota from '../CardNota/';

import './style.css';

export default class ListaDeNotas extends Component {

    constructor(props) {
        // Construtor assim não é necessário.,
        // pois o react ja faz por default.
        super(props);
    }

    render() {
        return (
            <ul className="lista-notas">
                {
                    this.props.notas.map((nota, index) => {
                        return (
                            <li className="lista-notas_item" key={index}>
                                <CardNota 
                                    titulo={nota.titulo} 
                                    texto={nota.texto} 
                                    index={index}
                                    categoria={nota.categoria}
                                    deletaNota={this.props.deletaNota}
                                />
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}
