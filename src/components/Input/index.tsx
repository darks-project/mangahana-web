import { FC, InputHTMLAttributes } from 'react';
import './styles.scss';

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | null;
  error?: string | null;
}

export const Input: FC<inputProps> = (props) => {
  return (
    <div className='input-component'>
      {props.label ? <label>{props.label}</label> : ''}
      <input {...props}/>
      {props.error !== '' ? <div className='error'>{props.error}</div> : ''}
    </div>
  );
};