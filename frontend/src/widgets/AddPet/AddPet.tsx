import { memo } from "react";
import styles from "./AddPet.module.scss";
import { Title } from "shared";
import pet from "../../assets/images/pet.png";
import EditPetInputs from "widgets/EditPetInputs/EditPetInputs";
import { Link } from "react-router-dom";

interface Pet {
    url?: string;
    name?: string;
    breed?: string;
    birthday?: string;
    city?: string;
    address?: string;
    bloodType?: string;
    male?: string;
    weight?: string;
    ills?: string;
    vaccinations?: string;
}

const AddPet = memo(() => {
    const petInfo: Pet = {
        url: pet,
        name: "Шарик",
        breed: "Сиба ину",
        birthday: "01.01.2004",
        address: "Улица Степана Разина дом 2 кв 12",
        city: "Санкт-Петербург",
        bloodType: "Dea 1.1",
        male: "Мужской",
        weight: "12",
        ills: "нет",
        vaccinations: "все",
    };

    return (
        <div className={styles.wrapper}>
            <div>
                <Title>Профиль питомца</Title>
                <Link to="/profile">назад</Link>
            </div>
            <div className={styles.profile}>
                <div className={styles.editPhoto}>
                    <img
                        src={petInfo?.url}
                        alt=""
                        className={styles.petImage}
                    />
                    {/* <label className={styles.editPhotoInput}>
                        <input type="file" style={{ display: "none" }} />
                        ред. фото
                    </label> */}
                </div>
                <EditPetInputs petInfo={petInfo} type="add" />
            </div>
        </div>
    );
});

export default AddPet;
