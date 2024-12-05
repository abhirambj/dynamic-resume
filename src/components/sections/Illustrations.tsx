/* eslint-disable react/react-in-jsx-scope */
import { Box, useColorScheme } from "@mui/joy";
import { animated, easings, useSpring, useSpringRef } from "@react-spring/web";
import balloonMin from "@/assets/balloon.min.webp";
import balloon from "@/assets/balloon.webp";
import ProgressiveImage from "@/components/ProgressiveImage";
import { useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { useMobileMode } from "@/components/Responsive";

export const transitionConfig = {
	duration: 1000,
	easing: easings.easeInOutExpo,
};

export default function Illustrations() {
	const { colorScheme } = useColorScheme();
	const mobile = useMobileMode();

	const animationRef = useSpringRef();
	const balloonStyle = useSpring({
		ref: animationRef,
		to: {
			opacity: colorScheme === "dark" ? 0.8 : 1,
			transform:
				colorScheme === "dark"
					? "translateY(-50%) scale(0.9)"
					: "translateY(-50%) scale(1)",
		},
		config: transitionConfig,
	});

	useEffect(() => {
		animationRef.start();
	}, [colorScheme, animationRef]);

	return (
		<Parallax speed={-20} disabled={mobile}>
			<Box
				component="div"
				sx={{
					position: "relative",
					width: "100vw",
					height: "100vh",
					pointerEvents: "none",
					overflow: "hidden",
					background:
						colorScheme === "light"
							? "linear-gradient(to bottom, #87CEFA, #E0FFFF)"
							: "linear-gradient(to bottom, #1a1a1a, #000)",
					transition: `background ${
						transitionConfig.duration / 1000
					}s ease`,
				}}
			>
				<animated.div
					style={{
						...balloonStyle,
						position: "absolute",
						width: "min(400px, 80vw)",
						right: "15%",
						top: "-15%",
						animation: "float 20s ease-in-out infinite",
					}}
				>
					<ProgressiveImage
						src={balloon}
						placeholder={balloonMin}
						alt="balloon"
					/>
				</animated.div>
				<style>
					{`
					@keyframes float {
						0% { transform: translateY(0); }
						50% { transform: translateY(-20px); }
						100% { transform: translateY(0); }
					}
					`}
				</style>
			</Box>
		</Parallax>
	);
}
