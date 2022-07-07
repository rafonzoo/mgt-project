import { configureStore } from '@reduxjs/toolkit'
import { commonReducer } from '@/store/common'

export const store = configureStore({
  reducer: {
    common: commonReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
  },
})

export type RootStates = ReturnType<typeof store.getState>
export type Dispatcher = typeof store.dispatch
export type SelectorDispatch = <T>(fn: (s: RootStates) => T) => [T, Dispatcher]
