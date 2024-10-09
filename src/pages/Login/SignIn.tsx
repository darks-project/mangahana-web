import { FC } from 'react';
import InputMask from 'react-input-mask';

interface SignInProps {
  phone: string;
}

export const SignInComponent: FC<SignInProps> = ({ phone }) => {
  return (
    <form>
      <div className='title'>Қош келдің!</div>
      <div className='description'>Құпия сөзіңді жазда, кір:</div>
      <InputMask className='input' mask='+7 799 999 9999' maskChar='' placeholder='+7 7' value={phone} disabled />
      <input className='input' type='password' placeholder='Құпия сөз' />
      <button className='button'>
        <div>Кіру</div>
      </button>
    </form>
  );
}