import s from './HomePage.module.scss';
import Header from '../../components/Header/Header';
import { ChangeEvent, useEffect, useState } from 'react';
import { getData } from '../../request';
import { BackgroundType, MovieType, DataType } from '../../types';
import { Input } from '../../components/ui/Input/Input';
import Slider from '../../components/Slider/Slider';
import cn from 'classnames';

const HomePage = (): JSX.Element => {
  const [backgrounds, setBackgrounds] = useState<BackgroundType[]>([]);
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<MovieType[]>(movies);
  const [searchValue, setSearchValue] = useState('');
  const [isContentShown, setContentShown] = useState(true);
  const [isDataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    getData().then((response: DataType) => {
      setBackgrounds(response.backgrounds)
      setMovies(response.items)
    })
  }, []);

  useEffect(() => {
    let backgroundType = 1;
    const mainEl = document.getElementById('main');
    if (mainEl) {
      mainEl.style.backgroundImage = `url('api/${backgrounds[0]?.url}')`;
      const interval = setInterval(() => {
        mainEl.style.backgroundImage = `url('api/${backgrounds[backgroundType]?.url}')`;
        backgroundType === 1 ? backgroundType = 0 : ++backgroundType;
      }, 5000);
      return () => clearInterval(interval);
    }

  }, [backgrounds]);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies])

  const handleSearch = (value: string) => {
    setDataLoading(true);
    setContentShown(false);
    const timer = setTimeout(() => {
      if (value === '') {
        setFilteredMovies(movies);
      } else {
        const newFilteredMovies =
          movies.filter((movie) => movie.title.toLowerCase().includes(value.toLowerCase()));
        setFilteredMovies(newFilteredMovies);
      }
      setDataLoading(false);
      setContentShown(true);
    }, 1000)

    return () => clearTimeout(timer)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setContentShown(false);
  }

  const isAllMoviesShown = () => {
    return movies.length === filteredMovies.length;
  }

  const getPageTitle = () => {
    if (isAllMoviesShown()) {
      return 'in the spotlight';
    }
    return `TV Shows (${filteredMovies.length})`;
  }

  return (
    <div className={s.home}>
      <Header />
      <main id={'main'} className={s.main}>
        <div className={s.mainShadow}>
          <section className={cn(s.moviesContent, { [s.changedPadding]: !isContentShown || !isAllMoviesShown() })}>
            <Input
              handleSearchClick={handleSearch}
              inputValue={searchValue}
              handleInputChange={handleInputChange}
              handleInputClear={() => {
                setSearchValue('');
                setContentShown(true);
              }}
              handleInputFocus={() => setContentShown(false)}
              className={s.input}
            />
            {isDataLoading && <div className={s.loader} />}
            {isContentShown &&
              <div className={s.movies}>
                <div className={cn('movies-container', s.titleContainer, { [s.centeredText]: isAllMoviesShown() })}>
                  <h2 className={s.title}>{getPageTitle()}</h2>
                </div>
                <Slider items={filteredMovies} />
              </div>
            }
          </section>
        </div>
      </main>
    </div>
  );
};

export default HomePage;