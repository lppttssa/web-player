import s from './Input.module.scss';
import crossIcon from '../../../assets/images/cross.svg'
import { Button } from '../Button/Button/Button';
import { SearchIcon } from '../icons/SearchIcon';
import { ChangeEvent } from 'react';
import cn from 'classnames';

type InputProps = {
  handleSearchClick: (input: string) => void,
  inputValue: string,
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
  handleInputClear: () => void,
  handleInputFocus: () => void,
  className: string,
};

export const Input = (props: InputProps):JSX.Element => {
  const {
    handleSearchClick, inputValue, handleInputChange, handleInputClear, handleInputFocus, className
  } = props;



  return (
    <form className={cn(s.inputForm, className)}>
      <div className={s.inputContainer}>
        <input
          onFocus={handleInputFocus}
          className={cn(s.input, { [s.activeInput]: inputValue.length })}
          type='text'
          placeholder='Search'
          value={inputValue}
          onChange={handleInputChange}
        />
        {!!inputValue.length && <img src={crossIcon} alt='x' className={s.crossIcon} onClick={handleInputClear} />}
      </div>
      <Button
        type="button"
        text='search'
        icon={<SearchIcon className={s.searchIcon} />}
        onClick={() => handleSearchClick(inputValue)}
      />
    </form>
  );
};
