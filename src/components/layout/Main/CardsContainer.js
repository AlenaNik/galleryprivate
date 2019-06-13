import React from 'react';
import './CardsContainer.css';
import { Card, CardText, Row, Col } from 'reactstrap';


const CardsContainer = (props) => {
        return (
            <Row>
                <Col lg="3" md="3" xs="12">
                    <Card body className="individual-card">
                        <i className="fas fa-building fa-2x"/>
                        <CardText>Consigue visualizaciones fotorrealistas basadas en el reconocido motor Maxwell
                            Render, integrado en RoomBox </CardText>
                    </Card>
                </Col>
                <Col lg="3" md="3" xs="12">
                <Card body className="individual-card">
                    <i className="fas fa-heart fa-2x"/>
                    <CardText>Comparte proyectos y objetos con tu equipo de trabajo y desarrolla proyectos de una
                        forma ágil y dinámica </CardText>
                </Card>
            </Col>
                <Col lg="3" md="3" xs="12">
                    <Card body className="individual-card">
                        <i className="fas fa-camera fa-2x"/>
                        <CardText>Genera todas las imágenes hiperrealistas que quieras, incluidas visualizaciones 360º y compártelas.</CardText>
                    </Card>
                </Col>
            </Row>
        );
    };
export default CardsContainer;

