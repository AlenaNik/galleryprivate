import React, {Component} from 'react';
import './Header.css';
import Logo from '../../assets/RoomBox_logo_claim_original.png'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, Button} from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div>
                <Navbar light expand="md" className="main-header">
                        <img className="logo" src={Logo} alt=""/>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav className="ml-auto" navbar >
                            <NavItem>
                                <NavLink href="http://roombox3d.com">Visit RoomBox</NavLink>
                            </NavItem>
                            <Button color="secondary" to="registration" size="xs">
                                Sign Out
                            </Button>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default Header;