import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Features = () => {
  const IMG_CDN = "https://image.tmdb.org/t/p/w500";
  const moviePoster = useSelector(store => store.movies?.allMovies ?? []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 3,
    },
  };

  return (
    <div className='pl-[150px] my-8'>
      <Carousel
        responsive={responsive}
        ssr={true} // Enable server-side rendering support
        infinite={true}
        draggable={true}
        swipeable={true}
        showDots={false}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        transitionDuration={500}
        containerClass="carousel-container"
      >
        {moviePoster.map((movie) => (
          <div key={movie.id}>
            <img src={`${IMG_CDN}${movie.poster_path}`} alt="poster" className='pr-8 cursor-pointer h-60'/>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Features;
