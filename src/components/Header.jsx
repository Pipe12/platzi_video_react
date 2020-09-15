import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import avatarIcon from '../assets/static/avatar_icon.png';

const Header = () => (
  <header className='header'>
    <img className='header__img' src={logo} alt='Logo de platzi' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={avatarIcon} alt='Avartar assets' />
        <span>Perfil</span>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><a href='/'>Cerrar seción</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
