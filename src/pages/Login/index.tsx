import { FC, FormEvent, useRef, useState } from 'react';
import InputMask from 'react-input-mask';

import './styles.scss';
import axios from 'axios';

import { SignInComponent } from './SignIn';
import { JoinComponent } from './Join';
import { ConfirmationComponent } from './confirmation';
import { ArrowRightIcon } from 'icons/ArrowRight';

export const Login: FC = () => {
  const [phone, setPhone] = useState<string>('');
  const [clearedPhone, setClearedPhone] = useState<string>('');
  const [code, setCode] = useState<string>('');

  const [isNumberFree, setNumberFree] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    let clearedPhone = phone.replace(/\s/g, '');
    clearedPhone = clearedPhone.slice(2)
    
    if (clearedPhone.length !== 10) {
      setLoading(false);
      return;
    }
  
    axios.get(`/users/phoneExists?phone=${clearedPhone}`, {})
    .then(value => {
      if (value.data) {
        setNumberFree(false);
      } else {
        setNumberFree(true);
        
        axios.post(`/users/join`, { phone: clearedPhone }).catch(() => {});
      }
      setClearedPhone(clearedPhone);
      slide();
    })
    .catch(reason => console.log(reason));
  };

  const slide = () => {
    if (wrapperRef.current) {
      wrapperRef.current.classList.add('active');
      setLoading(false);
    }
  };

  const toRegister = () => {
    if (wrapperRef.current) {
      wrapperRef.current.classList.add('register');
    }
  }

  return (
    <div className='login-page container'>

      <div className='box'>

        <div className='wrapper' ref={wrapperRef}>
          
          <form className='main' onSubmit={onSubmit}>
            <div className='title'>Сәлем!</div>
            <div className='description'>Нөміріңді енгізіп, жалғастыр:</div>
            <InputMask className='input' mask='+7 799 999 9999' maskChar='' placeholder='+7 7' onChange={(e) => setPhone(e.target.value)} />
            <button className='button'>
              <div>Жалғастыру</div>
              {isLoading ? <div className='lds-dual-ring'></div> : <ArrowRightIcon />}
            </button>
          </form>

          {
            isNumberFree ?
            <ConfirmationComponent setConfirmationCode={setCode} toRegister={toRegister} phone={phone} clearedPhone={clearedPhone} /> :
            <SignInComponent phone={phone} clearedPhone={clearedPhone} />
          }
          
          {code.length === 6 ? <JoinComponent code={code} clearedPhone={clearedPhone} /> : ''}
        </div>
      </div>
    </div>
  );
};