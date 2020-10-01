import React from 'react';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = () => (
  <section className='login'>
    <div className='login__container'>
      <h2>Iniciar sesión</h2>
      <form className='login__container--form'>
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraceña' />
        <button className='button' type='button'>Iniciar sesión</button>
        <div className='login__container--remember-me'>
          <label htmlFor='remenber me'>
            <input type='checkbox' className='checkbox' />
            Recuérdame
          </label>
          <a href='/'>Olvidé mi contraceña</a>
        </div>
      </form>
      <div className='login__container--social-media'>
        <div>
          <img src={googleIcon} alt='google icon' />
          Inicia sesión con Google
        </div>
        <div>
          <img src={twitterIcon} alt='twitter icon' />
          Inicia sesión con Twitter
        </div>
      </div>
      <p className='login__container--register'>
        No tienes ninguna cuenta
        <a href='/'>
          Regístrate
        </a>
      </p>
    </div>
  </section>
);

export default Login;
