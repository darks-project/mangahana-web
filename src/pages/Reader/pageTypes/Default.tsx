import { FC, useState } from 'react';

interface DefaultPageTypeProps {
  pages: string[];
  setFocus: CallableFunction;
  toggleFocus: CallableFunction;
}

export const DefaultPageType: FC<DefaultPageTypeProps> = ({ pages, setFocus, toggleFocus }) => {
  const [activePage, setActivePage] = useState<number>(0);
  
  const PrevPage = () => {
    if (activePage > 0) {
      setActivePage(activePage - 1);
    }
    
    window.scrollTo({top: 0});
    setFocus(true);
  };

  const NextPage = () => {
    if (activePage < (pages.length - 1)) {
      setActivePage(activePage + 1);
    }
    
    window.scrollTo({top: 0});
    setFocus(true);
  };

  return (
    <div className='content'>
      <div className='prev' onClick={PrevPage}></div>
      <div className='pages' onClick={() => toggleFocus()}>
        <img src={pages[activePage]} />
      </div>
      <div className='next' onClick={NextPage}></div>
    </div>
  );
};