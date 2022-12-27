import s from './Button.module.scss';

type ButtonProps = {
  text: string,
  icon: React.ReactNode,
}

export const Button = (props: ButtonProps):JSX.Element => {
  const {
    text, icon
  } = props;

  return (
    <button className={s.btn}>
      <span className={s.text}>{text}</span>
      {icon}
    </button>
  );
};