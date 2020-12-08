import React, { Component } from 'react';
import CardNota from '../CardNota/';

import './style.css';

export default class ListaDeNotas extends Component {

    constructor(props) {
        super(props);

        this.state = {
            notas: []
        }
    }

    componentDidMount() {
        this.props.notas.inscrever(this._novasNotas.bind(this));
    }

    _novasNotas(notas) {
        this.setState({...this.state, notas});
    }

    render() {
        return (
            <ul className="lista-notas">
                {
                    this.state.notas.map((nota, index) => {
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
