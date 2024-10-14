import axios from 'axios';
import { showAlert } from 'components/Alert';
import { stringify } from 'querystring';
import { FC, FormEvent, useState } from 'react';
import InputMask from 'react-input-mask';
import { store } from 'store';
import { login } from 'store/slices/user';

interface SignInProps {
  phone: string;
  clearedPhone: string;
}

export const SignInComponent: FC<SignInProps> = ({ phone, clearedPhone }) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (password.length < 1) {
      showAlert('Құпия сөз бос болуы мүмкін емес');
      return;
    }

    axios.post('/users/signin', { phone: clearedPhone, password }).
    then(value => {
      const token = value.data.token;
      localStorage.setItem('token', token);
      store.dispatch(login(value.data));
    }).
    catch(reason => showAlert(reason.response.data.code));
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='title'>Қош келдің!</div>
      <div className='description'>Құпия сөзіңді жазда, кір:</div>
      <InputMask className='input' mask='+7 799 999 9999' maskChar='' placeholder='+7 7' value={phone} disabled />
      <input className='input' type='password' placeholder='Құпия сөз' onChange={(e) => setPassword(e.target.value)} />
      <button className='button'>
        <div>Кіру</div>
        {isLoading ? <div className='lds-dual-ring'></div> : ''}
      </button>
    </form>
  );
}