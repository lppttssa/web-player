import s from './Input.module.scss';
import crossIcon from '../../../assets/images/cross.svg'
import { Button } from '../Button/Button/Button';
import { SearchIcon } from '../icons/headerIcons/SearchIcon';

export const Input = ():JSX.Element => {
  return (
    <div className={s.inputElement}>
      <div className={s.inputContainer}>
        <input className={s.input} type='text'/>
        <img src={crossIcon} alt='' className={s.crossIcon} />
      </div>
      <Button text='search' icon={<SearchIcon className={s.searchIcon} />} />
    </div>
  );
};
