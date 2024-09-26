import { useState, useEffect } from "react";
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

  return <div>{loading ? <LoadingPage /> : <Dashboard/> }</div>;
}

export default App;
