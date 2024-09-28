import { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/home-page/HomePage";
import LoadingPage from "./pages/loading-page/LoadingPage";
import Dashboard from "./components/dashboard/Dashboard";
import AppLayout from "./pages/app-layout/AppLayout";
import AboutUs from "./pages/about-us/AboutUs";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route index element={loading ? <LoadingPage /> : <AboutUs/>} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
