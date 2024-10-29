import { FC } from 'react';

interface InfoProps {
  description: string;
}

export const Info: FC<InfoProps> = ({ description }) => {
  return (
    <div className='info'>
      <p className='description'>{description}</p>
    </div>
  );
};