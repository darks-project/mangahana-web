import { FC } from 'react';

import { MainTemplate } from 'templates/Main';

import { LoaderFunction, redirect, useLoaderData } from 'react-router-dom';
import axios from 'axios';

import './styles.scss';

export const Profile: FC = () => {
  const { id, username, photo, description } = useLoaderData() as any;

  return (
    <MainTemplate title={username}>
      <div className='profile-page mini-container'>
        <div className='box'>
          <img src={photo ? photo : '/images/default.jpg'} />
          <div className='data'>
            <div className='username'>{username}</div>
            <div>{description}</div>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};

export const profileLoader: LoaderFunction = async ({ params }) => {
  try {
    const res = await axios.get(`/authorization/get_user?id=${params.id}`);
    if (res.status === 200) {
      return res.data;
    }
  } catch (e) {}

  return redirect('/');
}