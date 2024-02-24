import { createSlice } from "@reduxjs/toolkit";
import user from "../../assets/images/user.png";
import pet from "../../assets/images/pet.png";

const initialState : any = {
    userInfo: {
        firstName: null,
        lastName: null,
        birthday: "01.01.2000",
        phone: null,
        address: null,
        username: null,
        url: user,
    },
    pets: [
        {
            url: pet,
            name: "Шарик",
            breed: "Сиба ину",
            bloodType: "DEA 1.1",
            petFacts: [
                { title: "Возраст", data: "26" },
                { title: "Вес", data: "26кг" },
            ],
        },
        {
            url: pet,
            name: "Шарик2",
            breed: "Сиба ину",
            bloodType: "DEA 1.1",
            petFacts: [
                { title: "Возраст", data: "26" },
                { title: "Вес", data: "26кг" },
            ],
        },
        {
            url: pet,
            name: "Шарик3",
            bloodType: "DEA 1.1",
            breed: "Сиба ину",
            petFacts: [
                { title: "Возраст", data: "26" },
                { title: "Вес", data: "26кг" },
            ],
        },
    ],
    ads: [
        {
            name: "Шарик",
            bloodType: "DEA 1.1",
            id: "1",
            address: "Санкт-Петербург улица пушкина дом колотушкина",
            petFacts: [
                { title: "Возраст", data: "26" },
                { title: "Вес", data: "26кг" },
            ],
        },
        {
            name: "Шарик2",
            id: "2",
            bloodType: "DEA 1.1",
            address: "Санкт-Петербург улица пушкина дом колотушкина",
            petFacts: [
                { title: "Возраст", data: "26" },
                { title: "Вес", data: "26кг" },
            ],
        },
        {
            name: "Шарик3",
            id: "3",
            bloodType: "DEA 1.1",
            address: "Санкт-Петербург улица пушкина дом колотушкина",
            petFacts: [
                { title: "Возраст", data: "26" },
                { title: "Вес", data: "26кг" },
            ],
        },
    ],
};

export const userInfo = createSlice({
    name: "filters",
    initialState,
    reducers: {
        updateUserInfo: (state : any, action) => {
            state.userInfo.firstName = action.payload.firstName;
            state.userInfo.lastName = action.payload.lastName;
            state.userInfo.username = action.payload.username;
            state.userInfo.birthday = action.payload.birthday;
            state.userInfo.address = action.payload.address;
            state.userInfo.phone = action.payload.phone;
            state.userInfo.city = action.payload.city;
        },
        setPets: (state: any, action) => {
            if (!action.payload) return;
            console.log(action.payload);
            state.pets = [...action.payload.map((el : any) => ({ ...el, url: pet }))];
        },
        setAds: (state : any, action) => {
            if (!action.payload) return;
            state.ads = [...action.payload.map((el : any) => ({ ...el }))];
        },
    },
});

export const { updateUserInfo, setPets, setAds } = userInfo.actions;

export const userInfoReducer = userInfo.reducer;
