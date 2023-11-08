import { Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Patients } from "../pages/PatientCatalog/PatientCatalogView";
import { Home } from "../pages/Home/HomeView";

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
                <title>Patients &bull; Patient Journal - Patients</title>
              </Helmet>
              <Patients />
            </>
          }
        />
      </Routes>
    </HelmetProvider>
  );
}
