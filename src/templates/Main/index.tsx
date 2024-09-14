import { FC, ReactNode } from 'react';
import { Header } from 'components/Header';

import './styles.scss';

interface templateProps {
  children: ReactNode
}

export const MainTemplate: FC<templateProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  );
};