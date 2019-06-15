import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import '../styles.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar light expand='md'>
                    <div className='container'>
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className='navbar-brand navbar-nav' href='/'>
                            <img src='./images/FCLogo.png' height='90' alt='Foster Closet' />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className='nav-link nav-item' to='/home'>
                                        {' '}
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link nav-item' to='/about'>
                                        {' '}
                                        About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link nav-item' to='/contact'>
                                        {' '}
                                        Contact
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link nav-item' to='/shop'>
                                        {' '}
                                        Shop
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link nav-item' to='/support'>
                                        {' '}
                                        Support
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;
