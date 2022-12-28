import s from './HeaderButton.module.scss';
import cn from 'classnames'
import React from 'react';

type HeaderButtonProps = {
  style: 'default' | 'styled' | 'burger',
  icon?: React.ReactNode,
  onClick?: () => void,
  btnType?: 'burgerOpen' | 'burgerClose'
};

export const HeaderButton = (props: HeaderButtonProps):JSX.Element => {
  const {
    style, icon, onClick, btnType
  } = props;

  const burgerBtn = (
    <span className={cn(s.burgerContainer, { [s.close]: btnType === 'burgerClose' })}>
      <span
        className={cn(s.burgerLine, { [s.closeLine]: btnType === 'burgerClose' },
          { [s.closeTop]: btnType === 'burgerClose' })}
      />
      <span
        className={cn(s.burgerLine, { [s.closeLine]: btnType === 'burgerClose' },
          { [s.closeBottom]: btnType === 'burgerClose' })}
      />
      {btnType === 'burgerOpen' && <span className={s.burgerLine}/>}
    </span>
  );

  return (
    <button
      onClick={onClick}
      className={cn(s.headerButton, { [s.styled]: style === 'styled' }, { [s.burger]: style === 'burger' })}
    >
      {icon ? icon : burgerBtn}
      {style === 'styled' && <span className={s.circle}/>}
    </button>
  );
};