import { memo, useEffect } from "react";
import styles from "./Header.module.scss";
import logo from "assets/icons/logo.svg";
import { Link } from "react-router-dom";
import { Btn, routes } from "shared";
import { Text } from "shared";
import { useDispatch } from "react-redux";
import { updateUserInfo } from "app/reducers/userReducer";
import { useGetMeQuery } from "service/Service";
interface IProps {
    type: "registration" | "other";
}

const Header = memo((props: IProps) => {
    const { type = "other" } = props;
    const areButtonsVisible = () => {
        if (type === "registration" || !!localStorage.getItem("token")) {
            return true;
        }
        return false;
    };
    const meData = useGetMeQuery({
        pollingInterval: 2500,
    });

    const dispatch = useDispatch();
    useEffect(() => {
        const res = meData?.data;
        dispatch(
            updateUserInfo({
                firstName: res?.first_name,
                lastName: res?.last_name,
                username: res?.username,
                phone: res?.number,
                address: res?.city,
                city: res?.city,
            })
        );
    }, [meData?.data, dispatch]);
    return (
        <div className={styles.header}>
            <div className={styles.header__links}>
                <Link to={routes.homePage}>
                    <img src={logo} />
                </Link>
                <Link
                    to={routes.becomeDonor}
                    target="_blank"
                    className={styles.header__link}
                >
                    <Text type="light" fontSize={18}>
                        Какие животные могут стать донорами?
                    </Text>
                </Link>
                <Link to={routes.homePage} className={styles.header__where}>
                    <Text type="light" fontSize={18}>
                        Где сдать кровь?
                    </Text>
                </Link>
            </div>
            {areButtonsVisible() ? (
                <Link to="/profile" className={styles.profile}>
                    профиль
                </Link>
            ) : (
                <div className={styles.header__btns}>
                    <Btn type="tonal" to={routes.loginPage}>
                        Войти
                    </Btn>
                    <Btn type="outlined" to={routes.registrationPage}>
                        Зарегистрироваться
                    </Btn>
                </div>
            )}
        </div>
    );
});

export default Header;
