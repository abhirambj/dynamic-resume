import { Button, Card, IconButton, Stack, Tooltip, Typography } from "@mui/joy";
import { useMobileMode } from "@/components/Responsive";
import { FiPrinter } from "react-icons/fi";

/**
 * A component that allows the user to print the resume.
 */
export default function Print() {
	const mobile = useMobileMode();

	const print = () => {
		window.print();
	};

	const fileName = "Resume.pdf";

	return (
		<Stack
			direction="row"
			justifyContent="center"
			alignItems="center"
			sx={{
				position: "fixed",
				bottom: "var(--nav-safe-area-inset-bottom, 0)",
				width: "100%",
				paddingLeft: "var(--nav-safe-area-inset-left, 0)",
				zIndex: 2,
			}}
		>
			<Card
				variant="outlined"
				sx={(theme) => ({
					width: mobile ? "calc(100% - 1rem)" : "30rem",
					margin: mobile ? ".5rem" : "0 0 1rem 0",
					backgroundColor: `color-mix(in srgb, ${theme.palette.background.body}, transparent 30%)`,
					backdropFilter: "blur(10px)",
					webkitBackdropFilter: "blur(10px)",
					padding: ".5rem",
					boxShadow: "lg",
				})}
			>
				<Stack
					direction="row"
					gap={1}
					alignItems="center"
					justifyContent="space-between"
				>
					<Typography
						level="body2"
						fontWeight={500}
						marginLeft={0.7}
						sx={{
							gap: 0.5,
							flex: "1 1 100%",
							minWidth: 0,
						}}
					>
						<span
							style={{
								overflow: "hidden",
								textOverflow: "ellipsis",
								whiteSpace: "nowrap",
								maxWidth: "100%",
							}}
						>
							{fileName}
						</span>
					</Typography>
					<Stack direction="row" gap={1}>
						{mobile ? (
							<Tooltip
								placement="top"
								variant="outlined"
								title="Print"
							>
								<IconButton
									color="neutral"
									variant="plain"
									onClick={print}
								>
									<FiPrinter />
								</IconButton>
							</Tooltip>
						) : (
							<Button
								color="neutral"
								variant="plain"
								onClick={print}
								startDecorator={<FiPrinter />}
							>
								Print
							</Button>
						)}
					</Stack>
				</Stack>
			</Card>
		</Stack>
	);
}
