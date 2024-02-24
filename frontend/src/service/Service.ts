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
            query: ({ username, email, name }) => ({
                url: `api/users/me`,
                method: "PATCH",
                headers: {
                    Authorization: `Token ${localStorage.getItem("token")}`,
                },
                body: {
                    username,
                    email,
                    name,
                },
            }),
        }),
        addPet: build.mutation({
            query: ({ name, breed }) => ({
                url: `api/pets/`,
                method: "POST",
                headers: {
                    Authorization: `Token ${localStorage.getItem("token")}`,
                },
                body: {
                    name,
                    breed,
                },
            }),
        }),
        editPet: build.mutation({
            query: ({ name, breed, id }) => ({
                url: `api/pets/${id}/`,
                method: "PUTCH",
                headers: {
                    Authorization: `Token ${localStorage.getItem("token")}`,
                },
                body: {
                    name,
                    breed,
                },
            }),
        }),
        deletePet: build.mutation({
            query: ({ id }) => ({
                url: `api/pets/${id}/`,
                method: "DELETE",
                headers: {
                    Authorization: `Token ${localStorage.getItem("token")}`,
                },
            }),
        }),
        getAds: build.query({
            query: () => ({
                url: `api/advertisements/`,
                headers: {
                    Authorization: `Token ${localStorage.getItem("token")}`,
                },
            }),
        }),
        addAd: build.mutation({
            query: ({ info }) => ({
                url: `api/advertisements/`,
                method: "POST",
                headers: {
                    Authorization: `Token ${localStorage.getItem("token")}`,
                },
                body: {
                    info,
                },
            }),
        }),
    }),
});

export const {
    useSigninMutation,
    useSignupMutation,
    useGetMeQuery,
    useAddPetMutation,
    useUpdateMeMutation,
    useDeletePetMutation,
    useEditPetMutation,
    useAddAdMutation,
    useGetAdsQuery,
} = managerAPI;

export const { signin, signup, getMe, addPet, updateMe } = managerAPI.endpoints;