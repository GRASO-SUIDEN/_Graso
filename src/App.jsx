import { useState, useEffect } from "react";
import Homepage from "./pages/home-page/HomePage";
import LoadingPage from "./pages/loading-page/LoadingPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return <div>{loading ? <LoadingPage /> : <Homepage />}</div>;
}

export default App;
