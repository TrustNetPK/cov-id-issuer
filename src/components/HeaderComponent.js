import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Auth from '../helpers/Auth'
import {useHistory} from 'react-router-dom'

const HeaderComponent = () => {
  console.log(Auth.getAuth())
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const toggle = () => setIsOpen(!isOpen);

  const handleLogin = () => {
    history.push('/login')
  }

  const handleLogout = async () => {
    await Auth.signout();
    history.replace('/')
  }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">vaccify</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/TrustNetPK">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://trust.net.pk/covid19">Web</NavLink>
            </NavItem>
            {Auth.getAuth()?<NavItem>
              <NavLink onClick={handleLogout} style={{cursor:'pointer'}}>Log Out</NavLink>
            </NavItem>: <NavItem>
              <NavLink onClick={handleLogin} style={{cursor:'pointer'}}>Login</NavLink>
            </NavItem>}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderComponent;