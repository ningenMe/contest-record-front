import React, { useState } from 'react';
import { Collapse,
         Nav,
         Navbar,
         NavbarBrand,
         NavbarToggler,
         NavLink,
         NavItem,
        } from 'reactstrap';
import GitHub from './GitHub'
import LinkPath from '../constants/LinkPath'
import LinkUrl from '../constants/LinkUrl'

export const Header: React.FC = () => {
    const [navbarToggleOpen, setNavbarToggleOpen] = useState(false);
    const toggleNavbar = () => setNavbarToggleOpen(!navbarToggleOpen);

    return (
    <Navbar color="dark" dark expand="lg">
        <NavbarBrand href={LinkUrl.contestRecord.url} >{LinkUrl.contestRecord.name}</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={navbarToggleOpen} navbar>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href={LinkPath.transition(LinkPath.atcoderBingo.url)}>{LinkPath.atcoderBingo.name}</NavLink>
                </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href={LinkUrl.twitterNingenMe.url}>{LinkUrl.twitterNingenMe.name}</NavLink>
                </NavItem>
                <GitHub/>
            </Nav>
        </Collapse>
    </Navbar>
    );
}
export default Header