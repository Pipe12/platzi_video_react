import React from 'react';
import '../assets/styles/components/Player.scss';

const Player = () => {

  return (
    <div className='player'>
      <video controls autoPlay>
        <source src='' type='video/mp4' />
      </video>
      <div className='player-back'>
        <button type='button'>
          Regresar
        </button>
      </div>
    </div>
  );
};

export default Player;
