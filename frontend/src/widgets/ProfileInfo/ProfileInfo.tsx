import { memo } from "react";
import styles from "./ProfileInfo.module.scss";
import ProfileInfoUser from "widgets/ProfileInfoUser/ProfileInfoUser";
import ProfileInfoPet from "widgets/ProfileInfoPet/ProfileInfoPet";
import { Btn, Title } from "shared";
import user from "../../assets/images/user.png";
import pet from "../../assets/images/pet.png";
import ProfileRequest from "widgets/ProfileRequest/ProfileRequest";
import { useGetMeQuery } from "service/Service";

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
}
interface User {
    url?: string;
    firstName?: string;
    lastName?: string;
    address?: string;
    birthday?: string;
    phone?: string;
}

const ProfileInfo = memo(() => {
    const query = useGetMeQuery();
    const userInfo: User = {
        url: user,
        firstName: "Иван",
        lastName: "Иванович",
        address: "Улица Степана Разина дом 2 кв 12",
        birthday: "05.12.2004",
        phone: "8(960)256-55-55",
    };
    const pets: Pet[] = [
        {
            url: pet,
            name: "Шарик",
            breed: "Сиба ину",
            petFacts: [
                { title: "Возраст", data: "26" },
                { title: "Вес", data: "26кг" },
            ],
        },
        {
            url: pet,
            name: "Шарик2",
            breed: "Сиба ину",
            petFacts: [
                { title: "Возраст", data: "26" },
                { title: "Вес", data: "26кг" },
            ],
        },
        {
            url: pet,
            name: "Шарик3",
            breed: "Сиба ину",
            petFacts: [
                { title: "Возраст", data: "26" },
                { title: "Вес", data: "26кг" },
            ],
        },
    ];

    const requests: Request[] = [
        {
            name: "Шарик",
            bloodType: "DEA 1.1",
            address: "Санкт-Петербург улица пушкина дом колотушкина",
            petFacts: [
                { title: "Возраст", data: "26" },
                { title: "Вес", data: "26кг" },
            ],
        },
        {
            name: "Шарик2",
            bloodType: "DEA 1.1",
            address: "Санкт-Петербург улица пушкина дом колотушкина",
            petFacts: [
                { title: "Возраст", data: "26" },
                { title: "Вес", data: "26кг" },
            ],
        },
        {
            name: "Шарик3",
            bloodType: "DEA 1.1",
            address: "Санкт-Петербург улица пушкина дом колотушкина",
            petFacts: [
                { title: "Возраст", data: "26" },
                { title: "Вес", data: "26кг" },
            ],
        },
    ];

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
