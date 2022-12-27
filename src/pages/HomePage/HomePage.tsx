import s from './HomePage.module.scss';
import Header from '../../components/Header/Header';
import { useEffect, useState } from 'react';
import { getData } from '../../request';
import { BackgroundType, MovieType, DataType } from '../../types';
import { Input } from '../../components/ui/Input/Input';

const HomePage = (): JSX.Element => {
  const [backgrounds, setBackgrounds] = useState<BackgroundType[]>([]);
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    getData().then((response: DataType) => {
      setBackgrounds(response.backgrounds)
      setMovies(response.items)
    })
  }, []);

  useEffect(() => {
    const mainEl = document.getElementById('main');
    if (mainEl) {
      mainEl.style.backgroundImage = `url('api/${backgrounds[0]?.url}')`;
    }
  }, [backgrounds])

  console.log(movies)

  return (
    <div className={s.home}>
      <Header />
      <main id={'main'} className={s.main}>
        <div className={s.mainShadow}>
          <section className={s.moviesContent}>
            <Input />
          </section>
        </div>
      </main>
    </div>
  );
};

export default HomePage;