import { ExitIcon } from 'icons/Exit';
import { LibraryIcon } from 'icons/Library';
import { SettingsIcon } from 'icons/Settings';
import { UserIcon } from 'icons/User';
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from 'store/slices/user';

export const User: FC = () => {
  const [isShow, setShow] = useState(false);

  const { user } = useSelector((state: any) => state.user);

  const dispatch = useDispatch();

  const onClick = () => setShow(!isShow);

  const getPhoto = () => {
    if (user.photo) {
      return process.env.REACT_APP_CDN_URL + user.photo;
    }
    return '/images/default.jpg';
  };

  const exit = () => dispatch(logout());

  return (
    <div className={isShow ? 'user show' : 'user'} onClick={onClick}>
      <div className='top'>
        <img src={getPhoto()} alt='user avatar' />
        <svg className="ionicon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M112 184l144 144 144-144" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48"/></svg>
      </div>
      <div className='bottom'>
        {/* <Link className='item' to={`/users/${user.username}`}>
          <UserIcon />
          <span>Парақша</span>
        </Link> */}
        <Link className='item' to='/library'>
          <LibraryIcon />
          <span>Сөре</span>
        </Link>
        <Link className='item' to='/settings'>
          <SettingsIcon />
          <span>Баптаулар</span>
        </Link>

        <div className='item' onClick={exit}>
          <ExitIcon />
          <span>Шығу</span>
        </div>

      </div>
    </div>
  );
};