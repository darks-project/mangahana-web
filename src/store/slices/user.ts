import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface CounterState {
  isAuth: boolean;
  user: {
    id: number;
    name: string;
    photo: string;
  }
}

const initialState: CounterState = {
  isAuth: false,
  user: {
    id: 0,
    name: 'string',
    photo: 'string',
  }
};

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
    },
  },
})

export const { login, logout } = counterSlice.actions;

export const selectCount = (state: any) => state.counter.value;

export default counterSlice.reducer