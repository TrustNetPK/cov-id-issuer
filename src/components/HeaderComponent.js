import React, { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
    <div style={{ fontFamily: `'Poppins' sans-serif` }}>
      <Navbar
        color="light"
        light
        expand="md"
        fixed="top"
        style={{ boxShadow: '0 0px 50px rgba(0, 0, 0, 0.2)' }}>
        <NavbarBrand
          className="navbar-brand"
          rel="noopener noreferrer"
          href="https://hospitals.aku.edu/pakistan/Pages/default.aspx"
          target="_blank">
          {width > 810 ? (
            <img src={AgaKhanLogo} alt="aga-khan-logo" style={{ width: '50vh' }} />
          ) : (
            <img src={AgaKhanMiniLogo} alt="aga-khan-logo" style={{ width: '8vh' }} />
          )}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="ml-auto">
            <NavItem>
              <HashLink to="/home" className="nav-link">
                Home
              </HashLink>
            </NavItem>
            <NavItem>
              <HashLink to="/about" className="nav-link">
                About
              </HashLink>
            </NavItem>
            <NavItem>
              <HashLink to="/symptoms" className="nav-link">
                Symptoms
              </HashLink>
            </NavItem>
            <NavItem>
              <HashLink to="/prevention" className="nav-link">
                Prevention
              </HashLink>
            </NavItem>
            <NavItem>
              <HashLink to="/faq" className="nav-link">
                FAQ
              </HashLink>
            </NavItem>
            <NavItem>
              <HashLink to="/news" className="nav-link mr-1">
                News
              </HashLink>
            </NavItem>
            {Auth.getAuth() ? (
              <NavItem>
                <Button color="danger" className="px-4" onClick={handleLogout}>
                  LogOut
                </Button>
              </NavItem>
            ) : (
              <NavItem>
                <Button color="danger" className="px-4" onClick={handleLogin}>
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
