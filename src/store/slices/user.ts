import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface CounterState {
  isAuth: boolean;
  user: {
    id: number;
    username: string | null;
    photo: string | null;
  }
}

const initialState: CounterState = {
  isAuth: false,
  user: {
    id: 0,
    username: null,
    photo: null,
  }
};

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, payload) => {
      state.isAuth = true;
      state.user = {
        id: payload.payload.id,
        photo: payload.payload.photo,
        username: payload.payload.username,
      }
    },
    logout: (state) => {
      localStorage.removeItem('token');
      state.isAuth = false;
    },
  },
})

export const { login, logout } = counterSlice.actions;

export const selectCount = (state: any) => state.counter.value;

export default counterSlice.reducer