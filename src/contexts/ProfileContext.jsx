import { createContext, useContext, useEffect, useState } from "react";

const ProfileContext = createContext();
const BASE_URL = "http://grasoold-production.up.railway.app";

function ProfileProvider({ children }) {
  const [userProfile, setUserProfile] = useState();
  const [userId, setUserId] = useState(null);

  async function getProfile(id) {
    try {
      const res = await fetch(`${BASE_URL}/user-profile/${id}`);
      const data = await res.json();
      setUserProfile(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function addProfile(userProfile) {
    try {
      const res = await fetch(`${BASE_URL}/profile`, {
        mode: "no-cors",
        method: "POST",
        body: userProfile,
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(
    function () {
      if (userId) getProfile(userId);
    },
    [userId]
  );
  return (
    <ProfileContext.Provider
      value={{
        userProfile,
        getProfile,
        addProfile,
        setUserId,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined)
    throw new Error("You cannot use this context outside the Provider");
  return context;
}

export { ProfileProvider, useProfile };
