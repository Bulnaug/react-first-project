import React from 'react'
import logo from '../../logo.svg';
import './header.css';

const Header = (props) => {
  return (
      <div className ="app-header">
        <div>
          <img src={logo} className='app-logo' alt='logo' />
        </div>
      </div>
  );
}

export default Header;