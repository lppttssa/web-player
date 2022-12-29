import s from './CardDescription.module.scss';
import cn from 'classnames';
import { DescriptionType } from '../../../types';

type CardDescriptionProps = {
  descriptions: DescriptionType[],
}

export const CardDescription = (props: CardDescriptionProps) => {
  const {
    descriptions
  } = props;

  return (
    <ul className={cn('list-reset', s.list)}>
      {descriptions.map((item) => (
        <li className={s.listItem} key={item.id}>
          <span className={s.text}>{item.title}</span>
        </li>
      ))}
    </ul>
  );
};