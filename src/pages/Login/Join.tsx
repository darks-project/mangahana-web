import axios from 'axios';
import { FC, useState } from 'react';
import InputMask from 'react-input-mask';

interface JoinProps {
  phone: string;
}

export const JoinComponent: FC<JoinProps> = ({ phone }) => {
  const [isConfirmed, setConfirmed] = useState<boolean>(false);

  const codeChange = (code: string) => {
    const clearedCode = code.replace(/\s/g, '');
    if (clearedCode.length === 6) {
      axios.post('/users/confirmation', { phone: phone, confirmation_code: clearedCode }).
      then().catch(reason => console.log(reason));
    }
  };

  return (
    <form>
      <div className='title'>
        <div className='back' onClick={() => console.log('back')}>
          <svg className="ionicon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M244 400L100 256l144-144M120 256h292" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48"/></svg>
        </div>
        <div>Тіркелу</div>
      </div>
      
      <InputMask className='input' mask='+7 799 999 9999' maskChar='' placeholder='+7 7' value={phone} disabled />
      <InputMask className='input' mask='9 9 9 9 9 9' onChange={(e) => codeChange(e.target.value)} maskChar='' placeholder='0 0 0 0 0 0' />

      <label>Лақап атыңды жаз:</label>
      <input className='input' type='text' placeholder='username' />
      <input className='input' type='password' placeholder='Құпия сөз' />
      <button className='button'>
        <div>Тіркелу</div>
      </button>
    </form>
  );
}