import { createSlice } from '@reduxjs/toolkit'
import { setDarkModeAsync } from '@/store/common/action'

const initialState = {
  darkMode: false,
}

const slice = createSlice({
  name: 'common',
  initialState: initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setDarkModeAsync.fulfilled, (state, action) => {
      state.darkMode = action.payload
    })
  },
})

export const { toggleDarkMode } = slice.actions
export const { reducer: commonReducer } = slice
