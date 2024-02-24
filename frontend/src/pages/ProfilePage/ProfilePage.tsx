import { memo, useEffect } from "react";
import { ProfileInfo } from "widgets";
import { useGetAdsQuery, useGetPetsQuery } from "service/Service";
import { useDispatch } from "react-redux";
import { setAds, setPets } from "app/reducers/userReducer";

const ProfilePage = memo(() => {
    const petsData = useGetPetsQuery({
        pollingInterval: 2500,
    });
    const adsData : any = useGetAdsQuery({
        pollingInterval: 2500,
    });
    const dispatch = useDispatch();
    useEffect(() => {
        //settaeм питомцев
        dispatch(setPets(petsData.data));
        // dispatch(setPets(petsData.data));
        dispatch(setAds(adsData?.results));
    }, [petsData.data, adsData.results, dispatch]);
    return (
        <div>
            <ProfileInfo />
        </div>
    );
});

export default ProfilePage;
