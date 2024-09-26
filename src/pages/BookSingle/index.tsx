import { FC } from 'react';

import './styles.scss';
import { Link } from 'react-router-dom';
import { MainTemplate } from 'templates/Main';

export const BookSingle: FC = () => {

  const { poster, title } = {
    poster: '/images/aot/1.png',
    title: 'Шапқан титан',
  };

  return (
    <MainTemplate>
      <div className='book-page'>

        <div className='background'>
          <img src={poster} />
        </div>

        <div className='container'>
          <div className='left'>
            <img src={poster} />
            <Link className='button' to='/reader'>
              <svg className="ionicon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0116 16v288a16 16 0 01-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0116-16c131.57.59 192 32.84 208 96zM256 160v288" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
              <span>Оқу</span>
            </Link>
          </div>

          <div className='content'>
            <div className='title'>{title}</div>
          </div>
        </div>

      </div>
    </MainTemplate>
  );
};