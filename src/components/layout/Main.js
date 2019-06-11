// here is where Hero image, Hero text and Search bar is
import React, {Component} from 'react';
import { Jumbotron, Container, InputGroup, InputGroupText, InputGroupAddon, Input, Button } from 'reactstrap';
import Cube from '../assets/cubeNoBackground.png'
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Container fluid>
                        <img src={Cube} alt="" style={{width: "200px", height: "200px"}}/>
                        <h1 className="display-3">A gallery app for Room Box</h1>
                        <p className="lead">Helps you visualize finished renders</p>
                        <InputGroup>
                            <Input className="picsearch" placeholder="Name your project..." />
                            <InputGroupAddon addonType="append">
                                <Button>Show</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Container>
                </Jumbotron>
                <div className="orange-container">
                    <div className="container">
                        <ul>
                            <li>
                                <i className="fas fa-camera fa-3x"/>
                                <p>RoomBox incluye una amplísima galeria de objetos 3D de decoración y construcción de
                                    primeras firmas </p>
                            </li>
                            <li>
                                <i className="fas fa-building fa-3x"/>
                                <p>Consigue visualizaciones fotorrealistas basadas en el reconocido motor Maxwell
                                    Render, integrado en RoomBox </p>
                            </li>
                            <li>
                                <i className="fas fa-heart fa-3x"/>
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

export default Main;