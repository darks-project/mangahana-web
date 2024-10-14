import { FC, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import { User } from './User';
import { useSelector } from 'react-redux';

export const Header: FC = () => {
  const { isAuth } = useSelector((state: any) => state.user);
  const headerRef = useRef<HTMLHeadElement>(null);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      headerRef.current!.classList.add('show-bg');
    } else {
      headerRef.current!.classList.remove('show-bg');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <header ref={headerRef}>
      <div className='container'>

        <Link to='/' className='logo'>Hikaya</Link>

        {
        // <nav>
        //   <Link to='/catalog'>Каталог</Link>
        //   <Link to='/catalog'>Топтар</Link>
        //   <Link to='/catalog'>FAQ</Link>
        // </nav>
        }

        {isAuth ? <User />: <Link className='button' to={'/login'}>Кіру</Link>}

      </div>
    </header>
  );
};