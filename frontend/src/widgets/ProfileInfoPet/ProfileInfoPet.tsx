import { memo } from "react";
import styles from "./ProfileInfoPet.module.scss";
import Block from "shared/ui/Block/Block";
import { Btn } from "shared";

interface PetFact {
    title: string;
    data: string;
}

interface Props {
    breed?: string;
    url?: string;
    name?: string;
    petFacts?: PetFact[];
}

const ProfileInfoPet = memo((props: Props) => {
    const { url = "", name = "", breed = "", petFacts = [] } = props;

    return (
        <Block className={styles.wrapper}>
            <img src={url} alt="" />
            <div className={styles.petInfo}>
                <h2 className={styles.name}>{name}</h2>
                <h5 className={styles.breed}>{breed}</h5>
                <ul className={styles.list}>
                    {petFacts.map((fact) => (
                        <li key={fact?.title}>
                            <span className={styles.bold}>{fact?.title}</span>:
                            {fact?.data}
                        </li>
                    ))}
                </ul>
                <div className={styles.buttons}>
                    <Btn to="pet/edit" type="outlined" width="240px">
                        Редактировать
                    </Btn>
                    {/* здесь переход на поиск донора, реализованного ваней */}
                    <Btn to={`/pet/${1}/findDonor`} type="tonal" width="260px">
                        Найти донора
                    </Btn>
                </div>
            </div>
        </Block>
    );
});

export default ProfileInfoPet;
