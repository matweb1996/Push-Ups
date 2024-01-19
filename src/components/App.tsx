import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import GlobalStyles from "@mui/material/GlobalStyles";
import { Application } from "./application/Application";
import { DefaultTheme } from "../Theme";
import "./App.css";

const App = (): JSX.Element => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={DefaultTheme}>
				<GlobalStyles styles={{}} />
				<Application />
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default App;
