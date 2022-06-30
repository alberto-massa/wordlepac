import { Navbar, Container } from 'react-bootstrap';
import React, { useState } from 'react';
import logo from './../../logo.png';
import './NavBar.css';
import Rules from '../Rules/Rules';

const NavBar = () => {
  const [rulesModal, setRulesModal] = useState(false);

  const openRulesModal = () => {
    setRulesModal(true);
  };
  const closeRulesModal = () => {
    setRulesModal(false);
  };

  return (
    <Navbar bg="trasparent">
      <Container className="d-flex justify-content-between">
        <div>
          <img onClick={() => window.location.reload()} src={logo} alt="logo" />
        </div>
        <div>
          <i onClick={() => openRulesModal()} className="bi bi-info-circle"></i>
        </div>
      </Container>
      {rulesModal && (
        <div className="rules-modal">
          <span className="m-3 d-flex justify-content-around">
            <h3>How to play</h3>
            <i onClick={() => closeRulesModal()} className="bi bi-x-circle"></i>
          </span>
          <Rules />
        </div>
      )}
    </Navbar>
  );
};

export default NavBar;
