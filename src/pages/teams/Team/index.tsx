import axios from 'axios';
import { FC, MouseEventHandler, useEffect, useRef, useState } from 'react';
import { LoaderFunction, useLoaderData } from 'react-router-dom';
import { MainTemplate } from 'templates/Main';

import './styles.scss';
import { Info } from './Info';
import { Members } from './Members';

interface Team {
  id: number;
  name: string;
  photo: string;
}

export const Team: FC = () => {
  const { id, name, photo, description, members } = useLoaderData() as any;
  const borderRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActive] = useState<number>(0);

  const routes = [
    { name: 'Мүшелері', component: <Members members={members} /> },
    { name: 'Еңбегі', component: <Info description={description} /> },
    { name: 'Басқару', component: <Info description={description} /> },
  ];

  const onClickTab: MouseEventHandler<HTMLDivElement> = ({ currentTarget }) => {
    const index = currentTarget.getAttribute('data-index');
    if (activeTab !== parseInt(index!)) {
      setActive(parseInt(index!));
    }

    const parentLeft = currentTarget.parentElement!.getBoundingClientRect().left;
    const thisLeft = currentTarget.getBoundingClientRect().left;

    borderRef.current!.style.left = (thisLeft - parentLeft) + 'px';
    borderRef.current!.style.width = currentTarget.clientWidth+ 'px';
  };

  useEffect(() => {
    if (activeTab === 0) {
      borderRef.current!.style.width = itemsRef.current!.querySelector('.item')!.clientWidth + 'px';
    }
  });

  return (
    <MainTemplate title={name}>
      <div className='team-page block'>
        <div className='info'>
          <img src={photo ? photo : '/images/default.jpg'} />
          <h2 className='name'>{name}</h2>
          <p className='description'>{description}</p>
        </div>

        <div className='tabs'>
          <div className='items' ref={itemsRef}>
            {
              routes.map((tab, index) => (
                <div className={activeTab === index ? 'item active ' : 'item'} onClick={onClickTab} data-index={index} key={index}>{tab.name}</div>
              ))
            }
          </div>
          <div className='border' ref={borderRef}></div>
        </div>

        <div className='content'>
          {routes[activeTab].component}
        </div>
      </div>
    </MainTemplate>
  );
};

export const TeamLoader: LoaderFunction = async ({ params }) => {
  
  try {
    const res = await axios.get(`/teams?id=${params.teamId}`);
    if (res.status === 200) {
      return res.data;
    }
  } catch (e) {}

  return {};

};