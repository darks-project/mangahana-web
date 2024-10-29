import { FC, ReactNode } from 'react';
import { Header } from 'components/Header';

import './styles.scss';
import { Footer } from 'components/Footer';

interface templateProps {
  title: string;
  children: ReactNode
}

export const MainTemplate: FC<templateProps> = ({ title, children }) => {
  document.title = title;
  
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      
    </>
  );
};