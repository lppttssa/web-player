import s from './HeaderButton.module.scss';
import cn from 'classnames'

type HeaderButtonProps = {
  style: 'default' | 'styled',
  icon: React.ReactNode,
};

export const HeaderButton = (props: HeaderButtonProps):JSX.Element => {
  const {
    style, icon
  } = props;

  return (
    <button className={cn(s.headerButton, { [s.styled]: style === 'styled' })}>
      {icon}
      {style === 'styled' && <span className={s.circle}/>}
    </button>
  );
};