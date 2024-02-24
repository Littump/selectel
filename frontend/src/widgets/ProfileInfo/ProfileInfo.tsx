import { memo } from "react";
import styles from "./ProfileInfo.module.scss";
import ProfileInfoUser from "widgets/ProfileInfoUser/ProfileInfoUser";
import ProfileInfoPet from "widgets/ProfileInfoPet/ProfileInfoPet";
import { Btn, Title } from "shared";
import ProfileRequest from "widgets/ProfileRequest/ProfileRequest";
import { useSelector } from "react-redux";
const ProfileInfo = memo(() => {
    let userInfo = useSelector((state : any) => state?.user?.userInfo);
    let pets = useSelector((state : any) => state?.user?.pets);
    let requests = useSelector((state : any) => state?.user?.ads);
    console.log(pets);
    return (
        <div className={styles.wrapper}>
            <Title>Профиль</Title>
            <div className={styles.profileGrid}>
                <ProfileInfoUser
                    url={userInfo?.url}
                    name={`${userInfo?.firstName} ${userInfo?.lastName}`}
                    address={userInfo?.address}
                />
                {pets.length > 0 ? (
                    <ProfileInfoPet
                        url={pets[0]?.url}
                        name={pets[0]?.name}
                        breed={pets[0]?.breed}
                        petFacts={pets[0]?.petFacts}
                        key={pets[0]?.name}
                        id={pets[0]?.id}
                    />
                ) : (
                    <div className={styles.addPetSolo}>
                        <Btn type="outlined" to="/profile/addPet" width="400">
                            добавить питомца
                        </Btn>
                    </div>
                )}
            </div>
            <div className={styles.otherPets}>
                {pets.slice(1).map((pet : any) => (
                    <ProfileInfoPet
                        url={pet?.url}
                        name={pet?.name}
                        breed={pet?.breed}
                        petFacts={pet?.petFacts}
                        key={pet?.name}
                        id={pet?.id}
                    />
                ))}
            </div>
            {pets.length > 0 ? (
                <div className={styles.addPet}>
                    <Btn type="outlined" to="/profile/addPet" width="400">
                        добавить питомца
                    </Btn>
                </div>
            ) : null}
            <Title>Мои заявки</Title>
            <div className={styles.requestsGrid}>
                {requests.map((request :  any) => (
                    <ProfileRequest
                        name={request.name}
                        bloodType={request.bloodType}
                        address={request.address}
                        petFacts={request.petFacts}
                    />
                ))}
            </div>
        </div>
    );
});

export default ProfileInfo;
