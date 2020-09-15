import React from 'react';

const Header = () => (
  <header className='header'>
    <img className='header__img' src='assets/logo-platzi-video-BW2.png' alt='Logo de platzi' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src='assets/avatar_icon.png' alt='Avartar assets' />
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
