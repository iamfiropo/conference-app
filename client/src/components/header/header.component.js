import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/register'>
        REGISTER
      </Link>
      <Link className='option' to='/schedule'>
        SCHEDULE
      </Link>
    </div>
  </div>
);

export default Header;