import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {useDispatch} from 'react-redux'
import RegistrationSlice from "widgets/model/RegistrationSlice";

const rootReducer = combineReducers({
	RegistrationSlice,
})

const store = configureStore({
	reducer: rootReducer,
})

export default store
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type RootState = ReturnType<typeof store.getState>
