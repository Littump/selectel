import { memo } from "react";
import styles from "./ProfileInfo.module.scss";
import ProfileInfoUser from "widgets/ProfileInfoUser/ProfileInfoUser";
import ProfileInfoPet from "widgets/ProfileInfoPet/ProfileInfoPet";
import { Btn, Title } from "shared";
import user from "../../assets/images/user.png";
import pet from "../../assets/images/pet.png";
import ProfileRequest from "widgets/ProfileRequest/ProfileRequest";
import { useSelector } from "react-redux";

interface PetFact {
    title: string;
    data: string;
}

interface Pet {
    url?: string;
    name?: string;
    breed?: string;
    petFacts?: PetFact[];
}

interface Request {
    name?: string;
    address?: string;
    petFacts?: PetFact[];
    bloodType?: string;
    id?: string;
}

const ProfileInfo = memo(() => {
    let userInfo = useSelector((state) => state?.user?.userInfo);
    let pets = useSelector((state) => state?.user?.pets);
    let requests = useSelector((state) => state?.user?.ads);
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
                {pets.slice(1).map((pet) => (
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
                {requests.map((request) => (
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
