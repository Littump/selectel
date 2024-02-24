import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { _apiUrl } from "shared";

export const managerAPI = createApi({
    reducerPath: "managerAPI",
    baseQuery: fetchBaseQuery({ baseUrl: _apiUrl, credentials: "include" }),
    endpoints: (build) => ({
        signin: build.mutation({
            query: ({ username, password }) => ({
                url: `api/token/login/`,
                method: "POST",
                body: {
                    username,
                    password,
                },
            }),
        }),
        signup: build.mutation({
            query: ({ username, email, password }) => {
                return {
                    url: `api/users/`,
                    method: "POST",
                    body: {
                        username: "andrew1532",
                        email: "somemail@mail.ru",
                        password: "somepassword1532",
                    },
                };
            },
        }),
        getMe: build.query({
            query: () => ({
                url: `api/users/me/`,
                headers: {
                    Authorization: `Token ${localStorage.getItem("token")}`,
                },
            }),
        }),
        updateMe: build.mutation({
            query: ({ username, email, logo, name }) => {
                const form_data = new FormData();
                if (logo.path !== undefined) {
                    form_data.append("logo", logo, logo?.path);
                }
                form_data.append("username", username);
                form_data.append("email", email);
                form_data.append("name", name);
                return {
                    url: `auth/users/me/`,
                    method: "PATCH",
                    headers: {
                        Authorization: `Token ${localStorage.getItem("token")}`,
                    },
                    body: form_data,
                };
            },
        }),
    }),
});

export const {
    useSigninMutation,
    useSignupMutation,
    useGetMeQuery,
    useUpdateMeMutation,
} = managerAPI;

export const { signin, signup, getMe, updateMe } = managerAPI.endpoints;
