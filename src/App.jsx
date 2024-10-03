import { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import LoadingPage from "./pages/loading-page/LoadingPage";
import Dashboard from "./components/dashboard/Dashboard";
import ExploreLand from "./components/explore-land/ExploreLand";
import AddProperties from "./components/add-properties/AddProperties";
import Profile from "./components/profile/Profile";
import ProfileSettings from "./components/profile-settings/ProfileSettings";
import AppLayout from "./pages/app-layout/AppLayout";
import AboutUs from "./pages/about-us/AboutUs";
import PageNotFound from "./pages/page-not-found/PageNotFound";
import ExplorePage from "./pages/explore-page/ExplorePage";

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
        <Route index element={loading ? <LoadingPage /> : <HomePage />} />
        <Route path="explore" element={<ExplorePage />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="explore-properties" element={<ExploreLand />} />
          <Route path="add-properties" element={<AddProperties />} />
          <Route path="user">
            <Route index element={<Navigate to="profile" />} />
            <Route path="profile" element={<Profile />} />
            <Route path="profile-settings" element={<ProfileSettings />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
