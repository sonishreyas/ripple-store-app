import { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
	const [profileActiveTab, setProfileActiveTab] = useState("Profile");

	return (
		<ProfileContext.Provider value={{ profileActiveTab, setProfileActiveTab }}>
			{children}
		</ProfileContext.Provider>
	);
};

const useProfile = () => useContext(ProfileContext);

export { useProfile, ProfileProvider };
