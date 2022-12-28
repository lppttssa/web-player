import s from './Header.module.scss'
import cn from 'classnames'
import logo from '../../assets/images/logo.svg'
import { navLinks } from '../../data';
import { Link } from 'react-router-dom';
import { HeaderButton } from '../ui/Button/HeaderButton/HeaderButton';
import { SearchIcon } from '../ui/icons/SearchIcon';
import { AccountIcon } from '../ui/icons/headerIcons/AccountIcon';

const Header = ():JSX.Element => {
  return (
    <header className={cn('container', s.header)}>
      <Link to='/'>
        <img src={logo} alt='NetUp' />
      </Link>
      <nav className={s.nav}>
        <ul className={cn('list-reset', s.navList)}>
          {navLinks.map((link) => (
            <li className={s.listItem} key={link.id}>
              <Link to={link.to} className={s.link}>
                {link.icon}
                <span className={s.linkText}>{link.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <HeaderButton style='default' icon={<SearchIcon />} />
      <HeaderButton style='styled' icon={<AccountIcon />} />
    </header>
  );
};

export default Header;