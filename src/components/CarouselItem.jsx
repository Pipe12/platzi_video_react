import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play.png';
import plusIcon from '../assets/static/plus.png';

const CarouselItem = (props) => {
  const { cover, title, year, contentRating, duration } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      cover, title, year, contentRating, duration
    });
  };
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div className='carousel-item__details--controls'>
          <img src={playIcon} alt='Play' />
          <img
            src={plusIcon}
            alt='Plus'
            onClick={handleSetFavorite}
          />
        </div>
        <h4 className='carousel-item__details--title'>{title}</h4>
        <span className='carousel-item__details--date'>
          { `${year} ${contentRating} ${duration}`}
        </span>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}

const mapDispatchToProps = {
  setFavorite
};

export default connect(null, mapDispatchToProps)(CarouselItem);
