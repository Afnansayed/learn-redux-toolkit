import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/slice/userSlice'
import contactReducer from '../redux/slice/contactSlice'
export const store = configureStore({
  reducer: {
   user:userReducer,
   contact:contactReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch