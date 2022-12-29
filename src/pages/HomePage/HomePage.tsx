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
  const [movies, setMovies] = useState<(MovieType & {id: number})[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<(MovieType & {id: number})[]>(movies);
  const [searchValue, setSearchValue] = useState('');
  const [isContentShown, setContentShown] = useState(true);
  const [isDataLoading, setDataLoading] = useState(false);
  const [isInputTriggered, setInputTriggered] = useState(false);
  const [isMoviesFiltered, setMoviesFiltered] = useState(false);

  useEffect(() => {
    getData().then((response: DataType) => {
      setBackgrounds(response.backgrounds)
      setMovies(response.items.map((item, index) => ({id: index, ...item})))
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
        setMoviesFiltered(false);
      } else {
        const newFilteredMovies =
          movies.filter((movie) => movie.title.toLowerCase().includes(value.toLowerCase()));
        setFilteredMovies(newFilteredMovies);
        setMoviesFiltered(true);
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

  const handleInputFocus = () => {
    setInputTriggered(true);
    setContentShown(false);
  }

  const handleInputClear = () => {
    setSearchValue('');
    setContentShown(true);
  }

  const getPageTitle = () => {
    if (!isMoviesFiltered) {
      return 'in the spotlight';
    }
    return `TV Shows (${filteredMovies.length})`;
  }

  return (
    <div className={s.home}>
      <Header />
      <main id={'main'} className={s.main}>
        <div className={s.mainShadow}>
          <section className={cn(s.moviesContent, { [s.changedPadding]: !isContentShown || isMoviesFiltered, [s.animated]: isInputTriggered })}>
            <Input
              handleSearchClick={handleSearch}
              inputValue={searchValue}
              handleInputChange={handleInputChange}
              handleInputClear={handleInputClear}
              handleInputFocus={handleInputFocus}
              className={s.input}
            />
            {isDataLoading && <div className={s.loader} />}
            {isContentShown &&
              <div className={s.movies}>
                <div className={cn('movies-container', s.titleContainer, { [s.centeredText]: !isMoviesFiltered })}>
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