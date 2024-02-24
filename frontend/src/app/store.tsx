import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import RegistrationSlice from "widgets/model/RegistrationSlice";
import { managerAPI } from "../service/Service";
import { userInfoReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
    [managerAPI.reducerPath]: managerAPI.reducer,
    RegistrationSlice,
    user: userInfoReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(
            managerAPI.middleware
        ),
});

export default store;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
