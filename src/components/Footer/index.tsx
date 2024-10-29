import { FC } from 'react';

import './styles.scss';

export const Footer: FC = () => {
  return (
    <footer>
      <div className='container'>
        <div className='logo'>Baribir</div>
        <div className='rows'>
          <div className='row'></div>
        </div>
        <div className='copyright'>&copy; 2024 baribir.org</div>
      </div>
    </footer>
  );
};