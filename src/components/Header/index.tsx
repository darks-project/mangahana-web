import { FC } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import { User } from './User';
import { useSelector } from 'react-redux';

export const Header: FC = () => {
  const { isAuth } = useSelector((state: any) => state.user);

  return (
    <header>
      <div className='container'>

        <Link to='/' className='logo'>komiX.</Link>

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