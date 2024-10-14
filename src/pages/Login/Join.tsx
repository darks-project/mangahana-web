import axios from 'axios';
import { showAlert } from 'components/Alert';
import { FC, FormEvent, useState } from 'react';
import { store } from 'store';
import { login } from 'store/slices/user';

interface JoinProps {
  code: string;
  clearedPhone: string;
}

export const JoinComponent: FC<JoinProps> = ({ code, clearedPhone }) => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmedPassword, setConfirmedPassword] = useState<string>('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const regex = /^[a-zA-Z0-9]+(_?[a-zA-Z0-9]+)*$/;
    if (!regex.test(username)) {
      showAlert('Лақап атына тек латын әріптері, сандар және астыңғы сызық (_) таңбасын қолдануға болады');
      return;
    }

    if (password.length < 8) {
      showAlert('Құпия сөз тым қысқа');
      return;
    }

    if (password !== confirmedPassword) {
      showAlert('Құпия сөздер сәйкес келмейді');
      return;
    }

    let data = {
      phone: clearedPhone,
      confirmation_code: code,
      username: username,
      password: password,
    }
    axios.post('/users/register', data).
    then((value: any) => {
      localStorage.setItem('token', value.response.data.token);
      store.dispatch(login(value.data));
    }).
    catch(reason => showAlert(reason));
  };

  return (
    <form onSubmit={onSubmit}>

      <div className='title'>Тіркелу</div>
      
      <label>Лақап атыңды жаз:</label>
      <input className='input' type='text' placeholder='Nickname' onChange={(e) => setUsername(e.target.value)} />
      
      <label>Құпия сөз ойлап тап:</label>
      <input className='input' type='password' placeholder='Құпия сөз' onChange={(e) => setPassword(e.target.value)} />
      
      <label>Құпия сөзді қайтала:</label>
      <input className='input' type='password' placeholder='Құпия сөз' onChange={(e) => setConfirmedPassword(e.target.value)} />

      <button className='button'>
        <div>Тіркелу</div>
        {isLoading ? <div className='lds-dual-ring'></div> : ''}
      </button>
    </form>
  );
}