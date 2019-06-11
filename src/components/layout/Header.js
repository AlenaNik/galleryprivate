import React, {Component} from 'react';
import './Header.css';
import {
    Navbar,
    NavbarBrand,
    Nav,
    Button} from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar light expand="md" className="main-header">
                    <NavbarBrand href="/">RoomBox</NavbarBrand>
                        <Nav className="ml-auto" navbar >
                            <Button to="registration" size="xs">
                                Sign Out
                            </Button>
                        </Nav>
                </Navbar>
            </div>
        );
    }
}
export default Header;