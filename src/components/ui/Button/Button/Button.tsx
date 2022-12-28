import s from './Button.module.scss';
import React from 'react';
import cn from 'classnames';

type ButtonProps = {
  text: string,
  icon: React.ReactNode,
  style?: 'default' | 'transparent',
  onClick?: () => void,
  type?: "button" | "submit" | "reset",
}

export const Button = (props: ButtonProps):JSX.Element => {
  const {
    text, icon, style, onClick, type
  } = props;

  return (
    <button className={cn(s.btn, { [s.transparent]: style === 'transparent' })} onClick={onClick} type={type}>
      <span className={s.text}>{text}</span>
      {icon}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
}