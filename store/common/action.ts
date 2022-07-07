import { createAsyncThunk } from '@reduxjs/toolkit'

export const setDarkModeAsync = createAsyncThunk(
  'common/setDarkModeAsync',
  async (payload: boolean) => {
    await new Promise((r) => setTimeout(r, 2000))
    return payload
  }
)
