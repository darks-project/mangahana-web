import axios from 'axios';
import { FC } from 'react';
import { Link, LoaderFunction, useLoaderData } from 'react-router-dom';
import { MainTemplate } from 'templates/Main';

import './styles.scss';

export const MyTeams: FC = () => {
  const teams = useLoaderData() as any[];

  console.log(teams)

  return (
    <MainTemplate title='Менің ұйымдарым'>
      <div className='my-teams-page container block'>
        <div className='header'>
          <h2>Менің ұйымдарым</h2>
          <Link className='button' to='/teams/add'>Қосу</Link>
        </div>
        <div className='list'>
          {teams.map((team, index) => (
            <Link to={`/teams/${team.id}`} className='row' key={index}>
              <img src={team.photo ? team.photo : '/images/default.jpg'} />
              <div className='name'>{team.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </MainTemplate>
  );
};

export const MyTeamsLoader:LoaderFunction = async () => {
  try {
    const res = await axios.get('/teams/my');
    if (res.status) {
      return res.data;
    }
  } catch (e) {}
  return [];
};