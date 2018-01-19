import React from 'react';
import PropTypes from 'prop-types'
/* TODO: put in proptypes */

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink as BootNavLink, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {NavLink} from 'react-router-dom';

const NavBar = ({collapsed, onToggle}) =>
  <Navbar color="faded" light expand='sm'>
    <NavbarBrand href='/'><img alt='mPOWEr Lite' src='https://www.mpowercare.org/wp-content/uploads/2016/07/logo-for-web.png' /></NavbarBrand>
    <NavbarToggler />
    <Collapse isOpen={collapsed} navbar>
      <Nav className='ml-auto' navbar>
        <NavItem><NavLink className='nav-link' to="/">Home</NavLink></NavItem>
        <NavItem><NavLink className='nav-link' to="/patients">Patients</NavLink></NavItem>
        <NavItem><NavLink className='nav-link' to="/users">Users</NavLink></NavItem>

        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Login
          </DropdownToggle>
          <DropdownMenu >
            <DropdownItem>
              <BootNavLink to='/'>SMART Sandbox</BootNavLink>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Collapse>
  </Navbar>;

export default NavBar;
