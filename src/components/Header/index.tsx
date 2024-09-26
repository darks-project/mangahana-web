import { FC } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import { User } from './User';

export const Header: FC = () => {
  return (
    <header>
      <div className='container'>

        <Link to='/' className='logo'>hikaya.</Link>

        {
        // <nav>
        //   <Link to='/catalog'>Каталог</Link>
        //   <Link to='/catalog'>Топтар</Link>
        //   <Link to='/catalog'>FAQ</Link>
        // </nav>
        }

        <User />

      </div>
    </header>
  );
};