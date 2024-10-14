import { FC, FormEventHandler, useRef, useState } from 'react';
import { SettingsTemplate } from 'templates/Settings';

import './styles.scss';
import axios from 'axios';
import { showAlert } from 'components/Alert';
import { Input } from 'components/Input';

export const PasswordSettings: FC = () => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const [oldPassword, setPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmationPassword, setConfirmationPassword] = useState<string>('');

  const [oldPasswordError, setPasswordError] = useState<string>('');
  const [newPasswordError, setNewPasswordError] = useState<string>('');
  const [confirmationPasswordError, setConfirmationPasswordError] = useState<string>('');

  const formRef = useRef<HTMLFormElement>(null);

  const errorClear = () => {
    setPasswordError('');
    setNewPasswordError('');
    setConfirmationPasswordError('');
  }

  const clearFields = () => {
    setPassword('');
    setNewPassword('');
    setConfirmationPassword('');
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    errorClear();

    if (isLoading) return;

    if (oldPassword === '') {
      setPasswordError('Жол бос болмауы қажет');
      return;
    }

    if (newPassword.length < 8) {
      setNewPasswordError('Кем дегенде 8 таңба');
      return;
    }

    if (newPassword !== confirmationPassword) {
      setConfirmationPasswordError('Құпия сөздер сәйкес емес');
      return;
    }
    
    const data = {
      old_password: oldPassword,
      new_password: newPassword,
    };

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    axios.patch('/users/changePassword', data).
    then(value => {
      clearFields();
      formRef.current!.reset();
      showAlert('Құпиясөз өзгертілді');
    }).
    catch(reason => {
      console.log(reason);
      if (reason.response.data.code === 'INVALID_PASSWORD') {
        setPasswordError('Ескі құпиясөз дұрыс емес');
      }
    }).finally(() => setLoading(false))
  };

  return (
    <SettingsTemplate link='/settings/password'>
      <div className='change-password'>
        <div className='title'>Құпиясөзді өзгерту</div>

        <form onSubmit={onSubmit} ref={formRef}>
          <Input className='input' type='password' label='Ескі құпиясөз' onChange={(e) => setPassword(e.target.value)} error={oldPasswordError} />
          <Input className='input' type='password' label='Жаңа құпиясөз' onChange={(e) => setNewPassword(e.target.value)} error={newPasswordError} />
          <Input className='input' type='password' label='Жаңа құпиясөзді растау' onChange={(e) => setConfirmationPassword(e.target.value)} error={confirmationPasswordError} />
          <button className='button'>
            <span>Өзгерту</span>
            {isLoading ? <div className='lds-dual-ring'></div> : ''}
          </button>
        </form>
      </div>
    </SettingsTemplate>
  );
};