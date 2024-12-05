/* eslint-disable react/react-in-jsx-scope */
import { Avatar, Stack, Typography, Button, useColorScheme } from "@mui/joy";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

export default function Contact() {
	const { colorScheme } = useColorScheme(); // Access the current theme (light or dark)

	return (
		<Stack
			gap={3}
			sx={{
				textAlign: "center",
				alignItems: "center",
				padding: "2rem",
			}}
		>
			{/* Avatar Section */}
			<Avatar
				color="primary"
				size="lg"
				sx={{
					width: { xs: 70, sm: 100 },
					height: { xs: 70, sm: 100 },
					border: "4px solid #1976d2",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<FiMail size={40} />
			</Avatar>

			{/* Title and Description */}
			<Typography level="h2">Get in Touch</Typography>
			<Typography level="body1" sx={{ maxWidth: 500 }}>
				Feel free to reach out if you have any questions or
				opportunities. I am open to collaborations and discussions.
			</Typography>

			{/* Contact Buttons */}
			<Stack
				direction="row"
				gap={2}
				sx={{
					flexWrap: "wrap",
					justifyContent: "center",
				}}
			>
				<Button
					component="a"
					href="mailto:abhiram.bj@gmail.com"
					variant="outlined"
					startDecorator={<FiMail />}
					color="primary"
					aria-label="Send an email to Abhiram"
					sx={{
						paddingY: "0.5rem",
						"&:hover": {
							boxShadow:
								colorScheme === "dark"
									? "0 4px 10px rgba(25, 118, 210, 0.5)" // Blue shadow for dark mode
									: "0 4px 10px rgba(0, 0, 0, 0.2)", // Default shadow for light mode
						},
					}}
				>
					Email
				</Button>
				<Button
					component="a"
					href="tel:+13128778160"
					variant="outlined"
					startDecorator={<FiPhone />}
					color="info"
					aria-label="Call Abhiram"
					sx={{
						paddingY: "0.5rem",
						"&:hover": {
							boxShadow:
								colorScheme === "dark"
									? "0 4px 10px rgba(0, 184, 212, 0.5)" // Cyan shadow for dark mode
									: "0 4px 10px rgba(0, 0, 0, 0.2)", // Default shadow for light mode
						},
					}}
				>
					Phone
				</Button>
				<Button
					component="a"
					href="https://linkedin.com/in/abhirambj"
					target="_blank"
					variant="outlined"
					startDecorator={<FaLinkedin />}
					color="success"
					aria-label="Visit Abhiram's LinkedIn profile"
					sx={{
						paddingY: "0.5rem",
						"&:hover": {
							boxShadow:
								colorScheme === "dark"
									? "0 4px 10px rgba(76, 175, 80, 0.5)" // Green shadow for dark mode
									: "0 4px 10px rgba(0, 0, 0, 0.2)", // Default shadow for light mode
						},
					}}
				>
					LinkedIn
				</Button>
				<Button
					component="a"
					href="https://github.com/abhirambj"
					target="_blank"
					variant="outlined"
					startDecorator={<FaGithub />}
					color="neutral"
					aria-label="Visit Abhiram's GitHub profile"
					sx={{
						paddingY: "0.5rem",
						"&:hover": {
							boxShadow:
								colorScheme === "dark"
									? "0 4px 10px rgba(158, 158, 158, 0.5)"
									: "0 4px 10px rgba(0, 0, 0, 0.2)",
						},
					}}
				>
					GitHub
				</Button>
			</Stack>
		</Stack>
	);
}
