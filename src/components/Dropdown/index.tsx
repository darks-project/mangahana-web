import { FC, InputHTMLAttributes, useState } from 'react';

import './styles.scss';
import { ChevronDown } from 'icons/ChevronDown';

export interface Option {
  name: string;
  value: any;
}

interface DropdownProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  options: Option[];
}

export const Dropdown: FC<DropdownProps> = (props) => {
  const [active, setActive] = useState<number>(0);
  const [isOpen, setOpen] = useState<boolean>(false);

  const onClick = () => {
    if (props.disabled) return;
    setOpen(!isOpen);
  };

  const onSelect = (index: number) => {
    setActive(index);
    setOpen(false);
  };

  return (
    <div className='dropdown-component'>
      {props.label ? <label>{props.label}</label> : null}

      <div className={isOpen ? 'dropdown show' : 'dropdown'}>
        <div className='select' onClick={onClick}>
          <input type='hidden' placeholder='Таңдау' value={active} {...props} />
          <div className='data'>{props.options[active].name}</div>
          <ChevronDown />
        </div>
        <div className='options'>
          {props.options.map((option, index) => (
            <div className='option' data-value={option.value} key={index} onClick={(e) => onSelect(index)}>{option.name}</div>
          ))}
        </div>
      </div>

    </div>
  );
};