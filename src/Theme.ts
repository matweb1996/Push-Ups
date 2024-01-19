import { createTheme, responsiveFontSizes } from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface Theme {
		status: {
			danger: string;
		};
	}
	// allow configuration using `createTheme`
	interface ThemeOptions {
		status?: {
			danger?: string;
		};
	}
	interface Palette {
		neutral: Palette["primary"];
		backgroundLight: Palette["background"];
		backgroundHeader: Palette["background"];
		border: Palette["primary"];
	}
	// allow configuration using `createTheme`
	interface PaletteOptions {
		neutral?: PaletteOptions["primary"];
		backgroundLight?: PaletteOptions["background"];
		backgroundHeader?: PaletteOptions["background"];
		border?: PaletteOptions["primary"];
	}

	interface TypographyVariants {
		subtitleBold: React.CSSProperties;
	}

	// allow configuration using `createTheme`
	interface TypographyVariantsOptions {
		subtitleBold?: React.CSSProperties;
	}
}

declare module "@mui/material/SvgIcon" {
	interface SvgIconPropsColorOverrides {
		neutral: true;
	}
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides {
		subtitleBold: true;
	}
}

export const DefaultTheme = responsiveFontSizes(
	createTheme({
		palette: {
			primary: {
				main: "#8A9A5B",
				contrastText: "#FFFFFF",
			},
			secondary: {
				main: "#0b9ee2",
				light: "#85CEF0",
			},
			error: {
				main: "#e20b32",
				contrastText: "#FFFFFF",
			},
			info: {
				main: "#90caf9",
				contrastText: "#FFFFFF",
			},
			warning: {
				main: "#e2ba0b",
			},
			success: {
				main: "#9ee20b",
				contrastText: "#FFFFFF",
			},
			neutral: {
				main: "#969696",
				light: "#F1F1F1",
				dark: "#404040",
				contrastText: "#FFFFFF",
			},
			background: {
				default: "rgba(138, 154, 91, 0.05)",
			},
			backgroundLight: {
				default: "#FCF6F2",
			},
		},
		typography: {
			subtitleBold: {
				fontWeight: "bold",
				fontSize: "subtitle1",
			},
		},
	})
);
