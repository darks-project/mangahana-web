import { FC } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import { User } from './User';

export const Header: FC = () => {
  return (
    <header>
      <div className='container'>

        <Link to='/' className='logo'>beyne.</Link>

        {
        /* <nav>
          <Link to='/catalog'>каталог</Link>
          <Link to='/catalog'></Link>
          <Link to='/catalog'>каталог</Link>
        </nav> */
        }

        <User />

      </div>
    </header>
  );
};