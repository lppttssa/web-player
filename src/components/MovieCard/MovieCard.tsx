import s from './MovieCard.module.scss';
import { DescriptionType, MovieType } from '../../types';
import { CardDescription } from './CardDescription/CardDescription';
import { MovieWidget } from '../Widgets/MovieWidget/MovieWidget';
import { PlayIcon } from '../ui/icons/PlayIcon';
import { Button } from '../ui/Button/Button/Button';
import { useState } from 'react';
import cn from 'classnames';

export const MovieCard = (props: MovieType) => {
  const {
    country, title, genres, imdb_rate, is_new,  length, min_age, num_seasons, poster,  year, keyframe
  } = props;
  const [isMovieTriggered, setMovieTriggered] = useState(false);

  const handleMouseOver = () => {
    setMovieTriggered(true);
  }

  const createCardDescriptionArray = (): DescriptionType[] => {
    return [country, year.toString(), `${(length / 60)} min`,
      `${num_seasons} seasons`, `${min_age}+`].map((item, index) => ({id: index, title: item}))
  }

  return (
    <article className={s.movieCard}>
      <div className={s.imgContainer} onMouseOver={handleMouseOver}>
        <img src={poster} alt={title} className={s.poster} />
        <img src={keyframe} alt={title} className={s.hoveredPoster} />
        <div className={s.shadow}/>
        <div className={cn(s.widgetsContainer, { [s.animated]: isMovieTriggered })}>
          {is_new && <MovieWidget style='new' text={'New on NetUP TV'} className={s.firstWidget} />}
          <MovieWidget text='IMDB' style='rating' rate={`${imdb_rate}/10`} />
        </div>
        <div className={cn(s.btnContainer, { [s.animated]: isMovieTriggered })}>
          <Button text='More details' icon={<PlayIcon />} style='transparent' />
        </div>
      </div>
      <h3 className={s.title}>{title}</h3>
      <CardDescription
        descriptions={createCardDescriptionArray()}
      />
      <p className={s.genres}>{genres.join(', ')}</p>
    </article>
  );
};