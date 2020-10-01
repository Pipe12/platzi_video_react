import React from 'react';
import '../assets/styles/components/Register.scss';

const Register = () => (
  <section className='signin'>
    <div className='signin__container'>
      <h2 className='signin__container--title'>Regístrate</h2>
      <form className='signin__container--form' action=''>
        <input type='text' className='input' placeholder='Nombre' />
        <input type='email' className='input' placeholder='Correo' />
        <input type='password' className='input' placeholder='Contraceña' />
        <button className='button'>Registrame</button>
      </form>
      <a href='/login'>Iniciar sesión</a>
    </div>
  </section>
);

export default Register;