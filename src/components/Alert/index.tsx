import { FC, useRef } from 'react';

import './styles.scss';

export const showAlert = (message: string) => {
  const alert = document.querySelector('.alert');
  alert!.querySelector('.message')!.innerHTML = message;
  alert!.classList.add('show');
  return;
};

export const Alert: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const close = () => {
    ref.current!.classList.remove('show');
  }

  return (
    <div className='alert' ref={ref}>
      <div className='content'>
        <div className='message'></div>
        <button className='button'onClick={close}>Түсіндім</button>
      </div>
    </div>
  );
};