import { FC, FormEvent, useState } from 'react';
import { MainTemplate } from 'templates/Main';

import './styles.scss';
import { Input } from 'components/Input';
import { Dropdown, Option } from 'components/Dropdown';
import axios from 'axios';
import { redirect, useNavigate } from 'react-router-dom';
import { showAlert } from 'components/Alert';

export const AddTeam: FC = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const options: Array<Option> = [
    { value: 1, name: 'Баспа' },
    { value: 2, name: 'Автор' },
    { value: 3, name: 'Аудармашы' },
  ];

  const navigate = useNavigate();

  const [name, setName] = useState<string>('');
  const [nameError, setNameError] = useState<string | null>(null);

  const [type, setType] = useState<string>(options[0].value);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (name.trim() === '') {
      setNameError('Бұл жол бос болмауы қажет')
      return;
    }

    setNameError(null);

    setLoading(true);

    axios.post('/teams/add', { name, type_id: type })
    .then((value) => navigate(`/teams/${value.data}`))
    .catch((reason) => {
      switch (reason.response.data.code) {
        case 'TEAMS_LIMIT':
          showAlert('5 ұйымнан артық қосуға болмайды');
          break;
        default:
          showAlert('Белгісіз қате');
          break;
      }
    }).finally(() => setLoading(false));
  };

  return (
    <MainTemplate title='Ұйым қосу'>
      <form onSubmit={onSubmit} className='add-team-page block'>
        <h2>Жаңа ұйым</h2>
        <Input className='input' label='Аты' onChange={(e) => setName(e.target.value)} error={nameError} disabled={isLoading} />
        <Dropdown options={options} label='Түрі' onChange={(e) => setType(e.target.value)} disabled={isLoading} />
        <button className='button'>
          <span>Қосу</span>
          {isLoading ? <div className='lds-dual-ring'></div> : null}
        </button>
      </form>
    </MainTemplate>
  );
};