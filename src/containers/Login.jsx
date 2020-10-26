import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <section className='login'>
      <div className='login__container'>
        <h2>Iniciar sesión</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            name='email'
            className='input'
            type='text'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraceña'
            onChange={handleInput}
          />
          <button className='button' type='submit'>Iniciar sesión</button>
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
          <Link to='/register'>
            Regístrate
          </Link>
        </p>
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
