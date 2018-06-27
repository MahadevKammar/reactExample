import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import nav from  './Books.css'


class Header extends Component {
  render() {
    return (
    <Navbar className={nav.navcustom}>
        <Navbar.Header>
            <Navbar.Brand>
                BookFinder
            </Navbar.Brand>
        </Navbar.Header>
     </Navbar>
    );
  }
}

export default Header;
