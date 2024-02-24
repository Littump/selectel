import { memo } from "react";
import styles from "./EditUser.module.scss";
import { Title } from "shared";
import user from "../../assets/images/user.png";
import EditUserInputs from "widgets/EditUserInputs/EditUserInputs";
import { Link } from "react-router-dom";

interface User {
    url?: string;
    firstName?: string;
    lastName?: string;
    address?: string;
    birthday?: string;
    phone?: string;
}

const EditUser = memo(() => {
    const userInfo: User = {
        url: user,
        firstName: "Иван",
        lastName: "Иванович",
        address: "Улица Степана Разина дом 2 кв 12",
        birthday: "05.12.2004",
        phone: "8(960)256-55-55",
    };

    return (
        <div className={styles.wrapper}>
            <div>
                <Title>Профиль</Title>
                <Link to="/profile">назад</Link>
            </div>

            <div className={styles.profile}>
                <div className={styles.editPhoto}>
                    <img src={userInfo?.url} alt="" />
                    {/* <label className={styles.editPhotoInput}>
                        <input type="file" style={{ display: "none" }} />
                        ред. фото
                    </label> */}
                </div>
                <EditUserInputs userInfo={userInfo} />
            </div>
        </div>
    );
});

export default EditUser;
