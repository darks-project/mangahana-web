import axios from 'axios';
import { showAlert } from 'components/Alert';
import { ChangeEventHandler, FC, FocusEventHandler, FormEventHandler, KeyboardEventHandler, useEffect, useRef, useState } from 'react';
import ReactInputMask from 'react-input-mask';

interface ConfirmationProps {
  phone: string;
  clearedPhone: string;
  setConfirmationCode: Function;
  toRegister: Function;
}

export const ConfirmationComponent: FC<ConfirmationProps> = ({ toRegister, clearedPhone, setConfirmationCode }) => {
  const [code, setCode] = useState<string>('');

  const codeRef = useRef<HTMLDivElement>(null);
  const firstInput = useRef<HTMLInputElement>(null);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (code.length < 6) return;
    axios.post('/users/confirmation', { phone: clearedPhone, confirmation_code: code }).
    then(value => {
      setConfirmationCode(code);
      toRegister();
    })
    .catch(reason => showAlert('Растау коды дұрыс емес'));
    return;
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    if (target.value === '') {
      (target.previousElementSibling as HTMLInputElement)?.focus();
    } else {
      (target.nextElementSibling as HTMLInputElement)?.focus();
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
    firstInput.current?.focus();
  });

  return (
    <form onSubmit={onSubmit}>
      <div className='title'>Нөмірді раста</div>

      <div className='description'>Растау коды *8562 нөміріне жіберілді</div>

      <div className='code' ref={codeRef}>
        <ReactInputMask inputRef={firstInput} className='input' mask='9' maskChar='' onKeyDown={onKeyDown} onFocus={onFocus} onChange={onChange} />
        <ReactInputMask className='input' mask='9' maskChar='' onKeyDown={onKeyDown} onFocus={onFocus} onChange={onChange} />
        <ReactInputMask className='input' mask='9' maskChar='' onKeyDown={onKeyDown} onFocus={onFocus} onChange={onChange} />
        <ReactInputMask className='input' mask='9' maskChar='' onKeyDown={onKeyDown} onFocus={onFocus} onChange={onChange} />
        <ReactInputMask className='input' mask='9' maskChar='' onKeyDown={onKeyDown} onFocus={onFocus} onChange={onChange} />
        <ReactInputMask className='input' mask='9' maskChar='' onKeyDown={onKeyDown} onFocus={onFocus} onChange={onChange} />
      </div>

      <button className='button'>Растау</button>
    </form>
  );
};