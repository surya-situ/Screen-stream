import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import '../styles/carousel.css';
import Posters from './Posters';
import { Link } from 'react-router-dom';

const Features = ({title, movies}) => {

  const isFreeCategory = ['Now playing', 'Upcoming movies', 'Popular movies', 'Top Rated movies'].includes(title);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 2
    },
  };

  return (
    <div className='pl-[150px] my-8 max-[600px]:pl-4'>

      <div className='flex items-center justify-between'>
        <h1 className='my-4 text-xl font-semibold tracking-wider opacity-70'> {title} </h1>
      </div>

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
                <Link to={`/watch/${movie.id}`} key={movie.id}>
                  <Posters 
                    key={movie.id} 
                    posterPath={movie.poster_path || movie.profile_path} 
                    isFreeCategory={isFreeCategory} 
                    />
                </Link>
            ))
        }

      </Carousel>
      
    </div>
  );
}

export default Features;

