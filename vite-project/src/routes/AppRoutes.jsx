import { Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Patients } from "../pages/PatientCatalog/PatientCatalogView";
import { Home } from "../pages/Home/HomeView";
import { Login } from "../pages/Login/LoginView";
import { Register } from "../pages/Register/RegisterView";
import { UserSelection } from "../pages/UserSelection/UserSelectionView";
import { Messages } from "../pages/MessageCompose/MessageComposeView";
import { Profile } from "../pages/Profile/ProfileView";

export default function AppRoutes() {
  return (
    <HelmetProvider>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Helmet>
                <title>Home &bull; Patient Journal</title>
              </Helmet>
              <Home />
            </>
          }
        />

        <Route
          path="/Patients"
          element={
            <>
              <Helmet>
                <title>Patients &bull; Patient Journal</title>
              </Helmet>
              <Patients />
            </>
          }
        />

        <Route
          path="/Login"
          element={
            <>
              <Helmet>
                <title>Login &bull; Patient Journal</title>
              </Helmet>
              <Login />
            </>
          }
        />

        <Route
          path="/Register"
          element={
            <>
              <Helmet>
                <title>Register &bull; Patient Journal</title>
              </Helmet>
              <Register />
            </>
          }
        />

        <Route
          path="/UserSelection"
          element={
            <>
              <Helmet>
                <title>Select User &bull; Patient Journal</title>
              </Helmet>
              <UserSelection />
            </>
          }
        />

        <Route
          path="/Messages"
          element={
            <>
              <Helmet>
                <title>Messages &bull; Patient Journal</title>
              </Helmet>
              <Messages />
            </>
          }
        />

        <Route
          path="/Profile/:index"
          element={
            <>
              <Helmet>
                <title>Profile &bull; Patient Journal</title>
              </Helmet>
              <Profile />
            </>
          }
        />
      </Routes>
    </HelmetProvider>
  );
}
