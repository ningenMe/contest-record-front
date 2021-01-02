import React from 'react';
import { Navbar,NavbarBrand } from 'reactstrap';

export const Footer: React.FC = () => {
    return (
    <Navbar color="dark" dark expand="lg">
        <NavbarBrand>&copy; 2020　Furuta Taishi</NavbarBrand>
    </Navbar>
    );
}
export default Footer