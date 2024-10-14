import { FC } from 'react';

import { MainTemplate } from 'templates/Main';

import { LoaderFunction, redirect, useLoaderData } from 'react-router-dom';
import axios from 'axios';

import './styles.scss';

export const Profile: FC = () => {
  const { id, username, photo, description } = useLoaderData() as any;

  const getPhoto = () => {
    if (photo) {
      return process.env.REACT_APP_CDN_URL + photo;
    }
    return '/images/default.jpg';
  };

  return (
    <MainTemplate>
      <div className='profile-page mini-container'>
        <div className='box'>
          <img src={getPhoto()} />
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
    const res = await axios.get(`/users?id=${params.username}`);
    if (res.status === 200) {
      return res.data;
    }
  } catch (e) {}

  return redirect('/');
}