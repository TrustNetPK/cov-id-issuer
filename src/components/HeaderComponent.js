import React, { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import { useHistory, useLocation } from 'react-router-dom';

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
    <div>
      <Navbar
        expand="sm"
        fixed="top"
        >
        <NavbarBrand className="navbar-brand">
          {width > 500 ? (
            <img src={AgaKhanLogo} alt="aga-khan-logo" style={{ width: '220px' }} />
          ) : (
            <img src={AgaKhanMiniLogo} alt="aga-khan-logo" style={{ width: '50px' }} />
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
                className="btn">
                GitHub
              </a>
            </NavItem>
            {Auth.getAuth() ? (
              <NavItem>
                <Button className="px-4" onClick={handleLogout}>
                  LogOut
                </Button>
              </NavItem>
            ) : (
              <NavItem>
                <Button className="px-4" onClick={handleLogin}>
                  Login
                </Button>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default HeaderComponent;
