import { lazy, memo } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { routes } from "shared";
import { Header } from "widgets";

const LoginPage = lazy(() => import('./LoginPage/LoginPage'))
const RegistrationPage = lazy(() => import('./RegistrationPage/RegistrationPage'))
const HomePage = lazy(() => import('./HomePage/HomePage'))

// interface IProps {
// 	isLoginPage: boolean
// }
const PrivateRoute = () => {
	const auth = !!localStorage.getItem('token')
	return (
		auth ? <Navigate to={routes.homePage}/> : <Outlet/>
	)
}
interface ILayoutProps {
	type: 'registration' | 'other'
}
const Layout = (props: ILayoutProps) => {
	const {type} = props
	return (
		<>
			<Header type={type}/>
			<Outlet/>
		</>
	)
}

export const Routing = memo(() => {
	return (
		<Routes>
			<Route path={routes.homePage} element={<Layout type={'other'}/>}>
				<Route index element={<HomePage/>} />
			</Route>
			<Route element={<PrivateRoute/>}>
				<Route element={<Layout type={'registration'}/>}>
					<Route path={routes.loginPage} element={<LoginPage/>}/>
					<Route path={routes.registrationPage} element={<RegistrationPage />}/>
				</Route>
			</Route>
			
		</Routes>
	)
})