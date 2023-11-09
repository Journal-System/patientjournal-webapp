import { Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Patients } from "../pages/PatientCatalog/PatientCatalogView";
import { Home } from "../pages/Home/HomeView";
import { Login } from "../pages/Login/LoginView";
import { Register } from "../pages/Register/RegisterView";

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
      </Routes>
    </HelmetProvider>
  );
}
