import { FC } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export interface bookCardProps {
  link: string;
  poster: string;
  name: string;
}

export const BookCard: FC<bookCardProps> = ({ link, poster, name }) => {
  return (
    <Link to={link} className='book-card'>
      <img src={poster} alt='' />
      <div className='name'>{name}</div>
    </Link>
  );
};