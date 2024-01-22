import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import '../styles/carousel.css';
import Posters from './Posters';

const Features = ({title, movies}) => {

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
      slidesToSlide: 3
    },
  };

  return (
    <div className='pl-[150px] my-8'>

      <h1 className='my-4 text-2xl font-medium opacity-70'> {title} </h1>

      <Carousel
        responsive={responsive}
        ssr={true}
        infinite={true}
        draggable={true}
        swipeable={true}
        showDots={false}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        customTransition="transform 300ms ease-in-out"
        containerClass="carousel-container"
        itemClass="carousel-item"
      >

        { Array.isArray(movies) &&
            movies.map((movie) => (
                <Posters key={movie.id} posterPath={movie.poster_path || movie.profile_path}/>
            ))
        }

      </Carousel>
      
    </div>
  );
}

export default Features;

