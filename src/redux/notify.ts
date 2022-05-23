import { createSlice} from '@reduxjs/toolkit'

export interface NotifyState {
  no: number;
  title: string;
  content: string;
  registerDate: string;
  eventType: string;
}

const initialState: NotifyState[] = [];

export const notifySlice = createSlice({
  name: 'notify',
  initialState,
  reducers: {
    append: (state, action) => {
      state.push(action.payload);
    },
    concat: (state, action) => {
      return state.concat(action.payload);
    },
  },
})

export const { append, concat } = notifySlice.actions

export default notifySlice.reducer
