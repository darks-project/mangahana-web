import { FC, useRef, useState } from 'react';
import { SettingsTemplate } from 'templates/Settings';

import './styles.scss';
import { Photo } from './Photo';
import { useSelector } from 'react-redux';
import { Info } from './Info';

export const ProfileSettings: FC = () => {
  const { user } = useSelector((state: any) => state.user);

  console.log(user);

  return (
    <SettingsTemplate link='/settings'>
      <div className='profile-settings'>
        
        <Photo currentPhoto={user.photo} />
        <Info username={user.username} description={user.description} />

      </div>
    </SettingsTemplate>
  );
};