import { memo, useEffect } from "react";
import { ProfileInfo } from "widgets";
import { useGetAdsQuery, useGetPetsQuery } from "service/Service";
import { useDispatch } from "react-redux";
import { setPets } from "app/reducers/userReducer";

const ProfilePage = memo(() => {
    const petsData = useGetPetsQuery({
        pollingInterval: 2500,
    });
    const adsData = useGetAdsQuery({
        pollingInterval: 2500,
    });
    const dispatch = useDispatch();
    useEffect(() => {
        //settaeм питомцев
        dispatch(setPets([{

        }]));
        // dispatch(setPets(petsData.data));
        // //сеттаем обьявления
        // dispatch(setAds(adsData.data));
    }, [petsData.data, adsData.data, dispatch]);
    return (
        <div>
            <ProfileInfo />
        </div>
    );
});

export default ProfilePage;
