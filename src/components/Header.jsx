import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import avatarIcon from '../assets/static/avatar_icon.png';

const Header = (props) => {
  const { user } = props;
  const hasUser = (Object.keys(user).length > 0);

  const handleLogout = () => {
    
  }

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Logo de platzi' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {
            hasUser ?
              <img src={gravatar(user.email)} alt={user.email} /> :
              <img src={avatarIcon} alt='Avartar assets' />
          }
          <span>Perfil</span>
        </div>
        <ul>
          {
            hasUser ?
              <li><a href='/'>Cuenta</a></li> :
              null
          }
          {
            hasUser ?
              <li><a href='#logout' onClick={handleLogout}>Cuenta</a></li> :
              <li>
                <Link to='/login'>
                  Iniciar seción
                </Link>
              </li>
          }
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Header);
