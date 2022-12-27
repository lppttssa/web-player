import s from './MovieWidget.module.scss';
import cn from 'classnames';

type MovieWidgetProps = {
  className?: string,
  text: string,
  style: 'new' | 'rating',
  rate?: string,
}

export const MovieWidget = (props: MovieWidgetProps):JSX.Element => {
  const {
    className, text, style, rate
  } = props;

  return (
    <span className={cn(s.widget, className, { [s.green]: style === 'rating' })}>
      {text}
      {!!rate && <span className={s.rate}>{rate}</span>}
    </span>
  );
};

MovieWidget.defaultProps = {
  rate: null,
}