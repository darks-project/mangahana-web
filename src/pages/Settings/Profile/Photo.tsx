import axios from 'axios';
import { CloudUploadIcon } from 'icons/CloudUpload';
import { FC, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updatePhoto } from 'store/slices/user';

interface PhotoProps {
  currentPhoto: string;
}

export const Photo: FC<PhotoProps> = ({ currentPhoto }) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [fileSelected, setFileSelected] = useState<boolean>(false);

  const [image, setImage] = useState<string>(currentPhoto);
  const imageRef = useRef(null);
  const dispatch = useDispatch();

  const upload = () => {
    if (isLoading) return;
    setLoading(true);

    let photo = base64ToArrayBuffer(image.split(',')[1]);

    axios.patch('/authorization/update_photo', photo)
    .then(async (value) => {
      dispatch(updatePhoto(value.data));
      setFileSelected(false);
    })
    .catch(reason => console.log(reason))
    .finally(() => setLoading(false));
  };

  const remove = () => {
    if (isLoading) return;
    setImage(currentPhoto);
    setFileSelected(false);
  };

  const onChange = (event: any) => {
    if (isLoading) return;

    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const photo = e.target.result;

        setImage(photo);
        setFileSelected(true);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='photo-upload'>
      <div className='title'>Сурет қою</div>
      
      <div className='box'>
        <div className='image'>
          <img src={image ? image : '/images/default.jpg'} ref={imageRef}  />
          <div className='cover'></div>
        </div>
        
        <div className='file-picker'>
          <input id='file' type='file' onChange={onChange} />

          {
            fileSelected ?
            <div className='selected'>
              <div className='button' onClick={upload}>
                <span>Жүктеу</span>
                {isLoading ? <div className='lds-dual-ring'></div> : <CloudUploadIcon />}
              </div>
              <div className='button-red' onClick={remove}>
                <span>Қайтару</span>
              </div>
            </div>
            :
            <label htmlFor='file' className='button'>Файл таңдау</label>
          }
          
          
        </div>
      </div>
    </div>
  );
}


const base64ToArrayBuffer = (base64: string) => {
  const binaryString = window.atob(base64);
  const length = binaryString.length;
  const bytes = new Uint8Array(length);
  for (let i = 0; i < length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
};