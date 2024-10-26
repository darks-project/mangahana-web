import { FC, InputHTMLAttributes } from 'react';
import './styles.scss';

interface textareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string | null;
  error?: string | null;
}

export const Textarea: FC<textareaProps> = (props) => {
  return (
    <div className='textarea-component'>
      {props.label ? <label>{props.label}</label> : ''}
      <textarea {...props}/>
      {props.error !== '' ? <div className='error'>{props.error}</div> : ''}
    </div>
  );
};