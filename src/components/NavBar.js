import React  from 'react';
import {
  Navbar,
  NavbarBrand,

} from 'reactstrap';

import Search from './Search'

const NavBar = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>COVID-19 TRENDS</NavbarBrand>
        <Search />

      </Navbar>
    </div>
  );
}

export default NavBar;