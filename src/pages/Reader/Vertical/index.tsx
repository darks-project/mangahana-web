import { FC, useState } from 'react';

import './styles.scss';

interface VerticalReaderProps {
  pages: string[];
  toggleFocus: () => void;
}

export const VerticalReader: FC<VerticalReaderProps> = ({ pages, toggleFocus }) => {
  const [activePage, setActivePage] = useState<number>(0);

  return (
    <div className='vertical' onClick={toggleFocus}>
      {
        pages.map((v, i) => (
          <img src={v} />
        ))
      }
    </div>
  );
}