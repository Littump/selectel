import { lazy, memo } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { routes } from "shared";
import { Header } from "widgets";
import EditUserPage from "./EditUserPage/EditUserPage";
import EditPetPage from "./EditPetPage/EditPetPage";
import AddPetPage from "./AddPetPage/AddPetPage";
const LoginPage = lazy(() => import("./LoginPage/LoginPage"));
const RegistrationPage = lazy(
    () => import("./RegistrationPage/RegistrationPage")
);
const HomePage = lazy(() => import("./HomePage/HomePage"));
const ProfilePage = lazy(() => import("./ProfilePage/ProfilePage"));

interface IProps {
    isLoginPage: boolean;
}
const PrivateRoute = (props: IProps) => {
    const auth = true;
    if (props.isLoginPage) {
        return (
            // !auth ?  <Outlet/> : <Navigate to={routes.homePage}/>
            auth ? <Outlet /> : <Navigate to={routes.homePage} />
        );
    } else {
        return auth ? <Outlet /> : <Navigate to={routes.loginPage} />;
    }
};
interface ILayoutProps {
    type: "registration" | "other";
}
const Layout = (props: ILayoutProps) => {
    const { type } = props;
    return (
        <>
            <Header type={type} />
            <Outlet />
        </>
    );
};

export const Routing = memo(() => {
    return (
        <Routes>
            {/* <Route element={<PrivateRoute isLoginPage={false}/>}> */}
            {/* </Route> */}
            {/* <Route element={<PrivateRoute isLoginPage={true}/>}>	 */}
            {/* </Route> */}
            <Route path={routes.homePage} element={<Layout type={"other"} />}>
                <Route index element={<HomePage />} />
            </Route>
            <Route path={routes.profile} element={<Layout type={"other"} />}>
                <Route index element={<ProfilePage />} />
            </Route>
            <Route path={routes.editUser} element={<Layout type={"other"} />}>
                <Route index element={<EditUserPage />} />
            </Route>
            <Route path={routes.editPet} element={<Layout type={"other"} />}>
                <Route index element={<EditPetPage />} />
            </Route>
            <Route path={routes.addPet} element={<Layout type={"other"} />}>
                <Route index element={<AddPetPage />} />
            </Route>
            <Route path={routes.request} element={<Layout type={"other"} />}>
                <Route index element={<ProfilePage />} />
            </Route>
            <Route
                path={routes.requestEdit}
                element={<Layout type={"other"} />}
            >
                <Route index element={<ProfilePage />} />
            </Route>
            <Route element={<Layout type={"registration"} />}>
                <Route path={routes.loginPage} element={<LoginPage />} />
                <Route
                    path={routes.registrationPage}
                    element={<RegistrationPage />}
                />
            </Route>
        </Routes>
    );
});
