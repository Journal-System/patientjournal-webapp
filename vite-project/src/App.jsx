import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import AppRoutes from "./routes/AppRoutes";
import Navbar from './components/Navbar/Navbar';


export default function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="page-wrapper">
          <Navbar />
          <div className="main">
            <AppRoutes />
          </div>
        </div>
      </QueryClientProvider>
    </>
  );
}
