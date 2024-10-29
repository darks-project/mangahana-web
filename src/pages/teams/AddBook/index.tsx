import { FC, useEffect, useState } from 'react';
import { MainTemplate } from 'templates/Main';

import './styles.scss';
import { Input } from 'components/Input';
import { Textarea } from 'components/Textarea';
import { LoaderFunction, redirect } from 'react-router-dom';
import axios from 'axios';
import { ImagePicker } from './ImagePicker';

export const AddBook: FC = () => {
  const [types, setTypes] = useState([]);
  const [formats, setFormats] = useState([]);
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    axios.get('/books/get_params')
    .then((value) => console.log(value))
    .catch((value) => console.log(value));
  }, []);

  return (
    <MainTemplate title='Тайтл қосу'>
      <div className='add-book-page container block'>

        <h2>Тайтл қосу</h2>

        <Input className='input' label='Аты' />

        <Input className='input' label='Түпнұсқа аты' />

        <Textarea className='input' label='Сипаттама' />

        <ImagePicker />

      </div>
    </MainTemplate>
  );
};

export const AddBookLoader: LoaderFunction = async ({ params }) => {
  try {
    const res = await axios.get(`/teams/membership?id=${params.teamId}`);
    if (res.status === 200) {
      return {};
    }
  } catch (e) {}
  return redirect('/');
}