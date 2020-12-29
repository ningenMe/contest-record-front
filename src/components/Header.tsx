import React, { useState } from 'react';
import {Collapse,Nav,Navbar,NavbarBrand,NavbarToggler,NavLink,NavItem } from 'reactstrap';
import Url from '../constants/Url'
import Path from '../constants/Path'

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
    <Navbar color="dark" dark expand="lg">
        <NavbarBrand href={Url.contestRecord} >ningenMe.net</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href={Path.transition(Path.home)}>home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href={Path.transition(Path.bingo)}>bingo</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
    );
}
export default Header