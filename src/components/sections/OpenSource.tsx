/* eslint-disable no-mixed-spaces-and-tabs */
import { Avatar, Stack, Typography, useColorScheme } from "@mui/joy";
import { RiOpenSourceLine } from "react-icons/ri";
import { Parallax } from "react-scroll-parallax";
import React from "react";
import { Mobile, useMobileMode } from "@/components/Responsive";

export default function OpenSource() {
	const { colorScheme } = useColorScheme();
	const dark = colorScheme === "dark";
	const mobile = useMobileMode();

	// Predefined animation styles
	const flickerAnimation = {
		"@keyframes flicker": {
			"0%, 19%, 21%, 50%, 52%, 100%": { opacity: 1 },
			"20%, 51%": { opacity: 0 },
		},
	};

	const parallaxStyle: React.CSSProperties = mobile
		? {
				position: "relative",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				marginTop: "25rem",
				zIndex: 1,
				animation: "float 20s ease-in-out infinite",
		  }
		: {
				position: "absolute",
				right: "calc(350px + 20%)",
				top: "2rem",
				zIndex: 1,
				animation: "float 20s ease-in-out infinite",
		  };

	return (
		<Stack
			p="20px"
			sx={{ position: "relative" }}
			marginBottom={mobile ? "5rem" : 0}
		>
			<Stack sx={{ width: "100%", height: mobile ? "45rem" : "400px" }}>
				<Stack
					sx={{
						position: "absolute",
						top: "-20px",
						gap: 3,
						textAlign: mobile ? "center" : "right",
						...(mobile
							? {
									left: "50%",
									transform: "translateX(-50%)",
									width: "100%",
									alignItems: "center",
							  }
							: { right: "0", alignItems: "flex-end" }),
					}}
				>
					<Mobile>
						<Avatar color="success" sx={{ marginTop: "3rem" }}>
							<RiOpenSourceLine />
						</Avatar>
					</Mobile>
					<Typography level="h2">
						<Typography color="success" fontWeight="xl">
							Open-source.
						</Typography>
						{mobile ? <br /> : " "}Join the{" "}
						<Typography
							sx={{
								...(dark
									? {
											textShadow:
												"0 0 1px white, 0 0 0.5rem white, 0 0 3rem gray",
											color: "white",
											animation: "flicker 5s infinite",
									  }
									: {
											color: "black",
											fontWeight: "900",
											fontFamily: '"Lobster", sans-serif',
									  }),
								...flickerAnimation,
							}}
						>
							{dark ? "dark side" : "bold side"}
						</Typography>{" "}
						of the force.
					</Typography>
					<Typography
						level="h6"
						textColor="text.tertiary"
						sx={{ maxWidth: "500px" }}
					>
						<Typography textColor="text.primary">
							Collaboration
						</Typography>{" "}
						and{" "}
						<Typography textColor="text.primary">
							community-maintained projects
						</Typography>{" "}
						lay the foundation upon which the digital world we live
						in is built. Any{" "}
						<Typography textColor="text.primary">
							contribution
						</Typography>
						, no matter how small, is and will always be
						appreciated.
					</Typography>
				</Stack>
				<Parallax
					speed={10}
					opacity={[0, 1]}
					easing="ease"
					disabled={mobile}
					style={parallaxStyle}
				></Parallax>
			</Stack>
		</Stack>
	);
}
