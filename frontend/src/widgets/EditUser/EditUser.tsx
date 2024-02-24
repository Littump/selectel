import { memo } from "react";
import styles from "./EditUser.module.scss";
import { Title } from "shared";
import EditUserInputs from "widgets/EditUserInputs/EditUserInputs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const EditUser = memo(() => {
    const userInfo = useSelector((state : any) => state.user?.userInfo);
    
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
