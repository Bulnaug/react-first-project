import React from 'react'
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = (props) => {
  return (
      <div className ="app-sideNav">
        <ul>
          <li><NavLink to="/profile">Profile</NavLink></li>
          <li><NavLink to="/messenger">Messenger</NavLink></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
          <li><a href="#">Link 4</a></li>
        </ul>
      </div>
  );
}

export default Navigation;