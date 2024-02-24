import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { _apiUrl } from "shared";
interface ILogindata {
    username: string;
    password: string;
}

export const fetchLogin = createAsyncThunk(
    "fetchLogin",
    async (body: ILogindata) => {
        try {
            console.log(_apiUrl);
            const response = await fetch(`${_apiUrl}/api/token/login/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(body),
            });
            if (response.ok) {
                const data = await response.json();
                return data.results;
            } else {
                return response.status;
            }
        } catch (error) {
            return error;
        }
    }
);

export const fetchRegister = createAsyncThunk(
    "fetchRegister",
    async (body: ILogindata) => {
        try {
            const response = await fetch(`${_apiUrl}/api/users/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(body),
            });
            if (response.ok) {
                const data = await response.json();
                return data.results;
            } else {
                return response.status;
            }
        } catch (error) {
            return error;
        }
    }
);

const initialState: any = {
    loginStatus: "idle",
    registerStatus: "idle",
};

const RegistrationSlice = createSlice({
    name: "registration",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // fetchLogin
            .addCase(fetchLogin.pending, (state) => {
                state.loginStatus = "loading";
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                localStorage.setItem("token", action.payload);
                state.loginStatus = "success";
            })
            .addCase(fetchLogin.rejected, (state) => {
                state.loginStatus = "error";
            })
            // fetchRegister
            .addCase(fetchRegister.pending, (state) => {
                state.registerStatus = "loading";
            })
            .addCase(fetchRegister.fulfilled, (state, action) => {
                state.registerStatus = "success";
                localStorage.setItem("token", action.payload);
            })
            .addCase(fetchRegister.rejected, (state) => {
                state.registerStatus = "error";
            });
    },
});

export default RegistrationSlice.reducer;
