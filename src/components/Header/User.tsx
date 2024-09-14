import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

export const User: FC = () => {
  const [isShow, setShow] = useState(false);

  const onClick = () => setShow(!isShow);

  return (
    <div className={isShow ? 'user show' : 'user'} onClick={onClick}>
      <div className='top'>
        <img src='https://masterpiecer-images.s3.yandex.net/3587aaeb6e1f11ee8952222e7fa838a6:upscaled' />
        <svg className="ionicon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M112 184l144 144 144-144" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48"/></svg>
      </div>
      <div className='bottom'>
        <Link className='item' to='/dcoder'>
        <svg className="ionicon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg>
          <span>Парақша</span>
        </Link>
        <Link className='item' to='/library'>
          <svg className="ionicon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="368" rx="16" ry="16" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" width="64" x="32" y="96"/><path d="M112 224h128M112 400h128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><rect fill="none" height="304" rx="16" ry="16" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" width="128" x="112" y="160"/><rect fill="none" height="416" rx="16" ry="16" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" width="96" x="256" y="48"/><path d="M422.46 96.11l-40.4 4.25c-11.12 1.17-19.18 11.57-17.93 23.1l34.92 321.59c1.26 11.53 11.37 20 22.49 18.84l40.4-4.25c11.12-1.17 19.18-11.57 17.93-23.1L445 115c-1.31-11.58-11.42-20.06-22.54-18.89z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/></svg>
          <span>Сөре</span>
        </Link>
        <Link className='item' to='/settings'>
          <svg className="ionicon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
          <span>Баптаулар</span>
        </Link>
      </div>
    </div>
  );
};