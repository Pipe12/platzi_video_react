import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const App = () => {
  // Aqui coloco toda la logica que voy a utilizar.
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

  useEffect(() => {
    fetch('http://localhost:3000/initialState')
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  // console.log(videos);

  return (
    <div className='App'>
      <Header />
      <Search />

      {videos.mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      {videos.trends.length > 0 && (
        <Categories title='Tendencias'>
          <Carousel>
            {/* {videos.trends.map(console.log('te amo Sara!!!'))} */}
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      {videos.originals.length > 0 && (
        <Categories title='Originales de Platzi'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      <Footer />
    </div>
  );
};

export default App;
