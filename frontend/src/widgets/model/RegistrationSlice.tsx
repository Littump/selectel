import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { _apiUrl } from "shared";
interface ILogindata {
	username: string
	password: string
	allPets: null
	myPets: null
	allAdvs: null
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
	'fetchRegister',
	async (body : ILogindata) => {
		try {
			const response = await fetch(
			  `/api/users/`,
			  {
				method: 'POST',
				headers: {
				  'Content-Type': 'application/json;charset=utf-8',
				},
				body: JSON.stringify(body)
			  }
			)
			if (response.ok) {
			  const data = await response.json()
			  return data.results
			} else {
			  return response.status
			}
		  } catch (error) {
			return error
		  }
		}
)
export const fetchPets = createAsyncThunk(
	'fetchPets',
	async () => {
		try {
			const response = await fetch(
			  `${_apiUrl}/api/pets/`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json;charset=utf-8',
						Authorization: `Token ${localStorage.getItem('token')}`,
					},
				}
			)
			if (response.ok) {
			  const data = await response.json()
			  return data.results
			} else {
			  return response.status
			}
		  } catch (error) {
			return error
		  }
		}
)
export const fetchMyPets = createAsyncThunk(
	'fetchMyPets',
	async () => {
		try {
			const response = await fetch(
			  `${_apiUrl}/api/pets/me/`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json;charset=utf-8',
						Authorization: `Token ${localStorage.getItem('token')}`,
					},
				}
			)
			if (response.ok) {
			  const data = await response.json()
			  return data.results
			} else {
			  return response.status
			}
		  } catch (error) {
			return error
		  }
	}
)

export const fetchAllAdvertisements = createAsyncThunk(
	'fetchAllAdvertisements',
	async (body) => {
		try {
			const response = await fetch(
			  `${_apiUrl}/api/advertisements/`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json;charset=utf-8',
						Authorization: `Token ${localStorage.getItem('token')}`,
					},
					body: JSON.stringify(body)
				}
			)
			if (response.ok) {
			  const data = await response.json()
			  console.log(data)
			  return data.results
			} else {
			  return response.status
			}
		  } catch (error) {
			return error
		  }
		}
)

const initialState: any = {
    loginStatus: "idle",
    registerStatus: "idle",
};

const RegistrationSlice = createSlice({
	name: 'registration',
  	initialState,
	reducers: {

	},
	extraReducers: (builder) => {
		builder
		// fetchLogin
		.addCase(fetchLogin.pending, (state) => {
			state.loginStatus = 'loading'
		})
		.addCase(fetchLogin.fulfilled, (state, action) => {
			console.log(action.payload, typeof action.payload)
			if (typeof action.payload !== 'number') {
				localStorage.setItem('token', action.payload)
				state.loginStatus = 'success'
			} else {
				state.loginStatus = 'error'
			}
		})
		.addCase(fetchLogin.rejected, (state) => {
			state.loginStatus = 'error'
		})

		// fetchRegister
		.addCase(fetchRegister.pending, (state) => {
			state.registerStatus = 'loading'
		})
		.addCase(fetchRegister.fulfilled, (state, action) => {
			console.log(action.payload, typeof action.payload)
			if (typeof action.payload !== 'number') {
				state.registerStatus = 'success'
				localStorage.setItem('token', action.payload)
			} else {
				state.registerStatus = 'error'
			}
		})
		.addCase(fetchRegister.rejected, (state) => {
			state.registerStatus = 'error'
		})

		// fetchPets
		.addCase(fetchPets.pending, (state) => {
			// state.loginStatus = 'loading'
		})
		.addCase(fetchPets.fulfilled, (state, action) => {
			// state.loginStatus = 'success'
			state.allPets = action.payload
		})
		.addCase(fetchPets.rejected, (state) => {
		})

		// fetchMyPets
		.addCase(fetchMyPets.pending, (state) => {
			// state.loginStatus = 'loading'
		})
		.addCase(fetchMyPets.fulfilled, (state, action) => {
			// state.loginStatus = 'success'
			state.myPets = action.payload
		})
		.addCase(fetchMyPets.rejected, (state) => {
		})

		// fetchAllAdvertisements
		.addCase(fetchAllAdvertisements.pending, (state) => {
			// state.loginStatus = 'loading'
		})
		.addCase(fetchAllAdvertisements.fulfilled, (state, action) => {
			// state.loginStatus = 'success'
			state.	allAdvs = action.payload
		})
		.addCase(fetchAllAdvertisements.rejected, (state) => {
		})
	}
})

export default RegistrationSlice.reducer;
