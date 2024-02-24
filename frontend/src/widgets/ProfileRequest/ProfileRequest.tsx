import { memo } from "react";
import styles from "./ProfileRequest.module.scss";
import Block from "shared/ui/Block/Block";
import mark from "../../assets/icons/mark.svg";
import { Btn } from "shared";

interface PetFact {
    title: string;
    data: string;
}

interface Props {
    name?: string;
    address?: string;
    bloodType?: string;
    petFacts?: PetFact[];
}

const ProfileRequest = memo((props: Props) => {
    const { name = "", bloodType = "", address = "", petFacts = [] } = props;

    return (
        <Block className={styles.wrapper}>
            <div className={styles.header}>
                <h2 className={styles.name}>{name}</h2>
                <h2 className={styles.bloodType}>{bloodType}</h2>
            </div>
            <ul className={styles.list}>
                {petFacts.map((fact) => (
                    <li key={fact?.title}>
                        <span className={styles.bold}>{fact?.title}</span>:
                        {fact?.data}
                    </li>
                ))}
            </ul>
            <div className={styles.address}>
                <img src={mark} alt="" className={styles.mark} />
                {address}
            </div>
            {/* переход на главную */}
            <Btn type="text" to="/">
                {"Смотреть подробнее -->"}
            </Btn>
        </Block>
    );
});

export default ProfileRequest;
