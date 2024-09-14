import { FC } from 'react';
import { MainTemplate } from 'templates/Main';
import { BookCard } from 'components/BookCard';

import './styles.scss';

export const Home: FC = () => {
  const list = [
    { link: '/single', name: 'Алыптар шабуылы қотақ жеген манга', poster: 'https://m.media-amazon.com/images/I/81OYRZEQG7L._AC_UF1000,1000_QL80_.jpg' },
    { link: '/single', name: 'Дара өрлеу', poster: '' },
    { link: '/single', name: 'Блек жакке сәлем айт бля', poster: '' },
    { link: '/single', name: 'Қаңғыбас қотақбас', poster: '' },
    { link: '/single', name: 'Қаңғыбас қотақбас', poster: '' },
    { link: '/single', name: 'Қаңғыбас қотақбас', poster: '' },
    { link: '/single', name: 'Қаңғыбас қотақбас', poster: '' },
    { link: '/single', name: 'Қаңғыбас қотақбас', poster: '' },
  ];

  return (
    <MainTemplate>
      <div className='home-page container'>

      <div className='last-books'>
        {
          list.map((book, i) => (
            <BookCard link={book.link} name={book.name} poster={book.poster} key={i} />
          ))
        }
      </div>

      </div>
    </MainTemplate>
  );
};