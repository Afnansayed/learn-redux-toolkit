import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/slice/userSlice'
import contactReducer from '../redux/slice/contactSlice'
import { baseApi } from './baseApi'
export const store = configureStore({
  reducer: {
   user:userReducer,
   contact:contactReducer,
   [baseApi.reducerPath]:baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(baseApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch