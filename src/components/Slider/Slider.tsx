import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import s from './Slider.module.scss';
import { MovieType } from '../../types';
import { MovieCard } from '../MovieCard/MovieCard';

type SliderProps = {
  items: MovieType[],
}

export const Slider = (props: SliderProps):JSX.Element => {
  const {
    items,
  } = props;

  console.log(items)

  return (
    <div className={s.sliderContainer}>
      <Swiper
        className={s.swiper}
        slidesPerView={'auto'}
        spaceBetween={16}
        freeMode={true}
        modules={[FreeMode, Pagination]}
      >
        {items.map((item) => (
          <SwiperSlide className={s.swiperSlide}>
            <MovieCard
              type={item.type}
              title={item.title}
              country={item.country}
              genres={item.genres}
              imdb_rate={item.imdb_rate}
              is_new={item.is_new}
              keyframe={item.keyframe}
              length={item.length}
              min_age={item.min_age}
              num_seasons={item.num_seasons}
              poster={item.poster}
              year={item.year}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;