import { KeyIcon } from 'icons/Key';
import { UserIcon } from 'icons/User';
import { FC, ReactNode } from 'react';
import { MainTemplate } from 'templates/Main';

import './styles.scss';
import { Link } from 'react-router-dom';
import { LockIcon } from 'icons/Lock';

interface templateProps {
  link: string;
  children: ReactNode;
}

export const SettingsTemplate: FC<templateProps> = ({ link, children }) => {
  const links = [
    { name: 'Аккаунт', link: '/settings', icon: <UserIcon /> },
    { name: 'Құпиясөз', link: '/settings/password', icon: <LockIcon /> },
    { name: 'Қауіпсіздік', link: '/settings/security', icon: <KeyIcon /> },
  ];

  return (
    <MainTemplate>
      <div className='settings-page container'>
        
        <aside>
          {
            links.map((v, i) => (
              <Link to={v.link} className={v.link === link ? 'active item' : 'item'}>
                {v.icon}
                <span>{v.name}</span>
              </Link>
            ))
          }
        </aside>
        
        <div className='content'>{children}</div>
        
      </div>
    </MainTemplate>
  );
};