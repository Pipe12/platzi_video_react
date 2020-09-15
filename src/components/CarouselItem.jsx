import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play.png';
import plusIcon from '../assets/static/plus.png';

const CarouselItem = () => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src='assets/liverpool.jpg' alt='Liverpool' />
    <div className='carousel-item__details'>
      <div className='carousel-item__details--controls'>
        <a href='/'><img src={playIcon} alt='Play' /></a>
        <a href='/'><img src={plusIcon} alt='Plus' /></a>
      </div>
      <h4 className='carousel-item__details--title'>Titulo descriptivo</h4>
      <span className='carousel-item__details--date'>2019 16+ 114 minutos</span>
    </div>
  </div>
);

export default CarouselItem;
