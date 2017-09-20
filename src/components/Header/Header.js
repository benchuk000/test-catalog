import React  from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import google from './google.png'

const Header = () => (
  <div className="header">
    <Link to="/">
      <img src={google} className="header__img" alt="Google"/>
    </Link>
  </div>
);

export default Header;