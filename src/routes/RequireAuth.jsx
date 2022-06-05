import { Navigate, Outlet, useLocation } from "react-router-dom";
const RequireAuth = ({ children }) => {
	const location = useLocation();
	return JSON.parse(localStorage.getItem("user"))?.token ? (
		<Outlet />
	) : (
		<Navigate to="/auth" state={{ from: location }} replace />
	);
};

export { RequireAuth };
