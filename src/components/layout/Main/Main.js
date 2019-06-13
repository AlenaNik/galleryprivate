// here is where Hero image, Hero text and Search bar is
import React, {Component} from 'react';
import { Jumbotron, Container, InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import './Main.css';
import CardsContainer from "./CardsContainer";
import Illustration from './undraw_3d_modeling_h60h.svg'

// In this section there is an illustration by https://undraw.co/ (may be used completely free and without attribution)

class Main extends Component {
    render() {
        return (
            <div className="main-section">
                <Jumbotron fluid>
                    <Container fluid>
                        <img className="heroimg" src={Illustration} alt="an illustration of 3d"/>
                        <h1 className="display-3">A gallery app for Room Box</h1>
                        <p className="lead">Helps you visualize finished renders</p>
                        <InputGroup>
                            <Input placeholder="Name your project..." />
                            <InputGroupAddon addonType="append">
                                <Button>Show</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Container>
                </Jumbotron>
                <CardsContainer/>
            </div>
        );
    }
}

export default Main;