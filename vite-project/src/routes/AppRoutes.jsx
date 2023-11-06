import { Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
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
      </Routes>
    </HelmetProvider>
  );
}
