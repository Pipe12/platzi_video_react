import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';

const Register = () => (
  <section className='signin'>
    <div className='signin__container'>
      <h2 className='signin__container--title'>Regístrate</h2>
      <form className='signin__container--form' action=''>
        <input type='text' className='input' placeholder='Nombre' />
        <input type='email' className='input' placeholder='Correo' />
        <input type='password' className='input' placeholder='Contraceña' />
        <button className='button' type='submit'>Registrame</button>
      </form>
      <Link to='/login'>
        Iniciar sesión
      </Link>
    </div>
  </section>
);

export default Register;
