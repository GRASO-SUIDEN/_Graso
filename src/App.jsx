import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/home-page/HomePage";
import LoadingPage from "./pages/loading-page/LoadingPage";
import Dashboard from "./pages/dashboard/Dashboard";

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
        <Route index element={loading ? <LoadingPage /> : <Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
