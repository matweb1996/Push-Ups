import { Route, Routes } from "react-router-dom";
import { HomePage } from "../homePage/HomePage";
import { LoginPage } from "../loginPage/LoginPage";

export const Application = (): JSX.Element => {
	return (
		<Routes>
			<Route path="/login" element={<LoginPage />} />
			<Route path="/" element={<HomePage />} />
		</Routes>
	);
};
