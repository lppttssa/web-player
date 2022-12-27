import s from './MovieCard.module.scss';
import { MovieType } from '../../types';
import { CardDescription } from './CardDescription/CardDescription';
import { MovieWidget } from '../Widgets/MovieWidget/MovieWidget';

export const MovieCard = (props: MovieType) => {
  const {
    country, title, genres, imdb_rate, is_new, keyframe, length, min_age, num_seasons, poster, type, year
  } = props;

  console.log(country, title, genres, imdb_rate, is_new, keyframe, length, min_age, num_seasons, poster, type, year)

  return (
    <article className={s.movieCard}>
      <div className={s.imgContainer}>
        <img src={`api/${poster}`} alt={title} className={s.poster} />
        <div className={s.shadow}/>
        <div className={s.widgetsContainer}>
          {is_new && <MovieWidget style='new' text={'New on NetUP TV'} className={s.firstWidget} />}
          <MovieWidget text='IMDB' style='rating' rate={`${imdb_rate}/10`} />
        </div>
      </div>
      <h3 className={s.title}>{title}</h3>
      <CardDescription
        descriptions={[country, year.toString(), `${(length / 60)} min`,
          `${num_seasons} seasons`, `${min_age}+`]}
      />
      <p className={s.genres}>{genres.join(', ')}</p>
    </article>
  );
};