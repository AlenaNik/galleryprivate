import React from 'react';
import {
    Navbar,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem} from 'reactstrap';
import './Footer.css';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar className="footer-nav" color="light" light expand="md">
                        <i className="fab fa-facebook-f footer-icon"/>
                        <i className="fab fa-twitter footer-icon"/>
                        <i className="fab fa-youtube footer-icon"/>
                        <i className="fab fa-instagram footer-icon"/>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown direction="up" nav inNavbar>
                                <DropdownToggle nav caret>
                                    Terms and conditions
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <a href="https://roombox3d.com/legal/legal_eng.pdf">Terms of use</a>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <a href="https://roombox3d.com/legal/privacy_eng.pdf">Privacy Policy</a>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                </Navbar>
            </div>
        );
    }
}