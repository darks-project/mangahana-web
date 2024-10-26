import { FC, useRef, useState } from 'react';

import { SignInComponent } from './SignIn';
import { JoinComponent } from './Join';
import { ConfirmationComponent } from './Confirmation';
import { EnterPhone } from './EnterPhone';

import './styles.scss';
import { MainTemplate } from 'templates/Main';

export const Login: FC = () => {
  const [phone, setPhone] = useState<string>('');
  const [formattedPhone, setFormattedPhone] = useState<string>('');
  const [code, setCode] = useState<string>('');

  const [isPhoneExists, setPhoneExists] = useState<boolean>(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const nextStep = (isPhoneExists: boolean, phone: string, formattedPhone: string) => {
    setPhone(phone);
    setFormattedPhone(formattedPhone);
    setPhoneExists(isPhoneExists);
    slide();
    return;
  };

  const slide = () => {
    if (wrapperRef.current) {
      wrapperRef.current.classList.add('active');
    }
  };

  const toRegister = () => {
    if (wrapperRef.current) {
      wrapperRef.current.classList.add('register');
    }
  }

  return (
    <MainTemplate>
      <div className='login-page container'>
        <div className='box'>
          <div className='wrapper' ref={wrapperRef}>
            <EnterPhone nextStep={nextStep} />

            {
              isPhoneExists ?
              <SignInComponent phone={phone} formattedPhone={formattedPhone} /> :
              <ConfirmationComponent setConfirmationCode={setCode} toRegister={toRegister} phone={phone} formattedPhone={formattedPhone} />
            }
            
            {code.length === 6 ? <JoinComponent code={code} formattedPhone={formattedPhone} /> : ''}
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};