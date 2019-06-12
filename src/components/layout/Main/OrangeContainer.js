import React, {Component} from 'react';
import './OrangeContainer.css';


class OrangeContainer extends Component {
    render() {
        return (
            <div>
                <div className="orange-container">
                    <div className="container">
                        <ul>
                            <li>
                                <i className="fas fa-camera fa-2x"/>
                                <p>RoomBox incluye una amplísima galeria de objetos 3D de decoración y construcción de
                                    primeras firmas </p>
                            </li>
                            <li>
                                <i className="fas fa-building fa-2x"/>
                                <p>Consigue visualizaciones fotorrealistas basadas en el reconocido motor Maxwell
                                    Render, integrado en RoomBox </p>
                            </li>
                            <li>
                                <i className="fas fa-heart fa-2x"/>
                                <p>Comparte proyectos y objetos con tu equipo de trabajo y desarrolla proyectos de una
                                    forma ágil y dinámica </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrangeContainer;