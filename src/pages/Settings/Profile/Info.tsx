import axios from 'axios';
import { showAlert } from 'components/Alert';
import { Input } from 'components/Input';
import { Textarea } from 'components/Textarea';
import { FC, FormEvent, useState } from 'react';

interface InfoProps {
  username: string;
  description: string;
}

export const Info: FC<InfoProps> = ({ username, description }) => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const [usernameField, setUsername] = useState<string>(username);
  const [descriptionField, setDescription] = useState<string>(description);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(!isLoading);

    axios.patch('/authorization/update', { username: usernameField, description: descriptionField })
    .then((value) => showAlert('Ақпарат өзгертілді'))
    .catch((reason) => showAlert(reason.response.data.code))
    .finally(() => setLoading(false));
  }

  return (
    <div className='info'>
      <div className='title'>Ақпарат</div>

      <form className='box' onSubmit={onSubmit}>
        <Input className='input' label='Лақап ат' value={usernameField} onChange={(e) => setUsername(e.target.value)} disabled={isLoading} />
        <Textarea className='input' label='Өзім жайлы' value={descriptionField} onChange={(e) => setDescription(e.target.value)} disabled={isLoading} />
        <button className='button'>
          <span>Сақтау</span> 
          {isLoading ? <div className='lds-dual-ring'></div> : null}
        </button>
      </form>
    </div>
  );
};