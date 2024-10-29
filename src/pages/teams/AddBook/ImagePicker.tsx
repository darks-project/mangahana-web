import { FC } from 'react';

export const ImagePicker: FC = () => {


  return (
    <div className='image-picker'>
      <input id='file' accept='image/*' type='file' />
      <label htmlFor='file'>Постер жоқ</label>
    </div>
  );
};