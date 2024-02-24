import { memo } from "react";
import styles from "./ProfileInfoUser.module.scss";
import Block from "shared/ui/Block/Block";
import { Btn } from "shared";

interface Props {
    address?: string;
    url?: string;
    name?: string;
}

const ProfileInfoUser = memo((props: Props) => {
    const { url = "", name = "", address = "" } = props;
    return (
        <Block className={styles.wrapper}>
           <>
           <img src={url} alt="пользователь" />
            <h3 className={styles.name}>{name}</h3>
            <h3 className={styles.address}>{address}</h3>
            <Btn to="user/edit" type="outlined" width="320px">
                Редактировать профиль
            </Btn>
           </>
        </Block>
    );
});

export default ProfileInfoUser;
