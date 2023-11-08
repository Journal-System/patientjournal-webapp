import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="page-wrapper">
          <NavBar />
          <div className="main">
            <AppRoutes />
          </div>
          {/* <Footer /> */}
        </div>
      </QueryClientProvider>
    </>
  );
}
