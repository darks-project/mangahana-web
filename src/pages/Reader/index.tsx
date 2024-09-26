import { FC, useState } from 'react';

import { DefaultPageType } from './pageTypes/Default';
import { ReaderHeader } from './Header';

import './styles.scss';

export const Reader: FC = () => {
  const [focus, setFocus] = useState<boolean>(false);
  
  const toggleFocus = () => setFocus(!focus);

  const pages = [
    '/images/aot/1.png',
    '/images/aot/2.png',
    '/images/aot/3-4.png',
    '/images/aot/5.png',
    '/images/aot/6.png',
    '/images/aot/7.png',
    '/images/aot/8.png',
  ];
  
  return (
    <div className={'reader-default' + (focus ? ' focus':'')}>
      <ReaderHeader />
      <DefaultPageType setFocus={setFocus} toggleFocus={toggleFocus} pages={pages} />
    </div>
  );
};