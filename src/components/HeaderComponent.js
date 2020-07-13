import React, { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import { useHistory, useLocation } from 'react-router-dom';

import { globalStyles } from '../assets/styles/globalStyles';
import Auth from '../helpers/Auth';
import useWindowDimensions from '../helpers/useWindowDimensions';
import AgaKhanLogo from '../assets/images/aga-khan-transparent.png';
import AgaKhanMiniLogo from '../assets/images/aga-khan-mini-transparent.png';

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { height, width } = useWindowDimensions();

  const history = useHistory();
  const location = useLocation();

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleLogin = () => {
    history.push('/login');
  };

  const handleLogout = () => {
    Auth.signout();
    history.replace('/');
  };

  return (
    <Navbar color="light" light expand="sm" fixed="top" style={globalStyles.navbar}>
      <NavbarBrand className="navbar-brand">
        {width > 500 ? (
          <img src={AgaKhanLogo} alt="aga-khan-logo" style={globalStyles.navbarLogo} />
        ) : (
          <img src={AgaKhanMiniLogo} alt="aga-khan-logo" style={globalStyles.navbarLogoMini} />
        )}
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="ml-auto">
          <NavItem>
            <a
              rel="noopener noreferrer"
              href="https://github.com/TrustNetPK"
              target="_blank"
              className="btn btn-dark text-white px-4 mr-4 my-3 my-sm-0">
              GitHub
            </a>
          </NavItem>
          {Auth.getAuth() ? (
            <NavItem>
              <Button color="danger" className="px-4" onClick={handleLogout}>
                Log Out
              </Button>
            </NavItem>
          ) : (
            <NavItem>
              <Button color="danger" className="px-4" onClick={handleLogin}>
                Log In
              </Button>
            </NavItem>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default HeaderComponent;
