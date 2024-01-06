import { Routes, Route, Navigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Patients } from "../pages/PatientCatalog/PatientCatalogView";
import { Home } from "../pages/Home/HomeView";
import { Login } from "../pages/Login/LoginView";
import { Register } from "../pages/Register/RegisterView";
import { UserSelection } from "../pages/UserSelection/UserSelectionView";
import { Messages } from "../pages/MessageCompose/MessageComposeView";
import { Profile } from "../pages/Profile/ProfileView";
import { ObservationList } from "../pages/Observation/ObservationList";
import { ObservationForm } from "../pages/Observation/ObservationForm";
import { Search } from "../pages/Search/SearchView";
import { Images } from "../pages/Images/ImageView";
import { Healthz } from "../pages/Healthz/Healthz";
import { NotFound } from "../pages/NotFound/NotFound";

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

        <Route
          path="/Observation"
          element={
            <>
              <Helmet>
                <title>Observation &bull; Patient Journal</title>
              </Helmet>
              <ObservationList />
            </>
          }
        />

        <Route
          path="/ObservationForm"
          element={
            <>
              <Helmet>
                <title>ObservationForm &bull; Patient Journal</title>
              </Helmet>
              <ObservationForm />
            </>
          }
        />

        <Route
          path="/Images"
          element={
            <>
              <Helmet>
                <title>Image Service &bull; Patient Journal</title>
              </Helmet>
              <Images />
            </>
          }
        />

        <Route
          path="/Search"
          element={
            <>
              <Helmet>
                <title>Search &bull; Patient Journal</title>
              </Helmet>
              <Search />
            </>
          }
        />

        <Route
          path="*"
          element={<Navigate to="/not-found" replace />}
        />
        
        <Route
          path="/not-found"
          element={
            <>
              <Helmet>
                <title>Not Found &bull; Patient Journal</title>
              </Helmet>
              <NotFound />
            </>
          }
        />
      </Routes>
    </HelmetProvider>
  );
}