import { CssBaseline, CssVarsProvider, extendTheme } from "@mui/joy";
import React from "react";

// Define the application's custom theme
export const appTheme = extendTheme({
	colorSchemes: {
		dark: {
			palette: {
				background: {
					body: "var(--joy-palette-common-black)",
					surface: "var(--joy-palette-neutral-900)",
				},
			},
		},
		light: {
			palette: {
				background: {
					body: "var(--joy-palette-neutral-50)",
				},
			},
		},
	},
	components: {
		JoyChip: {
			styleOverrides: {
				root: ({ ownerState }) => ({
					...(ownerState.variant === "outlined" && {
						border: `1px solid var(--joy-palette-${ownerState.color}-600)`,
					}),
				}),
			},
		},
	},
});

export default function ThemeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<CssVarsProvider theme={appTheme} defaultMode="system">
			<CssBaseline />
			{children}
		</CssVarsProvider>
	);
}
