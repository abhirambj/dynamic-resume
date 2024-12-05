import { CircularProgress, Stack, Typography } from "@mui/joy";
import React from "react";

export default function LoadingSpinner({
	message = "Loading...",
	size = "lg",
}: {
	message?: string;
	size?: "sm" | "md" | "lg";
}) {
	return (
		<Stack
			alignItems="center"
			justifyContent="center"
			sx={{
				height: "100vh",
				textAlign: "center",
			}}
		>
			<CircularProgress size={size} />
			{message && (
				<Typography level="body2" mt={2}>
					{message}
				</Typography>
			)}
		</Stack>
	);
}
