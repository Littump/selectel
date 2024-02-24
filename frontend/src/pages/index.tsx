import { lazy, memo } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { routes } from "shared";
import { Header } from "widgets";
import EditUserPage from "./EditUserPage/EditUserPage";
import EditPetPage from "./EditPetPage/EditPetPage";
import AddPetPage from "./AddPetPage/AddPetPage";
import FindDonor from "widgets/FindDonor/FindDonor";
import Footer from "widgets/Footer/Footer";
const LoginPage = lazy(() => import("./LoginPage/LoginPage"));
const RegistrationPage = lazy(
    () => import("./RegistrationPage/RegistrationPage")
);
const HomePage = lazy(() => import("./HomePage/HomePage"));
const ProfilePage = lazy(() => import("./ProfilePage/ProfilePage"));

const PrivateRoute = () => {
    const auth = !!localStorage.getItem("token");
    return auth ? <Navigate to={routes.homePage} /> : <Outlet />;
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
            <Footer />
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
            <Route path={routes.findDonor} element={<Layout type={"other"} />}>
                <Route index element={<FindDonor />} />
            </Route>
            <Route
                path={routes.requestEdit}
                element={<Layout type={"other"} />}
            >
                <Route index element={<ProfilePage />} />
            </Route>
            <Route element={<PrivateRoute/>}>
                <Route element={<Layout type={"registration"} />}>
                    <Route path={routes.loginPage} element={<LoginPage />} />
                    <Route
                        path={routes.registrationPage}
                        element={<RegistrationPage />}
                    />
                </Route>
            </Route>
        </Routes>
    );
});
