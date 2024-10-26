import { FC, FormEvent, useState } from 'react';
import InputMask from 'react-input-mask';
import axios from 'axios';

import { showAlert } from 'components/Alert';
import { ArrowRightIcon } from 'icons/ArrowRight';

interface EnterPhoneProps {
  nextStep: (isPhoneFree: boolean, phone: string, formattedPhone: string) => void;
}

export const EnterPhone: FC<EnterPhoneProps> = ({ nextStep }) => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const [phone, setPhone] = useState<string>('');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    let formattedPhone = phone.replace(/\s/g, '');
    formattedPhone = formattedPhone.slice(2)
    
    if (formattedPhone.length !== 10) {
      setLoading(false);
      return;
    }
  
    axios.get(`/authorization/is_phone_exists?phone=${formattedPhone}`, {})
    .then(value => {
      if (value.data)  {
        nextStep(true, phone, formattedPhone);
      } else {
        nextStep(false, phone, formattedPhone);
      }
    })
    .catch(reason => {
      showAlert('Белгісіз қате..');
    });
  };

  return (
    <form className='main' onSubmit={onSubmit}>
      <div className='title'>Сәлем!</div>
      <div className='description'>Нөміріңді енгізіп, жалғастыр:</div>
      <InputMask className='input' mask='+7 799 999 9999' maskChar='' placeholder='+7 7' onChange={(e) => setPhone(e.target.value)} />
      <button className='button'>
        <div>Жалғастыру</div>
        {isLoading ? <div className='lds-dual-ring'></div> : <ArrowRightIcon />}
      </button>
    </form>
  );
};