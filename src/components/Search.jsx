import React from 'react';
import '../assets/styles/components/Search.scss';

const SearchTitle = '¿Qué quieres ver hoy?';
const SearchInputPlaceholder = 'Buscar...';

const Search = () => (
  <section className='search'>
    <h2 className='search__title'>{ SearchTitle }</h2>
    <input className='search__input' type='text' placeholder={SearchInputPlaceholder} />
  </section>
);

export default Search;
