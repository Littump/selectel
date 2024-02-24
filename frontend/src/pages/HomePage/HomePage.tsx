import { memo } from "react";
import styles from './HomePage.module.scss'
import { Container } from "shared";
import { HomePageBar } from "widgets";

const HomePage = memo(() => {
	return (
		<Container>
			<div className={styles.page}>
				<HomePageBar/>
			</div>
		</Container>
	)
})

export default HomePage