import React, { Component } from 'react';
import CardNota from '../CardNota/';

import './style.css';

export default class ListaDeNotas extends Component {

    render() {
        return (
            <ul className="lista-notas">
                <li className="lista-notas_item">
                    <CardNota />
                </li>
            </ul>
        );
    }
}
