import { Stack, Typography } from "@mui/joy";
import details from "@/assets/Details";

export default function Credits() {
	return (
		<Stack position="relative">
			<Stack
				flexWrap="wrap"
				direction="row"
				columnGap={2}
				rowGap={3}
				justifyContent="space-between"
				sx={{
					position: "relative",
					paddingTop: "22rem",
					"& > *": {
						flex: 1,
						minWidth: "200px",
						textAlign: "center",
					},
				}}
			>
				<Typography
					level="body2"
					textColor="#6c7b97"
					minWidth="min(100%, 15rem)"
				>
					© {new Date().getFullYear()}{" "}
					{`${details.name.first} ${details.name.last}. All rights reserved.`}
				</Typography>
			</Stack>
		</Stack>
	);
}
