import axios from 'axios';
import { showAlert } from 'components/Alert';
import { Input } from 'components/Input';
import { ChangeEventHandler, FC, FocusEventHandler, FormEventHandler, KeyboardEventHandler, useEffect, useRef, useState } from 'react';
import ReactInputMask from 'react-input-mask';

interface ConfirmationProps {
  phone: string;
  formattedPhone: string;
  setConfirmationCode: Function;
  toRegister: Function;
}

export const ConfirmationComponent: FC<ConfirmationProps> = ({ toRegister, formattedPhone, setConfirmationCode }) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [code, setCode] = useState<string>('');
  const codeRef = useRef<HTMLDivElement>(null);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setLoading(true);

    if (code.length < 6) {
      setLoading(false);
      return;
    }
    
    axios.post('/authorization/confirm_phone', { phone: formattedPhone, code: code }).
    then(value => {
      setConfirmationCode(code);
      toRegister();
    })
    .catch(reason => showAlert('Растау коды дұрыс емес'))
    .finally(() => setLoading(false));
    return;
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    if (target.value !== ''){
      let nextElement = (target.nextElementSibling as HTMLInputElement);
      if (nextElement) {
        target.value = target.value.charAt(0);
        nextElement.focus();
      } else {
        target.value = target.value.charAt(0);
      }
    }

    let code = '';
    const inputs = codeRef.current!.querySelectorAll('input');
    inputs.forEach((input) => {
      code += input.value;
    });

    setCode(code);
  };

  const onFocus: FocusEventHandler<HTMLInputElement> = ({ target }) => {
    if (target.value === '') {
      if ((target.previousElementSibling as HTMLInputElement)?.value === '') {
        (target.previousElementSibling as HTMLInputElement)?.focus();
      }
    }
  };

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = ({ currentTarget, key }) => {
    if (currentTarget.value === '' && key === 'Backspace') {
      (currentTarget.previousElementSibling as HTMLInputElement)?.focus();
    }
  }

  useEffect(() => {
    if (formattedPhone !== '' && code === '') {
      setTimeout(() => (codeRef.current?.firstChild as HTMLInputElement)?.focus(), 250)
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <div className='title'>Растау</div>

      <div className='description'>Коды *{formattedPhone.slice(6)} нөміріне SMS арқылы жіберілді</div>

      <div className='code' ref={codeRef}>
        <input type='number' className='input' onKeyDown={onKeyDown} onFocus={onFocus} onChange={onChange} />
        <input className='input' type='number' onKeyDown={onKeyDown} onFocus={onFocus} onChange={onChange} />
        <input className='input' type='number' onKeyDown={onKeyDown} onFocus={onFocus} onChange={onChange} />
        <input className='input' type='number' onKeyDown={onKeyDown} onFocus={onFocus} onChange={onChange} />
        <input className='input' type='number' onKeyDown={onKeyDown} onFocus={onFocus} onChange={onChange} />
        <input className='input' type='number' onKeyDown={onKeyDown} onFocus={onFocus} onChange={onChange} />
      </div>

      <button className='button'>Растау</button>
    </form>
  );
};