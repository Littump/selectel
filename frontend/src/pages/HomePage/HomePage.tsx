import { memo } from "react";
import styles from "./HomePage.module.scss";
import { Container } from "shared";
import { HomePageBar } from "widgets";
import { useGetAdsQuery } from "service/Service";

const HomePage = memo(() => {
    const { data, isLoading, isSuccess } = useGetAdsQuery({
        pollingInterval: 2500,
    });
    return (
        <Container>
            <div className={styles.page}>
                <HomePageBar />
            </div>
        </Container>
    );
});

export default HomePage;
