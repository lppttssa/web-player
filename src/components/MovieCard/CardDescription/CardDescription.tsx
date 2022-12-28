import s from './CardDescription.module.scss';
import cn from 'classnames';

type CardDescriptionProps = {
  descriptions: string[],
}

export const CardDescription = (props: CardDescriptionProps) => {
  const {
    descriptions
  } = props;

  return (
    <ul className={cn('list-reset', s.list)}>
      {descriptions.map((item) => (
        <li className={s.listItem}>
          <span className={s.text}>{item}</span>
        </li>
      ))}
    </ul>
  );
};