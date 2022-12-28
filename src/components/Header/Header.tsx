import s from './Header.module.scss'
import cn from 'classnames'
import logo from '../../assets/images/logo.svg'
import { navLinks } from '../../data';
import { Link } from 'react-router-dom';
import { HeaderButton } from '../ui/Button/HeaderButton/HeaderButton';
import { SearchIcon } from '../ui/icons/SearchIcon';
import { AccountIcon } from '../ui/icons/headerIcons/AccountIcon';
import { useState } from 'react';

const Header = ():JSX.Element => {
  const [isMenuOpened, setMenuOpened] = useState(false);

  return (
    <header className={cn('container', s.header)}>
      <Link to='/' className={s.logo}>
        <img src={logo} alt='NetUp' />
      </Link>
      <nav className={cn(s.nav, { [s.active]: isMenuOpened })}>
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
      <HeaderButton
        style='burger'
        onClick={() => setMenuOpened(!isMenuOpened)}
        btnType={isMenuOpened ? 'burgerClose' : 'burgerOpen'}
      />
    </header>
  );
};

export default Header;